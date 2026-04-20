// IRONLAND 产品数据 - 增强版

export interface Product {
  sku: string;
  name: string;
  description: string;
  features: string[];
  specifications: {
    dimensions?: string;
    weight?: string;
    material?: string;
    capacity?: string;
    color?: string[];
  };
  images: string[];
  minOrder?: number;
  leadTime?: string;
  moq?: string;
  oemOdm?: string;
  customOptions?: string;
  certifications?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  imageCount: number;
  featured: boolean;
  coverImage: string;
  products: Product[];
}

// 详细产品数据
export const productCategories: ProductCategory[] = [
  {
    id: 'tool-pouches',
    name: 'Tool Pouches',
    description: 'Professional tool pouches for organized storage and quick access',
    imageCount: 390,
    featured: false,
    coverImage: '/images/products/tool-pouches.jpg',
    products: [
      {
        sku: 'TP-001',
        name: 'TP-001 Work Belt Pouch',
        description: 'TP-001 Work Belt Pouch is made of 1680D polyester combined with EVA. It has been designed to support the pockets even when they are full. Knife slot made from real leather holds any common utility knife so it is always handy when necessary. Screwdriver holder made from real leather provides convenient storage. Necessary equipment is close without coming off the roof or down from the ladder. 1680D nylon lined interior that will protect from years of wear and tear from screws, nails and sharp fixing. Rigid pocket sides keep the shape of the pouch for free removal of small fixings. Perfectly positioned wide pockets hold plenty of fixings, provide quick tool recognition and are easy to get into.',
        features: [
          'Made of 1680D polyester combined with EVA for durability',
          'Designed to support pockets even when full',
          'Real leather knife slot holds common utility knives',
          'Real leather screwdriver holder for convenient storage',
          '1680D nylon lined interior protects from wear and tear',
          'Rigid pocket sides maintain shape for easy removal of fixings',
          'Wide pockets hold plenty of fixings and provide quick tool recognition',
          'Easy access design for efficient workflow',
          'Perfect for roof work and ladder jobs',
          'Durable construction withstands screws, nails and sharp items',
          'EVA combined material provides structural support',
          'Professional grade for daily work use'
        ],
        specifications: {
          dimensions: '31x15x26cm',
          material: 'EVA combined 1680D polyester, Leather'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-001-1.jpg',
          '/images/products/TP-001-2.jpg',
          '/images/products/TP-001-3.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TP-002',
        name: 'TP-002 Carpenters Tool Pouch',
        description: 'TP-002 Carpenters Tool Pouch is featured a nylon 1680D, that will put up with years of wear and tear from big roofing screws, nails and other sharp fixings. Measuring tape clip holds any common builder\'s tape measure from 3-10 meters. Side-Gate stainless steel metal tool holder swings to keep your hammer at a comfortable angle. New solution with side gate lets you easily put the tool in without looking at the holder.',
        features: [
          '1680D nylon material withstands years of wear and tear',
          'Resistant to big roofing screws, nails and sharp fixings',
          'Measuring tape clip holds common builder\'s tape measure (3-10 meters)',
          'Side-Gate stainless steel metal tool holder for hammer',
          'Swings to keep hammer at comfortable angle',
          'Side gate design allows easy tool insertion without looking',
          'EVA bonded 1680D polyester - thick, waterproof, tough and wear-resistant',
          'Resilient body that will not be squashed easily',
          'Reflective band on top edges for dark visibility',
          'Artificial leather tool slots on both sides',
          'Rotatable stainless steel hammer holder',
          'Metal measuring tape clip for multi-trade use',
          'Over 10 metal rivets at joints for extreme strength'
        ],
        specifications: {
          dimensions: '28x16x32cm',
          material: 'EVA combined 1680D polyester, Leather'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-002-1.jpg',
          '/images/products/TP-002-2.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TP-003',
        name: 'TP-003 Roofing Pouch',
        description: 'TP-003 Roofing Pouch comfortably on any IRONLAND tool belt or normal clothing belt. Unique design – suitable for left and right handed users. Suitable for forward or backwards facing machines. Designed to hold mains powered or cordless drills. Knife slot made from real leather holds any common utility knives, so it is always handy when is necessary.',
        features: [
          'Comfortable fit on any IRONLAND tool belt or normal clothing belt',
          'Unique design suitable for left and right handed users',
          'Suitable for forward or backwards facing machines',
          'Designed to hold mains powered or cordless drills',
          'Real leather knife slot holds common utility knives',
          '1680D polyester combined with EVA for durability',
          '2 pocket fixing pouch for organized storage',
          'Drill holster for convenient drill storage',
          'Always handy design for necessary tools',
          'Professional grade for roofing work',
          'Durable construction withstands job site conditions',
          'Versatile compatibility with various belts'
        ],
        specifications: {
          dimensions: '24x15x30cm',
          material: 'EVA combined 1680D polyester, Leather'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-003-1.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TP-004',
        name: 'TP-004 Drill Holster',
        description: 'TP-004 Drill Holster with rigid pocket sides keep the shape of the pouch for free removal of small fixings. Unique design – suitable for left and right handed user. Suitable for forward or backwards facing machines. Designed to hold mains powered or cordless drills. Drill bits holders made of real leather provide with convenient storage so it is always handy when is necessary.',
        features: [
          'Rigid pocket sides maintain shape for free removal of small fixings',
          'Unique design suitable for left and right handed users',
          'Suitable for forward or backwards facing machines',
          'Designed to hold mains powered or cordless drills',
          'Drill bits holders made of real leather for convenient storage',
          '1680D polyester combined with EVA for durability',
          '1 pocket fixing pouch with leather screwdriver holder',
          'Always handy design for necessary tools',
          'Professional grade for drill storage and transport',
          'Durable construction withstands job site conditions',
          'Rigid structure protects drills and accessories',
          'Compact size for easy carrying and access'
        ],
        specifications: {
          dimensions: '20x10x30cm',
          material: 'EVA combined 1680D polyester, Leather'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-004-1.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TP-005',
        name: 'TP-005 Work Tool Pouch',
        description: 'The Work Tool Pouch sits comfortably on any IRONLAND tool belt or normal clothing belt. Measuring tape clip holds any common builder\'s tape measure from 3-10 meters. Ready to carry a full range of specialized electrical tools. Electrician\'s Pouch specifically researched design to give electricians the compartments they need. Main deep pocket for safe storage of long tools like a voltmeter, fixings, measuring instruments, etc. Chain hook provides easy access insulation tapes or flex. Screwdriver holders made from real leather provide convenient storage. Necessary equipment is close without coming off the roof or down from the ladder. Knife slot made from real leather holds any common utility knives so it is always handy when is needed.',
        features: [
          'Comfortable fit on any IRONLAND tool belt or normal clothing belt',
          'Measuring tape clip holds common builder\'s tape measure (3-10 meters)',
          'Ready to carry a full range of specialized electrical tools',
          'Electrician\'s Pouch with specifically researched design',
          'Main deep pocket for safe storage of long tools like voltmeter',
          'Chain hook provides easy access to insulation tapes or flex',
          'Screwdriver holders made from real leather for convenient storage',
          'Knife slot made from real leather holds common utility knives',
          '1680D polyester combined with EVA for durability',
          '1 pocket fixing pouch with leather screwdriver holder',
          'Professional grade for electrical work',
          'Necessary equipment is always close at hand'
        ],
        specifications: {
          dimensions: '23x8x30cm',
          material: 'EVA combined 1680D polyester, Leather'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-005-1.jpg',
          '/images/products/TP-005-2.jpg',
          '/images/products/TP-005-3.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TP-006X',
        name: 'TP-006X Tool Belt Pouch',
        description: 'TP-006X Tool Belt Pouch combines two useful pouches in one item. It is made from a strong, durable polyester fabric, 600 denier. It has heavy duty stitching for extra reinforcement and extra leather on high friction points. The pouch has a rugged PVC bottom cover, to protect from wear and tear. Some accessories organizer cups can fit into the nail pockets, for easy transfer from storage box to belt. There are multiple size pockets and loops for maximum organization of tools and small parts. A specially designed pocket and loop offer maximum protection for a jab saw. It also has an integrated metal clip tape holder.',
        features: [
          'Combines two useful pouches in one item',
          'Made from strong durable 600 denier polyester fabric',
          'Heavy duty stitching for extra reinforcement',
          'Extra leather on high friction points',
          'Rugged PVC bottom cover for protection',
          'Accessories organizer cups fit into nail pockets',
          'Easy transfer from storage box to belt',
          'Multiple size pockets for maximum organization',
          'Multiple loops for tools and small parts',
          'Specially designed pocket for jab saw protection',
          'Loop offers maximum protection for jab saw',
          'Integrated metal clip tape holder',
          '2 compartments with 5 internal pockets',
          '3 holster pockets for tool storage',
          'Easy-carry webbing handle'
        ],
        specifications: {
          dimensions: '25x30x13cm',
          material: '600D Polyester, PU'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-006X-1.jpg',
          '/images/products/TP-006X-2.jpg',
          '/images/products/TP-006X-3.jpg',
          '/images/products/TP-006X-4.jpg',
          '/images/products/TP-006X-5.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TP-007X',
        name: 'TP-007X Fastener Tool Pouch',
        description: 'TP-007X Fastener Tool Pouch is made of 600D polyester, double-reinforced front pockets provides extra capacity and easy access, large closed zippered pocket – suitable for all essentials: wallet, keys and cell phone, Special pocket and safety loop for jab saw – for maximum protection, Integrated metal clip tape holder, External screwdriver\'s leather holder, Extra reinforcement with heavy stitching.',
        features: [
          'Made of durable 600D polyester',
          'Double-reinforced front pockets for extra capacity',
          'Easy access design for quick tool retrieval',
          'Large closed zippered pocket for essentials',
          'Suitable for wallet, keys and cell phone storage',
          'Special pocket and safety loop for jab saw',
          'Maximum protection for jab saw',
          'Integrated metal clip tape holder',
          'External screwdriver\'s leather holder',
          'Extra reinforcement with heavy stitching',
          '3 compartments with 5 internal pockets',
          '3 holster pockets for tool organization',
          'Easy-carry webbing handle',
          'Designed for fasteners and small parts'
        ],
        specifications: {
          dimensions: '25x30x13cm',
          material: '600D Polyester, PU'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-007X-1.jpg',
          '/images/products/TP-007X-2.jpg',
          '/images/products/TP-007X-3.jpg',
          '/images/products/TP-007X-4.jpg',
          '/images/products/TP-007X-5.jpg',
          '/images/products/TP-007X-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TP-008X',
        name: 'TP-008X Tool Pouch Bag',
        description: 'TP-008X Tool Pouch Bag combines two useful pouches in one item. It is made from a strong, durable polyester fabric, 600 denier. It has heavy duty stitching for extra reinforcement and extra leather on high friction points. The pouch has a rugged PVC bottom cover, to protect from wear and tear. There are multiple size pockets and loops for maximum organization of tools and small parts. A specially designed pocket and loop offer maximum protection for a jab saw.',
        features: [
          'Combines two useful pouches in one item',
          'Made from strong durable 600 denier polyester fabric',
          'Heavy duty stitching for extra reinforcement',
          'Extra leather on high friction points',
          'Rugged PVC bottom cover for protection',
          'Protects from wear and tear',
          'Multiple size pockets for maximum organization',
          'Multiple loops for tools and small parts',
          'Specially designed pocket for jab saw',
          'Loop offers maximum protection for jab saw',
          '2 compartments with 5 internal pockets',
          '3 holster pockets for tool storage',
          'Easy-carry webbing handle',
          'Durable construction for professional use'
        ],
        specifications: {
          dimensions: '25x30x13cm',
          material: '600D Polyester, PU'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-008X-1.jpg',
          '/images/products/TP-008X-2.jpg',
          '/images/products/TP-008X-3.jpg',
          '/images/products/TP-008X-4.jpg',
          '/images/products/TP-008X-5.jpg',
          '/images/products/TP-008X-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TP-009',
        name: 'TP-009 Drill Pouch',
        description: 'TP-009 Drill Pouch is made of ballistic poly material for added durability. This drill holster has a safety strap with quick-release buckle for easy access to your tools. This drill holster contains multiple outer pockets and sleeves for complete bit organization. Hook-and-loop backing help to keep strap back when drill holster is not in use. This drill holster holds most brands of T-handle drills. Adjustable strap and quick-release buckle holds drill securely in place.',
        features: [
          'Made of ballistic poly material for added durability',
          'Safety strap with quick-release buckle for easy access',
          'Multiple outer pockets for bit organization',
          'Sleeves for complete bit organization',
          'Hook-and-loop backing to keep strap in place',
          'Holds most brands of T-handle drills',
          'Adjustable strap for secure fit',
          'Quick-release buckle holds drill securely',
          '2 holsters for drill storage',
          '6 elastic webbing for additional tools',
          'Durable 600D polyester construction',
          'Professional grade for job site use'
        ],
        specifications: {
          dimensions: '16x26.5x6cm',
          material: '600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TP-009-1.jpg',
          '/images/products/TP-009-2.jpg',
          '/images/products/TP-009-3.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'open-tote',
    name: 'Open Tote Tool Bag',
    description: 'Easy-access open tote design for quick tool retrieval and maximum visibility',
    imageCount: 248,
    featured: true,
    coverImage: '/images/products/open-tote.jpg',
    products: [
      {
        sku: 'OT-001',
        name: 'OT-001 24 Inch Tool Bag',
        description: 'OT-001 24 Inch Tool Bag With Cover is equipped with a removable upper flap and can be easily changed into a completely closed tool case. It holds various sizes pockets. 12 outside pockets, including a saw holder and pockets with Velcro closure, and 10 inside pockets.',
        features: [
          '24 inch extra-large capacity for extensive tool storage',
          'Removable upper flap converts to completely closed tool case',
          '1680D polyester fabric for superior durability',
          '12 outside pockets including saw holder and Velcro closure pockets',
          '10 inside pockets for organized tool storage',
          'Stainless steel handle for heavy-duty carrying',
          'PP reinforced plastic bottom for stability and protection',
          'Reinforced sides for structural integrity',
          'Adjustable shoulder strap for comfortable transport',
          'Wide mouth opening for easy tool access',
          'Metal frame construction for long-lasting use'
        ],
        specifications: {
          dimensions: '62x32x40cm',
          material: '1680D Polyester, Metal Handle, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-001-1.jpg',
          '/images/products/OT-001-2.jpg',
          '/images/products/OT-001-3.jpg',
          '/images/products/OT-001-4.jpg',
          '/images/products/OT-001-5.jpg',
          '/images/products/OT-001-6.jpg',
          '/images/products/OT-001-7.jpg',
          '/images/products/OT-001-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-002',
        name: 'OT-002 Open Tool Tote',
        description: 'OT-002 12 Inch Open Tool Tote is organized in 3 main compartments in order to better organize the case. It features 13 external pockets, 4 internal pockets and 15 loops. The open design enables quick tool location. Reinforced sides and bottom give maximum tool protection and keep the case stable and vertical to prevent any danger of spillage of equipment. Two plastic feet protect the case against wet floor.',
        features: [
          '12 inch compact size perfect for technicians and DIY enthusiasts',
          '3 main compartments for better tool organization',
          '13 external pockets for easy access to frequently used tools',
          '4 internal pockets for additional storage',
          '15 loops for hanging tools and accessories',
          'Open design enables quick tool location and access',
          'Reinforced sides and bottom for maximum tool protection',
          'Keeps case stable and vertical to prevent equipment spillage',
          'Two plastic feet protect against wet floor surfaces',
          'Metal handle for durable and comfortable carrying',
          'Adjustable shoulder strap for versatile transport options'
        ],
        specifications: {
          dimensions: '31x22x37cm',
          material: '1680D Polyester, Metal Handle'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-002-1.jpg',
          '/images/products/OT-002-2.jpg',
          '/images/products/OT-002-3.jpg',
          '/images/products/OT-002-4.jpg',
          '/images/products/OT-002-5.jpg',
          '/images/products/OT-002-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-003',
        name: 'OT-003 Plumber Tool Bags',
        description: 'OT-003 18 Inch Plumber Tool Bags holds various sizes pockets. 5 outside pockets, including PU net pockets and pockets with zipper closure, and 8 inside. The open design enables quick tool location. Reinforced sides and bottom give maximum tool protection and keep the case stable and vertical to prevent any danger of spillage of equipment. Riveted in critical points for truly industrial strength with galvanized washers top and bottom.',
        features: [
          '18 inch large capacity for plumbers and professionals',
          '5 outside pockets including PU net pockets and zipper closure pockets',
          '8 inside pockets for comprehensive tool organization',
          'Open design enables quick tool location and access',
          'Reinforced sides and bottom for maximum tool protection',
          'Keeps case stable and vertical to prevent equipment spillage',
          'Riveted in critical points for truly industrial strength',
          'Galvanized washers top and bottom for durability',
          'Stainless steel handle for heavy-duty carrying',
          '600D polyester fabric for durability',
          'Adjustable shoulder strap for versatile transport options'
        ],
        specifications: {
          dimensions: '47x25x32cm',
          material: '1680D Polyester, Metal Handle'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-003-1.jpg',
          '/images/products/OT-003-2.jpg',
          '/images/products/OT-003-3.jpg',
          '/images/products/OT-003-4.jpg',
          '/images/products/OT-003-5.jpg',
          '/images/products/OT-003-6.jpg',
          '/images/products/OT-003-7.jpg',
          '/images/products/OT-003-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-004',
        name: 'OT-004 12 Inch Tool Bag',
        description: 'OT-004 12 Inch Tool Bag is constructed with oxford cloth and will stand the test of time. Strengthened removable shoulder straps allow you to carry more, 4 rubber sheets keep the bag from direct touch avoiding damage. Perfect for electrical, electrician, construction, contractor, carpenters, framers, plumbing. Ideal for carrying hand tools and other small to medium items.',
        features: [
          '12 inch compact size perfect for electricians and professionals',
          'Constructed with durable oxford cloth for long-lasting use',
          'Strengthened removable shoulder straps for increased carrying capacity',
          'Foldable sides for convenient storage and transport',
          '10 external pockets for organized tool storage',
          '4 rubber sheets protect the bag from direct contact and damage',
          'Stainless steel handle for heavy-duty carrying',
          '600D polyester fabric for durability and abrasion resistance',
          'Ideal for electrical, construction, carpentry, and plumbing work',
          'Perfect for carrying hand tools and small to medium items'
        ],
        specifications: {
          dimensions: '30x21x27cm',
          material: '600D Polyester, Metal Handle'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-004-1.jpg',
          '/images/products/OT-004-2.jpg',
          '/images/products/OT-004-3.jpg',
          '/images/products/OT-004-4.jpg',
          '/images/products/OT-004-5.jpg',
          '/images/products/OT-004-6.jpg',
          '/images/products/OT-004-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-005',
        name: 'OT-005 Open Top Tool Bag',
        description: 'OT-005 Open Top Tool Bag thanks to its open mouth design enables quick tool location. It holds 12 outside pockets, including a practical saw holder, and 10 inside. Internal pockets provide great organization inside the case, no more mess in your bag. Reinforced sides and PP bottom with squared shape give maximum tool protection and keep the case stable and vertical. Made of strong polyester 1680D material it is very robust and durable.',
        features: [
          '20 inch large capacity for extensive tool storage',
          'Open mouth design enables quick tool location and access',
          '12 outside pockets including practical saw holder',
          '10 inside pockets for comprehensive organization',
          'Internal pockets provide great organization, no more mess',
          'Reinforced sides for structural integrity and protection',
          'PP bottom with squared shape for maximum tool protection',
          'Keeps case stable and vertical to prevent spillage',
          '1680D polyester material for robust durability',
          'Stainless steel handle for heavy-duty carrying',
          '22 pockets total for extensive storage options',
          'Adjustable shoulder strap for comfortable transport'
        ],
        specifications: {
          dimensions: '54x29x38cm',
          material: '1680D Polyester, Metal Handle, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-005-1.jpg',
          '/images/products/OT-005-2.jpg',
          '/images/products/OT-005-3.jpg',
          '/images/products/OT-005-4.jpg',
          '/images/products/OT-005-5.jpg',
          '/images/products/OT-005-6.jpg',
          '/images/products/OT-005-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-006',
        name: 'OT-006 Foldable Tool Bag',
        description: 'OT-006 Foldable Tool Bag holds 17 pockets. The special foldable design saves much space in packing. The open top enables quick tool location. Adjustable inside PE board and reinforce bottom give maximum tool protection and keep the case stable and vertical to prevent any danger of spillage of equipment.',
        features: [
          '16 inch compact size perfect for professionals and DIY enthusiasts',
          'Foldable design saves much space in packing and storage',
          '17 external pockets for organized tool storage and quick access',
          '8 internal pockets for additional tool organization',
          '7 loops for hanging tools and accessories',
          'Open top design enables quick tool location and access',
          'Adjustable inside PE board for customizable compartment sizes',
          'Reinforced bottom with 5 rubber feet for stability and protection',
          'Keeps case stable and vertical to prevent equipment spillage',
          'Metal handle with comfortable grip for durable carrying',
          'Adjustable shoulder strap for versatile transport options',
          '1680D polyester fabric for superior durability and abrasion resistance'
        ],
        specifications: {
          dimensions: '41x20x24.5cm',
          material: '1680D Polyester, Metal Handle'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-006-1.jpg',
          '/images/products/OT-006-2.jpg',
          '/images/products/OT-006-3.jpg',
          '/images/products/OT-006-4.jpg',
          '/images/products/OT-006-5.jpg',
          '/images/products/OT-006-6.jpg',
          '/images/products/OT-006-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-007',
        name: 'OT-007 Open Tool Bag',
        description: 'OT-007 Open Tool Bag With Shoulder Strap made from durable 600d fabric with a rigid frame and sturdy handle, this tool bag is the perfect storage bin for all your handheld tools. Innovatively designed with an open top and rigid frame allowing easy access to tools and equipment. Equipped with 14 various pockets, this bag is created to organize and store your handheld tools and other construction accessories. Includes measuring tape pocket, Allen wrench pocket, plyer pockets, screwdriver pocket, shoulder strap and more.',
        features: [
          '16 inch size perfect for professionals and construction workers',
          'Durable 600D fabric construction for long-lasting use',
          'Rigid frame provides structural integrity and stability',
          'Open top design allows easy access to tools and equipment',
          '14 various pockets for comprehensive tool organization',
          'Measuring tape pocket for convenient storage',
          'Allen wrench pocket for specialized tools',
          'Pliers pockets for hand tool storage',
          'Screwdriver pocket for organized tool placement',
          'Stainless steel handle for heavy-duty carrying',
          'Reinforced sides and bottom for maximum tool protection',
          'Adjustable shoulder strap for versatile transport options',
          'Perfect storage bin for handheld tools and construction accessories'
        ],
        specifications: {
          dimensions: '40x24x26cm',
          material: '600D Polyester, Metal Handle'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-007-1.jpg',
          '/images/products/OT-007-2.jpg',
          '/images/products/OT-007-3.jpg',
          '/images/products/OT-007-4.jpg',
          '/images/products/OT-007-5.jpg',
          '/images/products/OT-007-6.jpg',
          '/images/products/OT-007-7.jpg',
          '/images/products/OT-007-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-008',
        name: 'OT-008 Power Tool Bag',
        description: 'OT-008 Power Tool Bag is equipped with a removable upper flap, with Velcro and metal knobs closure system, which allows to completely close the case. Equipped with various pockets and internal stripes, this case features a practical saw holder provided with zipper opening. Reinforced sides and strong PVC squared shape bottom give maximum tool protection and keep the case stable and vertical.',
        features: [
          '18 inch large capacity for power tools and equipment',
          'Removable upper flap with Velcro and metal knobs closure system',
          'Can completely close the case for secure tool storage',
          'Various pockets and internal stripes for organized storage',
          'Practical saw holder provided with zipper opening',
          'Reinforced sides for structural integrity and protection',
          'Strong PVC squared shape bottom for durability',
          'Maximum tool protection against impacts and wear',
          'Keeps case stable and vertical to prevent spillage',
          '1680D polyester fabric for superior strength',
          'Stainless steel handle for heavy-duty carrying',
          'Adjustable shoulder strap for versatile transport options'
        ],
        specifications: {
          dimensions: '47x26x37cm',
          material: '1680D Polyester, Metal Handle, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-008-1.jpg',
          '/images/products/OT-008-2.jpg',
          '/images/products/OT-008-3.jpg',
          '/images/products/OT-008-4.jpg',
          '/images/products/OT-008-5.jpg',
          '/images/products/OT-008-6.jpg',
          '/images/products/OT-008-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-009',
        name: 'OT-009 Heavy Duty Tool Bag With Cover',
        description: 'OT-009 Heavy Duty Tool Bag With Cover is equipped with a removable upper flap, with Velcro and metal knobs closure system, which allows to completely close the case. Equipped with 17 pockets and removable tool wall, this case features a practical saw holder provided with zipper opening. Reinforced sides and strong PVC squared shape bottom give maximum tool protection and keep the case stable and vertical.',
        features: [
          '18 inch large capacity for heavy-duty tool storage',
          'Removable upper flap with Velcro and metal knobs closure system',
          'Can completely close the case for secure tool protection',
          '17 pockets total for comprehensive organization',
          'Removable tool wall for customizable storage',
          'Practical saw holder provided with zipper opening',
          '8 external pockets for easy access to frequently used tools',
          '9 internal pockets for additional tool organization',
          '24 loops for hanging tools and accessories',
          'Reinforced sides for structural integrity and protection',
          'Strong PVC squared shape bottom for durability',
          'Keeps case stable and vertical to prevent spillage',
          '1680D polyester fabric for superior strength and abrasion resistance',
          'Metal handle for heavy-duty carrying',
          'Adjustable shoulder strap for versatile transport options'
        ],
        specifications: {
          dimensions: '46x21x35cm',
          material: '1680D Polyester, Metal Handle, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-009-1.jpg',
          '/images/products/OT-009-2.jpg',
          '/images/products/OT-009-3.jpg',
          '/images/products/OT-009-4.jpg',
          '/images/products/OT-009-5.jpg',
          '/images/products/OT-009-6.jpg',
          '/images/products/OT-009-7.jpg',
          '/images/products/OT-009-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-010',
        name: 'OT-010 HVAC Tool Bag',
        description: 'OT-010 HVAC Tool Bag holds 1 external pocket, 1 internal pocket and 1 removable tool wall with 8 pockets and 14 loops, which divides the main compartment into 2 compartments. Reinforced PP bottom with squared shape gives maximum tool protection and keeps the bag stable and vertical. Wide zip opening provides easy tool access from the center compartments.',
        features: [
          '16 inch center tote design for HVAC professionals',
          'Collapsible design saves shipping costs and storage space',
          'Removable tool divider wall with 8 pockets and 14 loops',
          'Divides main compartment into 2 separate spaces',
          'Wide zip opening for easy tool access from center compartments',
          '1 external pocket for frequently used items',
          '1 internal pocket for additional storage',
          'Reinforced PP bottom with squared shape for maximum protection',
          'Keeps bag stable and vertical to prevent spillage',
          '1680D ballistic polyester for superior durability',
          'Heavy-duty smooth No. 8 zipper withstands thousands of uses',
          'Stainless steel handle with sponge grip for comfortable carrying',
          'Perfect for HVAC, electrician, technician, and professionals',
          'Protects tools from water, dirt, dust, and debris'
        ],
        specifications: {
          dimensions: '40x21x29cm',
          material: '1680D Polyester, Metal Handle, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-010-1.jpg',
          '/images/products/OT-010-2.jpg',
          '/images/products/OT-010-3.jpg',
          '/images/products/OT-010-4.jpg',
          '/images/products/OT-010-5.jpg',
          '/images/products/OT-010-6.jpg',
          '/images/products/OT-010-7.jpg',
          '/images/products/OT-010-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-011',
        name: 'OT-011 Small Open Tote Tool Bag',
        description: 'OT-011 Small Open Tote Tool Bag is designed for professionals who need quick and easy access to their tools. Made of heavy duty 1680D polyester with stainless steel handle and plastic base, this compact yet spacious tote features open top design for immediate tool visibility and retrieval. With 11 external pockets and 8 internal pockets, it provides versatile storage options for various tools and accessories.',
        features: [
          '16 inch compact size perfect for professionals and DIY enthusiasts',
          'Open tote design allows quick and easy access to tools',
          '11 external pockets for organized storage and quick access',
          '8 internal pockets for additional tool organization',
          'Heavy duty 1680D polyester fabric for superior durability',
          'Stainless steel handle with comfortable grip for durable carrying',
          'Reinforced plastic base provides stability and protection',
          'Collapsible design saves space in packing and storage',
          'Multiple pocket sizes accommodate various tool types',
          'Compact and portable design for easy transport',
          'Perfect for electricians, technicians, and maintenance professionals',
          'Durable construction withstands daily professional use'
        ],
        specifications: {
          dimensions: '40x21x29cm',
          material: '1680D Polyester, Stainless Steel Handle, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-011-1.jpg',
          '/images/products/OT-011-2.jpg',
          '/images/products/OT-011-3.jpg',
          '/images/products/OT-011-4.jpg',
          '/images/products/OT-011-5.jpg',
          '/images/products/OT-011-6.jpg',
          '/images/products/OT-011-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'OT-012',
        name: 'OT-012 Open Tote Tool Bag',
        description: 'OT-012 Open Tote Tool Bag is equipped with a rotatable handle bar and can save space for delivery. The open mouth design enables quick tool location and access. Made of heavy duty 1680D polyester with metal handle and plastic base, this 16 inch tool tote provides durable and convenient storage solution for professionals.',
        features: [
          '16 inch size with open mouth design for quick tool access',
          'Rotatable handle bar for space-saving delivery and storage',
          'Open top design enables quick tool location and retrieval',
          'Heavy duty 1680D polyester fabric for superior durability',
          'Metal handle with comfortable grip for durable carrying',
          'Reinforced plastic base provides stability and protection',
          'Compact and portable design for easy transport',
          'Space-saving design ideal for shipping and storage',
          'Perfect for electricians, technicians, and DIY enthusiasts',
          'Durable construction withstands daily professional use'
        ],
        specifications: {
          dimensions: '40x22x31cm',
          material: '1680D Polyester, Metal Handle, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/OT-012-1.jpg',
          '/images/products/OT-012-2.jpg',
          '/images/products/OT-012-3.jpg',
          '/images/products/OT-012-4.jpg',
          '/images/products/OT-012-5.jpg',
          '/images/products/OT-012-6.jpg',
          '/images/products/OT-012-7.jpg',
          '/images/products/OT-012-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'zipper-mouth',
    name: 'Zipper Mouth Tool Bag',
    description: 'Secure zipper closure for maximum protection and organized storage',
    imageCount: 241,
    featured: true,
    coverImage: '/images/products/zipper-mouth.jpg',
    products: [
      {
        sku: 'GM-001',
        name: 'GM-001 Large Tool Bag',
        description: 'GM-001 Large Tool Bag has 2 inside dividers and 13 external pockets for a range of storage uses. Constructed of 1680 denier Spun Tuff fabric for durability, the bag has a dual-zipper top with pull strings for easy opening and closing. 8 internal elastic straps accommodate a wide variety of tools and tool sizes. This bag features rigid plastic sheets inside for reinforcing the bottom and the sides.',
        features: [
          '21 inch large capacity with PVC coated 1680D polyester oxford fabric for robust durability',
          '2 internal tool dividers creating 3 compartments for better tool organization',
          '13 external pockets for diverse storage needs and easy access',
          '8 internal elastic straps accommodate various tools and sizes',
          'Rigid plastic sheets reinforced bottom and sides for maximum protection',
          '5 plastic feet on bottom provide great stability and protection',
          'Dual-slider heavy duty zipper closure for easy tool access',
          'Wide mouth gate design for convenient tool retrieval',
          'Padded handle grip for comfortable carrying',
          'Adjustable detachable shoulder strap for versatile transport options',
          'Heavy duty stitching throughout for harsh use endurance'
        ],
        specifications: {
          dimensions: '55x30x35cm',
          material: '1680D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-001-1.jpg',
          '/images/products/GM-001-2.jpg',
          '/images/products/GM-001-3.jpg',
          '/images/products/GM-001-4.jpg',
          '/images/products/GM-001-5.jpg',
          '/images/products/GM-001-6.jpg',
          '/images/products/GM-001-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-002',
        name: 'GM-002 Small Tool Bag',
        description: 'GM-002 Small Tool Bag with its wide mouth zipper opening enables easy tool access from the center pocket. It features rigid plastic sheets inside for reinforcing the bottom and the sides. It holds 9 external pockets. A lot of space in the main compartment for your tools provides quick tool recognition.',
        features: [
          '12 inch compact size perfect for hand tools and small equipment',
          'Wide mouth zipper opening for easy tool access from center pocket',
          '9 external pockets for organized storage and quick access',
          'Rigid plastic sheets reinforced bottom and sides for structure and protection',
          '2-layer strong 600D polyester fabric for durability',
          'Spacious main compartment with room for various tools',
          'Padded handle for comfortable carrying',
          'Plastic feet on bottom for stability and protection',
          'Dual-slider zipper for convenient opening and closing',
          'Lightweight and portable design for easy transport'
        ],
        specifications: {
          dimensions: '31×17.5x23cm',
          material: '600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-002-1.jpg',
          '/images/products/GM-002-2.jpg',
          '/images/products/GM-002-3.jpg',
          '/images/products/GM-002-4.jpg',
          '/images/products/GM-002-5.jpg',
          '/images/products/GM-002-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-003',
        name: 'GM-003 Hand Tool Bag',
        description: 'GM-003 14 Inch Tool Bag with adjustable shoulder strap allows for easy access to contents. Ideal for carrying hand tools and other small to medium items. Top zipped wide open mouth for easy approaching tools. Rubber foam bottom keeps bag sturdy, protects contents from hard falls.',
        features: [
          '14 inch medium size ideal for hand tools and small to medium items',
          'Adjustable shoulder strap for comfortable carrying',
          'Top zipped wide open mouth for easy tool access',
          '10 external pockets for organized storage',
          '6 internal pockets for additional tool organization',
          'Rubber foam bottom keeps bag sturdy and protects contents',
          '600D polyester fabric for durability',
          'Dual-slider zipper for smooth opening and closing',
          'Padded handle for alternative carrying option',
          'Compact and portable design for easy transport'
        ],
        specifications: {
          dimensions: '34x18x23cm',
          material: '600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-003-1.jpg',
          '/images/products/GM-003-2.jpg',
          '/images/products/GM-003-3.jpg',
          '/images/products/GM-003-4.jpg',
          '/images/products/GM-003-5.jpg',
          '/images/products/GM-003-6.jpg',
          '/images/products/GM-003-7.jpg',
          '/images/products/GM-003-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-004',
        name: 'GM-004 16 Inch Tool Bag',
        description: 'GM-004 16 Inch Tool Bag with its wide mouth zipper opening enables easy tool access from the center pocket. It holds 13 external pockets, 8 internal pockets with shoulder strap and hard base. A lot of space in the main compartment for your tools provides quick tool recognition.',
        features: [
          '16 inch size perfect for contractors and professionals',
          'Wide mouth zipper opening for easy tool access from center pocket',
          '13 external pockets for organized storage and quick access',
          '8 internal pockets for additional tool organization',
          'Hard plastic base for stability and protection',
          'Adjustable shoulder strap for comfortable carrying',
          '600D polyester fabric for durability and water resistance',
          'Dual-slider zipper for smooth opening and closing',
          'Padded handle for alternative carrying option',
          'Spacious main compartment for various tools',
          'Water-resistant construction for all-weather use'
        ],
        specifications: {
          dimensions: '41x24x26.5cm',
          material: '600D Polyester, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-004-1.jpg',
          '/images/products/GM-004-2.jpg',
          '/images/products/GM-004-3.jpg',
          '/images/products/GM-004-4.jpg',
          '/images/products/GM-004-5.jpg',
          '/images/products/GM-004-6.jpg',
          '/images/products/GM-004-7.jpg',
          '/images/products/GM-004-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-005',
        name: 'GM-005 Tool Carry Bag',
        description: 'GM-005 tool carry bag with its wide mouth zipper opening enables easy tool access from the center pocket. It features rigid plastic sheets inside for reinforcing the bottom and the sides. It holds 7 external pockets and 6 internal pockets with shoulder strap. A lot of space in the main compartment for your tools provides quick tool recognition.',
        features: [
          '16 inch size ideal for electricians and professionals',
          'Wide mouth zipper opening for easy tool access from center pocket',
          '7 external pockets for organized storage and quick access',
          '6 internal pockets for additional tool organization',
          'Rigid plastic sheets reinforced bottom and sides for structure',
          'Adjustable shoulder strap for comfortable carrying',
          '600D polyester fabric for durability',
          'Dual-slider zipper for smooth opening and closing',
          'Padded handle for alternative carrying option',
          'Spacious main compartment for various tools',
          'Compact and portable design for easy transport'
        ],
        specifications: {
          dimensions: '41x19x26cm',
          material: '600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-005-1.jpg',
          '/images/products/GM-005-2.jpg',
          '/images/products/GM-005-3.jpg',
          '/images/products/GM-005-4.jpg',
          '/images/products/GM-005-5.jpg',
          '/images/products/GM-005-6.jpg',
          '/images/products/GM-005-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-006',
        name: 'GM-006 Soft Tool Bag',
        description: 'GM-006 Soft Tool Bag with its wide mouth zipper opening enables easy tool access from the center pocket. It features rigid plastic sheets inside for reinforcing the bottom and the sides. It holds 7 external pockets and 6 internal pockets with shoulder strap. A lot of space in the main compartment for your tools provides quick tool recognition.',
        features: [
          '18 inch large size for extensive tool storage',
          'Wide mouth zipper opening for easy tool access from center pocket',
          '7 external pockets for organized storage and quick access',
          '6 internal pockets for additional tool organization',
          'Rigid plastic sheets reinforced bottom and sides for structure',
          'Adjustable shoulder strap for comfortable carrying',
          '600D polyester fabric for durability',
          'Dual-slider zipper for smooth opening and closing',
          'Padded handle for alternative carrying option',
          'Spacious main compartment for various tools',
          'Soft yet durable construction for versatile use'
        ],
        specifications: {
          dimensions: '47x20x26cm',
          material: '600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-006-1.jpg',
          '/images/products/GM-006-2.jpg',
          '/images/products/GM-006-3.jpg',
          '/images/products/GM-006-4.jpg',
          '/images/products/GM-006-5.jpg',
          '/images/products/GM-006-6.jpg',
          '/images/products/GM-006-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-007',
        name: 'GM-007 Hard Bottom Tool Bag',
        description: 'GM-007 Hard Bottom Tool Bag with its wide mouth zipper opening enables easy tool access from the center pocket. It features rigid plastic sheets inside for reinforcing the bottom and the sides. Reinforced PP bottom with square shape gives maximum tool protection and keeps the bag stable and vertical. Designed with a shoulder strap for easy carrying. It holds 13 external pockets and 6 internal pockets. A lot of space in the main compartment for your tools provides quick tool recognition.',
        features: [
          '18 inch large size for extensive tool storage',
          'Wide mouth zipper opening for easy tool access from center pocket',
          '13 external pockets for organized storage and quick access',
          '6 internal pockets for additional tool organization',
          'Reinforced PP hard bottom with square shape for maximum protection',
          'Rigid plastic sheets reinforced sides for structure and stability',
          'Keeps bag stable and vertical when placed on ground',
          'Adjustable shoulder strap for comfortable carrying',
          '600D polyester fabric for durability',
          'Dual-slider zipper for smooth opening and closing',
          'Spacious main compartment for various tools'
        ],
        specifications: {
          dimensions: '46x26x33cm',
          material: '600D Polyester, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-007-1.jpg',
          '/images/products/GM-007-2.jpg',
          '/images/products/GM-007-3.jpg',
          '/images/products/GM-007-4.jpg',
          '/images/products/GM-007-5.jpg',
          '/images/products/GM-007-6.jpg',
          '/images/products/GM-007-7.jpg',
          '/images/products/GM-007-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-008',
        name: 'GM-008 18 Inch Tool Bag',
        description: 'GM-008 18 Inch Tool Bag With Hard Bottom constructed with soft fabric handles and padded shoulder strap for carrying longer distances. Top zipped wide open mouth for easy approaching tools. Ideal for carrying hand tools and other small to medium items. Tool bag is designed with an adjustable strap allows for easy access to contents, the soft sided tool bag can endure hard wear and tear. Waterproof rubber pp bottom keeps bag sturdy, protects contents from hard falls. Closes storage equipped with a waterproof, sturdy rigid base. 12 external pockets, 10 internal pockets and large space to organize a variety of wrenches, pliers, screwdrivers, meters, and accessories.',
        features: [
          '18 inch large size with 600D oxford fabric for toughness and durability',
          'Top zipped wide open mouth for easy tool access',
          '12 external pockets for organized storage and quick access',
          '10 internal pockets for additional tool organization',
          'Waterproof rubber PP hard bottom for protection and stability',
          'Sturdy rigid base allows bag to stand upright in any environment',
          'Soft fabric handles with padded grip for comfortable carrying',
          'Adjustable padded shoulder strap for longer distance transport',
          'Built-in metal frame allows mouth to open and close like a gate',
          'Oversized mesh zippered pocket on back for visibility',
          'Large interior main compartment (18" x 12.6" x 10") for various tools'
        ],
        specifications: {
          dimensions: '46x26x37cm',
          material: '600D Polyester, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-008-1.jpg',
          '/images/products/GM-008-2.jpg',
          '/images/products/GM-008-3.jpg',
          '/images/products/GM-008-4.jpg',
          '/images/products/GM-008-5.jpg',
          '/images/products/GM-008-6.jpg',
          '/images/products/GM-008-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-009',
        name: 'GM-009 Electrician Tool Bag',
        description: 'GM-009 Electrician Tool Bag With Three Compartment with wide mouth zipper opening for easy tool access from the center pocket. With 47 various pockets, including 4 net pockets. Reinforced PP bottom with squared shape gives maximum tool protection and keep the bag stable and vertical. Two sides large external areas provide more space for tools.',
        features: [
          '16 inch size with 600D polyester fabric for durability',
          'Three compartment design with wide mouth zipper opening',
          '47 various pockets including 4 net pockets for organized storage',
          'Reinforced PP bottom with squared shape for maximum tool protection',
          'Keeps bag stable and vertical to prevent equipment spillage',
          'Two sides large external areas for additional tool space',
          'Wide mouth zipper opening for easy tool access from center pocket',
          'Easy tool recognition with multiple pocket sizes',
          'Perfect for electricians and professionals',
          'Durable construction withstands daily professional use',
          'Convenient access design for on-the-job efficiency'
        ],
        specifications: {
          dimensions: '40x21x44cm',
          material: '1680D Polyester, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-009-1.jpg',
          '/images/products/GM-009-2.jpg',
          '/images/products/GM-009-3.jpg',
          '/images/products/GM-009-4.jpg',
          '/images/products/GM-009-5.jpg',
          '/images/products/GM-009-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-010',
        name: 'GM-010 Work Tool Storage Bag',
        description: 'GM-010 Work Tool Storage Bag with wide mouth zipper opening for easy tool access from the center pocket. Reinforced PP bottom with squared shape gives maximum tool protection and keep the bag stable and vertical. Two sides external practical pockets provide more space for tools.',
        features: [
          '16 inch size with 600D polyester fabric for durability',
          'Wide mouth zipper opening for easy tool access from center pocket',
          'Zipper closure with metal reinforcement for security and durability',
          'Reinforced PP bottom with squared shape for maximum tool protection',
          'Keeps bag stable and vertical to prevent equipment spillage',
          'Two sides external practical pockets for additional tool space',
          'Metal reinforcement at critical stress points',
          'Durable construction withstands daily professional use',
          'Compact and portable design for easy transport',
          'Perfect for work site storage and tool organization'
        ],
        specifications: {
          dimensions: '40x22x27cm',
          material: '600D Polyester, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-010-1.png'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-011',
        name: 'GM-011 Rigid Tool Bag',
        description: 'GM-011 Rigid Tool Bag is made of durable materials for internal protection against tool damage and wear. Huge capacity – squared geometric construction, creates more additional capacity than traditional bags. Vertical storage pockets for quick and easy tool access.',
        features: [
          '20 inch large size with 1680D polyester for superior durability',
          'Squared geometric construction creates more capacity than traditional bags',
          'Extra large center compartment for extensive tool storage',
          'Rigid structure protects tools from damage and wear',
          'Reinforced PP bottom for maximum stability and protection',
          'Vertical storage pockets for quick and easy tool access',
          'With lid design for additional protection',
          'Saw holder for convenient tool organization',
          'Adjustable shoulder strap for comfortable carrying',
          'Durable construction withstands heavy daily use',
          'Perfect for professionals requiring large capacity storage'
        ],
        specifications: {
          dimensions: '51×25.5x35cm',
          material: '1680D Polyester, Plastic Base, PU'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-011-1.jpg',
          '/images/products/GM-011-2.jpg',
          '/images/products/GM-011-3.jpg',
          '/images/products/GM-011-4.jpg',
          '/images/products/GM-011-5.jpg',
          '/images/products/GM-011-6.jpg',
          '/images/products/GM-011-7.jpg',
          '/images/products/GM-011-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'GM-012',
        name: 'GM-012 20 Inch Gate Mouth Tool Bag',
        description: 'GM-012 20 Inch Gate Mouth Tool Bag is made of the most heavy duty 1680 denier fabric for long lasting durability. Rigid and waterproof plastic base molded to fabric provides maximum tool protection and keeps the bag stable and vertical. Wide mouth zipper opening enables easy tool access from the center pocket. Features removable shoulder strap, phone pocket, and 3D air mesh back support for comfortable carrying.',
        features: [
          '20 inch large size with heavy duty 1680D polyester for superior durability',
          'Gate mouth design with wide zipper opening for easy tool access',
          'Rigid and waterproof plastic base molded to fabric for maximum protection',
          'Keeps bag stable and vertical to prevent equipment spillage',
          'Removable shoulder strap for versatile transport options',
          'Phone pocket for convenient storage of mobile devices',
          '3D air mesh back support for comfortable carrying',
          'Heavy duty zipper closure for secure tool storage',
          'Multiple pockets for organized tool storage',
          'Durable construction withstands daily professional use'
        ],
        specifications: {
          dimensions: '51x26x35cm',
          material: '1680D Polyester, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/GM-012-1.jpg',
          '/images/products/GM-012-2.jpg',
          '/images/products/GM-012-3.jpg',
          '/images/products/GM-012-4.jpg',
          '/images/products/GM-012-5.jpg',
          '/images/products/GM-012-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'tool-backpack',
    name: 'Tool Backpack',
    description: 'Hands-free carrying with ergonomic design for professional comfort',
    imageCount: 220,
    featured: true,
    coverImage: '/images/products/bp-001.jpg',
    products: [
      {
        sku: 'BP-001',
        name: 'Electrician/HVAC Large Heavy Duty Tool Backpack Bag',
        description: 'BP-001 Large Heavy Duty Multifunction Tool Backpack Bag is 100% originally designed by IRONLAND. This is a professional tool backpack especially designed for people who usually go out to work with tools such as electrician, HVAC, contractor, carpenter, plumber, farmer, tradesman or cable & audio visual installer. We put ourselves into scenario where need it, and then designed this tool bag not only fits the needs used in multiple situations but also enhance the owner\'s professional.',
        features: [
          '3-layer waterproof construction - PVC coated 600D polyester and EPE foam, sturdy, durable and water-resistant',
          '2 main compartments and 1 front pocket, each with various pockets and loops for tool organization',
          '3D air mesh cloth padded back and adjustable thickened shoulder straps for comfort',
          'Waterproof molded hard base provides flat surface to stand upright in any environment',
          'Removable 40 pockets tool carrier panel with carrying handles and D-ring for hanging',
          'Special heavy duty zippers with two sliders and pullers for easy access and more loading',
          'Frosted non-slip rubber handle with heavy duty stitching at attachment points',
          'Side pockets - one with buckle for water bottle/spirit level, one with flap for accessories',
          '60+ various pockets to store tools or instruments for multiple professions',
          'Internal tool panel with velcro for folding and organizing'
        ],
        specifications: {
          dimensions: '33*23*47cm',
          material: '600D Polyester, Plastic Base, PU'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/bp-001-1.jpg',
          '/images/products/bp-001-2.jpg',
          '/images/products/bp-001-3.jpg',
          '/images/products/bp-001-4.jpg',
          '/images/products/bp-001-5.jpg',
          '/images/products/bp-001-6.jpg',
          '/images/products/bp-001-7.jpg',
          '/images/products/bp-001-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'BP-002',
        name: 'Backpack Tool Bag With Wheels',
        description: 'BP-002 Backpack Tool Bag With Wheels With Laptop Compartment is made of 1680 denier durable fabric. Dual zipper closure enables opening from every end. Easy access to personal items stored in a different compartment. Front see through compartment and multiple loops for extra loads enables quick access needs. Loops provide additional fastening options. Rigid form that can stand in an open position enabling access to all tools. Separate and strong compartment for power tool or laptop.',
        features: [
          '3 large Main Storage Compartments, which provide more space and options to organize the trade tools or even laptop',
          'Thick EPE foam padded sleeve in the main compartment to allow the user can hold the laptop or documents, the size of laptop is up to 15 inches',
          'Strong trolley system with stainless steel pull bar and wear proof handle on the back to provide powerful support',
          'Durable high-density PP unidirectional wheels provide the stability. Special back design, turn down the back cushion to cover the wheels to keep clothes clean',
          'Detachable strong webbing strap with buckles on shoulder straps, which make it more secure and stable when user carry the tool backpack on shoulder',
          'Padded with 5mm EPE foam and 3D air mesh on the shoulder straps and back for comfortable carrying',
          'Detachable shoulder straps can be hidden in the back of the backpack and easy access to prevent getting dirty when pulled',
          '1680 denier durable fabric with dual zipper closure enables opening from every end'
        ],
        specifications: {
          dimensions: '35x23x51cm',
          material: '1680D Polyester, Aluminum Trolley Bar, Rubber Wheels'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/bp-002-1.jpg',
          '/images/products/bp-002-2.jpg',
          '/images/products/bp-002-3.jpg',
          '/images/products/bp-002-4.jpg',
          '/images/products/bp-002-5.jpg',
          '/images/products/bp-002-6.jpg',
          '/images/products/bp-002-7.jpg',
          '/images/products/bp-002-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'BP-003',
        name: 'Technician Tool Backpack',
        description: 'BP-003 Technician Tool Backpack is designed for professionals who need organized tool storage with easy access. Features multiple compartments and pockets for comprehensive tool organization, padded back panel and shoulder straps for all-day comfort. Perfect for electricians, HVAC technicians, network installers, and maintenance professionals.',
        features: [
          'Multiple compartments with various pocket sizes for different tools',
          'Padded laptop compartment fits up to 15.6 inch laptop',
          'Ergonomic padded back panel with breathable mesh',
          'Adjustable padded shoulder straps with sternum strap',
          'Hard molded base protects tools and keeps bag upright',
          'Heavy-duty zippers with easy-grip pullers',
          'Front quick-access pocket for frequently used items',
          'Side pockets for water bottle and accessories',
          'Internal organizer panel with elastic loops',
          'Durable 1680D polyester construction'
        ],
        specifications: {
          dimensions: '35 x 20 x 48cm',
          material: '1680D Polyester, Molded Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/bp-003-1.png',
          '/images/products/bp-003-2.jpg',
          '/images/products/bp-003-3.jpg',
          '/images/products/bp-003-4.jpg',
          '/images/products/bp-003-5.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'BP-004',
        name: 'Wheeled Tool Backpack',
        description: 'BP-004 Wheeled Tool Backpack combines the convenience of a rolling bag with the versatility of a backpack. Features a sturdy telescopic handle and smooth-rolling wheels for effortless transport, plus padded shoulder straps when you need hands-free carrying. Perfect for technicians, contractors, and professionals who need to transport heavy tools between job sites.',
        features: [
          'Heavy-duty telescopic handle with ergonomic grip',
          'Smooth-rolling rubber wheels for all terrain',
          'Padded backpack straps that tuck away when not in use',
          'Large main compartment with multiple tool pockets',
          'Front zippered pocket for quick-access items',
          'Side pockets for water bottle and accessories',
          'Hard molded base protects contents and provides stability',
          'Durable 1680D polyester construction with reinforced corners',
          'Padded laptop compartment fits up to 15 inch laptop',
          'Heavy-duty zippers with lockable pulls'
        ],
        specifications: {
          dimensions: '48 x 35 x 25cm',
          material: '1680D Polyester, Rubber Wheels, Aluminum Handle'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/bp-004-1.jpg',
          '/images/products/bp-004-2.jpg',
          '/images/products/bp-004-3.jpg',
          '/images/products/bp-004-4.jpg',
          '/images/products/bp-004-5.jpg',
          '/images/products/bp-004-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'BP-005',
        name: 'BP-005 Jobsite Tool Backpack',
        description: 'BP-005 Jobsite Tool Backpack with reinforced bottom for maximum durability, better support and easier clearance, and equipped with two large pockets for organizing tools, this backpack is equipped with 21 pockets and 20 elastic loops for tons of tool storage, side pocket is designed to provide convenient access for the small and simple tool.',
        features: [
          '1680D polyester construction for superior durability and abrasion resistance',
          'Reinforced plastic base for maximum durability, better support and easier clearance',
          '24 pockets and 29 elastic loops for comprehensive tool organization',
          'Dedicated laptop sleeve holds laptops up to 14 inches',
          'Two large front pockets for organizing tools and accessories',
          'Side pocket designed for convenient access to small and simple tools',
          'Padded shoulder straps for comfortable carrying during long workdays',
          'MOLLE webbing system for attaching additional pouches and accessories',
          'Reflective strips for enhanced visibility and safety in low-light conditions',
          'Ergonomic back panel design for improved airflow and comfort'
        ],
        specifications: {
          dimensions: '36x19x43cm',
          material: '1680D Polyester, Plastic Base, PU'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/BP-005-1.jpg',
          '/images/products/BP-005-2.jpg',
          '/images/products/BP-005-3.jpg',
          '/images/products/BP-005-4.jpg',
          '/images/products/BP-005-5.jpg',
          '/images/products/BP-005-6.jpg',
          '/images/products/BP-005-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'BP-006',
        name: 'BP-006 Tool Backpack With Laptop Pocket',
        description: 'This BP-006 backpack is good for either of jobsite and casual. Made of 600 denier fabric for durability and weather resistance. There are 2 compartments including a laptop sleeve. Removable inner tool carrier to hold and organize tools. Padded back and straps for comfort with rigid waterproof base to protect against dirt and moisture. Dual zipper opening enables complete access to all contents. Plus with Reflective material.',
        features: [
          '600D polyester fabric for durability and weather resistance',
          '2 main compartments including a dedicated laptop sleeve',
          'Removable inner tool carrier to hold and organize tools',
          'Padded back panel with 3D air mesh for comfort',
          'Padded shoulder straps for comfortable carrying',
          'Rigid waterproof base to protect against dirt and moisture',
          'Dual zipper opening enables complete access to all contents',
          'Reflective material for enhanced visibility and safety',
          'Leather accents for premium look and durability',
          'Perfect for both jobsite and casual use'
        ],
        specifications: {
          dimensions: '38*19*50cm',
          material: '3D Air Mesh, 600D Polyester, Leather, Reflective material'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/BP-006-1.png',
          '/images/products/BP-006-2.png',
          '/images/products/BP-006-3.png',
          '/images/products/BP-006-4.png',
          '/images/products/BP-006-5.png',
          '/images/products/BP-006-6.png',
          '/images/products/BP-006-7.png'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'BP-007',
        name: 'BP-007 Tradesman Tool Backpack',
        description: 'BP-007 Tradesman Tool Backpack is designed for professional tradesmen who demand durability and organization. Made with premium 1680D polyester and featuring an EVA combined back panel for ultimate comfort, this backpack provides exceptional tool storage capacity with a dedicated laptop sleeve. The rugged plastic base ensures stability and protection in any work environment.',
        features: [
          '1680D polyester construction for maximum durability and abrasion resistance',
          'EVA combined 1680D polyester back panel for superior comfort and support',
          '3D air mesh padding on back and shoulder straps for breathability',
          'Dedicated laptop sleeve for secure device storage',
          'Internal tool panel with multiple pockets and elastic loops',
          'Rugged plastic base for stability and protection against moisture',
          'Multiple compartments for comprehensive tool organization',
          'Heavy-duty zippers with easy-grip pullers',
          'Adjustable sternum strap for load distribution',
          'Side pockets for water bottle and quick-access items'
        ],
        specifications: {
          dimensions: '38*22*49cm',
          material: '1680D Polyester, 3D Air Mesh, EVA combined 1680D polyester, Plastic Base'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/BP-007-1.png',
          '/images/products/BP-007-2.png',
          '/images/products/BP-007-3.png',
          '/images/products/BP-007-4.png',
          '/images/products/BP-007-5.png',
          '/images/products/BP-007-6.png',
          '/images/products/BP-007-7.png',
          '/images/products/BP-007-8.png'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'zipper-pouch',
    name: 'Zipper Tool Pouch',
    description: 'Compact zipper pouches for small tools, parts, and accessories',
    imageCount: 79,
    featured: true,
    coverImage: '/images/products/zipper-pouch.jpg',
    products: [
      {
        sku: 'ZPS-001',
        name: 'ZPS-001 Zipper Tool Bag',
        description: 'ZPS-001 Zipper Tool Bag was built with durable 1680D polyester material, material preferred by professionals for durability and tool protection. Rugged Zipper – Up to 2x more durable than competitive zippered pouches. Webbing hang loop – Allows bags to be hooked together or attached to a carabiner. Three sizes to meet the storage needs of your various tools.',
        features: [
          'Built with durable 1680D polyester material for professional durability',
          'Material preferred by professionals for durability and tool protection',
          'Rugged zipper up to 2x more durable than competitive zippered pouches',
          'Webbing hang loop allows bags to be hooked together',
          'Can be attached to a carabiner for versatile carrying options',
          'Three sizes included to meet various tool storage needs',
          'Zipper closure for secure tool storage and transport',
          'Compact design perfect for small parts and hand tools',
          'Professional grade construction for daily use',
          'Versatile storage solution for contractors and technicians'
        ],
        specifications: {
          dimensions: '22.5×13/26.5×13.5/30.5×14cm (3 sizes)',
          material: '1680D Polyester'
        },
        images: [
          '/images/products/ZPS-001-1.jpg',
          '/images/products/ZPS-001-2.jpg',
          '/images/products/ZPS-001-3.jpg',
          '/images/products/ZPS-001-4.jpg',
          '/images/products/ZPS-001-5.jpg',
          '/images/products/ZPS-001-6.jpg'
        ],
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'ZPS-002',
        name: 'ZPS-002 Canvas Zipper Tool Pouches',
        description: 'ZPS-002 canvas tool pouch set has 4 different sizes (7/9/10/12 inch). They are the perfect size for electrical test equipment and hand tools when you only need a few tools to do the job. It can be put into any suitable small tool pouch according to the size of different tools. Moreover, each bag is a different color making it easy to store and identify your tools or spare parts.',
        features: [
          '4 different sizes (7/9/10/12 inch) for versatile tool storage',
          'Perfect size for electrical test equipment and hand tools',
          'Each bag is a different color for easy identification',
          'Constructed with heavy duty No. 16 canvas material',
          'Better quality than competitors like Klein Tools',
          'Can be used as accessories bag, pen bag, brush bag, makeup bag',
          'Durable carabiner clip hook on each pouch',
          'Reinforced double stitching for sturdy construction',
          'Smooth No.5th metal zippers with comfortable puller',
          'Spacious design in 4 sizes and 4 colors (customizable)',
          'Perfect for multi-tasks and organizing tools',
          'Features new IRONLAND logo design pattern'
        ],
        specifications: {
          dimensions: '12*5.5 / 10*5.5 / 9*5.5 / 7.5*5.5 inch (4 sizes)',
          material: '1680D Polyester, Vinyle Mesh'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/ZPS-002-1.jpg',
          '/images/products/ZPS-002-2.jpg',
          '/images/products/ZPS-002-3.jpg',
          '/images/products/ZPS-002-4.jpg',
          '/images/products/ZPS-002-5.jpg',
          '/images/products/ZPS-002-6.jpg',
          '/images/products/ZPS-002-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'tool-roll',
    name: 'Tool Roll',
    description: 'Roll-up design for compact storage and easy transport',
    imageCount: 53,
    featured: true,
    coverImage: '/images/products/tool-roll.jpg',
    products: [
      {
        sku: 'TR001',
        name: 'Tool Roll Canvas',
        description: 'Classic canvas tool roll for organized tool storage in minimal space.',
        features: [
          'Roll-up compact design',
          '15 tool slots',
          'Zippered accessory pocket',
          'Tie straps included',
          'Reinforced stitching'
        ],
        specifications: {
          dimensions: '28" x 20" unrolled (71 x 51 cm)',
          weight: '0.8 lbs (360g)',
          material: '18oz Canvas',
          capacity: '15-18 hand tools',
          color: ['Tan', 'Black', 'Olive']
        },
        images: ['/images/products/tool-roll.jpg'],
        minOrder: 500,
        leadTime: '20-25 days',
        certifications: ['CE', 'RoHS']
      },
      {
        sku: 'TR002',
        name: 'Tool Roll Leather',
        description: 'Premium leather tool roll for professionals who appreciate quality craftsmanship.',
        features: [
          'Full-grain leather construction',
          '12 tool slots',
          'Brass hardware',
          'Leather tie closure',
          'Develops patina over time'
        ],
        specifications: {
          dimensions: '26" x 18" unrolled (66 x 46 cm)',
          weight: '1.5 lbs (680g)',
          material: 'Full-grain Leather',
          capacity: '12-15 hand tools',
          color: ['Brown', 'Black']
        },
        images: ['/images/products/tool-roll.jpg'],
        minOrder: 200,
        leadTime: '30-35 days',
        certifications: ['CE']
      }
    ]
  },
  {
    id: 'bucket-bag',
    name: 'Bucket Tool Bag',
    description: 'Stand-up bucket design for easy tool access and visibility',
    imageCount: 40,
    featured: true,
    coverImage: '/images/products/bucket-bag.jpg',
    products: [
      {
        sku: 'BK001',
        name: 'Bucket Bag 12-inch',
        description: 'Stand-up bucket tool bag that fits over standard 5-gallon buckets. Perfect for job site organization.',
        features: [
          'Fits standard 5-gallon buckets',
          'Rigid walls stand upright',
          '30+ exterior pockets',
          'Water-resistant bottom',
          'Carry handle included'
        ],
        specifications: {
          dimensions: '12" diameter x 18" height (30 x 46 cm)',
          weight: '1.8 lbs (820g)',
          material: '600D Oxford + PE frame',
          capacity: '40+ tools',
          color: ['Orange', 'Black', 'Yellow']
        },
        images: ['/images/products/bucket-bag.jpg'],
        minOrder: 300,
        leadTime: '20-25 days',
        certifications: ['CE', 'RoHS']
      },
      {
        sku: 'BT-001',
        name: 'BT-001 Bucket Tool Bag Organizer',
        description: 'BT-001 Maintenance Tool Bag is a rugged, waterproof, and tear-resistant bucket tool organizer designed to fit 3.5-5 gallon buckets. With 51 pockets for ultimate tool organization, this lightweight organizer weighs just 499g and is made from high-quality 600D polyester for durability and easy cleaning.',
        features: [
          'Fits 3.5-5 gallon buckets for versatile use',
          '51 pockets for ultimate tool organization',
          'High-quality 600D polyester construction',
          'Waterproof and tear-resistant material',
          'Lightweight at just 499g for easy transport',
          'Very easy to clean and maintain',
          'Durable design for professional job sites',
          'Multiple pocket sizes for various tools',
          'Perfect for maintenance and repair work',
          'Portable bucket organizer design'
        ],
        specifications: {
          dimensions: '49.5 x 26.7cm',
          weight: '499g',
          material: '600D Polyester',
          capacity: 'Fits 3.5-5 gallon buckets',
          color: ['Orange', 'Black']
        },
        images: [
          '/images/products/BT-001-1.jpg',
          '/images/products/BT-001-2.jpg',
          '/images/products/BT-001-3.jpg',
          '/images/products/BT-001-4.jpg',
          '/images/products/BT-001-5.jpg',
          '/images/products/BT-001-6.jpg',
          '/images/products/BT-001-7.jpg',
          '/images/products/BT-001-8.jpg'
        ],
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Size, Package, etc',
        moq: 'Please contact us for MOQ',
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'BT-002',
        name: 'BT-002 5 Gallon Tool Bucket Organizer Bag',
        description: 'BT-002 Tool Bag For 5 Gallon Bucket with opening internal bucket space for easy tool access and designed to fit almost 5 gallon bucket. It holds 10 inside pockets, 41 outside pockets and 10 webbing loops to organize a wide range of tools and accessories and help the busy contractor get to critical tools quickly and effortlessly.',
        features: [
          'Designed to fit almost 5 gallon bucket',
          'Opening internal bucket space for easy tool access',
          '10 inside pockets for internal tool organization',
          '41 outside pockets for extensive storage options',
          '10 webbing loops for hanging tools and accessories',
          'PVC coated 600D polyester oxford fabric construction',
          'Water-resistant material for all-weather use',
          'Heavy duty stitching for durability and long life',
          'Foldable design folds to 29*21*3cm for storage',
          'Cost-effective for packaging and transportation',
          'Helps contractors access critical tools quickly'
        ],
        specifications: {
          dimensions: '47x20x3cm',
          material: '600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/BT-002-1.jpg',
          '/images/products/BT-002-2.jpg',
          '/images/products/BT-002-3.jpg',
          '/images/products/BT-002-4.jpg',
          '/images/products/BT-002-5.jpg',
          '/images/products/BT-002-6.jpg',
          '/images/products/BT-002-7.jpg',
          '/images/products/BT-002-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'rolling-tool-backpack',
    name: 'Rolling Tool Backpack',
    description: 'Wheeled tool backpacks for effortless transportation of heavy tools and equipment',
    imageCount: 45,
    featured: false,
    coverImage: '/images/products/bucket-bag.jpg',
    products: [
      {
        sku: 'WT-001',
        name: 'WT-001 Wheeled Tool Bag',
        description: 'This WT-001 wheeled tool bag was made to save user\'s time and energy by keeping tools organized and within quick reach. It is generously designed with 13 storage pockets: 10 interior and 3 exterior—perfect for smaller tools and equipment. The large main compartment is ideal for storing power tools and other bulky items. Made from rugged, 600 denier polyester, this tool bag is water-resistant and reinforced throughout wear areas to ensure its long-term durability. With its heavy-duty wheels that effortlessly glide over most surfaces and a telescoping handle.',
        features: [
          'Designed to save time and energy with organized tool storage',
          '13 storage pockets total for comprehensive organization',
          '10 interior pockets for smaller tools and equipment',
          '3 exterior pockets for quick-access items',
          'Large main compartment ideal for power tools and bulky items',
          'Rugged 600 denier polyester construction for durability',
          'Water-resistant material protects tools from moisture',
          'Reinforced throughout wear areas for long-term durability',
          'Heavy-duty wheels glide effortlessly over most surfaces',
          'Telescoping handle for easy maneuvering and transport',
          'Quick reach design keeps tools organized and accessible',
          'Perfect for contractors and professionals on the move'
        ],
        specifications: {
          dimensions: '45*36*(38-91)cm',
          material: '1680D Polyester, 600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/WT-001-1.png',
          '/images/products/WT-001-2.png',
          '/images/products/WT-001-3.png',
          '/images/products/WT-001-4.png',
          '/images/products/WT-001-5.png',
          '/images/products/WT-001-6.png'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'WT-002',
        name: 'WT-002 Rolling Tool Bag',
        description: 'WT-002 Rolling Tool Bag is designed for professionals who need to transport heavy tools and equipment with ease. Featuring a telescoping handle and heavy-duty wheels, this rolling tool bag makes moving tools effortless across various surfaces. Made from durable 1680D and 600D polyester, it provides excellent durability and water resistance for job site conditions.',
        features: [
          'Rolling design with heavy-duty wheels for effortless transport',
          'Telescoping handle for comfortable maneuvering',
          'Durable 1680D and 600D polyester construction',
          'Water-resistant material protects tools from moisture',
          'Large capacity for power tools and bulky equipment',
          'Multiple pockets for organized tool storage',
          'Reinforced wear areas for long-term durability',
          'Smooth-rolling wheels glide over various surfaces',
          'Ergonomic handle design reduces strain during transport',
          'Professional grade construction for daily job site use',
          'Ideal for contractors, technicians, and professionals',
          'Saves time and energy when transporting heavy tools'
        ],
        specifications: {
          dimensions: '(66-104)*30*33cm',
          material: '1680D Polyester, 600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/WT-002-1.png'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'tool-belt',
    name: 'Tool Belt',
    description: 'Professional tool belts for hands-free tool access and mobility',
    imageCount: 38,
    featured: false,
    coverImage: '/images/products/bucket-bag.jpg',
    products: [
      {
        sku: 'TB-001',
        name: 'TB-001 Electrician Tool Belt',
        description: 'TB-001 Electrician Tool Belt provides a professional solution for hardworking carpenters and builders, featuring 5 leather-lined handy pockets to cover most trade applications. It is easy to adjust with a comfortable nylon belt and 50mm polypropylene quick release buckle. The measuring tape clip holds any common builder\'s tape measure from 3-10 meters. Screwdriver holders made from real leather provide convenient storage. Necessary equipment is close at hand without coming off the roof or down from the ladder. Extra leather layer in friction points helps protect from years of wear. Knife slot made from real leather holds any common utility knife so it is always handy when necessary.',
        features: [
          '5 leather-lined handy pockets for most trade applications',
          'Easy to adjust comfortable nylon belt',
          '50mm polypropylene quick release buckle',
          'Measuring tape clip holds 3-10 meters tape measure',
          'Screwdriver holders made from real leather',
          'Extra leather layer in friction points for durability',
          'Knife slot made from real leather for utility knives',
          '2.5 inches wide padded belt for comfort',
          'Adjustable to fit 34 inch to 52 inch waist',
          'Two independent tool pouches that can be moved',
          '3 main pockets for large tools',
          '7 leather slots for pliers or screwdrivers',
          '6 metal holes for storing longer tools',
          'EVA bonded 1680D oxford fabric material',
          'Heavy duty steel rivets at stress points',
          'Extra durable webbing trim in friction points'
        ],
        specifications: {
          dimensions: '123x14x26cm',
          material: 'EVA combined 1680D polyester, Leather'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TB-001-1.jpg',
          '/images/products/TB-001-2.jpg',
          '/images/products/TB-001-3.jpg',
          '/images/products/TB-001-4.jpg',
          '/images/products/TB-001-5.jpg',
          '/images/products/TB-001-6.jpg',
          '/images/products/TB-001-7.jpg',
          '/images/products/TB-001-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TB-003',
        name: 'TB-003 Work Tool Belt',
        description: 'TB-003 Quick Release Work Tool Belt is made of 4 layers of materials to give 100% quality, durability and comfort: PP tape, polyester 600D, PE strap, and 3D mesh. It features a strong 50mm polypropylene quick release buckle. Padded by 3D mesh breathable material for extra comfort when carrying heavy tools. The belt is comfortable for all sizes, with a polyethylene strap inside to keep a vertical shape without danger of twist after extended use.',
        features: [
          '4 layers of materials for quality and durability: PP tape, 600D polyester, PE strap, 3D mesh',
          'Strong 50mm polypropylene quick release buckle',
          '3D mesh breathable padding for extra comfort',
          'Comfortable fit for all sizes',
          'Polyethylene strap inside maintains vertical shape',
          'Prevents twisting after extended use',
          'Quick release design for easy on/off',
          'Heavy duty construction for professional use',
          'Suitable for carrying heavy tools',
          'Durable 1680D polyester material'
        ],
        specifications: {
          dimensions: '133x6x6cm',
          material: '1680D Polyester, PP Tape, PE Strap, 3D Mesh'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TB-003-1.jpg',
          '/images/products/TB-003-2.jpg',
          '/images/products/TB-003-3.jpg',
          '/images/products/TB-003-4.jpg',
          '/images/products/TB-003-5.jpg',
          '/images/products/TB-003-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TB-004',
        name: 'TB-004 Padded Tool Belt',
        description: 'TB-004 Padded Tool Belt is made of premium grade leather and strong 1680 denier polyester with polyethylene backing. Fits any IRONLAND pouch or holster, fully padded by 3D mesh breathable material for extra comfort when carrying the heaviest complement of tools. The ultimate tool retention system is made from a combination of tough nylon, soft mesh material and riveted reinforcement. Perfect foundation for building your customized tool belt. HI-VIS trimming makes the holder eye catching and makes you visible in darkness.',
        features: [
          'Premium grade leather construction',
          'Strong 1680 denier polyester with polyethylene backing',
          'Fits any IRONLAND pouch or holster',
          'Fully padded by 3D mesh breathable material',
          'Extra comfort for carrying heavy tools',
          'Ultimate tool retention system',
          'Tough nylon and soft mesh material combination',
          'Riveted reinforcement for durability',
          'Perfect foundation for customized tool belt',
          'HI-VIS trimming for visibility in darkness',
          'Heavy duty construction for professional use',
          'Compatible with all IRONLAND accessories'
        ],
        specifications: {
          dimensions: '137x12cm',
          material: '1680D Polyester, Leather, 3D Mesh'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TB-004-1.jpg',
          '/images/products/TB-004-2.jpg',
          '/images/products/TB-004-3.jpg',
          '/images/products/TB-004-4.jpg',
          '/images/products/TB-004-5.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TB-005',
        name: 'TB-005 Work Belt',
        description: 'TB-005 Work Belt is made of 600D polyester and air mesh cloth. It carries and protects everything needed. Constructed with a custom heavy-duty belt buckle, high quality fabrics, and comfortable padding. Will fit all waist sizes (32 inch - 58 inch adjustment) with simple adjustment foam padding with high-quality velcro and easy Double-Tongue buckle security.',
        features: [
          'Made of 600D polyester and air mesh cloth',
          'Carries and protects all necessary tools',
          'Custom heavy-duty belt buckle',
          'High quality fabrics construction',
          'Comfortable padding for all-day wear',
          'Fits waist sizes 32 inch to 58 inch',
          'Simple adjustment with foam padding',
          'High-quality velcro for secure fit',
          'Easy Double-Tongue buckle security',
          'Padded heavy duty construction',
          'Removable light tool belt option',
          'Quick release buckle for convenience'
        ],
        specifications: {
          dimensions: '84x12cm',
          material: '600D Polyester, Air Mesh Cloth'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TB-005-1.jpg',
          '/images/products/TB-005-2.jpg',
          '/images/products/TB-005-3.jpg',
          '/images/products/TB-005-4.jpg',
          '/images/products/TB-005-5.jpg',
          '/images/products/TB-005-6.jpg',
          '/images/products/TB-005-7.jpg',
          '/images/products/TB-005-8.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TB-006',
        name: 'TB-006 Waist Tool Belt',
        description: 'The TB-006 5-Pocket Single Side Apron keeps tools within reach. This work apron features a fabric material for durability, an adjustable web belt with a durable high impact plastic buckle that fits waists 32-inches to 56-inches, two main large pockets, one webbing tool loop, one plier-type pocket, and two smaller tool loop type pockets. Built to last and made with heavy-duty webbing, reinforced pockets and loops, and strong, durable 600D polyester.',
        features: [
          '5-Pocket Single Side Apron design',
          'Keeps tools within easy reach',
          'Durable fabric material construction',
          'Adjustable web belt for custom fit',
          'High impact plastic buckle',
          'Fits waists 32-inches to 56-inches',
          'Two main large pockets for storage',
          'One webbing tool loop',
          'One plier-type pocket',
          'Two smaller tool loop type pockets',
          'Heavy-duty webbing construction',
          'Reinforced pockets and loops',
          'Strong durable 600D polyester',
          'Built to last for professional use'
        ],
        specifications: {
          dimensions: '23x23cm',
          material: '600D Polyester, Webbing'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TB-006-1.jpg',
          '/images/products/TB-006-2.jpg',
          '/images/products/TB-006-3.jpg',
          '/images/products/TB-006-4.jpg',
          '/images/products/TB-006-5.jpg',
          '/images/products/TB-006-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TB-007',
        name: 'TB-007 Small Tool Belt',
        description: 'TB-007 Small Tool Belt is made of 600D polyester fabric and contains a belt for different waist sizes, a drill holster, a hammer holder, and a tool pouch with multiple size pockets for access to different tools and accessories. Constructed with 3 layers of material (600D, EPE foam sheet and 600D) for well protection of tools. Equipped with a 3.8cm webbing waist belt and quick-release buckle for convenient wear and fit for different body sizes.',
        features: [
          'Made of 600D polyester fabric for durability',
          'Belt fits different waist sizes',
          'Drill holster with 4 small slots for drill bits',
          'Hammer holder for easy access',
          'Multi-tool pouch with different sized pockets',
          '3 layers of material for tool protection',
          '3.8cm webbing waist belt',
          'Quick-release buckle for convenient wear',
          'Removable pouches for personalization',
          '18 rivets and heavy-duty stitching',
          'Cost-effective design',
          'Small and simple but strong and durable'
        ],
        specifications: {
          dimensions: '126x28cm',
          material: '600D Polyester, EPE Foam'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TB-007-1.jpg',
          '/images/products/TB-007-2.jpg',
          '/images/products/TB-007-3.jpg',
          '/images/products/TB-007-4.jpg',
          '/images/products/TB-007-5.jpg',
          '/images/products/TB-007-6.jpg',
          '/images/products/TB-007-7.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TB-008',
        name: 'TB-008 Construction Tool Belt',
        description: 'TB-008 Construction Tool Belt is made of 600D polyester, 11 Pocket Work Belt Design with Adjustable Polyester Web Belt, Plus one tape holder. Five Main Nail and Tool Pockets, Six Smaller Pocket Fits Pliers, Pencils, Nail Sets, Gauge, Etc. Superior Quality Tool Apron, Heavy Duty Grade 600D Polyester, Reinforced with Rust Proof Rivet. Perfect for Construction Workers, Contractors, HVAC, Framers, Plumbers, Electrician, Etc.',
        features: [
          'Made of Heavy Duty Grade 600D Polyester',
          '11 multifunctional pockets design',
          '5 Main Pockets for Nail and Tools',
          '6 Smaller Pockets for Pliers, Pencils, tape, Gauges',
          'Adjustable polyester web belt (3.8cm)',
          'Quick-release plastic buckle',
          'Reinforced with rust proof rivets',
          '8 super stichings for pocket stability',
          '8 heavy duty metal rivets for support',
          'Metal tape measure clip for easy access',
          'PVC piping frames for pocket support',
          'Bright red fabric for easy visibility',
          'Customizable color and fabric type',
          'Perfect for construction workers and contractors'
        ],
        specifications: {
          dimensions: '115x26cm',
          material: '600D Polyester'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TB-008-1.jpg',
          '/images/products/TB-008-2.jpg',
          '/images/products/TB-008-3.jpg',
          '/images/products/TB-008-4.jpg',
          '/images/products/TB-008-5.jpg',
          '/images/products/TB-008-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'tool-suitcase',
    name: 'Tool Suitcase',
    description: 'Hard-shell and soft-shell tool suitcases for secure tool storage and transport',
    imageCount: 32,
    featured: false,
    coverImage: '/images/products/bucket-bag.jpg',
    products: [
      {
        sku: 'TS-001',
        name: 'TS-001 Service Tool Bag',
        description: 'TS-001 Tech Service Tool Bag is equipped with 2 sides zip open compartment holding many of diverse pockets and holsters for different kind tools. The central compartment with zip top opening provides space for computer or documents. The plastic bottom give maximum tool protection and keep the case stable and vertical to prevent any danger of spillage of equipment.',
        features: [
          '18 inch size with 600D polyester construction',
          '2 sides zip open compartments with diverse pockets and holsters',
          'Central compartment with zip top opening for computer or documents',
          'Reinforced PVC bottom for maximum tool protection',
          'Keeps case stable and vertical to prevent equipment spillage',
          'Laptop sleeve for secure computer storage',
          'Multiple pockets for different kind tools',
          'Shoulder strap for comfortable carrying',
          'With the lid design for additional protection',
          'Plastic base provides stability and protection',
          'Perfect for technicians and service professionals',
          'Ideal for carrying tools, laptops and documents'
        ],
        specifications: {
          dimensions: '47x25x37cm',
          material: '600D Polyester, Plastic Base, PU'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TS-001-1.jpg',
          '/images/products/TS-001-2.jpg',
          '/images/products/TS-001-3.jpg',
          '/images/products/TS-001-4.jpg',
          '/images/products/TS-001-5.jpg',
          '/images/products/TS-001-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      },
      {
        sku: 'TS-002',
        name: 'TS-002 Service Technician Tool Bag',
        description: 'TS-002 Service Technician Tool Bag was designed with professional tradesmen in mind and is built with durable 1680D ballistic material and an impact resistant, molded base that is designed to be up to 5X More Durable than competitive units. It features a protected tech pocket that provides users with a separate and secure means to store and transport a laptop or tablet while an integrated rain fly provides additional protection from the weather. Also featuring 53 total pockets, a fold down front storage panel, and a padded shoulder strap, the TS-002 provides the extreme durability and functionality.',
        features: [
          'Built with durable 1680D ballistic material for extreme durability',
          'Impact resistant molded base up to 5X more durable than competitors',
          'Protected tech pocket for laptop or tablet storage and transport',
          'Integrated rain fly provides additional weather protection',
          '53 total pockets for comprehensive tool organization',
          'Fold down front storage panel for easy access',
          'Padded shoulder strap for comfortable carrying',
          'Tear-resistant 1680D ballistic polyester withstands harsh environments',
          '4 layers of material including 600D polyester, EPE foam, PE sheet',
          'Rubber molded hard bottom keeps bag stable and water out',
          '3 compartments including large central compartment for laptop',
          '58 pockets and loops for tools, accessories, hardware',
          'Padded handle grip with 3D air mesh and EPE foam',
          'Heavy-duty 10th smooth zipper and metal carabiner clip hook',
          'Adjustable shoulder straps with padded pads for easy carrying'
        ],
        specifications: {
          dimensions: '44*18*40cm',
          material: '1680D Polyester, Plastic Base, PU'
        },
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Material, Structure, Package, etc',
        moq: 'Please contact us for MOQ',
        images: [
          '/images/products/TS-002-1.jpg',
          '/images/products/TS-002-2.jpg',
          '/images/products/TS-002-3.jpg',
          '/images/products/TS-002-4.jpg',
          '/images/products/TS-002-5.jpg',
          '/images/products/TS-002-6.jpg'
        ],
        certifications: ['CE', 'ISO 9001', 'BSCI']
      }
    ]
  },
  {
    id: 'waxed-canvas',
    name: 'Waxed Canvas Series',
    description: 'Premium waxed canvas tool bags with vintage style and modern durability',
    imageCount: 35,
    featured: true,
    coverImage: '/images/products/waxed-canvas.jpg',
    products: [
      {
        sku: 'WC001',
        name: 'Waxed Canvas Tool Bag',
        description: 'Premium waxed canvas tool bag combining vintage aesthetics with modern functionality. Water-resistant and extremely durable for professional use.',
        features: [
          'Heavy-duty waxed canvas construction',
          'Water-resistant and weatherproof',
          'Develops unique patina over time',
          'Genuine leather reinforcements',
          'Brass hardware for durability',
          'Multiple pockets for organization',
          'Adjustable leather shoulder strap',
          'Vintage professional appearance',
          'Reinforced bottom for stability',
          'Quality stitching throughout'
        ],
        specifications: {
          dimensions: '16" x 8" x 12" (41 x 20 x 30 cm)',
          weight: '2.2 lbs (1 kg)',
          material: 'Waxed Canvas, Leather, Brass Hardware',
          capacity: '25+ hand tools',
          color: ['Tan', 'Brown', 'Olive']
        },
        images: ['/images/products/waxed-canvas.jpg'],
        minOrder: 200,
        leadTime: '25-30 days',
        oemOdm: 'Available',
        customOptions: 'Color, Logo, Size, Material, Package, etc',
        moq: 'Please contact us for MOQ',
        certifications: ['CE', 'ISO 9001']
      }
    ]
  }
];

// 公司信息
export const companyInfo = {
  name: 'IRONLAND',
  fullName: 'Hangzhou Ironland Tools Co., Ltd.',
  established: '2005',
  location: 'Hangzhou, China',
  description: 'Leading manufacturer of professional tool bags and work gear with over 20 years of experience serving global B2B clients.',
  certifications: ['ISO 9001', 'BSCI', 'CE'],
  markets: ['Europe', 'North America', 'Australia', 'Asia'],
};

// 主打产品（首页展示）
export const featuredProducts = [
  'open-tote',
  'tool-backpack',
  'zipper-mouth',
  'zipper-pouch',
  'tool-roll',
  'bucket-bag',
];

// 获取产品函数
export function getProductBySku(sku: string): Product | null {
  for (const category of productCategories) {
    const product = category.products.find(p => p.sku === sku);
    if (product) return product;
  }
  return null;
}

export function getCategoryById(id: string): ProductCategory | null {
  return productCategories.find(c => c.id === id) || null;
}

export function getRelatedProducts(currentSku: string, limit: number = 3): Product[] {
  const related: Product[] = [];
  for (const category of productCategories) {
    for (const product of category.products) {
      if (product.sku !== currentSku && related.length < limit) {
        related.push(product);
      }
    }
  }
  return related;
}
