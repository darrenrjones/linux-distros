let axios = require('axios');
let cheerio = require('cheerio');

exports.getDistros = (req, res) => {
  const distroList = [];
  const rootURL = 'https://distrowatch.com/table.php?distribution=';
  let rankBracket;

  const randomRank = Math.floor(Math.random() * 20);
  const oneToOneHundred = Math.floor(Math.random() * 100 + 1);

  return axios.get('https://distrowatch.com/index.php?dataspan=1')
    .then((response) => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);

        $('.phr2').each(function (i, element) {
          let a = $(this).children();
          const distro = a.text();
          const href = a['0'].attribs.href; //ex: "mx?frphr">
          const query = href.substr(0, href.indexOf('?'));

          distroList.push({ distro, query, rank: i + 1 });
        });

        if (oneToOneHundred <= 45) {
          rankBracket = distroList.slice(0, 20);
        } else if (oneToOneHundred >= 46 && oneToOneHundred <= 70) {
          rankBracket = distroList.slice(20, 40);
        } else if (oneToOneHundred >= 71 && oneToOneHundred <= 85) {
          rankBracket = distroList.slice(40, 60);
        } else if (oneToOneHundred >= 86 && oneToOneHundred <= 95) {
          rankBracket = distroList.slice(60, 80);
        } else {
          rankBracket = distroList.slice(80, 100);
        }
        console.log('Random 1 - 100 num: ',oneToOneHundred);   
      }

      res.render('layout', {
        distro: rankBracket[randomRank].distro,
        url: rootURL + rankBracket[randomRank].query,
        rank: rankBracket[randomRank].rank
      });

    })
    .catch(err => console.log('There was a problem: ', err))
}