/*5. NETFLIX
Una agencia vende planes Netflix (A: para 1 TV, B: para 2 TVs, C: para 5 TVs), así: A=
suscripción $3, B= suscripción $5, C= suscripción $10; además el suscriptor debe pagar un 10%
adicional del valor de la suscripción por servicio de conexión (menos el plan C, que ya lo incluye).
En este sentido, se desea conocer: a) precio a pagar por cada suscriptor, b) porcentaje de
suscriptores que no pagaron servicio de conexión, c) cuál es el plan favorito.
La agencia manifiesta que el formato para la salida de los requerimientos solicitados es:
El suscriptor con cedula 15457858 paga 3.3$
El suscriptor con cedula 15457859 paga 5.5$
El suscriptor con cedula 15457667 paga 10$

Porcentaje de suscriptores que no pagaron servicio de conexión: 33.33%
Cuál es el plan favorito: Iguales de favorito: Plan A, Plan B y Plan C.
La salida corresponde a los siguientes datos del suscriptor (cedula, tipo plan):
(15457858, A) (15457859, B) (15457667, C) */
import Cl_Agencia from "./Cl_Agencia.js";
import Cl_Suscriptor from "./Cl_Suscriptor.js";

const agencia = new Cl_Agencia();

const clientes = [
    new Cl_Suscriptor("15457858", "A"),
    new Cl_Suscriptor("15457859", "B"),
    new Cl_Suscriptor("15457667", "C")
];

let interfaz = document.getElementById("salida");
interfaz.innerHTML = "<h2>Soto System - Gestión Netflix</h2><hr>";

clientes.forEach(c => {
    agencia.procesarSuscriptor(c);
    interfaz.innerHTML += `Suscriptor ${c.cedula} paga: <strong>$${c.montoPagar().toFixed(2)}</strong><br>`;
});

interfaz.innerHTML += `
    <hr>
    <p>Porcentaje sin cargo de conexión: <strong>${agencia.porcSucNoConex().toFixed(2)}%</strong></p>
    <p>Plan más solicitado: <strong>${agencia.planFavorito()}</strong></p>
`;

