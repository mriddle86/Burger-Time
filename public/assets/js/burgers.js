$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newdevour = $(this).data("newdevour");

    var newdevourState = {
      devoured: newdevour
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevourState
    }).then(
      function() {
        console.log("changed devour to", newdevour);

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };


    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added Burger");

        location.reload();
      }
    );
  });


  $(".delburger").on("click", function(event) {
    var id = $(this).data("burgerid");


    $.ajax("api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);

        location.reload();
      }
    );
  });


});
