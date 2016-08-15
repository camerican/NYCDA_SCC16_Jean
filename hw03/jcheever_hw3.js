//1. Create a "cheat sheet" JavaScript file that contains examples of 
//basic jQuery usage, commented out to delineate what each snippet does.

$("element").hide(); // hides the element
$("element").show();// brings the element back
$("element").fadeOut();// fades the element out; if you put a time in the () it will do it over the time
$("element").fadeIn(); // fades the element back in; if you put a time in the () it will do it over the time


// - Use jQuery to create an animated "show"! 
//Try changing an element's 

//hiding and showing: 
$("body").hide(); //hides everything in the body
$("body").show(); //brings it all back
$("ul li").hide(); //hides all the lists
$("ul li").show(); //brings them all back

//fading: 
$(".red").fadeOut(); //fades the first paragraph out
$(".red").fadeIn();// brings the first paragraph back in

$("#blue").fadeOut(5000); //fades the second paragraph out over 5 seconds
$("#blue").fadeIn(5000); //fade the second paragraph back in over 5 seconds

//and sliding:
$(".yellow").slideUp(); //slides the third paragraph up
$(".yellow").slideDown(); //slides the third paragraph down
$(".pink").slideUp(5000); //slides the fourth paragraph up over 5 seconds
$(".pink").slideDown(5000); //slides the fourth paragraph down over 5 seconds

//Attach different animations to different events (click, hover, etc.).
$(".red").animate( {   
	opacity: 0.25,   
	width: "70%" 
} , 2000 );

$(document).ready(function(){
    $("#blue").click(function(){
        $(this).fadeOut();
    });
});

$(document).ready(function(){
    $(".red").hover(function(){
        $(this).fadeOut();
    });
});


