$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault();
    const favThing1 = $("#favorite-thing-1").val();
    const favThing2 = $("#favorite-thing-2").val();
    const favThing3 = $("#favorite-thing-3").val();
    const favThing4 = $("#favorite-thing-4").val();
    const favThing5 = $("#favorite-thing-5").val();

    let array2 = [];
    const array = [favThing1, favThing2, favThing3, favThing4, favThing5];
    array2.push(array[1], array[0], array[2]);
    array2.forEach(function (element) {
      $("#output").append("<li>" + element + "</li>");
    });
  });
});
