$(function() {
  $(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var neweat = $(this).data("neweat");

    var neweatState = {
      devoured: neweat
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: neweatState
    }).then(
      function() {
        console.log("changed eat to", neweat);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
