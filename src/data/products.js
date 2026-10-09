export const products = [
  // Polycarbonate Products
  {
    id: "multiwall-polycarbonate-sheet-75",
    name: "Multiwall Polycarbonate Sheet",
    category: "Polycarbonate Products",
    subcategory: "Multiwall Polycarbonate",
    brand: "Lotus",
    description: "Multiwall Polycarbonate Sheet for Residential and Commercial applications. 60% Transparency, Color Coated.",
    image: "/images/Multiwall Polycarbonate Sheet.jpg",
    specifications: {
      thickness: ["2 mm"],
      material: ["Polycarbonate"],
      colors: ["Transparent"]
    },
    applications: ["Residential", "Commercial"],
    featured: true
  },
  {
    id: "industrial-polycarbonate-sheet",
    name: "Industrial Polycarbonate Sheet",
    category: "Polycarbonate Products",
    subcategory: "Industrial Polycarbonate",
    brand: "Generic",
    description: "Industrial Polycarbonate Sheet with UV Coated, Non Drip, Anti Glare, Hard Coated features.",
    image: "/images/Industrial Polycarbonate Sheet.jpg",
    specifications: {
      coatingType: ["UV Coated", "Non Drip", "Anti Glare", "Hard Coated"]
    },
    applications: ["Skylight", "Canopy", "Greenhouse", "Walkway Cover", "Parking Shed", "Dome"],
    featured: false
  },
  {
    id: "coloured-polycarbonate-sheet",
    name: "Coloured Polycarbonate Sheet",
    category: "Polycarbonate Products",
    subcategory: "Coloured Polycarbonate",
    brand: "Tufflite",
    description: "Brown Coloured Polycarbonate Sheet with UV Protection (Both Side Coated).",
    image: "/images/Coloured Polycarbonate Sheet.jpg",
    specifications: {
      width: ["840 mm"],
      colors: ["Brown"]
    },
    applications: ["Parking Shed", "Greenhouse", "Skylight", "Canopy", "Walkway Cover", "Dome"],
    featured: false
  },
  {
    id: "polycarbonate-solid-sheet",
    name: "Polycarbonate Solid Sheet",
    category: "Polycarbonate Products",
    subcategory: "Solid Polycarbonate",
    brand: "Generic",
    description: "Bronze Polycarbonate Solid Sheet, embossed and waterproof.",
    image: "/images/Polycarbonate Solid Sheet.jpg",
    specifications: {
      thickness: ["2 mm"],
      width: ["840 mm"],
      colors: ["Bronze"]
    },
    applications: ["Residential", "Commercial"],
    featured: true
  },
  {
    id: "hpl-sheets",
    name: "H P L Sheets",
    category: "Polycarbonate Products",
    subcategory: "H P L Sheets",
    brand: "LOTUS",
    description: "Brown HPL Sheets with Wood Grain finish for exterior applications.",
    image: "/images/H P L Sheets.jpg",
    specifications: {
      thickness: ["6 mm"],
      size: ["2440x1220mm (8x4ft)"],
      colors: ["Brown"]
    },
    applications: ["Exterior", "Elevation", "Front Gates"],
    featured: false
  },
  {
    id: "uv-polycarbonate-sheet",
    name: "UV Polycarbonate Sheet",
    category: "Polycarbonate Products",
    subcategory: "UV Polycarbonate",
    brand: "Lotus",
    description: "1.5 mm Multiwall UV Polycarbonate Sheet with 92% light transmission and 10 Years warranty.",
    image: "/images/UV Polycarbonate Sheet.webp",
    specifications: {
      thickness: ["1.5 mm"],
      lightTransmission: ["92%"]
    },
    applications: ["Canopy", "Facade Glazing", "Roofing", "Greenhouse", "Walkway Cover", "Skylight"],
    featured: false
  },
  
  // Roofing Sheets
  {
    id: "green-gi-color-coated-roofing-sheet",
    name: "Green GI Color Coated Roofing Sheet",
    category: "Roofing Sheets",
    subcategory: "GI Color Coated Sheets",
    brand: "Generic",
    description: "Green GI Color Coated Trapezoidal Roofing Sheet, 0.45 mm thickness.",
    image: "/images/Green GI Color Coated Roofing Sheet.jpg",
    specifications: {
      thickness: ["0.45 mm"],
      material: ["Galvanized Steel"],
      colors: ["Green"]
    },
    applications: ["Roofing"],
    featured: true
  },
  {
    id: "sky-blue-gi-color-coated-roofing-sheet",
    name: "Sky Blue GI Color Coated Roofing Sheet",
    category: "Roofing Sheets",
    subcategory: "GI Color Coated Sheets",
    brand: "Generic",
    description: "Sky Blue Corrugated Galvalume Steel Roofing Sheet.",
    image: "/images/Sky Blue GI Color Coated Roofing Sheet.jpg",
    specifications: {
      thickness: ["0.45 mm"],
      material: ["Galvalume Steel"],
      colors: ["Sky Blue"]
    },
    applications: ["Roofing"],
    featured: false
  },
  {
    id: "galvalume-roof-sheet",
    name: "Galvalume Roof Sheet",
    category: "Roofing Sheets",
    subcategory: "Galvalume Roof Sheets",
    brand: "Generic",
    description: "Blue Galvalume Roof Sheet, AZ100 coating.",
    image: "/images/Galvalume Roof Sheet.jpg",
    specifications: {
      thickness: ["0.45 mm"],
      width: ["600 mm", "3.5 ft"],
      colors: ["Blue"]
    },
    applications: ["Roofing"],
    featured: false
  },
  {
    id: "jsw-roofing-sheet",
    name: "Jsw Roofing Sheet",
    category: "Roofing Sheets",
    subcategory: "Galvalume Roof Sheets",
    brand: "JSW",
    description: "Blue JSW Galvalume Roofing Sheet.",
    image: "/images/Jsw Roofing Sheet.jpg",
    specifications: {
      thickness: ["0.45 mm", "0.47 mm"],
      width: ["3.5 ft"],
      colors: ["Blue"]
    },
    applications: ["Roofing"],
    featured: true
  },
  {
    id: "cement-roofing-sheets",
    name: "Cement Roofing Sheets",
    category: "Roofing Sheets",
    subcategory: "Cement Roofing Sheets",
    brand: "Visaka",
    description: "Grey Cement Roofing Sheets for Commercial usage.",
    image: "/images/Cement Roofing Sheets.jpg",
    specifications: {
      thickness: ["6 mm"],
      width: ["3.5 ft"],
      colors: ["Grey"]
    },
    applications: ["Commercial"],
    featured: false
  },
  {
    id: "upvc-tile-roof-sheets",
    name: "Upvc Tile Roof Sheets",
    category: "Roofing Sheets",
    subcategory: "UPVC Tile Roof Sheets",
    brand: "Generic",
    description: "UPVC Corrugated Tile Roof Sheets.",
    image: "/images/Upvc Tile Roof Sheets.jpg",
    specifications: {
      thickness: ["2.5 mm"],
      dimensions: ["8 FT X 3.5 FT", "10 FT X 3.5 FT", "12 FT X 3.5 FT"],
      colors: ["Orange", "White", "Grey", "Brown"]
    },
    applications: ["Dairy Farm", "Factory Roofing", "Cold Storage", "Residential", "Farmhouse", "Warehouse", "Industrial Shed", "Parking Shed"],
    featured: false
  },
  {
    id: "silver-xlpe-foam-insulation",
    name: "Silver Xlpe Foam Insulation",
    category: "Roofing Sheets",
    subcategory: "Silver XLPE Foam Insulation",
    brand: "Generic",
    description: "Black Silver XLPE Foam Insulation (5 mm).",
    image: "/images/Silver Xlpe Foam Insulation.jpg",
    specifications: {
      thickness: ["5 mm"],
      density: ["30 kg/m³"],
      colors: ["Black"]
    },
    applications: ["Pipe Insulation", "Automotive", "HVAC Duct", "Roof Insulation", "Packaging", "Floor Underlay"],
    featured: false
  },

  // Roof Tiles
  {
    id: "bamboo-roof-tile",
    name: "Bamboo Roof Tile",
    category: "Roof Tiles",
    subcategory: "Bamboo Roof Tile",
    brand: "TATA / Generic",
    description: "Red Color Coated Steel Bamboo Roof Tile.",
    image: "/images/Bamboo Roof Tile.jpg",
    specifications: {
      material: ["Steel"],
      pattern: ["BAMBOO DESIGN"],
      colors: ["Red"]
    },
    applications: ["Roofing"],
    featured: true
  },
  {
    id: "stone-coated-metal-roof-tile",
    name: "Stone Coated Metal Roof Tile",
    category: "Roof Tiles",
    subcategory: "Stone Coated Metal Roof Tile",
    brand: "colourshine",
    description: "Premium Stone Coated Metal Roof Tiles with profile pattern.",
    image: "/images/Stone Coated Metal Roof Tile.jpg",
    specifications: {
      thickness: ["15 mm (Tile)", "0.35 mm (Sheet)"],
      effectiveCoverWidth: ["1000 mm"]
    },
    applications: ["Residential", "Commercial", "Industrial", "Institutional"],
    featured: true
  },

  // Rainwater Gutters
  {
    id: "10-feet-upvc-gutter",
    name: "10 feet Upvc Gutter",
    category: "Rainwater Gutters",
    subcategory: "10 feet UPVC Gutter",
    brand: "Generic",
    description: "White 10 Feet UPVC Gutter for home usage.",
    image: "/images/10 feet Upvc Gutter.jpg",
    specifications: {
      material: ["UPVC"],
      size: ["6 inches", "8 inches"],
      colors: ["White"]
    },
    applications: ["Home"],
    featured: true
  },
  {
    id: "upvc-rain-gutter",
    name: "Upvc Rain Gutter",
    category: "Rainwater Gutters",
    subcategory: "UPVC Rain Gutter",
    brand: "Generic",
    description: "White UPVC Rain Gutter (Half Round).",
    image: "/images/Upvc Rain Gutter.jpg",
    specifications: {
      material: ["UPVC"],
      width: ["100 mm"],
      size: ["10 ft and 16.5 ft length"],
      colors: ["White"]
    },
    applications: ["Commercial Roof", "Residential Roof", "Industrial Roof", "Warehouse Roof"],
    featured: false
  },

  // Mild Steel Pipes
  {
    id: "gp-square-pipe",
    name: "Gp Square Pipe",
    category: "Mild Steel Pipes",
    subcategory: "GP Square Pipe",
    brand: "Generic",
    description: "GP Square Pipe (Outer Size: 20 x 20 mm, Wall Thickness: 1.5 mm).",
    image: "/images/Gp Square Pipe.jpg",
    specifications: {
      materialGrade: ["Mild Steel"],
      outerSize: ["20 x 20 mm"],
      wallThickness: ["1.5 mm"]
    },
    applications: ["Construction", "Fabrication", "Industrial"],
    featured: true
  },
  {
    id: "mild-steel-rectangular-pipe",
    name: "Mild Steel Rectangular Pipe",
    category: "Mild Steel Pipes",
    subcategory: "Mild Steel Rectangular Pipe",
    brand: "Tata Structura",
    description: "Mild Steel Rectangular Pipe (50 x 25 mm).",
    image: "/images/Mild Steel Rectangular Pipe.jpg",
    specifications: {
      size: ["50 x 25 mm (2x1 in)"],
      thickness: ["1.6 mm (16 Gauge)"],
      colors: ["Silver"]
    },
    applications: ["Construction Projects", "Building Frames", "Supports", "Columns"],
    featured: false
  },

  // Fiber Cement Boards
  {
    id: "visaka-v-board",
    name: "Visaka V Board Fiber Cement Board",
    category: "Fiber Cement Boards",
    subcategory: "Visaka V Board",
    brand: "Visaka",
    description: "Greyish white non asbestos flat cement fibre board for partitions.",
    image: "/images/Visaka V Board Fiber Cement Board.jpg",
    specifications: {
      thickness: ["6 mm"],
      size: ["2440x1220 mm"],
      colors: ["Greyish White"]
    },
    applications: ["Walls", "Partition"],
    featured: true
  },

  // Paper Rolls
  {
    id: "8mm-silver-foil-roll",
    name: "8mm Silver foil roll",
    category: "Paper Rolls",
    subcategory: "Silver Foil Roll",
    brand: "Generic",
    description: "Imitation Silver foil roll (120 GSM).",
    image: "/images/8mm Silver Foil Roll.jpg",
    specifications: {
      gsm: ["120 GSM"],
      sheetSize: ["80 x 80 mm"],
      colors: ["Silver"]
    },
    applications: ["Food Use", "Packaging", "Decorative"],
    featured: false
  },
  {
    id: "brown-kraft-paper-roll",
    name: "Brown Kraft Paper Roll",
    category: "Paper Rolls",
    subcategory: "Brown Kraft Paper Roll",
    brand: "Generic",
    description: "Brown Recycled Kraft Paper Roll.",
    image: "/images/Brown Kraft Paper Roll.jpg",
    specifications: {
      gsm: ["120 gsm"],
      rollWidth: ["1067 mm (42 in)"],
      colors: ["Brown"]
    },
    applications: ["Road Work", "Packaging"],
    featured: false
  },

  // Accessories & Ventilation (Moved from Fencing Solutions)
  {
    id: "pvc-lattice-sheets",
    name: "Pvc Lattice Sheets",
    category: "Accessories & Ventilation",
    subcategory: "PVC Lattice Sheets",
    brand: "Branded",
    description: "Square PVC Lattice Sheets, UV Coated (8 X 4 SIZE).",
    image: "/images/Pvc Lattice Sheets.jpg",
    specifications: {
      thickness: ["6 mm"],
      height: ["8 feet"],
      holeSize: ["25 x 25 mm"]
    },
    applications: ["Privacy Screening", "Wall Decor", "Balcony Enclosures", "Garden Partitions", "Pergola Coverings"],
    featured: true
  },

  // Accessories & Ventilation
  {
    id: "polycarbonate-ventilation-louvers",
    name: "Polycarbonate Ventilation Louvers",
    category: "Accessories & Ventilation",
    subcategory: "Polycarbonate Ventilation Louvers",
    brand: "Generic",
    description: "Adjustable Polycarbonate Ventilation Louvers.",
    image: "/images/Polycarbonate Ventilation Louvers.jpg",
    specifications: {
      material: ["Polycarbonate"]
    },
    applications: ["Generator Room", "Fresh Air", "Exhaust Air", "Cross Ventilation", "Plant Room"],
    featured: false
  },
  {
    id: "turbo-fan-ventilators",
    name: "Turbo Fan Ventilators",
    category: "Accessories & Ventilation",
    subcategory: "Turbo Fan Ventilators",
    brand: "Generic",
    description: "18 Inch Aluminum Turbo Fan Ventilators (1000 CFM).",
    image: "/images/Turbo Fan Ventilators.jpg",
    specifications: {
      size: ["18 Inch", "12 inch"],
      material: ["Aluminum"]
    },
    applications: ["Rooftop"],
    featured: true
  },
  {
    id: "pvc-sheet-thoomanom",
    name: "Pvc Sheet Thoomanom",
    category: "Accessories & Ventilation",
    subcategory: "PVC Sheet Thoomanom",
    brand: "Generic",
    description: "White PVC Sheet Thoomanom (8 mm thickness).",
    image: "/images/Pvc Sheet Thoomanom.jpg",
    specifications: {
      thickness: ["8 mm"],
      length: ["8 Feet"],
      sheetSize: ["120x60 inch"],
      colors: ["White"]
    },
    applications: ["Floor Protection", "Industrial", "Signage", "Cladding"],
    featured: false
  }
];
