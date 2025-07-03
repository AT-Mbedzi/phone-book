const rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
function checkApiKey() {
  let key = localStorage.getItem("apiKey");
  if (!key) {
    window.open("enter-api-key.html", "_self");
  }
  return key;
}
