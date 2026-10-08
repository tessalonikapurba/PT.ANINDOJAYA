# 📋 Changelog - PT. Anindojaya Swakarsa Sweetness Showcase

All notable changes to the Anindojaya Sweetness Showcase project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive changelog documentation
- Detailed deployment guide with Docker support
- SSL certificate configuration instructions
- Complete English translations for all website sections
- Missing foodProducts sections (descriptions, specifications, applications)
- Complete pharmaceuticalProducts section with quality features
- Enhanced applications mapping with both Indonesian and English keys

### Changed
- Updated project documentation structure
- **BREAKING**: Updated navigation menu order to: Beranda → Tentang → Visi & Misi → Produk Farmasi → Produk Makanan → Kontak
- Updated English translations to match Indonesian content exactly
- Fixed hero section subtitle to align with Indonesian version
- Updated about section to include all supplier information (Zhejiang companies)
- Updated timeline section to focus on natural sweetener industry
- Updated vision & mission section to include all principal companies
- Updated contact section title and business hours format
- Updated footer to focus on natural sweetener innovations
- Fixed language switching to properly display Indonesian content on /id routes

### Fixed
- Resolved issue where Indonesian pages (/id) were displaying English content
- Fixed Food page to use proper translation system instead of hardcoded English text
- Corrected navigation menu order to match user requirements
- Ensured complete translation parity between Indonesian and English versions

### Technical Improvements
- Enhanced translation system with comprehensive food product descriptions
- Added 24+ flavor descriptions with proper Indonesian translations
- Added 60+ specification mappings for product attributes
- Implemented proper language context handling for all pages
- Improved code maintainability with centralized translation management

## [1.0.0] - 2024-12-19

### 🎉 Initial Release

#### Added
- **Complete Company Website** for PT. Anindojaya Swakarsa
- **Bilingual Support** (Indonesian & English) with language switching
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with shadcn/ui components and Tailwind CSS

#### Core Features
- **Hero Section** with company introduction and call-to-action
- **About Section** featuring company leadership and core values
- **Timeline** showcasing company milestones and achievements
- **Vision & Mission** section highlighting company goals
- **Products Showcase** with comprehensive product catalog
- **Sweetener Education** section promoting AIJS Sweetener
- **Contact Form** with validation and toast notifications
- **Navigation** with smooth scrolling and language switching

#### Product Catalog
- **Pharmaceutical Products** from Ercros Spain:
  - Vancomycin HCL
  - Gentamycin Sulfate
  - Fusidic Acid (multiple variants)
  - Erythromycins (complete range)
  - Fosfomycins (broad-spectrum antibiotics)
  - Erythromycin Derivatives
  - Famotidine
  - Amlodipine Besylate
  - Azithromycin

- **Food Products** (Liquid Series Flavors):
  - 25+ flavor variants including Cola, Corn, Orange, Pineapple, Lemon, Strawberry, Melon, Peach, Banana, Mango, Durian, Grape, Apple, Blueberry, Coconut, Chocolate, Coffee, Vanilla, Butter, Yogurt, Lychee, Passion Fruit, and Mix Fruits

- **Agent Products** from partner companies:
  - Ally FNF flavors
  - Zhejiang Hangzou Xinfu products
  - Zhejiang Tianxin vitamins
  - Henan Kangda antibiotics
  - Tianjin Zhongrui Pharmaceutical products

#### Technical Implementation
- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **React Router** for client-side routing
- **TanStack Query** for data management (prepared for future API integration)
- **shadcn/ui** component library for consistent design
- **Tailwind CSS** for utility-first styling
- **Lucide React** for modern iconography
- **React Hook Form** for form handling
- **Sonner** for toast notifications

#### Deployment & Infrastructure
- **Docker Support** with multi-stage builds
- **Nginx Configuration** for production serving
- **SSL/HTTPS Support** with Let's Encrypt integration
- **Deployment Scripts** for Windows (deploy.bat) and Linux/Mac (deploy.sh)
- **Environment Configuration** for development, staging, and production

