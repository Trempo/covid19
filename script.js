
// $("div.col").hover(()=> {
//     $(this).toggleClass("bg-primary");
//     $(this).toggleClass("hovered");
//     console.log($(this));
// });

$("div.col").hover(function () {
    if (!$(this).hasClass("selected")) {
        $(this).toggleClass("hovered");
        $(this).toggleClass("bg-primary");
    }

});


$("div.col").click(function () {
    $("div.col").removeClass("selected");
    $("div.col").addClass("bg-primary");
    $(this).removeClass("bg-primary")
    $(this).addClass("selected");
    
 
});

