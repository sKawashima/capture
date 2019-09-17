import * as capture from 'capture-chrome'
import { writeFileSync } from 'fs'

export const squareCapture = (url:string, fileName?: string) => {
  capture({
    url: url,
    // 6:5
    width: 390,
    height: 325
  }).then(screenshot => {
    const outputFileName = fileName ? `${__dirname}/${fileName}.png` : `${__dirname}/${Date.now()}.png`
    writeFileSync(outputFileName, screenshot)
    console.log(outputFileName)
  })
}

// test
squareCapture('https://www.hanamaruudon.com/sp/', 'hanamaruudon.com')
squareCapture('https://www.marugame-seimen.com', 'marugame-seimen.com')
squareCapture('https://www.gyomusuper.jp/', 'gyomusuper.jp')
