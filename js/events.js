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
  $('#typing').on('keydown', function(e) {
    console.log(e.key.toUpperCase());
    if (e.key.toUpperCase() == 'G')
      alert('G pressed');
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
