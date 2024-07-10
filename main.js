const { crawlPage } = require("./crawl");

function main() {
  if (process.argv.length < 3) {
    console.log("No website provided!!!, \nUsage: npm start website");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("Too many command line args!!, \nUsage: npm start website");
    process.exit(1);
  }
  for (const arg of process.argv) {
    console.log(arg);
  }
  const baseURL = process.argv[2];
  console.log(`starting crawl of ${baseURL} ...........`);
  crawlPage(baseURL);
}

main();
