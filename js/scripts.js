
var isTriangle = function(sideOne, sideTwo, sideThree) {
  if ((sideOne + sideTwo < sideThree) || (sideOne + sideThree < sideTwo) || (sideTwo + sideThree < sideOne)){
    return false;
  }
  else{
    return true;
  }
};

var typeOfTriangle = function(sideOne, sideTwo, sideThree) {
  if((sideOne === sideTwo) && (sideTwo === sideThree)){
    return "n equalateral";
  }
  else if((sideOne === sideTwo) && (sideTwo !== sideThree)){
    return "n isosceles";
  }
  else if((sideOne === sideThree) && (sideOne !== sideTwo)){
    return "n isosceles";
  }
  else if((sideTwo === sideThree) && (sideTwo !== sideOne)){
    return "n isosceles";
  }
  else if((sideOne !== sideTwo) && (sideTwo !== sideThree)){
    return " scalene";
  }

};

$(document).ready(function() {
  $("form#choose-sides").submit(function(event) {

    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());

    var isATriangle = isTriangle(sideOne, sideTwo, sideThree);

    if(!isATriangle){
      $("#testBetterFunction").hide();
      $("#isNotTriangle").show();
    }

   else if(isATriangle){
     $("#isNotTriangle").hide();
     var getThatTriangle = typeOfTriangle(sideOne, sideTwo, sideThree);
     $(".betterType").text(getThatTriangle);
     $("#testBetterFunction").show();
   }
   /*
   var isItEqual = isEqual(sideOne, sideTwo, sideThree);
   if(isItEqual){
      $(".typeOfTriangle").text("equalateral");
      $("#showTri").show();
    }
    var isItIsosceles = isIsosceles(sideOne, sideTwo, sideThree);
    if(isItIsosceles){
      $(".typeOfTriangle").text("isosceles");
      $("#showTri").show();
    }
    var isItScalene = isScalene(sideOne, sideTwo, sideThree);
    if(isItScalene){
      $(".typeOfTriangle").text("scalene");
      $("#showTri").show();
    }
*/
   event.preventDefault();
  });
});
//Unnessesary:

/*
var isEqual = function(sideOne, sideTwo, sideThree) {
  if((sideOne === sideTwo) && (sideTwo === sideThree)){
    return true;
  }
  else{
    return false;
  }
};

var isIsosceles = function(sideOne, sideTwo, sideThree) {
  if((sideOne === sideTwo) && (sideTwo !== sideThree)){
    return true;
  }
  else if((sideOne === sideThree) && (sideOne !== sideTwo)){
    return true;
  }
  else if((sideTwo === sideThree) && (sideTwo !== sideOne)){
    return true;
  }
  else{
    return false;
  }
};

var isScalene = function(sideOne, sideTwo, sideThree) {
  if((sideOne !== sideTwo) && (sideTwo !== sideThree)){
    return true;
  }
  else{
    return false;
  }
};
*/
