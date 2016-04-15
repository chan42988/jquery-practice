$(window).click(function(){
  alert("READY FOR THE SHOW?");

//element 1
  $("#h1").ready(function(){
    console.log("is this working?")
    $("#h1").slideUp(3000);
  });
//element 2
  $("#image1").ready(function(){
    console.log("is this working?")
    $("#image1").hide(3000);
  });
//element 3
  $("#image2").ready(function(){
    console.log("working?")
    $("#image2").fadeOut(3000);
  });
//element 4
  $("#image3").ready(function(){
    console.log("working?")
    $("#image3").slideUp(3000);
  });
//element 5
  $("#image4").ready(function(){
    console.log("working?")
    $("#image4").animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
})
//element 6
  $("#s1").ready(function(){
    console.log("working?")
    $("#image2").fadeOut(3000);
  });
//element 7
  var animateMenu = function(){ 
    $("#s2").animate( {opacity: .5} ) 
  } 
  $("#s2").show(animateMenu)
//element 8
  $("#s3").click(function(){
    console.log("working?")
    $("#s3").slideUp(3000);
  });

    $( "#go" ).ready(function() {
    $( "#block" ).animate({
      width: "70%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  });
//element 9
  $( "#right" ).ready(function() {
  $( "#box" ).animate({ "left": "+=50px" }, "slow" );
  });
   
  $( "#left" ).ready(function(){
    $( "#box" ).animate({ "left": "-=50px" }, "slow" );
  });
  //element 10
  $("#s4").ready(function(){
    console.log("is this working?")
    $("#s4").slideUp(3000);
  });

});







