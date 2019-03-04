console.log("I have found the background devtool!");


chrome.runtime.onMessage.addListener(searchResults);
window.urls = {};

function searchResults(req, sender, sendResponse){
  // let query = req.title
  // console.log(req);
  console.log(encodeURI(req.title));
  console.log(encodeURI(makeQuery(req.title)));
  var jsonResponse = search(encodeURI(makeQuery(req.title)));
  console.log(jsonResponse);
}

function makeQuery(text){
  return text.replace(/\s+/g, '+');
}

function search(query) {
  // uses the contentwebsearch news api to get relevant news stories.
  // const uri = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?q=";
  const uri = "https://newsapi.org/v2/everything/?q=";
  // const autoCorrect = "&autoCorrect=true";
  // const pageNumber = "&pageNumber=1";
  // const pageSize = "&pageSize=10";
  // const safeSearch = "&safeSearch=false";

  let head = new Headers();
  // head.append('X-RapidAPI-Key', '93c7922464mshb212bc584276a9ep13f7a4jsn79ab8987bec6');
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
    console.log(jsonData);
    return jsonData;
  }).catch((err) => {
    console.log('Error: ', err.message);
  });
};
