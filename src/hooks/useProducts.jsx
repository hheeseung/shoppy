import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts as fetchProducts,
  addNewProduct,
} from "../services/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(["products"], fetchProducts);
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { productsQuery, addProduct };
}
