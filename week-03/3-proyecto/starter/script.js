// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio

const BASE_PRICE = 300000000; // precio base de la propiedad
const BID_INCREMENT = 20000000; // incremento por oferta
const TOTAL_PROPERTIES = 5; // número de propiedades en subasta

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio

const firstBid = BASE_PRICE + BID_INCREMENT;
console.log("Primera oferta:", firstBid);

const secondBid = firstBid + BID_INCREMENT;
console.log("Segunda oferta:", secondBid);

const totalValue = secondBid * TOTAL_PROPERTIES;
console.log("Valor total de propiedades:", totalValue);

const averagePrice = totalValue / TOTAL_PROPERTIES;
console.log("Precio promedio:", averagePrice);

const difference = secondBid - BASE_PRICE;
console.log("Diferencia respecto al precio base:", difference);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados

let accumulatedBids = 0;

accumulatedBids += BASE_PRICE;
console.log("Después del precio base:", accumulatedBids);

accumulatedBids += BID_INCREMENT;
console.log("Después de una oferta:", accumulatedBids);

accumulatedBids *= 1.05; // aumento del 5%
console.log("Con incremento del 5%:", accumulatedBids);

accumulatedBids -= 10000000;
console.log("Después de ajuste:", accumulatedBids);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden

const isBaseEqual = BASE_PRICE === 300000000;
console.log("¿El precio base es 300M?", isBaseEqual);

const isHighBid = secondBid > 350000000;
console.log("¿La oferta es alta?", isHighBid);

const isLowBid = secondBid < BASE_PRICE;
console.log("¿La oferta es menor al precio base?", isLowBid);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !

const isAvailable = true;
const userHasMoney = true;

const canParticipate = isAvailable && userHasMoney;
console.log("¿Puede participar en la subasta?", canParticipate);

const isVipUser = false;

const specialAccess = isVipUser || userHasMoney;
console.log("¿Tiene acceso especial?", specialAccess);

const notAvailable = !isAvailable;
console.log("¿No está disponible?", notAvailable);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes

console.log("Precio base:", BASE_PRICE);
console.log("Última oferta:", secondBid);
console.log("Total propiedades:", TOTAL_PROPERTIES);
console.log("Valor total:", totalValue);

console.log("");