#### Documentation
- **README.md** with project overview and setup instructions
- **DEPLOYMENT.md** with comprehensive deployment guide
- **QUICK-DEPLOY.md** for rapid deployment instructions
- **Component Documentation** with clear code structure

#### Security Features
- **Form Validation** with proper input sanitization
- **HTTPS Enforcement** for secure communication
- **CORS Configuration** for cross-origin requests
- **Content Security Policy** headers

#### Performance Optimizations
- **Code Splitting** with React.lazy for optimal loading
- **Image Optimization** with proper alt tags and responsive sizing
- **Bundle Optimization** with Vite's built-in optimizations
- **Caching Strategy** for static assets

#### Accessibility Features
- **Semantic HTML** structure for screen readers
- **Keyboard Navigation** support
- **ARIA Labels** for interactive elements
- **Color Contrast** compliance
- **Focus Management** for better user experience

#### Browser Support
- **Modern Browsers** (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Mobile Responsive** design for iOS and Android
- **Progressive Enhancement** for older browsers

### 🔧 Technical Details

#### Dependencies
- **Core**: React 18.3.1, React DOM 18.3.1
- **Build Tool**: Vite 5.4.19
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: React Router DOM 6.30.1
- **State Management**: TanStack Query 5.83.0
- **Forms**: React Hook Form 7.61.1
- **Icons**: Lucide React 0.462.0
- **Notifications**: Sonner 1.7.4

#### Development Tools
- **Linting**: ESLint 9.32.0 with TypeScript support
- **Code Formatting**: Prettier integration
- **Type Checking**: TypeScript strict mode
- **Hot Reload**: Vite HMR for instant updates

#### Build Configuration
- **Production Build**: Optimized bundle with minification
- **Development Build**: Fast rebuilds with source maps
- **Asset Optimization**: Automatic image and CSS optimization
- **Environment Variables**: Separate configs for dev/staging/prod

### 🚀 Deployment History

#### Commit History
- `f02615a` - Update based on discussion (2 weeks ago)
- `cc0fb0d` - Add docker config (3 weeks ago)
- `1fca80d` - Add localization and edit (3 weeks ago)
- `5a4e33f` - Create company website (3 weeks ago)
- `a3d1f4c` - Use tech stack vite_react_shadcn_ts_20250728_minor (3 weeks ago)

### 📱 Browser Compatibility

#### Fully Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

#### Mobile Support
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 13+

### 🔒 Security Considerations

#### Implemented
- HTTPS enforcement
- Form input validation
- XSS protection
- CSRF protection headers
- Secure cookie settings

#### Recommended for Production
- Regular dependency updates
- Security headers configuration
- Rate limiting for forms
- Content Security Policy implementation

## 📝 Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | 2024-12-19 | Initial release with complete company website |

## 🤝 Contributing

For contributing guidelines, please refer to the project's README.md file.

## 📞 Support

For support and questions:
- **Email**: secretary@anindojaya.com
- **Phone**: 021-45842050
- **Address**: Jl. Dewi Shinta Blok B2 No.1, RT.7/RW.8, Klp. Gading Tim., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240

---

**PT. Anindojaya Swakarsa** - Your trusted partner in pharmaceutical and food ingredient solutions.

## [Unreleased] - Corporate homepage redesign
- New componentized homepage under `src/components/home/` (Hero, WhatWeDo, BusinessDivisions, FounderStory, JourneyTimeline, ProductCategories, PrincipalsSection, WhyAnindojaya, LatestInsights, ContactCta).
- Redesigned `Navigation` (dropdowns, ID | EN, Inquire) and `Footer` (shared with Pharmaceuticals/Food pages).
- Homepage content centralised in `src/data/homeContent.ts`; unsupported claims removed (invented phone number, "30+ years", 1993-1997 "expansion" milestone).
- Fixed: `App.css` was never imported in `main.tsx`.
