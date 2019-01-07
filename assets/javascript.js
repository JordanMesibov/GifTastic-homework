// Create the array of gif search terms that will automatically load and have other search terms pushed to by the user
var gifs = ["Wayne Rooney", "Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane"];

// create a function that will grab the HTML of the page and update it to display the content that I want it to (AKA the gif buttons and the gifs)
function displayGifs() {

  var gif = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=Yl5s8olf34BeRpqCqC56Qt4pkzStIr5N";
//I am on line 48 of the working-movie-app-solved.html as a reference right now
}
