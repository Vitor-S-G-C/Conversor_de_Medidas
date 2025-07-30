

  // Definindo os tipos de unidades de peso
  // "kg" para Quilograma, "g" para Grama, "t" para Tonelada,
  // "mg" para Miligrama, "cg" para Centigrama, "dg" para Decigrama,
  // "dag" para Decagrama e "hg" para Hectograma
  export type WeightUnit = "kg" | "g" | "t" | "mg" | "cg" | "dg" | "dag" | "hg";

export default function WeightConverter(value: number, from: WeightUnit, to: WeightUnit): number {
  if (from === to) return value;
  let kilograms: number;
  switch (from) {
    case "kg":
      kilograms = value;
      break;
    case "g":
      kilograms = value / 1000;
      break;
    case "t":
      kilograms = value * 1000;
      break;
    case "mg":
      kilograms = value / 1e6;
      break;
    case "cg":
      kilograms = value / 100000;
      break;
    case "dg":
      kilograms = value / 10000;
      break;
    case "dag":
      kilograms = value / 100;
      break;
    case "hg":
      kilograms = value / 10;
      break;
    default:
      return value;
  }

  switch (to) {
    case "kg":
      return kilograms;
    case "g":
      return kilograms * 1000;
    case "t":
      return kilograms / 1000;
    case "mg":
      return kilograms * 1e6;
    case "cg":
      return kilograms * 100000;
    case "dg":
      return kilograms * 10000;
    case "dag":
      return kilograms * 100;
    case "hg":
      return kilograms * 10;
    default:
      return value;
  }
}