// Create the array of gif search terms that will automatically load and have other search terms pushed to by the user
var gifs = ["Wayne Rooney", "Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane"];

// create a function that will grab the HTML of the page and update it to display the content that I want it to (AKA the gif buttons and the gifs)
function displayGifs() {

  var gif = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=Yl5s8olf34BeRpqCqC56Qt4pkzStIr5N&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var results = response.data;
    //create an image tag
    for (i = 0; i < results.length; i++) {
      var gifImg = $("<img>");
    
      //give the img tag a src attr from the response
      gifImg.attr({
        src: results[i].images.fixed_width_still.url,
        "data-still": results[i].images.fixed_width_still.url,
        "data-animate": results[i].images.fixed_width.url,
        "data-state": "still",
        "class": "gif"
      });
  
      //append the gif/still image to the gifs-view div from the html
      $("#gifs-view").prepend(gifImg);
    }


    
  });
}

 // Function for displaying gif buttons
 function renderButtons() {

  // Delete the gifs prior to adding new ones
  $("#buttonsDiv").empty();

  // Looping through the array of gifs
  for (var i = 0; i < gifs.length; i++) {

    // Then dynamicaly generating buttons for each gif in the array
    var a = $("<button>");
    // Adding a class of gif-btn to the button
    a.addClass("gif-btn");
    // Adding a data-attribute
    a.attr("data-name", gifs[i]);
    // Providing the initial button text
    a.text(gifs[i]);
    // Adding the button to buttonsDiv
    $("#buttonsDiv").append(a);
  }
}

// This function handles events where a gif button is clicked
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var gif = $("#gif-input").val().trim();

  // Add the gif from the textbox to our array
  gifs.push(gif);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "gif-btn"
$(document).on("click", ".gif-btn", displayGifs);

$(document).on("click", ".gif", function() {
  // read state of image to see if it's still or animated\
  // if still... animate
  // else... make still again
})

// Calling the renderButtons function to display the intial buttons
renderButtons();
