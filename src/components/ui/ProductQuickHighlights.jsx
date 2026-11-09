import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Sun, 
  Droplets, 
  Award, 
  Layers, 
  Clock, 
  Wind, 
  Zap, 
  CheckCircle2, 
  Ruler, 
  Truck,
  Flame,
  VolumeX,
  Hammer
} from 'lucide-react';

export function ProductQuickHighlights({ product }) {
  if (!product) return null;

  const getHighlights = () => {
    const cat = (product.category || '').toLowerCase();
    const name = (product.name || '').toLowerCase();
    const desc = product.description || '';

    // 1. Polycarbonate Products
    if (cat.includes('polycarbonate')) {
      return {
        tagline: 'High-Impact Optical Clarity & Superior Solar UV Shield',
        summary: 'Engineered with virgin optical-grade polycarbonate resin that transmits rich, natural daylight into spaces while blocking 99% of harmful UV radiation and resisting heavy impacts.',
        cards: [
          { icon: ShieldCheck, title: '250× Tougher than Glass', desc: 'Virtually unbreakable and impact resistant against falling branches, hail, and stones.' },
          { icon: Sun, title: 'Co-Extruded UV Shield', desc: 'Treated with dual-side UV inhibitors to prevent yellowing, brittleness, and haze for years.' },
          { icon: Zap, title: '92% Natural Light', desc: 'Illuminates interiors with soft, diffused sunlight to slash daytime electrical lighting bills.' },
          { icon: Droplets, title: 'Weatherproof & Non-Drip', desc: 'Smooth anti-condensate coating allows smooth rainwater runoff without water marks.' }
        ]
      };
    }

    // 2. PUFF Panel Sheets
    if (name.includes('puff') || (product.subcategory && product.subcategory.toLowerCase().includes('puff'))) {
      return {
        tagline: 'Zero Heat Transfer Sandwich Panel with 40% AC Savings',
        summary: 'Features a dense high-pressure injected polyurethane foam (PUF) insulation core sandwiched between factory-coated steel skins for complete indoor climate control and acoustic quiet.',
        cards: [
          { icon: Sun, title: 'Thermal Barrier', desc: 'Cuts solar roof heat penetration drastically, keeping interiors up to 8°C–10°C cooler in peak summer.' },
          { icon: VolumeX, title: 'Rain Noise Reduction', desc: 'Eliminates the deafening drum noise of heavy monsoons, creating peaceful residential & factory spaces.' },
          { icon: Zap, title: 'Energy Bill Savings', desc: 'Lowers HVAC and air conditioning run-time by up to 40%, paying for itself in energy efficiency.' },
          { icon: Hammer, title: 'Tongue & Groove Joint', desc: 'Interlocking overlap profile ensures a 100% leak-proof, draft-free, and rapid structural assembly.' }
        ]
      };
    }

    // 3. Thoranam Designs / Thoomanom
    if (cat.includes('thoranam') || name.includes('thoranam') || name.includes('thoomanom')) {
      return {
        tagline: 'Heritage Ornamental Eaves Border with Zero-Rot Durability',
        summary: 'Traditional South Indian decorative roof fascia trims crafted from high-density exterior PVC to give porches, verandas, and temple roofs a timeless royal arch aesthetic.',
        cards: [
          { icon: Sparkles, title: 'Temple Arch Fretwork', desc: 'Precision CNC-cut traditional motifs that elevate the visual charm of any sloping roof or porch.' },
          { icon: Droplets, title: '100% Water & Rot Proof', desc: 'Made from high-grade virgin plastic that will never rot, swell, peel, or split from rainwater.' },
          { icon: ShieldCheck, title: 'Termite & Borer Immune', desc: 'Completely synthetic non-wood formulation permanently immune to wood-borer and pest attacks.' },
          { icon: Clock, title: 'Zero Maintenance', desc: 'UV-stabilized brilliant white finish that never needs costly repainting or seasonal varnishing.' }
        ]
      };
    }

    // 4. Roofing Sheets (JSW, Tata, Georoof, Durashine, Galvalume)
    if (cat.includes('roofing') && !name.includes('upvc') && !name.includes('cement')) {
      return {
        tagline: 'High-Tensile Anti-Corrosive Weather Armor for Tropical Monsoons',
        summary: 'Formed from premium grade steel coils with continuous hot-dip zinc-aluminum alloy protective coating, deep water-shedding corrugations, and bake-cured exterior color pigments.',
        cards: [
          { icon: ShieldCheck, title: 'AZ100/AZ150 Protection', desc: '55% Aluminum-Zinc alloy layer provides 4× longer rust protection than standard galvanized sheets.' },
          { icon: Sparkles, title: 'Fade-Resistant Colors', desc: 'Super-durable polyester paint system formulated to resist chalking and fading under scorching sun.' },
          { icon: Droplets, title: 'Deep Channel Ribs', desc: 'Engineered high-crest trapezoidal corrugations flush torrential monsoon rainwater away instantly.' },
          { icon: Award, title: 'Certified Mill Quality', desc: 'Direct authorized source with genuine thickness, guaranteed tensile strength, and ISI standards.' }
        ]
      };
    }

    // 5. UPVC & Cement AC Roofing Sheets
    if (name.includes('upvc') || name.includes('cement') || cat.includes('cement')) {
      return {
        tagline: '100% Rust-Proof, Acid-Resistant & Cool Roofing Technology',
        summary: 'Engineered for chemical plants, coastal zones, farm sheds, and residential verandas requiring zero rust, whisper-quiet rain acoustics, and exceptional temperature insulation.',
        cards: [
          { icon: ShieldCheck, title: 'Coastal & Chemical Proof', desc: 'Zero corrosion in salt-air coastal regions and resistant to acidic fumes and industrial gases.' },
          { icon: VolumeX, title: 'Whisper-Quiet in Rain', desc: 'High acoustic absorption dampens torrential raindrops for tranquil indoor comfort.' },
          { icon: Sun, title: 'Natural Cool Roofing', desc: 'Low thermal conductivity prevents heat buildup, keeping sheds pleasant without false ceilings.' },
          { icon: Clock, title: 'Decades of Endurance', desc: 'Built tough against high wind loads, UV rays, and heavy weather with no rust maintenance.' }
        ]
      };
    }

    // 6. Rainwater Gutters (Aquastar / UPVC)
    if (cat.includes('gutter')) {
      return {
        tagline: 'Leak-Free Rainwater Drainage & Foundation Protection',
        summary: 'Heavy-duty UV-stabilized UPVC gutter channels designed for maximum hydrodynamic flow, preventing building wall dampness and aiding easy rainwater harvesting.',
        cards: [
          { icon: Droplets, title: 'High-Volume Runoff', desc: 'Deep trough profile handles heavy tropical cloudbursts without overflowing or water pooling.' },
          { icon: ShieldCheck, title: 'Rubber Gasket Seals', desc: 'Precision engineered joint fittings guarantee a 100% leak-proof seal that protects exterior walls.' },
          { icon: Sun, title: 'Anti-Warp UV UPVC', desc: 'Special UV stabilizer package prevents thermal warping, cracking, or sag in direct sunlight.' },
          { icon: Hammer, title: 'Smooth Flow Channel', desc: 'Low-friction internal surface prevents moss, sediment, and leaf sludge from accumulating.' }
        ]
      };
    }

    // 7. Fiber Cement Boards (Vnext / Visaka)
    if (cat.includes('cement board') || name.includes('v board') || name.includes('vnext')) {
      return {
        tagline: 'Heavy-Duty Fire & Water Resistant Multi-Purpose Board',
        summary: 'Engineered from autoclaved non-asbestos fiber cement composite for exterior wall cladding, drywalls, partitions, false ceilings, and heavy-load mezzanine floors.',
        cards: [
          { icon: Flame, title: 'Class A1 Fire Rating', desc: 'Non-combustible composite that will not ignite, propagate flames, or emit toxic smoke in a fire.' },
          { icon: Droplets, title: 'Water & Moisture Proof', desc: 'Immune to water damage, warping, or swelling even in heavy humidity and wet interior areas.' },
          { icon: ShieldCheck, title: '100% Termite Proof', desc: 'Permanent pest-resistant composition that protects your structural investment indefinitely.' },
          { icon: Layers, title: 'Seamless Workability', desc: 'Cuts, drills, and screws smoothly with standard tools; takes paint, wallpaper, and tiles easily.' }
        ]
      };
    }

    // 8. Steel Pipes (GI, MS, Apollo - Square & Round)
    if (cat.includes('pipe') || name.includes('pipe')) {
      return {
        tagline: 'High-Tensile Structural Strength in Square & Round Profiles',
        summary: 'Precision-manufactured hollow structural sections available in both Square Hollow Section (SHS) and Circular Round Pipe (CHS) profiles across GI, MS, and Apollo grades with certified yield strength for rigid roof trusses, sheds, and frameworks.',
        cards: [
          { icon: Layers, title: 'Square & Round Profiles', desc: 'Available in both square hollow sections (SHS) and round circular pipes (CHS) to fit all architectural designs.' },
          { icon: Award, title: 'Certified Yield Strength', desc: 'Engineered to bear heavy roofing loads and wind stress with superior strength-to-weight ratio.' },
          { icon: ShieldCheck, title: 'Anti-Rust Coating', desc: 'Hot-dip galvanized zinc barrier and mill coating defend against rust, humidity, and weather oxidation.' },
          { icon: Hammer, title: 'Seamless Fabrication', desc: 'Uniform clean walls and precise gauge ensure smooth on-site cutting, bending, and high-strength welding.' }
        ]
      };
    }

    // 9. Roof Tiles (Stone Coated & Bamboo)
    if (cat.includes('tile')) {
      return {
        tagline: 'Royal Clay Roof Aesthetics with Unbreakable Steel Armor',
        summary: 'Delivers the timeless heritage charm of European and Kerala curved roof tiles combined with the high-strength, anti-leak reliability of stone-coated galvalume steel.',
        cards: [
          { icon: Sparkles, title: 'Royal Heritage Finish', desc: 'Luxurious Mediterranean and Kerala tile profile that increases the curb appeal of any bungalow.' },
          { icon: ShieldCheck, title: 'Unbreakable Steel Core', desc: 'Will not crack, shift, chip, or blow off in heavy windstorms unlike traditional clay or ceramic tiles.' },
          { icon: VolumeX, title: 'Muffled Rain Acoustics', desc: 'Natural volcanic stone granule coating disperses impact sound for quiet, peaceful monsoons.' },
          { icon: Droplets, title: 'Anti-Algae & Mildew', desc: 'Special ceramic protective glaze prevents black moss streaks, mildew, and fungal growth.' }
        ]
      };
    }

    // 10. Thermal Insulation & Tar Felt
    return {
      tagline: 'Continuous Vapor Barrier & High-Performance Heat Reflector',
      summary: 'Heavy-duty reflective foil and dense bituminous underlayment rolls engineered to seal roof joints, prevent moisture condensation, and reflect up to 97% of radiant summer heat.',
      cards: [
        { icon: Sun, title: 'Radiant Heat Shield', desc: 'Reflects radiant heat away from the ceiling cavity, significantly dropping room temperatures.' },
        { icon: Droplets, title: '100% Moisture Seal', desc: 'Prevents dampness, water seepage, and under-roof condensation from dripping onto ceilings.' },
        { icon: ShieldCheck, title: 'Tear-Proof Core', desc: 'Reinforced high-tensile backing allows easy installation over purlins without tearing.' },
        { icon: Clock, title: 'Permanent Underlay', desc: 'Resistant to aging, humidity, and temperature extremes, safeguarding roof substructures.' }
      ]
    };
  };

  const highlights = getHighlights();

  return (
    <div className="mt-6 p-5 sm:p-6 bg-white rounded-2xl border border-industrial-200/90 shadow-sm">
      {/* Attractive Header */}
      <div className="flex items-start justify-between gap-3 pb-3 border-b border-industrial-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-bold uppercase tracking-wider mb-1.5">
            <Sparkles size={13} className="text-accent-600" />
            Product Highlights & Key Benefits
          </div>
          <h4 className="text-base sm:text-lg font-bold text-industrial-900 leading-snug">
            {highlights.tagline}
          </h4>
        </div>
      </div>

      {/* Sweet Informative Summary */}
      <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed pt-3 pb-4">
        {highlights.summary}
      </p>

      {/* 2x2 Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {highlights.cards.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <div 
              key={idx}
              className="flex items-start gap-3 p-3 rounded-xl bg-industrial-50/70 border border-industrial-100 hover:border-accent-200 transition-colors"
            >
              <div className="p-2 rounded-lg bg-white shadow-xs border border-industrial-100 text-accent-600 shrink-0 mt-0.5">
                <IconComp size={16} />
              </div>
              <div className="min-w-0">
                <h5 className="text-xs font-bold text-industrial-900 leading-tight mb-1">
                  {card.title}
                </h5>
                <p className="text-[11px] text-industrial-600 leading-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Trust & Assurance Badges */}
      <div className="mt-4 pt-3 border-t border-industrial-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-semibold text-industrial-500">
        <div className="flex items-center gap-1.5 text-accent-700">
          <Award size={14} className="text-accent-600 shrink-0" />
          <span>100% Genuine Mill Certified</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Ruler size={14} className="text-industrial-400 shrink-0" />
          <span>Custom Lengths Available</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Truck size={14} className="text-industrial-400 shrink-0" />
          <span>Fast Regional Delivery</span>
        </div>
      </div>
    </div>
  );
}

