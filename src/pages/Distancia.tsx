//Unidades: km, m, cm, mm, mi (milhas), yd (jardas), ft (pés), in (polegadas)
//*Conversão: baseada em metros como unidade base
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useState } from "react";

type DistanceUnit = "Km" | "m" | "cm" | "mm" | "mi" | "yd" | "ft" | "in";

function DistanceConverter(value: number, from: DistanceUnit, to: DistanceUnit): number {
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

export default function ConvertDistance() { // Renomeado para 'ConvertDistance'
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState<DistanceUnit>("Km"); // Tipo renomeado
  const [toUnit, setToUnit] = useState<DistanceUnit>("cm");     // Tipo renomeado

  const result = DistanceConverter(value, fromUnit, toUnit); // Chamada da função renomeada

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Conversor de Comprimento</h2>

      <div className="mb-2">
        <label className="block mb-1">Valor:</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-2 flex gap-4">
        <div className="flex-1">
          <label className="block mb-1">De:</label>
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
          <label className="block mb-1 mt-2">Para:</label>
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
        <strong>Resultado:</strong> {result.toFixed(2)}{toUnit}
      </div>
    </div>
  );
}