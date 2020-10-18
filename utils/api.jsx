export default function Api() {
  const FortniteAPI = require("fortnite-api-io");
  const fortniteAPI = new FortniteAPI(process.env.API_KEY);
  return fortniteAPI;
}
