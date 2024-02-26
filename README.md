# Building Ecommerce Site

## Table of Contents

1. [Introduction](#introduction)
  - [Key Objectives](#key-objectives)
  - [Data](#data)
  - [Key Tools](#key-tools)
2. [File Structure]
3. [Usage Instructions]

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

To manage my workload, I used a Kanban board on [Trello](https://trello.com/u/elishagretton/boards).

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

In this project, I stored the `products` data in Supabase, which is relatively easy. Instructions can be seen [here.](https://supabase.com/docs/guides/database/import-data)

### File Structure

- **`components/`**
  - `card.tsx`:
  - `errorPage.tsx`:
  - `footer.tsx`:
  - `fullProduct.tsx`:
  - `header.tsx`:
  - `layout.tsx`:
  - `product.tsx`:
  - `productFilter.tsx`:
  - `sidebar.tsx`:
  - `signUpForm.tsx`:
  - `socialSection.tsx`:
  
- **`data/`**
  - `database.types.ts`:
  - `requests.ts`:
  - `singleProductRequest.ts`
  - `supabase.ts`
    
- **`models/`**
  - `product.ts`
    
- **`pages/`**
  - `api/`
    - `products/`
        - `[id].ts`
        - `index.ts`
        - `products.ts`
     - `_app.tsx`
     - `[id].tsx`
     - `about.tsx`
     - `index.tsx`
     - `products.tsx`
      
- **`public/`**
  - `images/`
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

#### Data Setup

To first select the data, the `data/requests.ts` file has been created to store these queries. For example, to select all the product data:
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
