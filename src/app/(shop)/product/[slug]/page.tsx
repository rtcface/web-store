import { notFound } from "next/navigation";
import { initialData } from "../../../../seed/seed";
import { titleFont } from "@/config/fonts";
import {
  ProductMobileSlideShow,
  ProductSlideShow,
  QuantitySelector,
} from "@/components";
interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile SlideShow  */}
        <ProductMobileSlideShow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />
        {/* SlideShow desktop */}
        <ProductSlideShow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
      </div>
      {/*  Detalles */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* SELECTOR DE CANTIDAD */}
        <QuantitySelector />
        <button className="btn-primary my-5">Agregar al carrito</button>
        {/* Descripcion */}
        <h3 className="font-bold text-sm ">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
