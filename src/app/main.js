// ===============================
// CONVERSOR DE UNIDADES
// Temperatura y Longitud
// ===============================

// Lista oficial de unidades por categoría
const categorias = {
    temperatura: ["C", "F", "K"],
    longitud: ["m", "km", "cm"]
};

// Función principal
function convertir(valor, from, to) {

    // 1️⃣ Validar que el valor sea número finito
    if (typeof valor !== "number" || !isFinite(valor)) {
        return "Error: valor inválido";
    }

    // 2️⃣ Verificar que las unidades existan
    const categoriaFrom = obtenerCategoria(from);
    const categoriaTo = obtenerCategoria(to);

    if (!categoriaFrom || !categoriaTo) {
        return "Error: unidad no soportada";
    }

    // 3️⃣ Verificar que pertenezcan a la misma categoría
    if (categoriaFrom !== categoriaTo) {
        return "Error: no se pueden mezclar categorías diferentes";
    }

    let resultado;

    // ===============================
    // CONVERSIONES DE TEMPERATURA
    // ===============================

    if (categoriaFrom === "temperatura") {

        if (from === "C" && to === "F") {
            resultado = (valor * 9/5) + 32;
        }

        else if (from === "F" && to === "C") {
            resultado = (valor - 32) * 5/9;
        }

        else if (from === "C" && to === "K") {
            resultado = valor + 273.15;
        }

        else if (from === "K" && to === "C") {
            resultado = valor - 273.15;
        }

        else if (from === to) {
            resultado = valor;
        }

        else {
            return "Error: conversión no soportada";
        }
    }

    // ===============================
    // CONVERSIONES DE LONGITUD
    // ===============================

    if (categoriaFrom === "longitud") {

        if (from === "m" && to === "km") {
            resultado = valor / 1000;
        }

        else if (from === "km" && to === "m") {
            resultado = valor * 1000;
        }

        else if (from === "cm" && to === "m") {
            resultado = valor / 100;
        }

        else if (from === to) {
            resultado = valor;
        }

        else {
            return "Error: conversión no soportada";
        }
    }

    // 4️⃣ Retornar resultado con 2 decimales
    return resultado.toFixed(2);
}

// Función auxiliar para detectar categoría
function obtenerCategoria(unidad) {
    for (let categoria in categorias) {
        if (categorias[categoria].includes(unidad)) {
            return categoria;
        }
    }
    return null;
}

// ===============================
// PRUEBAS MANUALES (como pide la actividad)
// ===============================

console.log("100 C → F:", convertir(100, "C", "F"));      // 212.00
console.log("32 F → C:", convertir(32, "F", "C"));        // 0.00
console.log("0 C → F:", convertir(0, "C", "F"));          // 32.00
console.log("-40 C → F:", convertir(-40, "C", "F"));      // -40.00 (caso especial)
console.log("1500 m → km:", convertir(1500, "m", "km"));  // 1.50
console.log("1.2 km → m:", convertir(1.2, "km", "m"));    // 1200.00

// Casos de error
console.log("abc C → F:", convertir("abc", "C", "F"));    // Error valor inválido
console.log("10 kg → m:", convertir(10, "kg", "m"));      // Error unidad no soportada
console.log("10 C → m:", convertir(10, "C", "m"));        // Error categorías diferentes