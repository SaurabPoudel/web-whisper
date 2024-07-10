const { crawlPage } = require("./crawl");

async function main() {
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
  const pages = await crawlPage(baseURL, baseURL, {});

  for (const page of Object.entries(pages)) {
    console.log(page);
  }
}

main();
