function validaFechaMenor(campo){
  var bRet = false;
  var dHoy = new Date();
  var dCapt = null;
  if (campo.value == "")
    alert("Faltan datos");
  else{
    dCapt = validaFecha(campo.value);
    if (dCapt != null && dCapt < dHoy)
      bRet = true;
    else
      alert("La fecha debe ser menor a la fecha actual");
  }
  return bRet;
}

function validaFecha(valor){
  document.getElementById("ingresaFecha").value="";
  var arrayFecha=valor.split("");
  var ingresaFecha;/*falta*/
  var fechafinal=arrayFecha[8]+arrayFecha[9]+"/";
  fechafinal += arrayFecha [5]+arrayFecha[6]+"/";
  fechafinal += arrayFecha[0] + arrayFecha[1] + arrayFecha[2] + arrayFecha[3];
  valor = fechafinal;
  var dConvertida = null;
  /*var sAnio = "";
  var sMes = "";
  var sDia = "";*/
  var nAnio=0, nMes=0, nDia = 0;
            if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
                nDia = parseInt(valor.substring(0,2), 10);
                nMes = parseInt(valor.substring(3,5), 10);
                nAnio = parseInt(valor.substring(6,10), 10);
                if (nDia <1 || nDia>31)
                    alert("El día no es válido")
                else{
                    if (nMes <1 || nMes>12)
                        alert("El mes no es válido");
                    else{
                        if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
                             nMes==8 || nMes==10 || nMes==12) && nDia > 31)
                             alert("El mes tiene máximo 31 días");
                        else if ((nMes==4 || nMes==6 || nMes==9 ||
                                    nMes==11) && nDia > 30)
                             alert("El mes tiene máximo 30 días");
                        else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
                             alert("Febrero tiene 28 días o 29 en bisiesto");
                        else{
                            dConvertida = new Date();
                            dConvertida.setFullYear(nAnio, nMes-1, nDia);
                        }//fin validaci�n día-mes
                    }//mes válido
                }//día válido
          creasigno(nDia,nMes);
            }//formato válido

            else{
                alert("No tiene formato de fecha");
            }
            return dConvertida;
}

function creasigno(nDia,nMes){
  var newDiv = document.createElement("div");
  if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: ARIES, Número de la Suerte: 6";
    document.getElementById("color").style.background="#a8d8ea";
  }
  else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: TAURO, Número de la Suerte: 3";
    document.getElementById("color").style.background="#aa96da";
  }
  else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
    document.getElementById("signo").innerHTML ="Signo Zodiacal: GEMINIS, Número de la Suerte: 18";
    document.getElementById("fechacolor").style.background="#fcbad3";
  }
  else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: CANCER, Número de la Suerte: 10";
    document.getElementById("color").style.background="#cadefc";
  }
  else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: LEO, Número de la Suerte: 47";
    document.getElementById("color").style.background="#ffaaa5";
  }
  else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: VIRGO, Número de la Suerte: 33";
    document.getElementById("color").style.background="#bad7df";
  }     
  else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: LIBRA, Número de la Suerte: 12";
    document.getElementById("color").style.background="#cca8e9";
  }  
  else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: ESCORPIO, Número de la Suerte: 65";
    document.getElementById("color").style.background="#d4a5a5";
  }            
  else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: SAGITARIO, Número de la Suerte: 25";
    document.getElementById("color").style.background="#ffd3b6";
  }            
  else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: CAPRICORNIO, Número de la Suerte: 19";
    document.getElementById("color").style.background="#a8e6cf";
  }        
  else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: ACUARIO, Número de la Suerte: 11";
    document.getElementById("color").style.background="#d291bc";
  }
  else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
    document.getElementById("fechasigno").innerHTML ="Signo Zodiacal: PICIS, Número de la Suerte: 15";
    document.getElementById("color").style.background="#fab2ac";
  }
  //var newContent = document.createTextNode("SIGNO");
  newDiv.appendChild(newContent); //añade texto al div creado.
  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, currentDiv);
  newDiv.style="border: 3px solid #999999; background-color:#54b51e; width: 200px ;height:300px ";
}