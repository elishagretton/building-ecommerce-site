# Building Ecommerce Site

## Table of Contents

1. [Introduction](#introduction)
  - [Key Objectives](#key-objectives)
  - [Data](#data)
  - [Key Tools](#key-tools)
2. [File Structure](#file-structure)
3. [Usage Instructions](#usage-instructions)
4. [Next Steps](#next-steps)

## Introduction

During the Sidetrade Code Academy, I had a week to build and create a full-stack ecommerce website using Typescript, React, Next.js, and Postgres in Supabase. The [Replit](https://replit.com/~) platform is used to write the program for ease-of-use.

On the final day, I presented my project to a team of Sidetrade technical leaders and the rest of the bootcamp participants, where I discussed my key objectives, how I structured my work, what went well, what didn't go well, and the next steps.

### Key Objectives

Due to the short deadline, I formed a few key objectives to focus my work during the week. My main priority was to create a more conventional and aesthetically-pleasing web app that had key functional features such as a collapsible sidebar, header, and informative footer, to name a few. I was inspired by the [Motel Rocks](https://www.motelrocks.com/) website.

My objectives were:
1. Create a new **Header** with a clear logo and icons such as account, wishlist, and basket.
2. Create a collapsible **Sidebar** that is connected to a button in the header.
4. Add conventional information to the **Footer** such as About, Support and Legal, and ensure on all pages.
5. Improve the appearance of the **Homepage** by adding a landing image, adding a product list, creating a social media gallery, and a sign up form.
6. Improve the layout of **Product Page** by displaying an image, product name, and price.

To manage my workload, I used a Kanban board on [Trello](https://trello.com/).

### Data

The `product` data used in the project was provided by Sidetrade in a previous task during the Code Academy. It has columns: `product_id`, `product_name`, `selling_price`, and `cost_price`. At the moment, there are only 15 products.

To request the data to the web app, it is first stored in Supabase and then requested in Next.JS.

To find out how the data is used in the web app, please head to [Usage Instructions](#usage-instructions/data-setup)

### Key Tools

#### TypeScript
[TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript, giving a better tooling at any scale. Its main positive is it catches mistakes in your editor quickly, improving editor support and the codebase.

In this project, TypeScript is used to write data requests to Supabase and call these requests in the API. 

#### React
[React](https://react.dev/) is a tool used to build user interfaces out of individual pieces called components. It helps the organisation, readibility, and efficiency of the code, allowing changes to one section of the app without having to update everything.

Multiple components are created in this project, stored in `/components/1. A few examples are:
- **card.tsx**: component that displays all the individual product information in a card-like format. 
- **header.tsx**: header component that involves a toggle sidebar button, a logo, and multiple icons for account, wishlist, and basket.
- **errorPage.tsx**: component describing the layout of the error page, when information can not be found or page has not been created.

#### Next.JS

[Next.JS](https://nextjs.org/) is a react framework that builds on component functionalities. Some examples of Next.JS are:
- **Data Fetching**: Making a react component async and await data as it is being fetched from a client/server.
- **Route Handlers**: Building API endpoints to securely connect with third-party services.
- **Advanced Routing & Nested Layouts**: Create routes using the file system, including support for more advanced routing patterns and UI layouts.

#### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework packed with classes like `flex`, `pt-4` that can be composed to build any design, directly in your markup. It is easy-to-use and quick in building website layouts and designs.

For example, Tailwind CSS is used in `components/header.tsx` to add styling to the Header component.
```tsx
<header className="sticky top-0 px-10 w-full h-28 text-white bg-white flex items-center justify-between font-ubuntu">
<Additional content here.....>
</header>
```

This ensures the header stays at the top of the page (`sticky top-0`), is the full width of the screen, sets the colours and positioning of its items.

#### Supabase

[Supabase](https://supabase.com/) is a platform to store a Postgres database. It has many features such as authentication, instant APIs, edge functions, realtime subscriptions, store, and vector embeddings.

In this project, I stored the `products` data in Supabase. Instructions on how to upload a database can be found [here.](https://supabase.com/docs/guides/database/import-data)

### File Structure

- **`components/`**
  - `card.tsx`: component to style the card containing product information.
  - `errorPage.tsx`: component for the error page, when information does not load or is not found on the site.
  - `footer.tsx`: footer component that contains sign-up form component, and company information to every page.
  - `fullProduct.tsx`: product component that is displayed on the single product page.
  - `header.tsx`: header component to display header with toggle sidebar button, logo and icons such as account, wishlist, and basket.
  - `layout.tsx`: layout component of the page so that every page has a header, sidebar, main body, and footer.
  - `product.tsx`: product component displaying all product information and like/add to basket icon.
  - `productFilter.tsx`: component to filter products by a certain amount.
  - `sidebar.tsx`: component for the sidebar so it is collapsible and contains correct data.
  - `signUpForm.tsx`: sign up form component that lets a user add their email to a mailing list form.
  - `socialSection.tsx`: social section component that is found on the homepage, displaying images.
  
- **`data/`**
  - `database.types.ts`: contains database information for Supabase to allow requests.
  - `requests.ts`: queries to Supabase to retrieve all products and single products.
  - `singleProductRequest.ts1: requests to Supabase to retrieve single products.
  - `supabase.ts`: requests to Supabase to retrieve all products.
    
- **`models/`**
  - `product.ts`: contains the expected structure of a product from database.
    
- **`pages/`**
  - `api/`
    - `products/`
        - `[id].ts`: api request to retrieve single product
        - `index.ts`: api request to retrieve all products to homepage.
        - `products.ts`
     - `_app.tsx`
     - `[id].tsx`: page for a single product.
     - `about.tsx`: about page.
     - `index.tsx`: homepage
     - `products.tsx`: page to display all products.
      
- **`public/`**
  - `images/`: contains images used on the website.
      - `in-process.jpg`
      - `landing-page-image.jpg`
      - `social-image-1.jpg`
      - `social-image-2.jpg`
      - `social-image-3.jpg`
      - `social-image-4.jpg`
      - `social-image-5.jpg`
      - `social-image-6.jpg`

- **`styles/`**
  - `globals.css`

- `next-env.d.ts`
- `next.config.js`
- `postcss.config.js`
- `README.md`
- `tailwind.config.js`
- `tsconfig.json`

### Usage Instructions

To see the final product, please head to this [link](https://53d9a805-d25f-40df-821d-c39719866bba-00-yb12mn67hr8m.riker.replit.dev/). This is from using Replit, so the website has not been deployed. 

#### Data Setup

To set-up the data, the `products` data is first uploaded to Supabase.

The data is then selected with the `data/requests.ts` file. For example, to select all the product data:
```typescript
export async function selectProductData(supabase: any) {
  let { data: products, error } = await supabase
  .from('products')
  .select('*')
  return { products, error }
}

export type ProductResponse = Awaited<ReturnType<typeof selectProductData>>
```

Then in `data/supabase.ts`, the functionality to request the products data is created.
```typescript
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types';
import { selectProductData, ProductResponse } from './requests';

export const callSupabaseProducts = async () => {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
    throw new Error("Missing Supabase credentials");
  }
  const supabaseUrl: string = process.env.SUPABASE_URL || '';
  const supabaseKey: string = process.env.SUPABASE_KEY || '';
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);
  const productData: ProductResponse = await selectProductData(supabase);
  return productData
}
export default callSupabaseProducts;
```

This function can then be called in the API (`pages/api/products/index.ts`).
```typescript
import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../models/product";
import callSupabaseProducts from "../../../data/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  const productData = await callSupabaseProducts();
  res.status(200).json(productData.products);
}
```

### Next Steps

If I had more time to complete the project, here are a few things I would work on implementing:
1. Improving the homepage
   - Adding more sections e.g. Shop by Category, Recommended for You.
   - Creating a scalable landing image or a carousel to display images
2. Ensuring styling is consistent throughout the site
3. Adding functionalities and creating these individual pages
   - Add to basket
   - Add to wishlist
4. Adding more data to the database e.g. images, item descriptions, more products
5. Improving the product page to display more information, reviews...

## Final Thoughts

Overall I thoroughly enjoyed this project. Having not really delved into web development, it was great to learn about the full-stack process and create a final product that could potentially be fully-functioning and have a more aesthetically-pleasing look.

Having learned the basics of full-stack web development, I am hoping to create a portfolio website or create a new and improved alternative site for a business.
