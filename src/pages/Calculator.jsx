import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Calculator as CalcIcon, AlertCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Calculator() {
  const [formData, setFormData] = useState({
    length: '',
    width: '',
    roofType: 'flat',
    sheetLength: '',
    sheetWidth: '',
    overlap: '10' // percentage
  });

  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    
    // Convert inputs to numbers
    const l = parseFloat(formData.length);
    const w = parseFloat(formData.width);
    const sl = parseFloat(formData.sheetLength);
    const sw = parseFloat(formData.sheetWidth);
    const overlapPercent = parseFloat(formData.overlap) / 100;

    if (!l || !w || !sl || !sw) return;

    // Basic calculation logic
    let totalArea = l * w;
    
    // If pitched/sloped roof, adjust area simply (e.g. 15% more area for slope)
    if (formData.roofType === 'pitched') {
      totalArea = totalArea * 1.15;
    }

    const effectiveSheetLength = sl * (1 - overlapPercent);
    const effectiveSheetWidth = sw * (1 - overlapPercent);
    const effectiveSheetArea = effectiveSheetLength * effectiveSheetWidth;

    const estimatedSheets = Math.ceil(totalArea / effectiveSheetArea);

    setResult({
      area: totalArea.toFixed(2),
      sheets: estimatedSheets
    });
  };

  const whatsappMessage = result ? encodeURIComponent(
    `Hello, I would like a quote for roofing sheets based on my calculation:\n` +
    `Building Dimensions: ${formData.length} x ${formData.width}\n` +
    `Roof Type: ${formData.roofType}\n` +
    `Estimated Requirement: ${result.sheets} sheets\n\n` +
    `Please provide pricing and details.`
  ) : '';

  return (
    <div className="bg-industrial-50 min-h-screen pt-[90px] pb-16 relative z-0">
      {/* Background Image with Higher Brightness/Opacity */}
      <div 
        className="absolute inset-0 -z-10 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center bg-fixed opacity-40"
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 text-accent-500 border border-white/50">
            <CalcIcon size={32} />
          </div>
          <SectionHeading 
            title="Roofing Requirement Calculator" 
            subtitle="Estimate the number of sheets required for your project."
            center
            className="mb-0"
          />
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-white/50 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Form */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/30">
              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-industrial-900 mb-4">Building Dimensions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-industrial-700 mb-1">Length (ft)</label>
                      <input 
                        type="number" 
                        required
                        min="1"
                        step="0.1"
                        value={formData.length}
                        onChange={e => setFormData({...formData, length: e.target.value})}
                        className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-industrial-700 mb-1">Width (ft)</label>
                      <input 
                        type="number" 
                        required
                        min="1"
                        step="0.1"
                        value={formData.width}
                        onChange={e => setFormData({...formData, width: e.target.value})}
                        className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-industrial-700 mb-1">Roof Type</label>
                  <select 
                    value={formData.roofType}
                    onChange={e => setFormData({...formData, roofType: e.target.value})}
                    className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
                  >
                    <option value="flat">Flat / Low Slope</option>
                    <option value="pitched">Pitched / Sloped</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-industrial-900 mb-4">Sheet Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-industrial-700 mb-1">Sheet Length (ft)</label>
                      <input 
                        type="number" 
                        required
                        min="1"
                        step="0.1"
                        value={formData.sheetLength}
                        onChange={e => setFormData({...formData, sheetLength: e.target.value})}
                        className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-industrial-700 mb-1">Sheet Width (ft)</label>
                      <input 
                        type="number" 
                        required
                        min="1"
                        step="0.1"
                        value={formData.sheetWidth}
                        onChange={e => setFormData({...formData, sheetWidth: e.target.value})}
                        className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-industrial-700 mb-1">Overlap Allowance (%)</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    max="50"
                    value={formData.overlap}
                    onChange={e => setFormData({...formData, overlap: e.target.value})}
                    className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                  />
                  <p className="text-xs text-industrial-500 mt-1">Recommended: 10% - 15% for overlapping</p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-industrial-900 hover:bg-industrial-800 text-white font-bold py-3 rounded-md transition-colors"
                >
                  Calculate Requirement
                </button>
              </form>
            </div>

            {/* Result */}
            <div className="p-8 bg-white/40 flex flex-col justify-center">
              {result ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-industrial-900 mb-6">Estimated Requirement</h3>
                  
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/50 mb-6">
                    <div className="text-5xl font-black text-accent-600 mb-2">{result.sheets}</div>
                    <div className="text-industrial-600 font-semibold uppercase tracking-wider text-sm">Sheets Required</div>
                  </div>
                  
                  <div className="text-industrial-600 mb-8">
                    Approximate Roof Area: <span className="font-bold text-industrial-900">{result.area} sq.ft</span>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-md flex items-start gap-3 text-left mb-8">
                    <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-blue-800">
                      This is an approximate calculation. Final material requirements may vary depending on exact roof design, cutting wastage, and installation requirements. Please contact us for confirmation.
                    </p>
                  </div>

                  <a 
                    href={`https://wa.me/919842874256?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-6 rounded-md font-bold transition-colors"
                  >
                    <MessageCircle size={20} />
                    Request Quote for {result.sheets} Sheets
                  </a>
                </motion.div>
              ) : (
                <div className="text-center text-industrial-400">
                  <CalcIcon size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Enter your dimensions and click calculate to see the estimated requirement.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
