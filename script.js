var numeroCedula;
var placa;

var lunes = {
    salir: false,
    carro: false
};
var martes = {
    salir: false,
    carro: false
};
var miercoles = {
    salir: false,
    carro: false
};
var jueves = {
    salir: false,
    carro: false
};
var viernes = {
    salir: false,
    carro: false
};
var sabado = {
    salir: false,
    carro: false
};
var domingo = {
    salir: false,
    carro: false
};



$("div.col-sm").hover(function () {
    if (!$(this).hasClass("selected")) {

        $(this).toggleClass("bg-primary");
    }
    $(this).toggleClass("hovered");

});


$("div.col-sm").click(function () {
    // $("div.col-sm").removeClass("selected");
    // $("div.col-sm").addClass("bg-primary");
    // $(this).removeClass("bg-primary")
    // $(this).addClass("selected");

    $(this).parent().children().removeClass("selected");
    $(this).parent().children().addClass("bg-primary");
    $(this).removeClass("bg-primary")
    $(this).addClass("selected");

    if ($(this).parent().hasClass("cedula")) {
        numeroCedula = parseInt($(this).text());
    }
    if ($(this).parent().hasClass("placa")) {
        placa = parseInt($(this).text());
    }
    if (numeroCedula !== undefined && placa !== undefined) {

        //por ultimo digito placa
        lunes, martes, miercoles, jueves, viernes, sabado, domingo = 0;
        if (placa % 2 === 0) {
            martes.carro = true;
            jueves.carro = true;
            sabado.carro = true;
        } else {
            lunes.carro = true;
            miercoles.carro = true;
            viernes.carro = true;
        }

        //por ultimo digito cedula
        if (numeroCedula === 1 || numeroCedula === 2) {
            lunes.salir = true;
        } else if (numeroCedula === 3 || numeroCedula === 4) {
            martes.salir = true;
        } else if (numeroCedula === 5 || numeroCedula === 6) {
            miercoles.salir = true;
        } else if (numeroCedula === 7 || numeroCedula === 8) {
            jueves.salir = true;
        } else if (numeroCedula === 0 || numeroCedula === 9) {
            viernes.salir = true;
        }

        if (numeroCedula % 2 === 0) {
            domingo.salir = true;
        } else {
            sabado.salir = true;
        }

        //limpia toda la informacion de dias en configuraciones anteriores y asigna nuevas
        $("tr").each((index, element) => {
            element.classList.remove("bg-primary", "bg-secondary");

            if(element.id==="lunes"){
                if (lunes.salir==true){
                    element.classList.add("bg-primary");
                }else{
                    element.classList.add("bg-secondary");
                }
            }
              
        });
        


    }

});

