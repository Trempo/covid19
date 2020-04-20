
// $("div.col").hover(()=> {
//     $(this).toggleClass("bg-primary");
//     $(this).toggleClass("hovered");
//     console.log($(this));
// });
  
$("div.col").hover(function () {
    $(this).toggleClass("hovered");
    $(this).toggleClass("bg-primary");
});

