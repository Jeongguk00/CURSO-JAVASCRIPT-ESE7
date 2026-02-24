// calculadiora que simula el presupuesto mensual
// * permite registrar ingresos y gastos personales
// * calcula totales y el balance final 
// * Determina SUPERAVIT que es el saldo de la cuenta individual de vivienda del trabajador,
// el sistema indica si la persona tiene dinero sobrante (superávit),
// si está en punto de equilibrio,
// o si tiene pérdidas porque gasta más de lo que gana (déficit).

// FUNCIONALIDADES DEL PROGRAMA
// * Crear dos listas: una para ingresos y otra para gastos.
// * Cada elemento debe tener un concepto y un monto.
// * Validar que el monto sea un número válido y mayor o igual a cero.
// * Calcular el total de ingresos y el total de gastos.
// * Obtener el balance final.
// * Mostrar un reporte organizado en la consola.

"use strict"; 
// Activo el modo estricto para que JavaScript sea más exigente.
// Esto ayuda a evitar errores comunes, como usar variables sin declararlas.
// También hace que el código sea más seguro y fácil de controlar.
// Si hay algún problema, el programa lo detecta más rápido.
/**
 * EN ESTA PARTE CONVIERTO EL VALOR INGRESADO A NÚMERO
 * Y VERIFICO QUE REALMENTE SEA UN NÚMERO VÁLIDO
 * Y QUE NO SEA NEGATIVO.
 * SI EL DATO NO CUMPLE ESAS CONDICIONES,
 * EL PROGRAMA MUESTRA UN ERROR PARA EVITAR CÁLCULOS INCORRECTOS.
 */

function validarMonto(monto) {
    const numero = Number(monto); // Convierte el valor a número
    if (!Number.isFinite(numero) || numero < 0) { // SI EL NUMERO NO ES FINITO O ES MENOR QUE CERO, LANZA UN ERROR
        throw new Error("Monto inválido: debe ser un número finito mayor o igual a cero");
    }
    return numero;
} 



// MODELAR DATOS DE INGRESOS Y GASTOS
const ingresos = [
    { concepto: "Salario", monto: 5000000 },
    { concepto: "Freelance", monto: 1500000 },
];
/**
 * en esta parte creo una lista donde registro los ingresos.
 * cada ingreso tiene un concepto y un monto.
 */
const gastos = [
    { concepto: "Alquiler", monto: 1200000 },
    { concepto: "Comida", monto: 800000 },
    { concepto: "Transporte", monto: 300000 },
];


// CALCULAR TOTALES

function calcularTotal(items) {
    let total = 0;
    for (const item of items) { // RECORRE CADA ITEM EN LA LISTA DE INGRESOS O GASTOS
        total += validarMonto(item.monto); // VALIDA CADA MONTO ANTES DE SUMARLO AL TOTAL
    }
    return total;
}

const totalIngresos = calcularTotal(ingresos);
const totalGastos = calcularTotal(gastos);
const balance = totalIngresos - totalGastos;

// CLASIFICAR ESTADO FINANCIERO

function getEstadoFinanciero(balance) {
    if (balance > 0) {
        return "SUPERAVIT";
    } else if (balance === 0) {
        return "EQUILIBRADO";
    } else {
        return "DEFICIT";
    }
}

function recomendacion(estado) {
    switch (estado) {
        case "SUPERAVIT":
            return "¡Buen trabajo! Considera ahorrar o invertir el excedente.";
        case "EQUILIBRADO":
            return "Estás en equilibrio, pero revisa tus gastos para mejorar tu situación.";
        case "DEFICIT":
            return "Revisa tus gastos y busca formas de reducirlos o aumentar tus ingresos.";
        default:
            return "";
    }
}

// MOSTRAR REPORTE EN CONSOLA

console.table(ingresos);
console.table(gastos);

console.group ("Resumen Financiero");
console.log(`Total Ingresos: ${totalIngresos}`);
console.log(`Total Gastos: ${totalGastos}`);
console.log(`Balance: ${balance}`);
console.log(`Estado Financiero: ${getEstadoFinanciero(balance)}`);
console.log(`Recomendación: ${recomendacion(getEstadoFinanciero(balance))}`);
console.groupEnd();