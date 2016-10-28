var actualiza = function (){
  var currentDate = new Date();
  var horaActual = currentDate.getHours();
  var minutoActual = currentDate.getMinutes();
  var segundoActual = currentDate.getSeconds();

  var hora = document.getElementById('horas');
  var minutos = document.getElementById('minutos');
  var segundos = document.getElementById('segundos');

  hora.innerHTML = horaActual;
  minutos.innerHTML = minutoActual;
  segundos.innerHTML = segundoActual;
};

var intervalo = setInterval(actualiza, 1000);
