import React from "react";
import CardProduct from "../components/Fragments/CardProduct";

const products = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image={"./images/shoes-1.jpg"} />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          veniam magnam, pariatur maiores sint odit distinctio deleniti modi
          dolore repellendus!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000,00" />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image={"./images/shoes-1.jpg"} />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          veniam magnam, pariatur maiores sint odit distinctio deleniti modi
          dolore repellendus!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000,00" />
      </CardProduct>
    </div>
    // <div className="flex justify-center py-5">
    //   <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
    //     <a href="#">
    //       <img
    //         src="./images/shoes-1.jpg"
    //         alt="shoes"
    //         className="p-8 rounded-t-lg"
    //       />
    //     </a>
    //     <div className="px-5 pb-5">
    //       <a href="">
    //         <h5 className="text-xl font-semibold tracking-tight text-white">
    //           Sepatu Baru
    //         </h5>
    //         <p className="text-s text-white ">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
    //           quidem maxime est accusamus sequi veniam necessitatibus, quis
    //           labore molestias animi.
    //         </p>
    //       </a>
    //     </div>
    //     <div className="flex items-center justify-between px-5 pb-5">
    //       <span className="text-xl font-bold text-white">Rp. 1.000.000</span>
    //       <Button classname="bg-blue-600">Add to Cart</Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default products;
