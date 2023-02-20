import clientPromise from "./mongodb";

let client;
let db;
let casas;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("OrionBim");
    casas = await db.collection("Users");
  } catch (error) {
    throw new Error("Failed to stablish connection to database");
  }
}

(async () => {
  await init();
})();

export default async function getCasas() {
  try {
    if (!casas) await init();
    const result = await casas
      .find({})
      .limit(20)
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();
    return { casas: result };
  } catch (error) {
    return { error: "Failed to fetch" };
  }
}
