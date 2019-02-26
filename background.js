console.log("I have found the background devtool!");


chrome.runtime.onMessage.addListener(searchResults);
window.urls = {};

function searchResults(req, sender, sendResponse){
  urls = req.value;
}
