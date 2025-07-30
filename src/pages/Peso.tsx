import { useState } from "react";
import { Row } from "react-bootstrap";

type WeightUnit = "kg" | "g" | "t" | "mg" | "cg" | "dg" | "dag" | "hg";

const unitNames: Record<WeightUnit, string> = {
  kg: "Quilograma (kg)",
  g: "Grama (g)",
  t: "Tonelada (t)",
  mg: "Miligrama (mg)",
  cg: "Centigrama (cg)",
  dg: "Decigrama (dg)",
  dag: "Decagrama (dag)",
  hg: "Hectograma (hg)",
};

function WeightConverter(value: number, from: WeightUnit, to: WeightUnit): number {
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

export default function ConvertWeight() {
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState<WeightUnit>("kg");
  const [toUnit, setToUnit] = useState<WeightUnit>("g");

  const result = WeightConverter(value, fromUnit, toUnit);
  return (
    <Row md={2} xs={1} lg={3} className="g-3">
      <div className="p-4 max-w-md mx-auto bg-light  rounded shadow">
        <h2 className="text-xl font-bold mb-3">Conversor de Peso</h2>

        <div className="mb-2">
          <label className="block mb-1"><p>Valor:</p></label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-2 flex gap-4">
          <div className="flex-1">
            <label className="block mb-1"><p>De:</p></label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as WeightUnit)}
              className="w-full border rounded p-2"
            >
              {Object.entries(unitNames).map(([abbr, fullName]) => (
                <option key={abbr} value={abbr}>
                  {fullName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block mb-1"><p>Para:</p></label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as WeightUnit)}
              className="w-full border rounded p-2"
            >
              {Object.entries(unitNames).map(([abbr, fullName]) => (
                <option key={abbr} value={abbr}>
                  {fullName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <p>
            <strong>Resultado:</strong> {result.toFixed(2)} {unitNames[toUnit]}
          </p>
        </div>
      </div>
    </Row>
  );
}
