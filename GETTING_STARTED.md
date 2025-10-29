# Getting Started with HelixPoint

Welcome to HelixPoint! This guide will help you get your website up and running.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your website.

## Project Structure

```
/Users/kobykarp/projects/HelixPoint/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── terms/               # Terms of Service page
│   ├── privacy/             # Privacy Policy page
│   ├── refund-policy/       # Refund Policy page
│   └── acceptable-use/      # Acceptable Use Policy page
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── sections/            # Homepage sections
│   │   ├── hero.tsx
│   │   ├── how-it-works.tsx
│   │   ├── benefits.tsx
│   │   ├── features.tsx
│   │   ├── use-cases.tsx
│   │   ├── pricing.tsx
│   │   ├── trust.tsx
│   │   └── cta.tsx
│   ├── header.tsx           # Site header/navigation
│   ├── footer.tsx           # Site footer
│   └── section.tsx          # Section wrapper component
├── lib/                     # Utility functions
│   └── utils.ts             # Helper functions (cn, etc.)
└── public/                  # Static assets (create this for images, etc.)
```

## Customization

### Updating Content

All content is contained in the component files. To update:

- **Homepage sections**: Edit files in `components/sections/`
- **Legal pages**: Edit files in `app/terms/`, `app/privacy/`, etc.
- **Navigation**: Edit `components/header.tsx`
- **Footer**: Edit `components/footer.tsx`

### Colors and Styling

The design uses a neutral color palette perfect for a professional SaaS platform:

- **Primary color**: Charcoal gray (`#1a1a1a`)
- **Background**: White
- **Accents**: Soft grays

To customize colors, edit the CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* etc. */
}
```

### Adding Images

1. Create a `public` folder in the root directory
2. Add your images to `public/` (e.g., `public/logo.svg`)
3. Reference them in components:
```tsx
import Image from "next/image";

<Image src="/logo.svg" alt="Logo" width={100} height={100} />
```

### Contact Email

Update the email addresses throughout the site:
- `hello@helixpoint.co` (general contact)
- `legal@helixpoint.co` (legal inquiries)
- `privacy@helixpoint.co` (privacy requests)
- `refunds@helixpoint.co` (refund requests)
- `support@helixpoint.co` (customer support)
- `compliance@helixpoint.co` (compliance questions)
- `abuse@helixpoint.co` (abuse reports)

Search and replace these with your actual email addresses.

## Building for Production

Build the production-ready site:
```bash
npm run build
```

Test the production build locally:
```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any platform supporting Next.js

## Key Features

✅ **Modern Design**: Clean, professional Notion/Linear-inspired aesthetic
✅ **Fully Responsive**: Mobile-first design that works on all devices
✅ **SEO Optimized**: Proper metadata and semantic HTML
✅ **Performance**: Built with React Server Components for optimal speed
✅ **Accessibility**: Semantic HTML and ARIA labels
✅ **Legal Pages**: Complete Terms, Privacy, Refund, and Acceptable Use policies
✅ **Stripe-Friendly**: Positioned as legitimate digital credits platform

## Next Steps

1. **Add your logo**: Replace the "H" placeholder in header/footer
2. **Update contact emails**: Search/replace placeholder emails
3. **Customize colors**: Adjust the color scheme in `globals.css`
4. **Add analytics**: Integrate Google Analytics or Vercel Analytics
5. **Set up domain**: Point your domain to your hosting provider
6. **Add contact form**: Create a contact form component (optional)
7. **Review legal pages**: Have your legal team review the policies

## Support

For questions about this codebase, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Important Notes

This website positions HelixPoint as a **digital credit management platform** - not a financial service, payment processor, or money transmission business. The content emphasizes:

- Credits are prepaid tokens for digital services
- No cash value or withdrawal capability
- Non-transferable and platform-specific
- Compliant with Stripe's acceptable use policies

Make sure all future content maintains this positioning to stay compliant with payment processors and regulations.

