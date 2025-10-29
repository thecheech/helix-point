# HelixPoint

Seamless Digital Credit Management platform.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

### Contact Form Emails (Optional)

The contact form can send emails using [Resend](https://resend.com). To enable email notifications:

1. Sign up for a free account at [resend.com](https://resend.com)
2. Get your API key from the [API Keys](https://resend.com/api-keys) page
3. Create a `.env.local` file in the project root:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
4. Restart the development server

Without the API key, form submissions will be logged to the console but emails won't be sent.

## Tech Stack

- Next.js 14 (App Router)
- React Server Components
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and helpers

