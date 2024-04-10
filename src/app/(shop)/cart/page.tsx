import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px0">
      <div className="flex flex-col w-[1000px]">
        <Title title={"Carrito de compras"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito de compras */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas productos</span>
            <Link href="/">Continúa comprando</Link>

            {/* Items del carrito */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded"
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <QuantitySelector quantity={1} />
                  <button className="underline mt-3">Quitar</button>
                </div>
              </div>
            ))}
          </div>
          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2 ">Resumen de orden</h2>
            <hr className="mb-5" />
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100.00</span>
              <span>Inpuestos (15%)</span>
              <span className="text-right">$ 15.00</span>
              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$115.00</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center items-center gap-1"
              >
                <IoBagCheckOutline />
                Pagar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
