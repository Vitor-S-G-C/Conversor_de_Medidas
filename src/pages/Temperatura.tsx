import { useState } from "react";
import { Row } from "react-bootstrap";
import { convertTemperature, type TemperatureUnit } from "../components/Temp";

export default function ConvertTemperature() {

  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState<TemperatureUnit>("C");
  const [toUnit, setToUnit] = useState<TemperatureUnit>("F");

  const result = convertTemperature(value, fromUnit, toUnit);

  return ( 
    <Row md={2} xs={1} lg={3} className="g-3">
    <div className="p-4 max-w-md mx-auto rounded shadow" style={{ border: "1px solid #ffffff" }}>
      <h2 className="text-xl font-bold mb-4">Temperatura</h2>

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
