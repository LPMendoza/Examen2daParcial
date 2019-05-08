let punto = new Punto();

document.getElementById('btnAgregar').addEventListener('click', () => {

   let x = document.getElementById('txtX').value;
   let y = document.getElementById('txtY').value;

   let distancia = punto.calcularDistancia(x, y);

   document.getElementById('contDistancia').innerHTML = `Distancia = ${distancia}`;

});