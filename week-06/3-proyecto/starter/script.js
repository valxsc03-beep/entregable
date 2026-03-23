// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: [tu dominio asignado]
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza todos los elementos genéricos
//    con datos reales de TU dominio asignado.
// 2. Completa cada sección marcada con TODO.
// 3. Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const items = [
  { name: "Casa en Medellín", category: "house", value: 450000000 },
  { name: "Apartamento en Bogotá", category: "apartment", value: 320000000 },
  { name: "Local Comercial", category: "commercial", value: 600000000 },
  { name: "Lote en Cali", category: "land", value: 150000000 },
  { name: "Oficina en Bogotá", category: "commercial", value: 280000000 },
  { name: "Casa en Cartagena", category: "house", value: 700000000 }
];

const categories = ["house", "apartment", "commercial", "land"];

const valueLabel = "precio";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================

console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of items) {
  lineNumber++;

  const formatted = item.value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP"
  });

  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${formatted}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================

console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================

console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================

console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }

    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${maxItem?.value.toLocaleString("es-CO", { style: "currency", currency: "COP" })})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${minItem?.value.toLocaleString("es-CO", { style: "currency", currency: "COP" })})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================

console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const comparison = item.value >= averageValue
    ? "sobre el promedio"
    : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");