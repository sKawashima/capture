import * as capture from 'capture-chrome'
import { writeFileSync } from 'fs'

export const squareCapture = (url:string, fileName?: string) => {
  capture({
    url: url,
    // 16:9
    width: 1200,
    height: 675
  }).then(screenshot => {
    const outputFileName = fileName ? `${__dirname}/${fileName}.png` : `${__dirname}/${Date.now()}.png`
    writeFileSync(outputFileName, screenshot)
    console.log(outputFileName)
  })
}

// test
squareCapture('https://www.hanamaruudon.com/', 'hanamaruudon.com')
squareCapture('https://www.marugame-seimen.com', 'marugame-seimen.com')
squareCapture('https://www.gyomusuper.jp/', 'gyomusuper.jp')
