//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(event) {
    console.log(event);
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
