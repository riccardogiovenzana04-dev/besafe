// POST /api/spank  { id, name, n }  ->  { spanks, score, rank }
// Adds n spanks (1-30) for a player. Click-bots are slowed by a 10-second rate limit per player and per network.
const { redis, score, cleanName, validId, fail } = require("./_redis");

const PER_PLAYER_10S = 160; // about 16 clicks a second, faster than any finger
const PER_NETWORK_10S = 400; // several friends on the same Wi-Fi

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "method" });

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  const id = body && body.id;
  const name = cleanName(body && body.name);
  const n = Math.floor(Number(body && body.n));
  if (!validId(id)) return res.status(400).json({ error: "id" });
  if (!name) return res.status(400).json({ error: "name" });
  if (!(n >= 1 && n <= 30)) return res.status(400).json({ error: "n" });

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  try {
    const [, byPlayer, , byNetwork] = await redis([
      ["SET", `rl:p:${id}`, 0, "EX", 10, "NX"], ["INCRBY", `rl:p:${id}`, n],
      ["SET", `rl:n:${ip}`, 0, "EX", 10, "NX"], ["INCRBY", `rl:n:${ip}`, n]
    ]);
    if (byPlayer > PER_PLAYER_10S || byNetwork > PER_NETWORK_10S) return res.status(429).json({ error: "slow_down" });

    const [spanks] = await redis([["HINCRBY", "spanks", id, n], ["HSET", "names", id, name]]);
    const points = score(spanks);
    const [, rank] = await redis([["ZADD", "board", points, id], ["ZREVRANK", "board", id]]);
    res.status(200).json({ spanks, score: points, rank: rank + 1 });
  } catch (e) {
    fail(res, e);
  }
};
