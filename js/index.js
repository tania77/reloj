function añadir0(numero) {
  if (numero < 10) {
    var tmp = new String (numero);
    var tmp2 = '0' + tmp;
    numero = new Number(tmp2);
  }
  else {
    var tmp2 = new String (numero);
  }
  return tmp2;
}

var actualiza = function (){
  var currentDate = new Date();

  var hora = document.getElementById('horas');
  var minutos = document.getElementById('minutos');
  var segundos = document.getElementById('segundos');

  hora.innerHTML = añadir0(currentDate.getHours());
  minutos.innerHTML = añadir0(currentDate.getMinutes());
  segundos.innerHTML = añadir0(currentDate.getSeconds());
};

var intervalo = setInterval(actualiza, 1000);
