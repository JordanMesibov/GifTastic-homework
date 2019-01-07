// Create the array of gif search terms that will automatically load and have other search terms pushed to by the user
var gifs = ["Wayne Rooney", "Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane"];



//establish the variable used to call my API Key
var APIKey = "Yl5s8olf34BeRpqCqC56Qt4pkzStIr5N";
//establish the variable that will be updated to reflect whatever the user types in the add button form.
var query = "";
//establish the query url that will be used for the ajax call that cancatonates the different necessary pieces of the URL
var queryURL ="http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + APIKey;




//make the ajax call within an onclick event for the appropriate button
$(".GifBtn").on("click", function() {
  //set the variable query = the text on the clicked button
  query = this.

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(queryURL);
  console.log(response);
  //grab the appropriate gif (the first 10) and put it on the page

})

});