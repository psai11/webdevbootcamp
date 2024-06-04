$("button").click(function() {
    $("h1").slideToggle();
});

$(document).keydown(function(event) {
    var t = event.key;
    $("h1").text(t);
    console.log(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
});