class Punto {

   constructor(x, y) {
      this.x = 0;
      this.y = 0;
      this.distancia = 0;
   }

   calcularDistancia(x, y) {

      if(this.x == 0 && this.y == 0) {
         this.x = x;
         this.y = y;
         return this.distancia;
      }
      else {

         this.distancia += Math.sqrt(((x - this.x) + (y - this.y)));
         this.x = x;
         this.y = y;
         return this.distancia;

      }   

   }


}