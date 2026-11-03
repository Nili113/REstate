import React, { useState, useEffect, useRef } from 'react';
import { Ruler, AlertCircle, Compass } from 'lucide-react';

// Smooth counting animation hook with ease-out interpolation
function useAnimatedNumber(value: number, decimals: number = 0, duration: number = 400): string {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    const startValue = prevValue.current;
    const endValue = value;
    prevValue.current = value;
    if (startValue === endValue) return;

    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Snappy cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * ease;
      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  return displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export const LandCalculator: React.FC = () => {
  const [bigha, setBigha] = useState<number>(0);
  const [kattha, setKattha] = useState<number>(1);
  const [dhur, setDhur] = useState<number>(0);
  const [roadWidth, setRoadWidth] = useState<number>(20);

  // Terai System (Jhapa):
  // 1 Bigha = 20 Kattha = 400 Dhur = 72,900 sq ft = 6,772.63 sq m
  // 1 Kattha = 20 Dhur = 3,645 sq ft = 338.63 sq m
  // 1 Dhur = 182.25 sq ft = 16.93 sq m
  const totalDhur = (bigha * 400) + (kattha * 20) + dhur;
  const totalSqFt = totalDhur * 182.25;
  const totalSqMeters = totalDhur * 16.931;
  const equivalentAana = totalSqFt / 342.25;

  // Animated values
  const animatedSqFt = useAnimatedNumber(totalSqFt, 1);
  const animatedSqMeters = useAnimatedNumber(totalSqMeters, 1);
  const animatedDhur = useAnimatedNumber(totalDhur, 1);
  const animatedAana = useAnimatedNumber(equivalentAana, 2);
  const animatedRopani = useAnimatedNumber(equivalentAana / 16, 2);

  const getViability = () => {
    if (totalDhur < 5) return "Auxiliary Plot / Compact Section (Under 5 Dhur)";
    if (totalDhur < 10) return "Compact Residential Home Plot (5–10 Dhur)";
    if (totalDhur <= 20) return "Standard Single-Family Villa Plot (10–20 Dhur / ~1 Kattha)";
    if (totalDhur <= 40) return "Spacious Residential / Duplex Layout (1–2 Kattha)";
    return "Multi-Plot Residential Development (Over 2 Kattha)";
  };

  return (
    <section id="calculator" className="py-24 bg-ivory-100 border-b border-ivory-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (No generic pill badge) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="brand-font text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 mb-4">
            Terai Land Unit Converter
          </h2>
          <p className="text-charcoal-700 text-base leading-relaxed">
            In Jhapa and Koshi Province, land is planned in traditional Terai units of 
            <strong> बीघा (Bigha), कठ्ठा (Kattha), and धुर (Dhur)</strong>. Convert your parcel requirements into square feet, square meters, and layout viability with live calculating feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box */}
          <div className="lg:col-span-7 luxury-card p-6 sm:p-10">
            <h3 className="brand-font text-xl font-bold text-forest-950 mb-6 flex items-center gap-2">
              <Ruler className="w-5 h-5 text-gold-500" />
              <span>Input Parcel Units (Jhapa / Terai System)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                  Bigha (बीघा)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={bigha || ''}
                    placeholder="0"
                    onChange={(e) => setBigha(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-4 pr-20 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 font-bold text-lg focus:outline-none focus:border-forest-800 focus:bg-white transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-500 font-semibold pointer-events-none select-none bg-ivory-200/80 px-2 py-0.5 rounded-md">
                    Bigha
                  </span>
                </div>
                <span className="text-[11px] text-charcoal-500 mt-1 block">1 Bigha = 20 Kattha</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                  Kattha (कठ्ठा)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="19"
                    step="1"
                    value={kattha || ''}
                    placeholder="0"
                    onChange={(e) => setKattha(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-4 pr-20 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 font-bold text-lg focus:outline-none focus:border-forest-800 focus:bg-white transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-500 font-semibold pointer-events-none select-none bg-ivory-200/80 px-2 py-0.5 rounded-md">
                    Kattha
                  </span>
                </div>
                <span className="text-[11px] text-charcoal-500 mt-1 block">1 Kattha = 20 Dhur</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-2">
                  Dhur (धुर)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="19"
                    step="0.5"
                    value={dhur || ''}
                    placeholder="0"
                    onChange={(e) => setDhur(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full pl-4 pr-20 py-3 rounded-xl border border-ivory-400 bg-ivory-100/60 text-forest-950 font-bold text-lg focus:outline-none focus:border-forest-800 focus:bg-white transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-500 font-semibold pointer-events-none select-none bg-ivory-200/80 px-2 py-0.5 rounded-md">
                    Dhur
                  </span>
                </div>
                <span className="text-[11px] text-charcoal-500 mt-1 block">1 Dhur = 182.25 sq ft</span>
              </div>
            </div>

            {/* Road Access Width selection */}
            <div className="mb-6 pt-5 border-t border-ivory-300">
              <label className="block text-xs font-semibold text-charcoal-700 mb-2 flex items-center justify-between">
                <span>Access Road Width</span>
                <span className="text-forest-900 font-extrabold">{roadWidth} Feet Municipal Roadway</span>
              </label>
              <input
                type="range"
                min="10"
                max="40"
                step="2"
                value={roadWidth}
                onChange={(e) => setRoadWidth(parseInt(e.target.value))}
                className="w-full accent-forest-800 cursor-pointer h-2 bg-ivory-300 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-charcoal-500 mt-1.5 font-medium">
                <span>10 ft (Access Lane)</span>
                <span>16–20 ft (Standard Municipal Residential)</span>
                <span>30–40 ft (Arterial / Commercial)</span>
              </div>
            </div>

            {/* Quick preset buttons */}
            <div className="pt-2">
              <span className="text-xs text-charcoal-500 font-semibold block mb-2">Popular Planning Sizes in Jhapa:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => { setBigha(0); setKattha(0); setDhur(10); }}
                  className="px-3 py-1.5 rounded-full bg-ivory-200 text-xs font-semibold text-forest-950 hover:bg-forest-900 hover:text-white transition-colors"
                >
                  10 Dhur (1,822.5 sq ft)
                </button>
                <button
                  type="button"
                  onClick={() => { setBigha(0); setKattha(1); setDhur(0); }}
                  className="px-3 py-1.5 rounded-full bg-ivory-200 text-xs font-semibold text-forest-950 hover:bg-forest-900 hover:text-white transition-colors"
                >
                  1 Kattha (3,645 sq ft)
                </button>
                <button
                  type="button"
                  onClick={() => { setBigha(0); setKattha(2); setDhur(10); }}
                  className="px-3 py-1.5 rounded-full bg-ivory-200 text-xs font-semibold text-forest-950 hover:bg-forest-900 hover:text-white transition-colors"
                >
                  2.5 Kattha (9,112.5 sq ft)
                </button>
                <button
                  type="button"
                  onClick={() => { setBigha(1); setKattha(0); setDhur(0); }}
                  className="px-3 py-1.5 rounded-full bg-ivory-200 text-xs font-semibold text-forest-950 hover:bg-forest-900 hover:text-white transition-colors"
                >
                  1 Bigha (72,900 sq ft)
                </button>
              </div>
            </div>

          </div>

          {/* Results Summary Box with Live Animated Counter */}
          <div className="lg:col-span-5 bg-forest-950 text-ivory-100 p-6 sm:p-10 rounded-2xl border border-gold-500/30 shadow-elevated">
            <div className="flex items-center justify-between border-b border-forest-800 pb-4 mb-6">
              <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">
                Calculated Land Surface
              </span>
              <Compass className="w-5 h-5 text-gold-400" />
            </div>

            <div className="space-y-5 mb-8">
              <div>
                <span className="text-xs text-ivory-300 block font-medium">Total Area in Square Feet:</span>
                <span className="brand-font text-4xl sm:text-5xl font-extrabold text-white tabular-nums tracking-tight">
                  {animatedSqFt}
                </span>
                <span className="text-xs text-gold-400 ml-2 font-bold uppercase">sq. ft.</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-forest-800">
                <div>
                  <span className="text-xs text-ivory-400 block font-medium">Square Meters:</span>
                  <span className="text-lg font-bold text-white tabular-nums">
                    {animatedSqMeters} m²
                  </span>
                </div>
                <div>
                  <span className="text-xs text-ivory-400 block font-medium">Total Dhur Units:</span>
                  <span className="text-lg font-bold text-white tabular-nums">
                    {animatedDhur} Dhur
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-forest-800">
                <span className="text-xs text-ivory-400 block font-medium">Hilly / Valley Region Equivalent:</span>
                <span className="text-sm font-semibold text-ivory-200 tabular-nums">
                  ≈ {animatedAana} Aana ({animatedRopani} Ropani)
                </span>
              </div>
            </div>

            {/* Planning Suitability Card */}
            <div className="p-4 rounded-xl bg-forest-900 border border-forest-700/80 mb-6">
              <span className="text-[11px] text-gold-400 font-bold uppercase tracking-wider block mb-1">
                Planning Viability Indicator
              </span>
              <p className="text-sm font-bold text-white">
                {getViability()}
              </p>
              <p className="text-xs text-ivory-300 mt-1">
                Road front: {roadWidth} ft roadway compliant with Arjundhara municipal planning bylaws.
              </p>
            </div>

            {/* Notice */}
            <div className="flex items-start gap-2.5 text-[11px] text-ivory-400 leading-relaxed border-t border-forest-800 pt-4">
              <AlertCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>
                Standard Terai conversion formula (1 Kattha = 20 Dhur = 3,645 sq ft). Formal cadastre valuation and boundary schedules are determined on-site by certified surveyors under company supervision.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
