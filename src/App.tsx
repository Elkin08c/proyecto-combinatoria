"use client";

import { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Card } from './components/Card';

export default function App() {
  const [n, setN] = useState<string>('');
  const [r, setR] = useState<string>('');
  const [withRepetition, setWithRepetition] = useState<boolean>(false);
  const [result, setResult] = useState<number | null>(null);
  const [variations, setVariations] = useState<string[]>([]);

  // Función factorial
  const factorial = (num: number): number => (num <= 1 ? 1 : num * factorial(num - 1));

  const calculateVariations = () => {
    const nNum = parseInt(n);
    const rNum = parseInt(r);

    if (isNaN(nNum) || isNaN(rNum) || nNum < 1 || rNum < 1) {
      setResult(null);
      setVariations([]);
      return;
    }

    if (withRepetition) {
      // Fórmula VCR: VRn,r = n^r
      const variationResult = Math.pow(nNum, rNum);
      setResult(variationResult);

      // Generar variaciones con repetición
      const generateVariationsWithRepetition = (
        elements: number[],
        r: number,
        current: number[] = []
      ): string[] => {
        if (current.length === r) {
          return [current.join(',')];
        }

        const result: string[] = [];
        for (let i = 0; i < elements.length; i++) {
          const newCurrent = [...current, elements[i]];
          result.push(...generateVariationsWithRepetition(elements, r, newCurrent));
        }
        return result;
      };

      const elements = [...Array(nNum).keys()].map((i) => i + 1);
      setVariations(generateVariationsWithRepetition(elements, rNum));

    } else {
      // Validación adicional para VsR
      if (nNum < rNum) {
        setResult(null);
        setVariations([]);
        return;
      }

      // Fórmula VSR: Vn,r = n!/(n-r)!
      const variationResult = factorial(nNum) / factorial(nNum - rNum);
      setResult(variationResult);

      // Generar variaciones sin repetición
      const generateVariationsWithoutRepetition = (
        elements: number[],
        r: number,
        current: number[] = []
      ): string[] => {
        if (current.length === r) {
          return [current.join(',')];
        }

        const result: string[] = [];
        for (let i = 0; i < elements.length; i++) {
          const remainingElements = [...elements.slice(0, i), ...elements.slice(i + 1)];
          const newCurrent = [...current, elements[i]];
          result.push(...generateVariationsWithoutRepetition(remainingElements, r, newCurrent));
        }
        return result;
      };

      const elements = [...Array(nNum).keys()].map((i) => i + 1);
      setVariations(generateVariationsWithoutRepetition(elements, rNum));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-4">
      <Card>
        <header className="text-center p-4">
          <h2 className="text-3xl font-bold text-white mb-2">Calculadora de Variaciones</h2>
          <p className="text-blue-200">
            Calcula variaciones con y sin repetición
          </p>
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
            <Label htmlFor="r">Elementos a variar (r)</Label>
            <Input
              id="r"
              type="number"
              placeholder="Ingresa r"
              value={r}
              onChange={(e) => setR(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="repetition"
              checked={withRepetition}
              onChange={(e) => setWithRepetition(e.target.checked)}
              className="h-4 w-4 text-blue-600"
            />
            <Label htmlFor="repetition">Con repetición</Label>
          </div>
          <Button onClick={calculateVariations} className="w-full bg-blue-600 hover:bg-blue-700">
            Calcular
          </Button>
        </section>
        <footer className="text-center p-4">
          {result !== null && (
            <div className="space-y-2">
              <p className="text-xl font-semibold text-white">
                Resultado: {result}
              </p>
              <p className="text-blue-300 font-medium">
                Tipo: Variaciones {withRepetition ? 'con' : 'sin'} repetición
              </p>
              <p className="text-blue-300 font-medium">Algunas variaciones:</p>
              <ul className="list-disc list-inside text-blue-200 space-y-1 max-h-32 overflow-y-auto">
                {variations.slice(0, 10).map((variation, index) => (
                  <li key={index}>{`(${variation})`}</li>
                ))}
              </ul>
              {variations.length > 10 && (
                <p className="text-sm text-gray-400 mt-2">
                  (Mostrando las primeras 10 variaciones de un total de {variations.length})
                </p>
              )}
            </div>
          )}
        </footer>
      </Card>
    </div>
  );
}