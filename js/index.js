
/*Checker for js*/
console.log("Your index.js file is loaded correctly!");
/*-------------------------------------------------------------*/


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
    location.href = "file:///Users/Alec/Desktop/Code/UX_UI_HW_19/skills.html";
    });
        
$(".intoButton").on("click", function(){
    console.log("You clicked me!");
    location.href = "file:///Users/Alec/Desktop/Code/UX_UI_HW_19/skills.html";
    });        

/*------------------------------------------------------------------------------*/

