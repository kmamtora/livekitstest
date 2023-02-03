const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

const livekitApi = require("livekit-server-sdk");
const AccessToken = livekitApi.AccessToken;
const RoomServiceClient = livekitApi.RoomServiceClient;

const API = `${process.env.LIVEKIT_API_KEY}`;
const SECRET = `${process.env.LIVEKIT_API_SECRET}`;
const livekitHost = `${process.env.LIVEKIT_BASE_URL}`;

app.get("/", async (req, res) => {
  await roomList("room_123");
  res.send("Hello World!");
});

const roomList = async (roomName, timeout) => {
  try {
    const svc = new RoomServiceClient(livekitHost, API, SECRET);

    let rooms = await svc.listRooms();
    console.log(rooms, "rooms");
    return rooms;
  } catch (error) {
    console.log(error, "fn createRoom error");
  }
  return [];
};
const PORT = process.env.PORT || 5050;

const http = require("http");
const server = http.createServer(app);
server.listen(PORT, () => console.log("Server started ", PORT));
