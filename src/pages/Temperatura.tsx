import { useState } from "react";
import { Row } from "react-bootstrap";

type TemperatureUnit = "C" | "F" | "K";

function convertTemperature(value: number, from: TemperatureUnit, to: TemperatureUnit): number {
  if (from === to) return value;

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

export default function ConvertTemperature() {
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>("C");
  const [toUnit, setToUnit] = useState<TemperatureUnit>("F");

  const result = convertTemperature(value, fromUnit, toUnit);

  return ( 
    <Row md={2} xs={1} lg={3} className="g-3">
    <div className="p-4 max-w-md mx-auto bg-light  rounded shadow">
      <h2 className="text-xl font-bold mb-4">Conversor de Temperatura</h2>

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
            onChange={(e) => setFromUnit(e.target.value as TemperatureUnit)}
            className="w-full border rounded p-2"
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1"><p>Para:</p></label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as TemperatureUnit)}
            className="w-full border rounded p-2"
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <p>
          <strong>Resultado:</strong> {result.toFixed(2)}°{toUnit}
     </p>
      </div>
    </div>
    </Row>
  );
}
