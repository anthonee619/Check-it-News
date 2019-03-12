console.log("hello");

let bgPage = chrome.extension.getBackgroundPage();
console.log($("#type").text());
updateData(bgPage.info);
let urls = bgPage.news;
console.log(urls);

for (var i = 0; i < 5; i++) {
  $("#relatedNews").append('<li><a id="related-link"href="'+ urls[i].url + '" target="+_blank" title="'+ urls[i].title + '">' + urls[i].source.name + '</a></li>');
}
