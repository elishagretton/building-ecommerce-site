import Image from "next/image";
import { useEffect, useState } from "react";
import Product from "../components/product";
import { IProduct } from "../models/product";
import ProductFilter from '../components/productFilter';

export default function Home() {
const [products, setProducts] = useState<IProduct[]>([]);
const [currentPage, setCurrentPage] = useState(1);
const resultsPerPage = 10;

useEffect(() => {
  const fetchProducts = async (page: number) => {
    try {
      const result = await fetch(`/api/products?page=${page}`);
      if (!result.ok) {
        throw new Error('Failed to fetch products');
      }
      const currentProducts = await result.json();
      setProducts(currentProducts);
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };

  fetchProducts(currentPage);
}, [currentPage]);

const handlePageChange = (newPage: number) => {
  setCurrentPage(newPage);
};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="py-20 flex flex-col flex-1 justify-center items-center">
        <h1 className="m-0 leading-snug text-6xl text-center">
          Welcome to <span className="text-blue-600 font-ubuntu tracking-wider ">buyproducts.com</span>
        </h1>

        <p className="leading-normal text-2xl text-center">where you can find everything!
        </p>
        <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 m-6">
          View Products
        </button>

        <div className="fle">
          {/* Use ProductFilter component to display filtered products */}
          <ProductFilter
            page={currentPage}
            resultsPerPage={resultsPerPage}
            allProducts={products}
          />
        </div>
        {/* Controls */}
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span> Page {currentPage} </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={products.length < resultsPerPage}
          >
            Next Page
          </button>
        </div>
      </main>

      <footer className="w-full h-24 flex justify-center items-center border-t border-solid border-gray-200">
        <a
          className="flex flex-1 justify-center items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
