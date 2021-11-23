const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');

const app = express();
const PORT = 3000;

const URL = "https://www.uol.com.br/esporte/";

axios(URL)
    .then(response => {
        const html = response.data;
        const scrapData = cheerio.load(html)
        const scrapedArray = []

        scrapData('.thumbnails-wrapper', html).each(function () {
            const tituloScr = scrapData(this).text()
            const linkScr = scrapData(this).find('a').attr('href')
            scrapedArray.push({
                tituloScr,
                linkScr
            })
        })
        console.log(scrapedArray);
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`servidor aberto na porta ${PORT}`));