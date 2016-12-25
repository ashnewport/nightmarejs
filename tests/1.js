// read the blog post at
// https://azurelogic.com/posts/web-scraping-with-nightmare-js/
var Nightmare = require('nightmare');

var google = new Nightmare()
  .useragent('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36')
  .viewport(1200, 900)
  .goto('http://www.google.com.au')
  .wait()
  .screenshot('./outputs/1-google.png')
  .pdf('./outputs/1-google.pdf')
  .type('#lst-ib', 'tic tac toe')
  .wait(500)
  .screenshot('./outputs/1-type.png')
  .click('input[name="btnK"]')
  .wait()
  .screenshot('./outputs/1-click.png')
  .evaluate(function(){
    return {
      title: document.querySelector('.r>a').text,
      href: document.querySelector('.r>a').href
    }
  })
  .run(function(err, nightmare){
    if (err) return console.log(err);
    console.log('Result title: ' + nightmare.title);
    console.log('Result href: ' + nightmare.href);
    console.log('Done!');
  })
  .end();
