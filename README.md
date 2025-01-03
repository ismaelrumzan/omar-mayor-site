# Next.js 15 with TinaCMS

## Base template
I originally forked https://github.com/tinacms/llama-link and then upgraded to latest versions of next.js and tina. So this version includes adding tables in the rich text editor. 

## Technologies

- [Next.js 15](https://nextjs.org/docs)
- [TinaCMS](https://tina.io/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Structure

- Pages as a [dynamic route](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) with following optional blocks on each page
  - Main Content Rich Text (Designed for body content of standard pages)
    - Includes custom components embed with Alert, Youtube, GoogleMaps
  - Hero Section Block (Designed for landing pages)
  - Cover Section Block (Designed for top of standard pages)
  - Featured Posts (Card view of featured blog posts)
  - Card Grid (Grid view of content as card) with 2 or 3 columns
  - Collapsible items (accordion) section
- Posts as a [dynamic route](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) with field structure
  - Title, author, image, description, body
- Forms rendered as dynamic routes - available fields are text, large text and select fields
  - Server action for submission
- Sitewide one-time content
  - Header with logo, nav links, CTA button, on/off theme switcher, on/off user login
  - Footer with social links and copyright info
  - Navigation with 3 types of links: external, relative and reference to page - nav can be left or right aligned in header

## Develop locally

```
pnpm install
```

```
pnpm run dev
```

## Deploy to the cloud

- [Vercel.com](https://vercel.com/) with [tina.cloud](https://tina.io/docs/tina-cloud/overview)
- Don't forget to set your [environment variables](https://tina.io/docs/tina-cloud/deployment-options/vercel) for Tina Cloud
