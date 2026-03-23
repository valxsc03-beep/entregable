// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Apartamento en Bogotá";
const elementStatus = "active";
const elementValue = 320000000;
const elementType = "apartment";
const elementInfo = {
  location: "Bogotá",
  area: 80,
  detail: "Apartamento con excelente ubicación"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification = "Sin clasificar";

if (elementValue >= 500000000) {
  classification = "Alta gama";
} else if (elementValue >= 200000000) {
  classification = "Media";
} else {
  classification = "Económica";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel = "Sin tipo";

switch (elementType) {
  case "house":
    typeLabel = "Casa";
    break;
  case "apartment":
    typeLabel = "Apartamento";
    break;
  case "commercial":
    typeLabel = "Propiedad Comercial";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// 💰 FORMATO DINERO
const formattedValue = elementValue.toLocaleString("es-CO", {
  style: "currency",
  currency: "COP"
});

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.location ?? "Ubicación no especificada";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Valor: ${formattedValue}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));