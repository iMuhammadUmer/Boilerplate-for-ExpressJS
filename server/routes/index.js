const chatController = require("../controllers").chats;

module.exports = (app) => {
  app.get("/api", (request, response) =>
    response.status(200).send({
      message: "chat APIs",
    })
  );
};
