import * as capture from 'capture-chrome'
import { writeFileSync } from 'fs'

export const squareCapture = (url:string) => {
  capture({
    url: url,
    width: 1024,
    height: 1024
  }).then(screenshot => {
    const fileName = `${__dirname}/${Date.now()}.png`
    writeFileSync(fileName, screenshot)
    console.log(fileName)
  })
}

// test
squareCapture('https://www.mwed.jp/')
