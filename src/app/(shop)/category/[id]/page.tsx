import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const getProducts = (id: string) => {
  return initialData.products.filter((product) => product.category === id);
};

const options = ["computing-printing", "arts-crafts", "school"];

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  if (!options.includes(id)) {
    notFound();
  }

  return (
    <>
      <Title title="Tienda" subtitle={id} className="mb-2" />
      <ProductGrid products={getProducts(id)} />
    </>
  );
}
