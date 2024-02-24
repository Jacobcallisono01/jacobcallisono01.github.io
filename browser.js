// keep track of history
const history = []; 

// other variables
const iframe = document.getElementById("webpage");
const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");

// load page
function loadPage(url) {

  // push to history
  history.push(url);

  // load url
  iframe.src = url; 
}

// attach events
backBtn.addEventListener("click", () => {
  // go back in history
  let url = history[history.length - 2];
  
  // load page
  loadPage(url);
  
  // pop current url
  history.pop();
});

// forward button logic

// address bar enter logic

// additional features, UI
// Handle refresh button click
refreshButton.addEventListener("click", () => {
    // Reload current page
    url = url; 
  });
  // Get reference to refresh button
const refreshButton = document.getElementById("refresh-button");
