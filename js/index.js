
/*Checker for js*/
console.log("Your index.js file is loaded correctly!");
/*-------------------------------------------------------------*/

/*--------------WHEN CLICKING----------------------------*/
/*Button animation&transition*/
$(".aboutButton").on("click", function(){
   console.log("You clicked me!");

   setTimeout(function() {
    $(location.href = "file:///Users/Alec/Desktop/Code/UX_UI_HW_19/skills.html").addClass('fadeIn');
  }, 1500);
    /*$('.button').addClass('animate_content');*/
   /*location.href = "file:///Users/Alec/Desktop/Code/UX_UI_HW_19/skills.html";*/

    });
   
$(".portButton").on("click", function(){
    console.log("You clicked me!");
    location.href = "file:///Users/Alec/Desktop/Code/UX_UI_HW_19/myWork.html";
    });

$(".connectButton").on("click", function(){
    console.log("You clicked me!");
    location.href = "file:///Users/Alec/Desktop/Code/UX_UI_HW_19/connectwithMe.html";
    });
        
$(".intoButton").on("click", function(){
    console.log("You clicked me!");
    location.href = "file:///Users/Alec/Desktop/Code/UX_UI_HW_19/gettingInto.html";
    });        

$(".logo").on("click", function(){
        console.log("You clicked me!");
        location.href = "file:///Users/Alec/Desktop/Code/UX_UI_HW_19/index.html";
        });   
/*------------------------------------------------------*/
/*--------------Hovering--------------------*/
/*$(".portButton").hover(function(){
    console.log("You're hovering!");
    $(".portButton").toggleClass("active");
    if($(".portButton").hasClass("active")) {
        $(".portButton").css("background-color", "#000000");
    }
        });

*/
$(".portButton").hover(function(){
            $(this).css("background-color", "grey");
            }, function(){
            $(this).css("background-color", "#C38686");
            console.log("You're hovering!");
          });
$(".aboutButton").hover(function(){
            $(this).css("background-color", "grey");
            }, function(){
            $(this).css("background-color", "#6AA5B8");
            console.log("You're hovering!");
          });
$(".connectButton").hover(function(){
            $(this).css("background-color", "grey");
            }, function(){
            $(this).css("background-color", "#D6A988");
            console.log("You're hovering!");
          });
$(".intoButton").hover(function(){
            $(this).css("background-color", "grey");
            }, function(){
            $(this).css("background-color", "#9276BF");
            console.log("You're hovering!");
          });