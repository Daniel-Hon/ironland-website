// IRONLAND 产品数据
export const productCategories = [
  {
    id: 'tool-pouches',
    name: 'Tool Pouches',
    nameCN: '工具袋',
    description: 'Professional tool pouches for organized storage',
    descriptionCN: '专业工具袋，便于整理存放',
    imageCount: 390,
    featured: true,
    products: [
      { sku: 'TP001', name: 'Tool Pouch Small', features: ['Compact', 'Durable'] },
      { sku: 'TP002', name: 'Tool Pouch Medium', features: ['Medium capacity', 'Multiple pockets'] },
    ]
  },
  {
    id: 'open-tote',
    name: 'Open Tote Tool Bag',
    nameCN: '敞口工具包',
    description: 'Easy-access open tote design for quick tool retrieval',
    descriptionCN: '敞口设计，快速取用工具',
    imageCount: 248,
    featured: true,
    products: [
      { sku: 'OT001', name: 'Open Tote 16-inch', features: ['16-inch', 'Reinforced handles'] },
      { sku: 'OT002', name: 'Open Tote 20-inch', features: ['20-inch', 'Water-resistant'] },
    ]
  },
  {
    id: 'zipper-mouth',
    name: 'Zipper Mouth Tool Bag',
    nameCN: '拉链口工具包',
    description: 'Secure zipper closure for maximum protection',
    descriptionCN: '拉链封口，全方位保护',
    imageCount: 241,
    featured: true,
    products: [
      { sku: 'GM-010', name: 'Zipper Tool Bag 16-inch', features: ['16-inch', 'Heavy-duty zipper'] },
      { sku: 'GM-012', name: 'Zipper Tool Bag 18-inch', features: ['18-inch', 'Waterproof base'] },
    ]
  },
  {
    id: 'tool-backpack',
    name: 'Tool Backpack',
    nameCN: '工具背包',
    description: 'Hands-free carrying with ergonomic design',
    descriptionCN: '人体工学设计，解放双手',
    imageCount: 206,
    featured: true,
    products: [
      { sku: 'BP001', name: 'Tool Backpack Pro', features: ['Padded straps', 'Laptop compartment'] },
      { sku: 'BP002', name: 'Tool Backpack Max', features: ['Expandable', 'Rain cover'] },
    ]
  },
  {
    id: 'waxed-canvas',
    name: 'Waxed Canvas Series',
    nameCN: '打蜡帆布系列',
    description: 'Premium waxed canvas for durability and style',
    descriptionCN: '优质打蜡帆布，耐用时尚',
    imageCount: 109,
    featured: true,
    products: [
      { sku: 'CGM001', name: 'Waxed Canvas Bag', features: ['Vintage look', 'Water-resistant'] },
      { sku: 'CTR001', name: 'Waxed Canvas Roll', features: ['Roll-up design', 'Leather straps'] },
      { sku: 'CTB001', name: 'Waxed Canvas Tote', features: ['Large capacity', 'Aged finish'] },
    ]
  },
  {
    id: 'tool-belt',
    name: 'Tool Belt',
    nameCN: '工具腰带',
    description: 'Comfortable tool belts for all-day wear',
    descriptionCN: '舒适设计，全天佩戴',
    imageCount: 86,
    featured: false,
    products: [
      { sku: 'TB001', name: 'Tool Belt Standard', features: ['Adjustable', 'Quick-release'] },
      { sku: 'TB004', name: 'Tool Belt Pro', features: ['Padded waist', 'Multiple loops'] },
    ]
  },
  {
    id: 'zipper-pouch',
    name: 'Zipper Tool Pouch',
    nameCN: '拉链工具袋',
    description: 'Compact zipper pouches for small tools',
    descriptionCN: '紧凑型拉链袋，适合小工具',
    imageCount: 79,
    featured: false,
    products: [
      { sku: 'ZPS001', name: 'Zipper Pouch Small', features: ['Zipper closure', 'Compact'] },
      { sku: 'CZPS001', name: 'Zipper Pouch Canvas', features: ['Canvas material', 'Durable'] },
    ]
  },
  {
    id: 'tool-roll',
    name: 'Tool Roll',
    nameCN: '工具卷',
    description: 'Roll-up design for compact storage',
    descriptionCN: '卷式设计，紧凑收纳',
    imageCount: 53,
    featured: false,
    products: [
      { sku: 'TR001', name: 'Tool Roll Canvas', features: ['Roll-up', 'Tie straps'] },
      { sku: 'TR002', name: 'Tool Roll Leather', features: ['Leather', 'Premium'] },
    ]
  },
  {
    id: 'rolling-backpack',
    name: 'Rolling Tool Backpack',
    nameCN: '滚轮工具背包',
    description: 'Heavy-duty rolling backpack for heavy loads',
    descriptionCN: '重型滚轮背包，适合重载',
    imageCount: 41,
    featured: false,
    products: [
      { sku: 'WT001', name: 'Rolling Backpack Large', features: ['Wheels', 'Telescopic handle'] },
      { sku: 'WT002', name: 'Rolling Backpack Pro', features: ['All-terrain wheels', 'Heavy-duty'] },
    ]
  },
  {
    id: 'bucket-bag',
    name: 'Bucket Tool Bag',
    nameCN: '桶式工具包',
    description: 'Stand-up bucket design for easy access',
    descriptionCN: '立式桶型设计，便于取用',
    imageCount: 40,
    featured: false,
    products: [
      { sku: 'BK001', name: 'Bucket Bag 12-inch', features: ['Stands upright', 'Rigid sides'] },
    ]
  },
  {
    id: 'tool-suitcase',
    name: 'Tool Suitcase',
    nameCN: '工具箱',
    description: 'Hard-shell protection for delicate tools',
    descriptionCN: '硬质外壳，保护精密工具',
    imageCount: 26,
    featured: false,
    products: [
      { sku: 'TS001', name: 'Tool Suitcase Small', features: ['Hard shell', 'Lockable'] },
      { sku: 'TS002', name: 'Tool Suitcase Large', features: ['Wheels', 'Extendable handle'] },
    ]
  },
  {
    id: 'other-gear',
    name: 'Other Work Gear',
    nameCN: '其他工作装备',
    description: 'Additional work gear and accessories',
    descriptionCN: '其他工作装备和配件',
    imageCount: 8,
    featured: false,
    products: [
      { sku: 'TV001', name: 'Tool Vest', features: ['Multiple pockets', 'Breathable'] },
      { sku: 'TV002', name: 'Tool Vest Pro', features: ['Heavy-duty', 'Reflective strips'] },
    ]
  },
];

// 公司信息
export const companyInfo = {
  name: 'IRONLAND',
  fullName: 'Hangzhou Ironland Tools Co., Ltd.',
  established: '2005',
  location: 'Hangzhou, China',
  description: 'Leading manufacturer of professional tool bags and work gear',
  descriptionCN: '专业工具包和工作装备的领先制造商',
  certifications: ['ISO 9001', 'BSCI', 'CE'],
  markets: ['Europe', 'North America', 'Australia', 'Asia'],
};

// 主打产品（首页展示）
export const featuredProducts = [
  'tool-pouches',
  'open-tote', 
  'zipper-mouth',
  'tool-backpack',
  'waxed-canvas',
  'tool-belt',
];
