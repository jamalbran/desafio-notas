//Ingresar nombre y carrera

var nombre = prompt("Ingrese su nombre", "Juan Perez");
var carrera = prompt("Ingrese su carrera", "FullStack");

//Ingresar ramo 1 con sus respectivas notas

var ramo1 = prompt("Ingrese el nombre de su ramo", "HTML");
var nota1R1 = prompt("Ingrese la primera nota de " + ramo1,"4");
var nota2R1 = prompt("Ingrese la segunda nota de " + ramo1,"4");
var nota3R1 = prompt("Ingrese la tercera nota de " + ramo1,"4");

//Convertir las variables de notas del ramo 1 a float para poder realizar operaciones numericas

nota1R1 = parseFloat(nota1R1);
nota2R1 = parseFloat(nota2R1);
nota3R1 = parseFloat(nota3R1);

//Calcular el promedio del ramo 1

var promedioR1 = (nota1R1 + nota2R1 + nota3R1) / 3;
promedioR1 = promedioR1.toFixed(2);

//Ingresar ramo 2 con sus respectivas notas

var ramo2 = prompt("Ingrese el nombre de su ramo", "CSS");
var nota1R2 = prompt("Ingrese la primera nota de " + ramo2,"4");
var nota2R2 = prompt("Ingrese la segunda nota de " + ramo2,"4");
var nota3R2 = prompt("Ingrese la tercera nota de " + ramo2,"4");

//Convertir las variables de notas del ramo 2 a float para poder realizar operaciones numericas

nota1R2 = parseFloat(nota1R2);
nota2R2 = parseFloat(nota2R2);
nota3R2 = parseFloat(nota3R2);

//Calcular el promedio del ramo 2

var promedioR2 = (nota1R2 + nota2R2 + nota3R2) / 3;
promedioR2 = promedioR2.toFixed(2);

//Ingresar ramo 3 con sus respectivas notas

var ramo3 = prompt("Ingrese el nombre de su ramo", "JavaScript");
var nota1R3 = prompt("Ingrese la primera nota de " + ramo3,"4");
var nota2R3 = prompt("Ingrese la segunda nota de " + ramo3,"4");

//Convertir las variables de notas del ramo 3 a float para poder realizar operaciones numericas

var nota1R3 = parseFloat(nota1R3);
var nota2R3 = parseFloat(nota2R3);

//Ingresar nota de aprobación

var nota_aprobacion = prompt("Ingerese nota de aprobacion", "4");

//Convertir la nota de aprobacion a float para poder realizar operaciones numericas

var nota_aprobacion = parseFloat(nota_aprobacion);

//Calculo de nota necesaria para aprobar el ramo 3

var nota_para_aprobar = nota_aprobacion * 3 - nota1R3 - nota2R3;
nota_para_aprobar = nota_para_aprobar.toFixed(2);

//Ingresar en el html el titulo y logo

document.write("<div class='row m-1 px-3 justify-content-between'>")
document.write("<h1>Notas Finales</h1>")
document.write("<img src='assets/img/logo.png' alt='logo desafio' style='height: 50px'>")
document.write("</div>")

//Ingresar en el html el nombre

document.write("<div class='row justify-content-start m-1 px-1'>")
document.write("<div class='col-3 font-weight-bold'>Nombre:</div>")
document.write("<div class='col-3'>"+nombre+"</div>")
document.write("</div>")

//Ingresar en el html la carrera

document.write("<div class='row justify-content-start m-1 px-1'>")
document.write("<div class='col-3 font-weight-bold'>Carrera:</div>")
document.write("<div class='col-3'>"+carrera+"</div>")
document.write("</div>")

//Ingresar en el html la tabla con los ramos, notas y promedio respectivos

document.write('<div class="m-1 px-3">')
document.write('<table class="table font-weight-bold">')
document.write('<thead class="thead-dark">')
document.write('<tr>')
document.write('<th scope="col">Ramo</th>')
document.write('<th scope="col">Nota 1</th>')
document.write('<th scope="col">Nota 2</th>')
document.write('<th scope="col">Nota 3</th>')
document.write('<th scope="col">Promedio</th>')
document.write('</tr>')
document.write('</thead>')
document.write('<tbody>')
document.write('<tr>')
document.write('<th scope="row">'+ramo1+'</th>')
document.write('<td>'+nota1R1+'</td>')
document.write('<td>'+nota2R1+'</td>')
document.write('<td>'+nota3R1+'</td>')
document.write('<td>'+promedioR1+'</td>')
document.write('</tr>')
document.write('<tr>')
document.write('<th scope="row">'+ramo2+'</th>')
document.write('<td>'+nota1R2+'</td>')
document.write('<td>'+nota2R2+'</td>')
document.write('<td>'+nota3R2+'</td>')
document.write('<td>'+promedioR2+'</td>')
document.write('</tr>')
document.write('<tr>')
document.write('<th scope="row">'+ramo3+'</th>')
document.write('<td>'+nota1R3+'</td>')
document.write('<td>'+nota2R3+'</td>')
document.write('<td>-</td>')
document.write('<td>-</td>')
document.write('</tr>')
document.write('</tbody>')
document.write('</table>')
document.write('</div>');

//Ingresar en el html que nota es necesaria para aprobar el ramo segun la nota necesaria para aprobacion

document.write("<div class='mx-1 px-3'>Para aprobar el ramo " + ramo3 + " con nota " + nota_aprobacion + " , necesitas obtener un " + nota_para_aprobar + " en la nota 3.</div>");