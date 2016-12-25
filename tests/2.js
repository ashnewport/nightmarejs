// read the blog post at
// http://www.devsbytes.com/browser-automation-with-nightmarejs.html
var Nightmare = require('nightmare');

if (process.argv.length < 3) {
  console.log('Usage: node tests/2.js PARAM');
  return;
}

new Nightmare()
  .goto('https://www.wikipedia.org')
  .wait()
  .type('#searchInput', process.argv[2])
  .wait()
  .click('.pure-button.pure-button-primary-progressive')
  .wait()
  .url()
  .run(function(err, nightmare) {
    if (err) {
      return console.log(err)
    }
    console.log('Page url: ' + nightmare);
    console.log('Done');
  })
  .end();
