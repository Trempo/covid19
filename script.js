
// $("div.col").hover(()=> {
//     $(this).toggleClass("bg-primary");
//     $(this).toggleClass("hovered");
//     console.log($(this));
// });

$("div.col-sm").hover(function () {
    if (!$(this).hasClass("selected")) {
        $(this).toggleClass("hovered");
        $(this).toggleClass("bg-primary");
    }

});


$("div.col-sm").click(function () {
    $("div.col-sm").removeClass("selected");
    $("div.col-sm").addClass("bg-primary");
    $(this).removeClass("bg-primary")
    $(this).addClass("selected");

});

