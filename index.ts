import * as puppeteer from 'puppeteer'

export const squareCapture = async (url:string, fileName?: string) => {
  const browser = await puppeteer.launch({
    headless: true
  })

  const minPage = await browser.newPage()
  await minPage.setViewport({width: 390,height: 325})
  await minPage.goto(url)
  await minPage.screenshot({
    path: `${fileName ? `${__dirname}/${fileName}_min.png` : `${__dirname}/${Date.now()}_min.png`}`
  })
  console.log(`save: ${fileName ? `${__dirname}/${fileName}_min.png` : `${__dirname}/${Date.now()}_min.png`}`);
  await minPage.close()

  const squarePage = await browser.newPage()
  await squarePage.setViewport({width: 375,height: 375})
  await squarePage.goto(url)
  await squarePage.screenshot({path: `${fileName ? `${__dirname}/${fileName}_square.png` : `${__dirname}/${Date.now()}_square.png`}`})
  console.log(`save: ${fileName ? `${__dirname}/${fileName}_min.png` : `${__dirname}/${Date.now()}_square.png`}`);
  await squarePage.close()

  await browser.close()
}

// test
squareCapture('https://www.workman.co.jp/workman-plus', 'workman-plus')
squareCapture('https://www.seria-m.jp/sp/', 'seria')
squareCapture('https://www.marugame-seimen.com/', 'marugame-seimen')
squareCapture('https://www.starbucks.co.jp/', 'starbucks')
