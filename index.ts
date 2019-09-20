import * as capture from 'capture-chrome'
import { writeFileSync } from 'fs'

export const squareCapture = (url:string, fileName?: string) => {
  capture({
    // 6:5
    url: url,
    width: 390,
    height: 325
  }).then(screenshot => {
    const outputFileName = fileName ? `${__dirname}/${fileName}_min.png` : `${__dirname}/${Date.now()}_min.png`
    writeFileSync(outputFileName, screenshot)
    console.log(outputFileName)
  })
  capture({
    url: url,
    width: 375,
    height: 375
  }).then(screenshot => {
    const outputFileName = fileName ? `${__dirname}/${fileName}_square.png` : `${__dirname}/${Date.now()}_square.png`
    writeFileSync(outputFileName, screenshot)
    console.log(outputFileName)
  })
  capture({
    // 16:9
    url: url,
    width: 1366,
    height: 768
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
