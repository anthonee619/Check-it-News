console.log("Hello World this is the content_scripts");

$(document).ready(function() {
  console.log("Document ready");
  var docTitle = document.title;
  var hostWebsite = window.location.hostname;

  var query = encodeURI(makeQuery(docTitle));

  search(query);

});


function makeQuery(text){
  return text.replace(/\s+/g, '+');
}

function search(query) {
  // uses the contentwebsearch news api to get relevant news stories.
  const uri = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?q=";
  const autoCorrect = "&autoCorrect=true";
  const pageNumber = "&pageNumber=1";
  const pageSize = "&pageSize=10";
  const safeSearch = "&safeSearch=false";

  let head = new Headers();
  head.append('X-RapidAPI-Key', '93c7922464mshb212bc584276a9ep13f7a4jsn79ab8987bec6');
  let req = new Request(uri + encodeURI(query) + autoCorrect + pageNumber + pageSize + safeSearch, {
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
    chrome.runtime.sendMessage(jsonData);
  }).catch((err) => {
    console.log('Error: ', err.message);
  });
};
