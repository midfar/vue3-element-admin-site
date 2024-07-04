const dayjs = require('dayjs')
const fs = require('fs')
const convert = require('xml-js')

fs.readFile('./sitemap.xml', 'utf8', (err, data) => {
  if (err) {
    console.log('readFile sitemap.xml error', err)
  } else {
    const xmlObj = convert.xml2js(data)
    const length = xmlObj.elements[0].elements.length
    const nowString = dayjs().toISOString()
    // console.log(nowString);
    for (let i = 0; i < length; i++) {
      const name = xmlObj.elements[0].elements[i].elements[1].name
      if (name === 'lastmod') {
        // const lastmod = xmlObj.elements[0].elements[i].elements[1].elements[0].text;
        // console.log(lastmod);
        xmlObj.elements[0].elements[i].elements[1].elements[0].text = nowString
      }
    }
    const xml = convert.js2xml(xmlObj, { spaces: 2 })
    fs.writeFile('./docs/.vuepress/dist/sitemap.xml', xml, function(err) {
      if (err) {
        console.log('sitemap.xml writeFile error', err)
      } else {
        console.log('sitemap.xml writeFile success')
      }
    })
  }
})

fs.copyFile(
  './baidu_verify_codeva-wu16TJnyYZ.html',
  './docs/.vuepress/dist/baidu_verify_codeva-wu16TJnyYZ.html',
  err => {
    if (err) {
      console.log('copy baidu_verify file err', err)
    } else {
      console.log('copy baidu_verify file success')
    }
  }
)
