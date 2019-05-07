var numero1;
//var numero2;
var resultado = 1;

$("#btnVer").click(multiploEntremedio);
    function multiploEntremedio(){
        numero1 = Number($("#num1").val());
        //numero2 = Number($("#num2").val());
        //resultado = numero1;
        //if(numero1 < numero2){
        for(var i= 1; i <= numero1; i++){
            resultado*= i;
            $("#pVer").append(resultado + "<br>");
            }
        //}else $("#pVer").html("El primer numero debe ser menor.")
    }