"use client";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}
export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  const setOnMouseEnter = () => {
    setDisplayImage(product.images[1]);
  };
  const setOnMouseLeave = () => {
    setDisplayImage(product.images[0]);
  };
  return (
    <div className=" rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full object-cover rounded-md"
          height={500}
          width={500}
          onMouseEnter={setOnMouseEnter}
          onMouseLeave={setOnMouseLeave}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`} className="hover:text-sky-600">
          {product.title}
        </Link>
        <span className="font-bold">{product.price}</span>
      </div>
    </div>
  );
};
