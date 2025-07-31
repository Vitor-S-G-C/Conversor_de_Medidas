import { useState } from "react";
import { Row } from "react-bootstrap";
import WeightConverter, { type WeightUnit }  from "../components/Weight"; // Importando a função de conversão de peso





export default function ConvertWeight() {

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
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState<WeightUnit>("kg");
  const [toUnit, setToUnit] = useState<WeightUnit>("g");

  const result = WeightConverter(value, fromUnit, toUnit);
  return (
    <Row md={2} xs={1} lg={3} className="g-3">
      <div className="p-4 max-w-md mx-auto rounded shadow" style={{ border: "1px solid #ffffff" }}>
        <h2 className="text-xl font-bold mb-3"> Peso</h2>

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
