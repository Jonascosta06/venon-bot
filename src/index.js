require("dotenv").config();
const venom = require("venom-bot");

venom
  .create({
    session: "session-name", //name of session
    headless: false,
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      console.log(message.from);
    }
    if (message.from === "558699167437@c.us") {
      client.sendText(message.from, "hello world");
    }

    if (message.from === process.env.NUMERO_PAMELA) {
      respondePamela(message.body, client);
    }
    if (message.body === "Hi" && message.isGroupMsg === false) {
      client
        .sendText(message.from, "Welcome Venom 🕷")
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
  });
}
function respondePamela(texto, client) {
  const numeroPamela = process.env.NUMERO_PAMELA;
  if (texto.match(/\bo[iI]+e?\b/g)) {
    client.sendText(numeroPamela, "oi, amor");
  }
  if (texto.match(/\beu+\s+te\s+amo+\b/gi)) {
    client.sendText(numeroPamela, "eu tambem te amo");
  }
}
