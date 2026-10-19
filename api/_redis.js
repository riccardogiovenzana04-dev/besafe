// Shared helpers for the spank leaderboard. Files starting with "_" are not routes.
// Talks to Upstash Redis over its REST API, so no packages are needed.
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const BONUS_EVERY = 50;
const BONUS_PTS = 112;
const score = spanks => spanks + Math.floor(spanks / BONUS_EVERY) * BONUS_PTS;

async function redis(commands) {
  if (!URL_ || !TOKEN) {
    const e = new Error("Leaderboard database is not connected");
    e.status = 503;
    throw e;
  }
  const r = await fetch(`${URL_}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands)
  });
  if (!r.ok) throw new Error(`Redis HTTP ${r.status}`);
  return (await r.json()).map(x => {
    if (x.error) throw new Error(x.error);
    return x.result;
  });
}

const BAD = /(cazz|merd|puttan|troia|stronz|vaffanc|negr|frocio|ricchion|finocch|terron|zingar|coglion|fuck|shit|nigg|fag|cunt|bitch|whore|pute|salope|connard|encul|nique|bougnoul|hitler|nazi|maranza|http|www)/;
const squash = v => v.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/0/g, "o").replace(/1/g, "i").replace(/3/g, "e").replace(/4/g, "a").replace(/5/g, "s").replace(/[ _.\-]/g, "");

// Returns a clean nickname or null.
function cleanName(raw) {
  const v = String(raw || "").trim().replace(/\s+/g, " ");
  if (!/^[\p{L}\p{N} _.\-]{3,16}$/u.test(v)) return null;
  if (BAD.test(squash(v))) return null;
  return v;
}

const validId = id => typeof id === "string" && /^[A-Za-z0-9-]{8,64}$/.test(id);

function fail(res, e) {
  res.setHeader("Cache-Control", "no-store");
  res.status(e.status || 500).json({ error: e.status === 503 ? "not_connected" : "server_error" });
}

module.exports = { redis, score, cleanName, validId, fail, BONUS_EVERY, BONUS_PTS };
