let axios = require('axios');
let cheerio = require('cheerio');
// let fs = require('fs');

exports.getDistros = (req, res) => {
  const distroList = [];
  const rootURL = 'https://distrowatch.com/table.php?distribution=';
  let d0_20;
  let d21_40;
  let d41_60;
  let d61_80;
  let d81_100;

  return axios.get('https://distrowatch.com/index.php?dataspan=1')
    .then((response) => {
      if (response.status === 200) {        
        const html = response.data;
        const $ = cheerio.load(html);

        $('.phr2').each(function (i, element) {
          var a = $(this).children();
          // console.log(a.text());
          // distroList.push(a);
          const distro = a.text();

          const href = a['0'].attribs.href; //ex: "mx?frphr">
          const query = href.substr(0, href.indexOf('?'));
          distroList.push({distro , query, rank: i + 1});
        });

        d0_20 = distroList.slice(0, 20);
        // console.log(d0_20);
        d21_40 = distroList.slice(20, 40);
        // console.log(d21_40);      
        d41_60 = distroList.slice(40, 60);
        // console.log(d41_60);
        d61_80 = distroList.slice(60, 80);
        // console.log(d61_80);
        d81_100 = distroList.slice(80, 100);
        // console.log(d81_100);

        console.log(distroList);
        

        // const href = distroList[1]['0'].attribs.href;
        // console.log(href); //ex mx?frphr        

        // const query = href.substr(0, href.indexOf('?'));
        // console.log(query);
      }
      res.render('layout', { distro: distroList[0].distro, url: rootURL + distroList[0].query  });
    })
    .catch(err => console.log('There was a problem: ', err)
    )
}