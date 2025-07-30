  // Definindo os tipos de unidades de distância
  // "Km" para Quilômetro, "m" para Metro, "cm" para Centímetro,
  // "mm" para Milímetro, "mi" para Milha, "yd" para Jarda,
  // "ft" para Pé e "in" para Polegada
 export type DistanceUnit = "Km" | "m" | "cm" | "mm" | "mi" | "yd" | "ft" | "in";

export default function DistanceConverter(value: number, from: DistanceUnit, to: DistanceUnit): number {
  if (from === to) return value; // Se as unidades são as mesmas, retorna o valor original

  let meterValue: number; // Renomeado para 'meterValue' para clareza

  switch (from) {
    case "m":
      meterValue = value;
      break;
    case "Km":
      meterValue = value * 1000; // Corrigido: 1 Km = 1000 metros
      break;
    case "cm":
      meterValue = value / 100;
      break;
    case "mm":
      meterValue = value / 1000;
      break;
    case "mi":
      meterValue = value * 1609.34;
      break;
    case "yd":
      meterValue = value * 0.9144;
      break;
    case "ft":
      meterValue = value * 0.3048;
      break;
    case "in":
      meterValue = value * 0.0254;
      break;
    default:
      return value; // Retorna o valor original se a unidade 'from' não for reconhecida
  }

  switch (to) {
    case "m":
      return meterValue;
    case "Km":
      return meterValue / 1000; // Corrigido: 1000 metros = 1 Km
    case "cm":
      return meterValue * 100;
    case "mm":
      return meterValue * 1000;
    case "mi":
      return meterValue / 1609.34;
    case "yd":
      return meterValue / 0.9144;
    case "ft":
      return meterValue / 0.3048;
    case "in":
      return meterValue / 0.0254;
    default:
      return meterValue; // Retorna o valor em metros se a unidade 'to' não for reconhecida
  }
}