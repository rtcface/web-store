import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const options = ["computing-printing", "arts-crafts", "cart"];

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  if (!options.includes(id)) {
    notFound();
  }
  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
}
