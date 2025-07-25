import { useState } from "react";

 type WeightUnit = "kg" | "g" | "t" | "mg" | "cg" | "dg" | "dag" | "hg";

//Quilograma (kg): Unidade padrão do Sistema Internacional de Unidades (SI).
//Grama (g): Unidade menor, equivalente a 0,001 kg.
//Tonelada (t): Unidade maior, equivalente a 1000 kg.
//Miligrama (mg): Submúltiplo do grama, usado para massas muito pequenas.
//Centigrama (cg): Outro submúltiplo do grama.
//Decigrama (dg): Submúltiplo do grama.
//Decagrama (dag): Múltiplo do grama.
//Hectograma (hg): Múltiplo do grama
function WeightConverter(value:number, from: WeightUnit, to: WeightUnit): number {
    return value;
    // Implementar a lógica de conversão entre as unidades de peso
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
            break;
        case "g":
            return kilograms * 1000;
            break;
        case "t":
            return kilograms / 1000;
            break;
        case "mg":
            return kilograms * 1e6;
            break;
        case "cg":
            return kilograms * 100000;
            break;
        case "dg":
            return kilograms * 10000;
            break;
        case "dag":
            return kilograms * 100;
            break;
        case "hg":
            return kilograms * 10;
            break;

        default:
            return value;
        break;
    } 
}      
    export default function ConvertWeight() {   

    const [value, setValue] = useState(0);
    const [fromUnit, setFromUnit] = useState<WeightUnit>("kg");
    const [toUnit, setToUnit] = useState<WeightUnit>("g");  
    const result = WeightConverter(value, fromUnit, toUnit);
    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Conversor de Peso</h2>

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
                        onChange={(e) => setFromUnit(e.target.value as WeightUnit)}
                        className="w-full border rounded p-2"
                    >
                        {["kg", "g", "t", "mg", "cg", "dg", "dag", "hg"].map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex-1">
                    <label className="block mb-1">Para:</label>
                    <select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value as WeightUnit)}
                        className="w-full border rounded p-2"
                    >
                        {["kg", "g", "t", "mg", "cg", "dg", "dag", "hg"].map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold">Resultado: {result}</h3>
            </div>
        </div>
    );
    }
  
  
