function popupOpen1(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper1").length == 0){
		$(popup).wrapInner("<div class='wrapper1'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen2(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper2").length == 0){
		$(popup).wrapInner("<div class='wrapper2'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen3(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper3").length == 0){
		$(popup).wrapInner("<div class='wrapper3'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen4(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper4").length == 0){
		$(popup).wrapInner("<div class='wrapper4'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen5(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper5").length == 0){
		$(popup).wrapInner("<div class='wrapper5'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

function popupOpen6(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper6").length == 0){
		$(popup).wrapInner("<div class='wrapper6'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

}

$(document).ready(function () {
	$("[data-js=open1]").on("click", function() {
		popupOpen1($(".popup1"));
	});
	$("[data-js=open2]").on("click", function() {
		popupOpen2($(".popup2"));
	});
	$("[data-js=open3]").on("click", function() {
		popupOpen3($(".popup3"));
	});
	$("[data-js=open4]").on("click", function() {
		popupOpen4($(".popup4"));
	});
	$("[data-js=open5]").on("click", function() {
		popupOpen5($(".popup5"));
	});
	$("[data-js=open6]").on("click", function() {
		popupOpen6($(".popup6"));
	});
});




var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
  
};
var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}