"use strict";

const temperatura = ["c", "f", "k"];
const longitud = ["m", "km", "cm"];

// Función convertir
function convertir(value, from, to) {

    let valor = Number(value);

    if (!Number.isFinite(valor)) {
        return "Error: valor inválido";
    }

    if (![...temperatura, ...longitud].includes(from) ||
        ![...temperatura, ...longitud].includes(to)) {
        return "Error: unidad no soportada";
    }

    const esTemp = temperatura.includes(from) && temperatura.includes(to);
    const esLong = longitud.includes(from) && longitud.includes(to);

    if (!esTemp && !esLong) {
        return "Error: categorías diferentes";
    }

    let resultado;

    //  TEMPERATURA
    if (esTemp) {
        if (from === "c" && to === "f") {
            resultado = (valor * 9/5) + 32;
        } else if (from === "f" && to === "c") {
            resultado = (valor - 32) * 5/9;
        } else if (from === "c" && to === "k") {
            resultado = valor + 273.15;
        } else if (from === "k" && to === "c") {
            resultado = valor - 273.15;
        } else {
            resultado = valor;
        }
    }

    // LONGITUD
    if (esLong) {
        let metros;

        if (from === "m") metros = valor;
        if (from === "km") metros = valor * 1000;
        if (from === "cm") metros = valor / 100;

        if (to === "m") resultado = metros;
        if (to === "km") resultado = metros / 1000;
        if (to === "cm") resultado = metros * 100;
    }

    return resultado.toFixed(2) + " " + to;
}

// Lista de pruebas
const pruebas = [
    { value: 100, from: "c", to: "f" },
    { value: 32, from: "f", to: "c" },
    { value: 0, from: "c", to: "f" },
    { value: -40, from: "c", to: "f" },
    { value: 1500, from: "m", to: "km" },
    { value: 1.2, from: "km", to: "m" },
    { value: "abc", from: "c", to: "f" },
    { value: 10, from: "kg", to: "g" },
    { value: 10, from: "c", to: "m" },
    { value: "", from: "m", to: "km" }
];

// Ejecuta todas las pruebas
const resultados = pruebas.map(prueba => {
    return {
        Entrada: `${prueba.value} ${prueba.from} → ${prueba.to}`,
        Resultado: convertir(prueba.value, prueba.from, prueba.to)
    };
});

// Aqui muestrar la tabla
console.table(resultados);