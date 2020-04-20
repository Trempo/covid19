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

    lunes.carro=false, lunes.salir=false;
    martes.carro=false, martes.salir=false;
    miercoles.carro=false, miercoles.salir=false;
    jueves.carro=false, jueves.salir=false;
    viernes.carro=false, viernes.salir=false;
    sabado.carro=false, sabado.salir=false;
    domingo.carro=false, domingo.salir=false;

    if (numeroCedula !== undefined && placa !== undefined) {

        //por ultimo digito placa
        
        if (placa % 2 !== 0) {
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
                    if(lunes.carro==true){
                        element.childNodes[3].innerHTML ='Lunes<span class="iconSpan"><i class="fas fa-car"></i>Puedes salir en tu carro</span>';
                    }else{
                        element.childNodes[3].innerHTML = 'Lunes<span class="iconSpan"><i class="fas fa-walking"></i>Puedes salir sin tu carro</span>';
                    }
                    
                }else{
                    element.classList.add("bg-secondary");
                    element.childNodes[3].innerHTML = 'Lunes<span class="iconSpan"><i class="fas fa-times-circle"></i>Debes quedarte en casa</span>';
                }
            }
            if(element.id==="martes"){
                if (martes.salir==true){
                    element.classList.add("bg-primary");
                    if(martes.carro==true){
                        element.childNodes[3].innerHTML ='Martes<span class="iconSpan"><i class="fas fa-car"></i>Puedes salir en tu carro</span>';
                    }else{
                        element.childNodes[3].innerHTML = 'Martes<span class="iconSpan"><i class="fas fa-walking"></i>Puedes salir sin tu carro</span>';
                    }
                    
                }else{
                    element.classList.add("bg-secondary");
                    element.childNodes[3].innerHTML = 'Martes<span class="iconSpan"><i class="fas fa-times-circle"></i>Debes quedarte en casa</span>';
                }
            }
            if(element.id==="miercoles"){
                if (miercoles.salir==true){
                    element.classList.add("bg-primary");
                    if(miercoles.carro==true){
                        element.childNodes[3].innerHTML ='Miercoles<span class="iconSpan"><i class="fas fa-car"></i>Puedes salir en tu carro</span>';
                    }else{
                        element.childNodes[3].innerHTML = 'Miercoles<span class="iconSpan"><i class="fas fa-walking"></i>Puedes salir sin tu carro</span>';
                    }
                    
                }else{
                    element.classList.add("bg-secondary");
                    element.childNodes[3].innerHTML = 'Miercoles<span class="iconSpan"><i class="fas fa-times-circle"></i>Debes quedarte en casa</span>';
                }
            }
            if(element.id==="jueves"){
                if (jueves.salir==true){
                    element.classList.add("bg-primary");
                    if(jueves.carro==true){
                        element.childNodes[3].innerHTML ='Jueves<span class="iconSpan"><i class="fas fa-car"></i>Puedes salir en tu carro</span>';
                    }else{
                        element.childNodes[3].innerHTML = 'Jueves<span class="iconSpan"><i class="fas fa-walking"></i>Puedes salir sin tu carro</span>';
                    }
                    
                }else{
                    element.classList.add("bg-secondary");
                    element.childNodes[3].innerHTML = 'Jueves<span class="iconSpan"><i class="fas fa-times-circle"></i>Debes quedarte en casa</span>';
                }
            }
            if(element.id==="viernes"){
                if (viernes.salir==true){
                    element.classList.add("bg-primary");
                    if(viernes.carro==true){
                        element.childNodes[3].innerHTML ='Viernes<span class="iconSpan"><i class="fas fa-car"></i>Puedes salir en tu carro</span>';
                    }else{
                        element.childNodes[3].innerHTML = 'Viernes<span class="iconSpan"><i class="fas fa-walking"></i>Puedes salir sin tu carro</span>';
                    }
                    
                }else{
                    element.classList.add("bg-secondary");
                    element.childNodes[3].innerHTML = 'Viernes<span class="iconSpan"><i class="fas fa-times-circle"></i>Debes quedarte en casa</span>';
                }
            }
            if(element.id==="sabado"){
                if (sabado.salir==true){
                    element.classList.add("bg-primary");
                    if(sabado.carro==true){
                        element.childNodes[3].innerHTML ='Sabado<span class="iconSpan"><i class="fas fa-car"></i>Puedes salir en tu carro</span>';
                    }else{
                        element.childNodes[3].innerHTML = 'Sabado<span class="iconSpan"><i class="fas fa-walking"></i>Puedes salir sin tu carro</span>';
                    }
                    
                }else{
                    element.classList.add("bg-secondary");
                    element.childNodes[3].innerHTML = 'Sabado<span class="iconSpan"><i class="fas fa-times-circle"></i>Debes quedarte en casa</span>';
                }
            }
            if(element.id==="domingo"){
                if (domingo.salir==true){
                    element.classList.add("bg-primary");
                    if(domingo.carro==true){
                        element.childNodes[3].innerHTML ='Domingo<span class="iconSpan"><i class="fas fa-car"></i>Puedes salir en tu carro</span>';
                    }else{
                        element.childNodes[3].innerHTML = 'Domingo<span class="iconSpan"><i class="fas fa-walking"></i>Puedes salir sin tu carro</span>';
                    }
                    
                }else{
                    element.classList.add("bg-secondary");
                    element.childNodes[3].innerHTML = 'Domingo<span class="iconSpan"><i class="fas fa-times-circle"></i>Debes quedarte en casa</span>';
                }
            }
            
              
        });
        


    }

});

