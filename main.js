console.log("\x1b[31m   _____ ________   __              _____ _____     ______ _           _           ");
console.log("  / ____|  ____\\ \\ / /             |_   _|  __ \\   |  ____(_)         | |          ");
console.log(" | |    | |__   \\ V /   _ __ ___     | | | |__) |  | |__   _ _ __   __| | ___ _ __ ");
console.log(" | |    |  __|   > <   | '__/ _ \\    | | |  ___/   |  __| | | '_ \\ / _` |/ _ \\ '__|");
console.log(" | |____| |     / . \\ _| | |  __/   _| |_| |       | |    | | | | | (_| |  __/ |   ");
console.log("  \\_____|_|    /_/ \\_(_)_|  \\___|  |_____|_|       |_|    |_|_| |_|\\__,_|\\___|_|   ");
console.log("\x1b[0m");

const readline = require('readline');
const fetch = require('node-fetch');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
rl.question("Entrez le CFX du serveur cible: ", (url) => {

if (url.startsWith("cfx.re/join/")) {
  
  var request = url.replace("cfx.re/join/", "");

}

else {
  
  var request = url.replace("https://cfx.re/join/", "");
  var url = url.replace("https://", "");
  
}

  async function storejson() {

try {
  
  var response = (await (await fetch("https://servers-frontend.fivem.net/api/servers/single/" + request)).json()).Data.connectEndPoints[0];

} catch (error) {

  var response = "Le serveur n'est pas trouve, verifiez qu'il sois bon et en ligne!"

}

console.log();
  console.log(`CFX.re : \x1b[36m${url}`);
  console.log(`\x1b[0mAdresse IP: \x1b[36m${response}\x1b[0m`);
  console.log();
  console.log(`\x1b[32mNote: Souvenez vous que certains serveurs masquent leur ip`)
  console.log();
  console.log(`\x1b[33mVous pouvez me contacter sur discord - philly flingo#2118`);
  console.log();
  recursiveAsyncReadLine();

}

storejson()
});
};
recursiveAsyncReadLine();
