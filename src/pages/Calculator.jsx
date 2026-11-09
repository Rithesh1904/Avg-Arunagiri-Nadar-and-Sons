import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Calculator as CalcIcon, AlertCircle, MessageCircle, Info, Layers, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export function Calculator() {
  const [formData, setFormData] = useState({
    length: '',
    width: '',
    roofType: 'flat', // 'flat' | 'pitched'
    sheetType: 'steel', // 'steel' | 'polycarbonate'
    polycarbonateWidth: '4', // '4' | '7'
  });

  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    
    const l = parseFloat(formData.length);
    const w = parseFloat(formData.width);

    if (!l || !w || l <= 0 || w <= 0) return;

    // Pitch slope factor: ~15% extra slope length if pitched
    const slopeMultiplier = formData.roofType === 'pitched' ? 1.15 : 1.0;
    const slopeLength = Math.round(l * slopeMultiplier * 10) / 10;
    const totalArea = Math.round(slopeLength * w * 100) / 100;

    if (formData.sheetType === 'steel') {
      // Standard steel roofing sheet: 3.5 ft gross width (3.35 ft effective cover after 1 corrugation side lap)
      const effectiveSheetWidth = 3.35;
      const estimatedSheets = Math.ceil(w / effectiveSheetWidth);
      const totalRunningFeet = estimatedSheets * slopeLength;

      setResult({
        type: 'steel',
        area: totalArea,
        sheetLength: slopeLength,
        sheetWidth: 3.5,
        sheets: estimatedSheets,
        totalRunningFeet: Math.round(totalRunningFeet),
      });
    } else {
      // Polycarbonate sheet: standard fixed widths of 4 ft or 7 ft only
      const selectedWidth = parseFloat(formData.polycarbonateWidth);
      const estimatedPanels = Math.ceil(w / selectedWidth);
      const totalRunningFeet = estimatedPanels * slopeLength;

      // Alternative comparison calculation
      const panels4ft = Math.ceil(w / 4);
      const totalLength4ft = Math.round(panels4ft * slopeLength);
      const panels7ft = Math.ceil(w / 7);
      const totalLength7ft = Math.round(panels7ft * slopeLength);

      setResult({
        type: 'polycarbonate',
        area: totalArea,
        sheetLength: slopeLength,
        selectedWidth: selectedWidth,
        sheets: estimatedPanels,
        totalRunningFeet: Math.round(totalRunningFeet),
        panels4ft,
        totalLength4ft,
        panels7ft,
        totalLength7ft,
      });
    }
  };

  const whatsappMessage = result ? encodeURIComponent(
    result.type === 'steel'
      ? `Hello, I would like a quote for Steel Roofing Sheets:\n` +
        `• Building Dimensions: ${formData.length} ft (L) × ${formData.width} ft (W)\n` +
        `• Roof Type: ${formData.roofType === 'pitched' ? 'Pitched / Sloped (+15% slope)' : 'Flat / Low Slope'}\n` +
        `• Sheet Specification: Standard 3.5 ft Width × ${result.sheetLength} ft Custom Length\n` +
        `• Estimated Requirement: ${result.sheets} Sheets (Total: ${result.totalRunningFeet} Running ft)\n` +
        `• Roof Area: ~${result.area} sq.ft\n\n` +
        `Please share the best price quote.`
      : `Hello, I would like a quote for Polycarbonate Sheets:\n` +
        `• Building Dimensions: ${formData.length} ft (L) × ${formData.width} ft (W)\n` +
        `• Roof Type: ${formData.roofType === 'pitched' ? 'Pitched / Sloped (+15% slope)' : 'Flat / Low Slope'}\n` +
        `• Polycarbonate Sheet Width: ${result.selectedWidth} ft\n` +
        `• Cut Length: ${result.sheetLength} ft continuous\n` +
        `• Estimated Requirement: ${result.sheets} Panels (Total: ${result.totalRunningFeet} Running ft)\n` +
        `• Roof Area: ~${result.area} sq.ft\n\n` +
        `Please share the best price quote.`
  ) : '';

  return (
    <div className="bg-industrial-50 min-h-screen pt-[90px] pb-16 relative z-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center bg-fixed opacity-40"
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 text-accent-500 border border-white/50">
            <CalcIcon size={32} />
          </div>
          <SectionHeading 
            title="Roofing Requirement Calculator" 
            subtitle="Accurately estimate sheet quantity and running measurements based on your building size."
            center
            className="mb-0"
          />
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/60 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Form */}
            <div className="p-5 sm:p-8 border-b md:border-b-0 md:border-r border-industrial-100">
              <form onSubmit={handleCalculate} className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-industrial-900 mb-3 flex items-center gap-2">
                    <span>1. Building Dimensions</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-industrial-700 mb-1">
                        Length (ft) - Slope Direction
                      </label>
                      <input 
                        type="number" 
                        required
                        min="1"
                        step="0.1"
                        placeholder="e.g. 20"
                        value={formData.length}
                        onChange={e => setFormData({...formData, length: e.target.value})}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-industrial-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-industrial-700 mb-1">
                        Width (ft) - Across Roof
                      </label>
                      <input 
                        type="number" 
                        required
                        min="1"
                        step="0.1"
                        placeholder="e.g. 15"
                        value={formData.width}
                        onChange={e => setFormData({...formData, width: e.target.value})}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-industrial-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all" 
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-industrial-700 mb-1">
                    Roof Type
                  </label>
                  <select 
                    value={formData.roofType}
                    onChange={e => setFormData({...formData, roofType: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-industrial-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all cursor-pointer"
                  >
                    <option value="flat">Flat / Low Slope (Standard)</option>
                    <option value="pitched">Pitched / Sloped Roof (+15% slope length allowance)</option>
                  </select>
                </div>

                <div className="pt-2 border-t border-industrial-100">
                  <h3 className="text-lg font-bold text-industrial-900 mb-3 flex items-center gap-2">
                    <span>2. Sheet Type</span>
                  </h3>
                  
                  {/* Sheet Type Dropdown */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-industrial-700 mb-1">
                      Select Material Type
                    </label>
                    <select 
                      value={formData.sheetType}
                      onChange={e => setFormData({
                        ...formData, 
                        sheetType: e.target.value,
                        // reset result on type switch
                      })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-industrial-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 font-semibold text-industrial-900 transition-all cursor-pointer"
                    >
                      <option value="steel">Steel Sheet (Color Coated Trapezoidal Roofing Sheet)</option>
                      <option value="polycarbonate">Polycarbonate Sheet (Multiwall / Compact Roll)</option>
                    </select>
                  </div>

                  {/* Steel Sheet Info Badge */}
                  {formData.sheetType === 'steel' && (
                    <div className="mt-3 p-3 bg-blue-50/90 border border-blue-200/80 rounded-lg flex items-start gap-2.5 text-xs text-blue-900">
                      <Layers className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Steel Sheet Profile:</span> Standard manufactured width is <strong>3.5 ft</strong> (effective 3.35 ft coverage with overlap). Sheets are custom cut to your length measurement.
                      </div>
                    </div>
                  )}

                  {/* Polycarbonate Width Selection & Short Note */}
                  {formData.sheetType === 'polycarbonate' && (
                    <div className="mt-3 space-y-3">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-industrial-700 mb-1.5">
                          Select Polycarbonate Sheet Width
                        </label>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, polycarbonateWidth: '4' })}
                            className={cn(
                              "py-2.5 px-3 rounded-lg font-bold text-xs sm:text-sm border text-center transition-all flex flex-col items-center justify-center gap-0.5",
                              formData.polycarbonateWidth === '4'
                                ? "bg-industrial-900 text-white border-industrial-900 shadow-md ring-2 ring-accent-400/40"
                                : "bg-white text-industrial-700 border-industrial-200 hover:border-industrial-400"
                            )}
                          >
                            <span>4 ft Width</span>
                            <span className="text-[10px] opacity-80 font-normal">Standard Roll</span>
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, polycarbonateWidth: '7' })}
                            className={cn(
                              "py-2.5 px-3 rounded-lg font-bold text-xs sm:text-sm border text-center transition-all flex flex-col items-center justify-center gap-0.5",
                              formData.polycarbonateWidth === '7'
                                ? "bg-industrial-900 text-white border-industrial-900 shadow-md ring-2 ring-accent-400/40"
                                : "bg-white text-industrial-700 border-industrial-200 hover:border-industrial-400"
                            )}
                          >
                            <span>7 ft Width</span>
                            <span className="text-[10px] opacity-80 font-normal">Wide Span Sheet</span>
                          </button>
                        </div>
                      </div>

                      {/* Required Short Note */}
                      <div className="p-3 bg-amber-50/95 border border-amber-200/90 rounded-lg flex items-start gap-2.5 text-xs text-amber-950 shadow-sm">
                        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          <span className="font-bold text-amber-900 block mb-0.5">Short Note for Polycarbonate:</span>
                          Polycarbonate sheets are supplied in standard fixed widths of <strong>4 ft</strong> or <strong>7 ft</strong> only. The length can be custom cut to any required measurement (continuous roll / length) as per your roof size.
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-industrial-900 hover:bg-industrial-800 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg mt-4"
                >
                  Calculate Requirement
                </button>
              </form>
            </div>

            {/* Result */}
            <div className="p-5 sm:p-8 bg-industrial-50/60 flex flex-col justify-center">
              {result ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-100 text-accent-800 text-xs font-bold uppercase tracking-wider mb-3">
                    {result.type === 'steel' ? <Layers size={13} /> : <Sun size={13} />}
                    <span>{result.type === 'steel' ? 'Steel Roofing Sheet' : 'Polycarbonate Sheet'}</span>
                  </div>

                  <h3 className="text-xl font-bold text-industrial-900 mb-4">Estimated Requirement</h3>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-industrial-200 mb-5">
                    <div className="text-5xl font-black text-accent-600 mb-1">{result.sheets}</div>
                    <div className="text-industrial-700 font-bold uppercase tracking-wider text-xs sm:text-sm">
                      {result.type === 'steel' ? 'Sheets Required' : 'Panels Required'}
                    </div>
                    <div className="text-xs text-industrial-500 mt-1 font-medium">
                      Each piece: <span className="text-industrial-900 font-semibold">{result.sheetLength} ft length</span> × <span className="text-industrial-900 font-semibold">{result.type === 'steel' ? '3.5 ft width' : `${result.selectedWidth} ft width`}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-5 text-left">
                    <div className="bg-white p-3.5 rounded-xl border border-industrial-200">
                      <div className="text-xs text-industrial-500 font-medium">Approx. Roof Area</div>
                      <div className="text-base font-bold text-industrial-900">{result.area} sq.ft</div>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-industrial-200">
                      <div className="text-xs text-industrial-500 font-medium">Total Running Length</div>
                      <div className="text-base font-bold text-industrial-900">{result.totalRunningFeet} ft</div>
                    </div>
                  </div>

                  {/* Polycarbonate 4ft vs 7ft comparison card */}
                  {result.type === 'polycarbonate' && (
                    <div className="bg-amber-50/80 border border-amber-200/70 p-3.5 rounded-xl text-left text-xs text-amber-950 mb-5">
                      <div className="font-bold text-amber-900 mb-1.5 flex items-center justify-between">
                        <span>Width Options Comparison:</span>
                        <span className="text-[11px] font-normal text-amber-700">(Length: {result.sheetLength} ft)</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className={cn("p-2 rounded-lg border", result.selectedWidth === 4 ? "bg-amber-100/70 border-amber-300 font-semibold" : "bg-white/60 border-amber-200")}>
                          <div>4 ft Width Profile:</div>
                          <div className="text-amber-900 font-bold text-xs">{result.panels4ft} panels ({result.totalLength4ft} ft)</div>
                        </div>
                        <div className={cn("p-2 rounded-lg border", result.selectedWidth === 7 ? "bg-amber-100/70 border-amber-300 font-semibold" : "bg-white/60 border-amber-200")}>
                          <div>7 ft Width Profile:</div>
                          <div className="text-amber-900 font-bold text-xs">{result.panels7ft} panels ({result.totalLength7ft} ft)</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-xl flex items-start gap-2.5 text-left mb-6">
                    <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={16} />
                    <p className="text-xs text-blue-900 leading-relaxed">
                      This calculation is an estimate for ordering. Material requirements can vary based on roof eaves overhang, cutting angle, and overlap joints. Contact our experts to confirm exact billing quantities.
                    </p>
                  </div>

                  <a 
                    href={`https://wa.me/919842874256?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-xl font-bold transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
                  >
                    <MessageCircle size={20} />
                    Request Quote on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <div className="text-center text-industrial-400 py-12">
                  <CalcIcon size={48} className="mx-auto mb-4 opacity-25" />
                  <p className="text-sm font-medium text-industrial-600 mb-1">Ready to Calculate</p>
                  <p className="text-xs text-industrial-400 max-w-xs mx-auto">
                    Enter your building length and width, select your sheet type (Steel or Polycarbonate), and click calculate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
