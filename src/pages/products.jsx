import React from "react";
import CardProduct from "../components/Fragments/CardProduct";

const productData = [
  {
    id: 1,
    name: "Sepatu Baru",
    image: "./images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              veniam magnam, pariatur maiores sint odit distinctio deleniti modi
              dolore repellendus!`,
    price: "Rp 1.000.000,00",
  },

  {
    id: 2,
    name: "Sepatu Super",
    image: "./images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          veniam magnam.`,
    price: "Rp 2.000.000,00",
  },
  {
    id: 3,
    name: "Sepatu Uhuy",
    image: "./images/shoes-1.jpg",
    description: `Lorem ipsum dolor. Dignissimos veniam magnam.`,
    price: "Rp 5.000.000,00",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {productData.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
