console.log("hello");

let bgPage = chrome.extension.getBackgroundPage();
let urls = bgPage.urls;

for (var i = 0; i < urls.length; i++) {
  $("#relatedNews").append('<li><a href="'+ urls[i].url + '">' + urls[i].title + '</a></li>');
}
