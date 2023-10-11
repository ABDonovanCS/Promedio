var sumCalificacion, errormateria1,suma=0;
const nombre = prompt("Ingresa tu nombre, por favor:");
var numMaterias = parseInt(prompt("¿Cuantas materias deseas promediar?"));
for(let i=1; i<=numMaterias; i++){
do{
var materia1 = parseInt(prompt("ingresa la calificacion: " ));
if(materia1>10 ||  materia1<0){
    console.log("error, debes repetir");
    errormateria1=1;
}
    else{
        errormateria1=0;
    }
}while(errormateria1==1);
suma += materia1;
var promedio=suma/numMaterias;
}
console.log("Hola, " + nombre + " Gracias por usar el programa de Pablo criticas tu promedio es: " +promedio);
