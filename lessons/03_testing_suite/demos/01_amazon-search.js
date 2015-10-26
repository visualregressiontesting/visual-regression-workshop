return browser
  .url("http://www.amazon.com/")
  .setValue("#twotabsearchtextbox", "The Queen Mary Book")
  .submitForm(".nav-searchbar")
  .webdrivercss("search results", {
    name: "results",
    elem: "#atfResults"
  })