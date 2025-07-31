//Unidades: km, m, cm, mm, mi (milhas), yd (jardas), ft (pés), in (polegadas)
//*Conversão: baseada em metros como unidade base
import {Row } from "react-bootstrap";
import { useState } from "react";
import DistanceConverter, { type DistanceUnit } from "../components/Distance"; // Importando a função de conversão de distância

export default function ConvertDistance() { // Renomeado para 'ConvertDistance'

  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState<DistanceUnit>("Km"); // Tipo renomeado
  const [toUnit, setToUnit] = useState<DistanceUnit>("cm");     // Tipo renomeado

  const result = DistanceConverter(value, fromUnit, toUnit); // Chamada da função renomeada

  return (
    <Row md={2} xs={1} lg={3} className="g-3">
    <div className="p-4 max-w-md mx-auto rounded shadow" style={{ border: "1px solid #ffffff" }}>
      <h2 className="text-xl font-bold mb-4">Comprimento</h2>

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
            onChange={(e) => setFromUnit(e.target.value as DistanceUnit)} // Tipo renomeado
            className="w-full border rounded p-2"
          >
            <option value="Km">Quilômetro (Km)</option>
            <option value="m">Metro (m)</option>
            <option value="cm">Centímetro (cm)</option>
            <option value="mm">Milímetro (mm)</option>
            <option value="mi">Milha (mi)</option>
            <option value="yd">Jarda (yd)</option>
            <option value="ft">Pé (ft)</option>
            <option value="in">Polegada (in)</option>
          </select>
        <br /> <label className="block mb-1 mt-2"><p>Para:</p></label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as DistanceUnit)} // Tipo renomeado
            className="w-full border rounded p-2"
          >
            <option value="Km">Quilômetro (Km)</option>
            <option value="m">Metro (m)</option>
            <option value="cm">Centímetro (cm)</option>
            <option value="mm">Milímetro (mm)</option>
            <option value="mi">Milha (mi)</option>
            <option value="yd">Jarda (yd)</option>
            <option value="ft">Pé (ft)</option>
            <option value="in">Polegada (in)</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
      <p>  <strong>Resultado:</strong> {result.toFixed(2)}{toUnit}</p>
      </div>
    </div>
    </Row>
  );
}