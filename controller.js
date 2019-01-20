let axios = require('axios');
let cheerio = require('cheerio');
const getBracketRange = require('./getBracketValue');

exports.getDistros = (req, res) => {
  const distroList = [];
  const bracketRange = getBracketRange(Math.floor(Math.random() * 100 + 1));
  const randomIndex = Math.floor(Math.random() * 20);  
  console.time();

  return axios.get('https://distrowatch.com/index.php?dataspan=1')
    .then((response) => {
      if (response.status === 200) {

        const html = response.data;
        const $ = cheerio.load(html);

        //find distro list and for each one create {distro, query, rank}
        $('.phr2').each(function (i, element) {
          let a = $(this).children();
          const distro = a.text();
          const href = a['0'].attribs.href; //ex: "mx?frphr">
          const query = href.substr(0, href.indexOf('?'));
          distroList.push({ distro, query, rank: i + 1 });
        });

        distroToInstall = distroList.slice(bracketRange.min, bracketRange.max)[randomIndex];
        
        console.log('bracket Range:', bracketRange.min, '-', bracketRange.max);   
      }

      res.render('layout', {
        distro: distroToInstall.distro,
        url: 'https://distrowatch.com/table.php?distribution=' + distroToInstall.query,
        rank: distroToInstall.rank
      });
      console.timeEnd();

    })
    .catch(err => console.log('There was a problem: ', err))
}