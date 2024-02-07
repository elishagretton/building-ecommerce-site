import { useRouter } from "next/dist/client/router";
import Product from "../components/product";
import ErrorPage from "../components/errorPage";
import { IProduct } from "../models/product";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await fetch(`/api/products/${id}`);
        if (!result.ok) {
          throw new Error("Product not found");
        }
        const product = await result.json();
        setProduct(product);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <main className="px-10 py-6 flex flex-col flex-1 min-h-screen justify-center items-center">
      {error ? (
        <ErrorPage message={error} />
      ) : (
        product && <Product {...product} />
      )}
    </main>
  );
}
