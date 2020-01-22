const { Router } = require("express");
const DevController = require("./controllers/DevControllers");
const SearchController = require("./controllers/SearchControllers");

const routes = Router();

routes.get("/devs", auth, DevController.index);
routes.post("/devs", auth, DevController.store);

routes.get("/search", auth, SearchController.index);

function auth(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
}

module.exports = routes;
