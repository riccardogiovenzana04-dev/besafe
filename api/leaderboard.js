// GET /api/leaderboard?id=<player>  ->  { top: [{me, name, spanks, score}], players, me }
// Player ids stay private: the list only says which row is yours.
const { redis, validId, fail } = require("./_redis");

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") return res.status(405).json({ error: "method" });
  const id = req.query && req.query.id;

  try {
    const [flat, players] = await redis([["ZREVRANGE", "board", 0, 9, "WITHSCORES"], ["ZCARD", "board"]]);
    const ids = flat.filter((_, i) => i % 2 === 0);
    let top = [];
    if (ids.length) {
      const [names, spanks] = await redis([["HMGET", "names", ...ids], ["HMGET", "spanks", ...ids]]);
      top = ids.map((pid, i) => ({ me: pid === id, name: names[i] || "Anonimo", spanks: Number(spanks[i] || 0), score: Number(flat[i * 2 + 1]) }));
    }

    let me = null;
    if (validId(id)) {
      const [mySpanks, myRank, myName] = await redis([["HGET", "spanks", id], ["ZREVRANK", "board", id], ["HGET", "names", id]]);
      if (mySpanks !== null) me = { spanks: Number(mySpanks), rank: myRank === null ? null : myRank + 1, name: myName };
    }
    res.status(200).json({ top, players, me });
  } catch (e) {
    fail(res, e);
  }
};
