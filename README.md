# IRONLAND 外贸独立站

> 基于 Next.js + GitHub Pages + Cloudflare 的 JAMStack 架构

## 🎯 项目信息

- **品牌**: IRONLAND (亿隆)
- **定位**: 工具包 B2B 外贸
- **技术栈**: Next.js 14 + TypeScript + Tailwind CSS
- **部署**: GitHub Pages + Cloudflare CDN
- **域名**: ironlandtools.com (待确认)

## 🎨 品牌规范

### 配色方案
- **主色**: 工业橙 `#F04A24` (近似)
- **辅色**: 深炭灰 `#2B2B2B`
- **背景**: 纯白 `#FFFFFF`
- **文字**: 深灰 `#333333` / 浅灰 `#666666`

### 字体
- **标题**: Montserrat Bold / Oswald
- **正文**: Inter / Roboto

## 📁 项目结构

```
ironland-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 根布局
│   ├── about/             # 关于我们
│   ├── products/          # 产品中心
│   ├── factory/           # 工厂实力
│   ├── contact/           # 联系我们
│   └── globals.css        # 全局样式
├── components/             # React 组件
│   ├── ui/                # 基础 UI 组件
│   ├── layout/            # 布局组件
│   └── sections/          # 页面区块
├── public/                 # 静态资源
│   ├── images/            # 图片
│   └── fonts/             # 字体
├── lib/                    # 工具函数
├── content/                # 内容数据
├── next.config.js          # Next.js 配置
├── tailwind.config.ts      # Tailwind 配置
└── package.json
```

## 🚀 开发命令

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 📅 开发计划

### Week 1: 基础搭建
- [ ] 项目初始化
- [ ] 设计系统建立
- [ ] 首页原型
- [ ] 导航和布局

### Week 2: 内容页面
- [ ] 关于我们
- [ ] 产品中心
- [ ] 工厂实力

### Week 3: 功能完善
- [ ] 询盘表单
- [ ] 多语言支持
- [ ] SEO 优化

### Week 4: 上线部署
- [ ] 域名配置
- [ ] Cloudflare 设置
- [ ] 性能优化
- [ ] 正式上线

---

**创建时间**: 2026-03-24
**开发者**: 小炸弹 💣
