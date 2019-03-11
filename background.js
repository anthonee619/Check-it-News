console.log("I have found the background devtool!");


chrome.runtime.onMessage.addListener(searchResults);
window.urls = {};

function searchResults(req, sender, sendResponse){
  console.log(req);
  console.log(makeQuery(req.title));
  search(makeQuery(req.title));
}

function makeQuery(text){
  let temp = text.split(/\?|&|\/|\||-|_/g);
  let title = '';
  for (var i in temp) {
    if (temp[i].length > title) {
      title = temp[i];
    }
  }
  return encodeURI(title.replace(/\s+/g, '+'));
}

function search(query) {
  const uri = "https://newsapi.org/v2/everything/?q=";

  let head = new Headers();
  head.append('X-Api-Key', 'e32f1d5feb3f4027851ca426d3b3b2e3');
  let req = new Request(uri + encodeURI(query), {
    method: 'GET',
    headers: head,
    mode: 'cors'
  });
  fetch(req).then((resp) => {
    if (resp.ok) {
      return resp.json()
    } else {
      throw new Error('Bad HTTP stuff');
    }
  }).then((jsonData) => {
    window.news = jsonData.articles;
  }).catch((err) => {
    console.log('Error: ', err.message);
  });
};
