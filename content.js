console.log("Hello World this is the content_scripts");

console.log('' + $("title").text());


$(document).ready(function() {
  console.log("Document ready");
  const uri = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?";
  var querry = "q=trump";
  var autoCorrect = "&autoCorrect=true";
  var pageNumber = "&pageNumber=1";
  var pageSize = "&pageSize=10";
  var safeSearch = "&safeSearch=false";
  var docTitle = document.title;
  var hostWebsite = window.location.hostname;

  console.log(docTitle);
  console.log(hostWebsite);

  let head = new Headers();
  head.append('X-RapidAPI-Key', '93c7922464mshb212bc584276a9ep13f7a4jsn79ab8987bec6');
  let req = new Request(uri + encodeURI(querry) + autoCorrect + pageNumber + pageSize + safeSearch, {
    method: 'GET',
    headers: head,
    mode: 'cors'
  });

  fetch(req).then((resp) => {
    if (resp.ok) {
      return resp.json()
    } else {
      console.log(resp);
      throw new Error('Bad HTTP stuff');
    }
  }).then((jsonData) => {
    console.log(jsonData);
  }).catch((err) => {
    console.log('Error: ', err.message);
  });
});
