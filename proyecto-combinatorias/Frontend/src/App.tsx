"use client";

import { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Inpiut';
import { Label } from './components/Label';
import { Card } from './components/Card';

export default function App() {
  const [n, setN] = useState<string>('');
  const [r, setR] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [combinations, setCombinations] = useState<string[]>([]);

  const factorial = (num: number): number => (num <= 1 ? 1 : num * factorial(num - 1));

  const calculateCombinations = () => {
    const nNum = parseInt(n);
    const rNum = parseInt(r);

    if (isNaN(nNum) || isNaN(rNum) || nNum < rNum || nNum < 0 || rNum < 0) {
      setResult(null);
      setCombinations([]);
      return;
    }

    const combinationResult = factorial(nNum) / (factorial(rNum) * factorial(nNum - rNum));
    setResult(combinationResult);

    const generateCombinations = (arr: number[], r: number): string[] => {
      if (r === 1) return arr.map(String);
      const result: string[] = [];
      for (let i = 0; i <= arr.length - r; i++) {
        const rest = generateCombinations(arr.slice(i + 1), r - 1);
        rest.forEach((combo) => result.push(arr[i] + ',' + combo));
      }
      return result;
    };

    const elements = [...Array(nNum).keys()].map((i) => i + 1);
    setCombinations(generateCombinations(elements, rNum));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-600 to-purple-900 p-4">
      <Card>
        <header className="text-center p-4">
          <h2 className="text-3xl font-bold text-white mb-2">Calculadora de Combinatoria</h2>
          <p className="text-purple-200">Ingresa los valores para calcular las combinaciones</p>
        </header>
        <section className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="n">Número total de elementos (n)</Label>
            <Input
              id="n"
              type="number"
              placeholder="Ingresa n"
              value={n}
              onChange={(e) => setN(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="r">Elementos a combinar (r)</Label>
            <Input
              id="r"
              type="number"
              placeholder="Ingresa r"
              value={r}
              onChange={(e) => setR(e.target.value)}
            />
          </div>
          <Button onClick={calculateCombinations} className="w-full bg-purple-600 hover:bg-purple-700">
            Calcular
          </Button>
        </section>
        <footer className="text-center p-4">
          {result !== null && (
            <div className="space-y-2">
              <p className="text-xl font-semibold text-white">Resultado: {result}</p>
              <p className="text-purple-300 font-medium">Algunas combinaciones:</p>
              <ul className="list-disc list-inside text-purple-200 space-y-1 max-h-32 overflow-y-auto">
                {combinations.slice(0, 10).map((combo, index) => (
                  <li key={index}>{`{${combo}}`}</li>
                ))}
              </ul>
              {combinations.length > 10 && (
                <p className="text-sm text-gray-400 mt-2">
                  (Mostrando las primeras 10 combinaciones de un total de {combinations.length})
                </p>
              )}
            </div>
          )}
        </footer>
      </Card>
    </div>
  );
}
