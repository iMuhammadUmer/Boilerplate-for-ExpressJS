const Chats = require("../models").Chats;

module.exports = {
  sendMsg(request, response) {
    return Chats.create({
      msgFrom: request.body.msgFrom,
      msg: request.body.msg,
    })
      .then((chat) => response.status(201).send(chat))
      .catch((error) => response.status(400).send(error));
  },
};
