console.log("Hello World this is the content_scripts");

var info = {title: "", host: ""};

$(document).ready(function() {
  console.log("Document ready");
  var docTitle = document.title;
  var hostWebsite = window.location.hostname;

  info = {title: docTitle, host: hostWebsite};

  chrome.runtime.sendMessage(info);
  //updateData(info);
});
