console.log("I have found the background devtool!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked () {
  console.log("You did it!");
}

function sendTo () {
  //sends a message to the content script

  
}
