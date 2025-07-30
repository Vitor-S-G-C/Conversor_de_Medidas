  // Definindo os tipos de unidades de temperatura
  // "C" para Celsius, "F" para Fahrenheit e "K" para Kelvin
 export type TemperatureUnit = "C" | "F" | "K";

export function convertTemperature(value: number, from: TemperatureUnit, to: TemperatureUnit): number {


  if (from === to) return value;

    if (from === to) return value; // Se as unidades são as mesmas, retorna o valor original
  let celsius: number;

  switch (from) {
    case "C":
      celsius = value;
      break;
    case "F":
      celsius = (value - 32) * (5 / 9);
      break;
    case "K":
      celsius = value - 273.15;
      break;
    default:
      return value;
  }

  switch (to) {
    case "C":
      return celsius;
    case "F":
      return celsius * (9 / 5) + 32;
    case "K":
      return celsius + 273.15;
    default:
      return value;
  }
  
}