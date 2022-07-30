

  function resize() {
    var w = window.innerWidth;
    console.log(w);



    if (w >= 1300) {
      // $(".sunrise img").attr("src", "images/sunrise-2160.jpg");
      $(".info-large").addClass("show");
      $(".info").addClass("hide");
      $(".top-large").addClass("show");
      $(".nav").addClass("navbar-large").show();
      $(".banner").addClass("banner-large");
      $(".banner img").addClass("banner-large-img").attr("src", "images/thunderbird-2160.jpg");
      // $(".sunrise").addClass("sunrise-large");
      $(".title").addClass("title-large")
      $(".wrapper").addClass("wrapper-large");
      $(".sunrise-img").show();
      $(".sunrise").hide();
      $(".dreamcatcher").hide();
      $(".drop").hide();
      $("#about").addClass("about-large");
      // $("#therapy-large").removeClass("hide");
      // $(".nav-therapy").attr("href", "#therapy-large");
      // $("#therapy-small").hide();
      $(".packages").removeClass("p-3").addClass("p-5");

    }

    else if (w < 1300) {
      // $(".sunrise img").attr("src", "images/sunrise-1440.jpg");
      $(".info").removeClass("hide");
      $(".info-large").removeClass("show");
      $(".top").removeClass("hide");
      $(".top-large").removeClass("show");
      $(".nav").removeClass("navbar-large").hide();
      $(".banner").removeClass("banner-large");
      $(".banner img").removeClass("banner-large-img").attr("src", "images/thunderbird-1440.jpg");
      // $(".sunrise").removeClass("sunrise-large");
      $(".title").removeClass("title-large")
      $(".wrapper").removeClass("wrapper-large");
      $(".sunrise-img").hide();
      $(".sunrise").show();
      $(".drop").show();
      $("#about").removeClass("about-large");
      $(".dreamcatcher").show();
      $(".packages").removeClass("p-5").addClass("p-3");

    };

    if (w > 1300 && w < 1400) {
      $(".sunrise-img").attr("src", "images/sunrise-1440-tall.jpg");
    }

    else if (w >= 1400 && w < 1500) {
    $(".sunrise-img").attr("src", "images/sunrise-1920.jpg");
    }

    else if (w >= 1500) {
    $(".sunrise-img").attr("src", "images/sunrise-2160.jpg");
  };

};

resize();

  $(window).resize(function() {
resize();
  });


$(".drop").on("click", function() {
  $(".nav").toggle("slow");
})
