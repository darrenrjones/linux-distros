let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

const distroList = [];

axios.get('https://distrowatch.com/index.php?dataspan=1')
  .then((response) => {
    if (response.status === 200) {

      const html = response.data;
      const $ = cheerio.load(html);

      $('.phr2').each(function (i, element) {
        var a = $(this).children();
        // console.log(a.text());
        distroList.push(a.text());
      });
      console.log(distroList);     
    }
  }, (error) => console.log('error: ', err));