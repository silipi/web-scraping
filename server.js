const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.imdb.com/chart/top/?ref_=nv_mv_250");

  const imagesUrl = await page.evaluate(() => {
    const nodeList = document.querySelectorAll(
      "tbody.lister-list tr td.posterColumn a img"
    );

    const array = [...nodeList];

    const moviesInfo = [
      ...array.map((image, id) => {
        return {
          id: ++id,
          imgSrc: image.attributes.src.value,
          title: image.attributes.alt.value,
        };
      }),
    ];

    return moviesInfo;
  });

  fs.writeFile(
    "linksImageIMDb.json",
    JSON.stringify(imagesUrl, null, 2),
    (err) => {
      if (err) {
        throw new Error("Eita, deu ruim no arquivo!");
      }
    }
  );

  await browser.close();
})();
