function c(value){
  console.log(value);
};
var miMascota = {
  tipo: "perro",
  nombre: "Dino",
  color: "negro",
  ladrar: function(){
    return "Guau, guau";
  },
  llamar: function(){
    return this.nombre + ", ven aquí";
  }
};
c(miMascota);