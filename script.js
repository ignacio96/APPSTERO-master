$(document).ready(function(){
	setBindings();



function setBindings() {

	$(".navbar a").click(function(e){
		e.preventDefault();
		if (e.currentTarget.id !== "encuesta") {
				var sectionID = e.currentTarget.id + "1";
				$("html body").animate({
					scrollTop: $("#" + sectionID).offset().top
				}, 1000)
		}
		else {
			window.location.href = 'encuesta.html';
		}

	})};



	$(".details").click(function(e){
		$(".imgBox").css("opacity", 0.2);
	});




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("mynav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

});
