var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

//Add overlay
$("body").append($overlay);
//An image
//A caption to overlay
$overlay.append($caption);

//Capture the click event on a link to an image.
$("#slideshow a").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
//Update overlay witht he image linked in the link    
    $image.attr("src", imageLocation);

    //Show the overlay
    $overlay.show();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

$overlay.click(function () {
  $overlay.hide();
});