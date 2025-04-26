# LuxuryEstate - Premium Real Estate Website

A modern, elegant real estate website that showcases premium properties with an emphasis on visual appeal and interactive elements.

![LuxuryEstate Screenshot](https://placeholder.com/luxuryestate.png)

## Features

- ✨ Modern, minimalist design with luxury aesthetics
- 🏠 Interactive property listings with hover effects
- 🗺️ Property map to explore locations
- 👥 Client testimonials with elegant slider
- 🌓 Dark/light mode toggle
- 📱 Fully responsive design for all devices
- 🚀 Optimized performance with Next.js

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/api/) - Interactive maps

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/luxuryestate.git
   cd luxuryestate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
luxuryestate/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx      # Page components
│   │   └── globals.css   # Global styles
│   ├── components/        # React components
│   │   ├── home/          # Homepage specific components
│   │   ├── layout/        # Layout components (header, footer)
│   │   ├── properties/    # Property-related components
│   │   └── ui/            # Reusable UI components
│   └── lib/               # Utility functions
├── public/                # Static assets
│   ├── images/            # Image files
│   └── videos/            # Video files
└── tailwind.config.ts     # Tailwind CSS configuration
```

## Customization

### Themes

The website includes a light and dark theme. Colors can be customized in the `src/app/globals.css` file.

### Adding Properties

To add or modify property listings, update the data in the `src/components/home/FeaturedProperties.tsx` file.

## Deployment

The easiest way to deploy this website is using [Vercel](https://vercel.com/):

```bash
npm run build
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Property images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide Icons](https://lucide.dev/)
- Font pairings: Playfair Display and Inter
