# Nam Vidhya Mandir - School Websitessssssssssssss

A modern, responsive school website built with Next.js, React, and TypeScript. This project provides a comprehensive platform for showcasing school information, academics, events, and more.

## 🌟 Features

- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion for smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Static Export**: Optimized for deployment with static site generation
- **Dark Mode Support**: Theme switching capabilities with next-themes
- **Authentication**: NextAuth integration for secure login
- **Dynamic Content**: Markdown-based blog and news system
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## 📋 Main Sections

- **Home**: Hero slider, school introduction, video section, testimonials, and news/events
- **About Us**: School management, vision, mission, and public disclosure
- **Academics**: Curriculum, holistic learning, projects, and achievements
- **Beyond Academics**: Sports, hobby clubs, field trips, and achievements
- **Life @ School**: Timings, pastoral care, calendar, assemblies, dining, transportation, and campus facilities
- **Admissions**: Admission information and process
- **Contact**: Contact form and school location

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/karan4533/sch_web.git
cd sch_web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with necessary configurations.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

This will create an optimized production build in the `out` directory.

### Start Production Server

```bash
npm start
```

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with SSG/SSR capabilities
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
  - [AOS](https://michalsnik.github.io/aos/) - Animate on scroll library
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client
- **UI Components**: 
  - [React Slick](https://react-slick.neostack.com/) - Carousel component
  - [@iconify/react](https://iconify.design/) - Icon framework
- **Content**: 
  - [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Front matter parser
  - [Remark](https://remark.js.org/) - Markdown processor
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/) - Toast notifications
- **Date Handling**: [date-fns](https://date-fns.org/) - Modern date utility library

## 📦 Project Structure

```
sch_web/
├── public/              # Static files (images, fonts, etc.)
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── (site)/    # Main site pages
│   │   └── api/       # API routes
│   ├── components/     # React components
│   │   ├── Home/      # Home page components
│   │   ├── Layout/    # Layout components
│   │   ├── Common/    # Shared components
│   │   └── ...
│   ├── Style/         # CSS styles
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── markdown/          # Markdown content (blog, news)
├── next.config.mjs    # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 🚀 Deployment

The project is configured for static export and can be deployed to various platforms:

### GitHub Pages

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages using the `gh-pages` branch.

### Other Platforms

The static export can be deployed to:
- Vercel
- Netlify
- AWS S3
- Any static hosting service

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📞 Contact

For any queries or support, please contact the school administration.

---

**Karan :)** 
