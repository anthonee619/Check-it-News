console.log("hello");

let bgPage = chrome.extension.getBackgroundPage();
let urls = bgPage.urls;

for (var i = 0; i < urls.length; i++) {
  $("#relatedNews").append('<li><a id="related-link"href="'+ urls[i].url + '" target="+_blank">' + urls[i].title + '</a></li>');
}
