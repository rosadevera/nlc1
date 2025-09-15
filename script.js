$(document).ready(function() {

  $(".landing").on("click", function() {
    $(".landing").addClass("hidden");
  });


  $(".me").on("click", function() {
    $("#mebox").toggleClass("bar");
  });
  $("#mebox").on("click", function() {
    $("#mebox").removeClass("bar");
  });

  // $(".laptop").on("click", function() {
  //   $("#laptopbox").toggleClass("bar");
  // });
  // $("#laptopbox").on("click", function() {
  //   $("#laptopbox").removeClass("bar");
  // });

  $(".door").on("click", function() {
    $("#doorbox").toggleClass("bar");
  });
  $("#doorbox").on("click", function() {
    $("#doorbox").removeClass("bar");
  });

  $(".heytea").on("click", function() {
    $("#heyteabox").toggleClass("bar");
  });
  $("#heyteabox").on("click", function() {
    $("#heyteabox").removeClass("bar");
  });

  $(".window").on("click", function() {
    $("#windowbox").toggleClass("bar");
  });
  $("#windowbox").on("click", function() {
    $("#windowbox").removeClass("bar");
  });

  const song = new Audio("./media/soap.mp3");
  $(".headphones").on("click", function() {
    $("#headphonesbox").toggleClass("bar");
    song.play();
  });
  $("#headphonesbox").on("click", function() {
    $("#headphonesbox").removeClass("bar");
    song.pause();
  });

  $(".job").on("click", function() {
    $("#jobbox").toggleClass("bar");
  });
  $("#jobbox").on("click", function() {
    $("#jobbox").removeClass("bar");
  });

});


  $( function() {
    $(".room").draggable();
    $(".me").draggable();
    $(".laptop").draggable();
    $(".heytea").draggable();
    $(".headphones").draggable();
    $(".job").draggable();
  });