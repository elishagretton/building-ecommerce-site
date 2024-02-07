import { IProduct } from '../models/product';
import { useEffect, useState } from 'react';
import Product from "../components/product";

export function getFilteredProducts(page: number, resultsPerPage: number, allProducts: IProduct[]): IProduct[] {
  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  return allProducts.slice(startIndex, endIndex);
}


interface ProductFilterProps {
  page: number;
  resultsPerPage: number;
  allProducts: IProduct[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({page, resultsPerPage, allProducts}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = () => {
      const filteredProducts = getFilteredProducts(page, resultsPerPage, allProducts);
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [page, resultsPerPage, allProducts]);

  return (
    <div className="flex flex-row flex-wrap justify-center align-center">
      {products.map((p) => (
        <Product key={p.productId} {...p} />
      ))}
    </div>
  );
};

export default ProductFilter;
