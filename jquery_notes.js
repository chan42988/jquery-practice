1.

//important link for jquery
//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

//call script in block with <script> tag
<script>
  myfunction();
</script>

///load js console open (Command+Option+J)

//check to see if jQuery is loaded, type jQuery in js console

//selecting elements
//The format for selecting elements is:
$("<element name, class, id, or XPath>")
//Here are some examples:
$("p") 
$(".main-nav") 
$("ul li")

//important snippet
$(document).ready()

$(document).ready(function(){



})

//writing an anonymous function
function(){   
  alert("I am anonymous!"); 
}
//Anonymous functions can be stored in variables:
var my_anon_func = function(){ 
  alert("Har!"); 
}

//Callbacks
// Define an anonymous function called someOtherFunction 
var someOtherFunction = function(){ 
  alert('hello world'); 
}
// Declare a regular or anonymous function that takes another // function as an argument, does something, // then runs that other function 
function someRunner(anyFunction){ 
  console.log(2+2); anyFunction(); 
}
// Call the regular function, supplying the initial // anonymous function as an argument 
someRunner(someOtherFunction);

//you have to pass through document.ready
$(document).ready(   
//Code that executes when the document is ready   
function(){     
  alert('The document is ready, sah!');   
  } 
);

//fun example
$(document).ready()
//show or hide
$("body").hide();
$("body").show();

//fade in or out
$("#section-one").fadeOut();
$("#section-one").fadeIn();

//fade over time
//Fade out over 1 second
$("#section-one").fadeOut(1000); 
//Fade in over 4 seconds
$("#section-one").fadeIn(4000); 

//hiding and sliding
//Fade out over 1 second
$("#section-one").slideUp(1000); 
//Fade in over 4 seconds
$("#section-one").slideDown(4000); 

//animate css
$(".my-element").animate( {   
  opacity: 0.25,   width: "70%" 
} , 2000 );

//click event
$("ul li a").click(   
  function(){     
    alert('imclicked!');   
  } 
);

//using callback for a sequence
var animateMenu = function(){   
  $(".menu").animate( {opacity: .5} ) 
} 
$(".menu").show(animateMenu)
//or write like this
$(".menu").show( function(){   
  $(".menu").animate( {opacity: .5} ) 
})



