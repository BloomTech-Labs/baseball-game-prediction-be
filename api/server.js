const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const teamRouter = require("../routers/teams/team-router");
const gameRouter = require("../routers/games/game-router");
const profilesRouter = require("../routers/profiles/profiles-router");
const favoriteTeamsRouter = require("../routers/favorite_teams/favorite_teams-router");
const followingTeamsRouter = require("../routers/following_teams/following_teams-router")

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/teams", teamRouter);
server.use("/api/games", gameRouter);
server.use("/api/profiles", profilesRouter);
server.use("/api/favoriteTeams", favoriteTeamsRouter);
server.use("/api/following", followingTeamsRouter)

server.get("/", (req, res) => {
  res.send("api is up");
});

server.all("*", (req, res) => {
  res.status(404).send({ message: "How did you get here?" });
});

module.exports = server;
