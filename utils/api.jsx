export default function Api() {
  const key = process.env.API_KEY;
  const FortniteAPI = require("fortnite-api-io");
  const fortniteAPI = new FortniteAPI(key);
  return fortniteAPI;
}
