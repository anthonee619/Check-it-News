console.log("hello");

let bgPage = chrome.extension.getBackgroundPage();
let urls = bgPage.news;
// console.log(urls);

for (var i = 0; i < 5; i++) {
  console.log(urls[1]);
  $("#relatedNews").append('<li><a id="related-link"href="'+ urls[i].url + '" target="+_blank">' + urls[i].title.substring(0,30) + '</a></li>');
}
