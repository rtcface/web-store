interface SeedProduct {
  barcode: string;
  supplier_code: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  category: string;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      barcode: "PRD0000001",
      supplier_code: "T2080024",
      description: "Cartulina Fluorecente Rosa",
      images: ["PRD0000002.png", "PRD0000003.png"],
      inStock: 5,
      price: 5.64,
      slug: "Cartulina_Fluorecente_Rosa",
      tags: ["Cartulina Fluorecente Rosa"],
      title: "Cartulina Fluorecente Rosa",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000002",
      supplier_code: "T2080025",
      description: "Cartulina Fluorecente Rosa",
      images: ["PRD0000002.png", "PRD0000003.png"],
      inStock: 6,
      price: 6.64,
      slug: "Cartulina_Fluorecente_Rosa",
      tags: ["Cartulina Fluorecente Rosa"],
      title: "Cartulina Fluorecente Rosa",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000003",
      supplier_code: "T2080026",
      description: "Cartulina Fluorecente Naranja",
      images: ["PRD0000003.png", "PRD0000004.png"],
      inStock: 7,
      price: 7.64,
      slug: "Cartulina_Fluorecente_Naranja",
      tags: ["Cartulina Fluorecente Naranja"],
      title: "Cartulina Fluorecente Naranja",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000004",
      supplier_code: "T2080027",
      description: "Cartulina Fluorecente Azul",
      images: ["PRD0000004.png", "PRD0000005.png"],
      inStock: 8,
      price: 8.64,
      slug: "Cartulina_Fluorecente_Azul",
      tags: ["Cartulina Fluorecente Azul"],
      title: "Cartulina Fluorecente Azul",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000005",
      supplier_code: "T2080028",
      description: "Cartulina Fluorecente Morado",
      images: ["PRD0000005.png", "PRD0000006.png"],
      inStock: 9,
      price: 9.64,
      slug: "Cartulina_Fluorecente_Morado",
      tags: ["Cartulina Fluorecente Morado"],
      title: "Cartulina Fluorecente Morado",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000006",
      supplier_code: "T2080029",
      description: "Cartulina Fluorecente Verde",
      images: ["PRD0000006.png"],
      inStock: 10,
      price: 10.64,
      slug: "Cartulina_Fluorecente_Verde",
      tags: ["Cartulina Fluorecente Verde"],
      title: "Cartulina Fluorecente Verde",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000007",
      supplier_code: "T2080030",
      description: "Cartulina Fluorecente Amarillo",
      images: ["PRD0000007.png"],
      inStock: 11,
      price: 11.64,
      slug: "Cartulina_Fluorecente_Amarillo",
      tags: ["Cartulina Fluorecente Amarillo"],
      title: "Cartulina Fluorecente Amarillo",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000008",
      supplier_code: "T2080031",
      description: "Cartulina Iris Gris",
      images: ["PRD0000008.png"],
      inStock: 12,
      price: 12.64,
      slug: "Cartulina_Iris_Gris",
      tags: ["Cartulina Iris Gris"],
      title: "Cartulina Iris Gris",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000009",
      supplier_code: "T2080032",
      description: "Cartulina Iris Negro",
      images: ["PRD0000009.png"],
      inStock: 13,
      price: 13.64,
      slug: "Cartulina_Iris_Negro",
      tags: ["Cartulina Iris Negro"],
      title: "Cartulina Iris Negro",
      category: "computing-printing",
    },
    {
      barcode: "PRD00000010",
      supplier_code: "T2080033",
      description: "Cartulina Iris Café",
      images: ["PRD00000010.png"],
      inStock: 14,
      price: 14.64,
      slug: "Cartulina_Iris_Café",
      tags: ["Cartulina Iris Café"],
      title: "Cartulina Iris Café",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000011",
      supplier_code: "T2080034",
      description: "Cartulina Iris Azul Rey",
      images: ["PRD0000011.png"],
      inStock: 15,
      price: 15.64,
      slug: "Cartulina_Iris_Azul_Rey",
      tags: ["Cartulina Iris Azul Rey"],
      title: "Cartulina Iris Azul Rey",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000012",
      supplier_code: "T2080035",
      description: "Cartulina Iris Azul Cielo",
      images: ["PRD0000012.png"],
      inStock: 16,
      price: 16.64,
      slug: "Cartulina_Iris_Azul_Cielo",
      tags: ["Cartulina Iris Azul Cielo"],
      title: "Cartulina Iris Azul Cielo",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000013",
      supplier_code: "T2080036",
      description: "Cartulina Iris Morado",
      images: ["PRD0000013.png"],
      inStock: 17,
      price: 17.64,
      slug: "Cartulina_Iris_Morado",
      tags: ["Cartulina Iris Morado"],
      title: "Cartulina Iris Morado",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000014",
      supplier_code: "T2080037",
      description: "Cartulina Iris Amarillo",
      images: ["PRD0000014.png"],
      inStock: 18,
      price: 18.64,
      slug: "Cartulina_Iris_Amarillo",
      tags: ["Cartulina Iris Amarillo"],
      title: "Cartulina Iris Amarillo",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000015",
      supplier_code: "T2080038",
      description: "Cartulina Iris Verde Bandera",
      images: ["PRD0000015.png"],
      inStock: 19,
      price: 19.64,
      slug: "Cartulina_Iris_Verde_Bandera",
      tags: ["Cartulina Iris Verde Bandera"],
      title: "Cartulina Iris Verde Bandera",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000016",
      supplier_code: "T2080039",
      description: "Cartulina Iris Rosa",
      images: ["PRD0000016.png"],
      inStock: 20,
      price: 20.64,
      slug: "Cartulina_Iris_Rosa",
      tags: ["Cartulina Iris Rosa"],
      title: "Cartulina Iris Rosa",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000017",
      supplier_code: "T2080040",
      description: "Cartulina Iris Roja",
      images: ["PRD0000017.png"],
      inStock: 21,
      price: 21.64,
      slug: "Cartulina_Iris_Roja",
      tags: ["Cartulina Iris Roja"],
      title: "Cartulina Iris Roja",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000018",
      supplier_code: "T2080041",
      description: "Cartulina Iris Verde Limon",
      images: ["PRD0000018.png"],
      inStock: 22,
      price: 22.64,
      slug: "Cartulina_Iris_Verde_Limon",
      tags: ["Cartulina Iris Verde Limon"],
      title: "Cartulina Iris Verde Limon",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000019",
      supplier_code: "T2080042",
      description: "Cartulina Iris Vino",
      images: ["PRD0000019.png"],
      inStock: 23,
      price: 23.64,
      slug: "Cartulina_Iris_Vino",
      tags: ["Cartulina Iris Vino"],
      title: "Cartulina Iris Vino",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000020",
      supplier_code: "T2080043",
      description: "Cartulina pastel Rosa",
      images: ["PRD0000020.png"],
      inStock: 24,
      price: 24.64,
      slug: "Cartulina_pastel_Rosa",
      tags: ["Cartulina pastel Rosa"],
      title: "Cartulina pastel Rosa",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000021",
      supplier_code: "T2080044",
      description: "Cartulina pastel Verde",
      images: ["PRD0000021.png"],
      inStock: 25,
      price: 25.64,
      slug: "Cartulina_pastel_Verde",
      tags: ["Cartulina pastel Verde"],
      title: "Cartulina pastel Verde",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000022",
      supplier_code: "T2080045",
      description: "Cartulina pastel Azul",
      images: ["PRD0000022.png"],
      inStock: 26,
      price: 26.64,
      slug: "Cartulina_pastel_Azul",
      tags: ["Cartulina pastel Azul"],
      title: "Cartulina pastel Azul",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000023",
      supplier_code: "T2080046",
      description: "Cartulina pastel Amarillo",
      images: ["PRD0000023.png"],
      inStock: 27,
      price: 27.64,
      slug: "Cartulina_pastel_Amarillo|",
      tags: ["Cartulina pastel Amarillo"],
      title: "Cartulina pastel Amarillo",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000024",
      supplier_code: "T2080047",
      description: "Cartulina Blanca",
      images: ["PRD0000024.png"],
      inStock: 28,
      price: 28.64,
      slug: "Cartulina_Blanca",
      tags: ["Cartulina Blanca"],
      title: "Cartulina Blanca",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000025",
      supplier_code: "T2080048",
      description: "Cascaron 1/2",
      images: ["PRD0000025.png"],
      inStock: 29,
      price: 29.64,
      slug: "Cascaron_1/2",
      tags: ["Cascaron 1/2"],
      title: "Cascaron 1/2",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000026",
      supplier_code: "T2080049",
      description: "Cascaron 1/4",
      images: ["PRD0000026.png"],
      inStock: 30,
      price: 30.64,
      slug: "Cascaron_1/4",
      tags: ["Cascaron 1/4"],
      title: "Cascaron 1/4",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000027",
      supplier_code: "T2080050",
      description: "Cascaron 1/8",
      images: ["PRD0000027.png"],
      inStock: 31,
      price: 31.64,
      slug: "Cascaron_1/8",
      tags: ["Cascaron 1/8"],
      title: "Cascaron 1/8",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000028",
      supplier_code: "T2080051",
      description: "Papel Lustre Azul Rey",
      images: ["PRD0000028.png"],
      inStock: 32,
      price: 32.64,
      slug: "Papel_Lustre_Azul_Rey",
      tags: ["Papel Lustre Azul Rey"],
      title: "Papel Lustre Azul Rey",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000029",
      supplier_code: "T2080052",
      description: "Papel Lustre Azul Cielo",
      images: ["PRD0000029.png"],
      inStock: 33,
      price: 33.64,
      slug: "Papel_Lustre_Azul_Cielo",
      tags: ["Papel Lustre Azul Cielo"],
      title: "Papel Lustre Azul Cielo",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000030",
      supplier_code: "T2080053",
      description: "Papel Lustre Rojo",
      images: ["PRD0000030.png"],
      inStock: 34,
      price: 34.64,
      slug: "Papel_Lustre_Rojo",
      tags: ["Papel Lustre Rojo"],
      title: "Papel Lustre Rojo",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000031",
      supplier_code: "T2080054",
      description: "Papel Lustre café",
      images: ["PRD0000031.png"],
      inStock: 35,
      price: 35.64,
      slug: "Papel_Lustre_café",
      tags: ["Papel Lustre café"],
      title: "Papel Lustre café",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000032",
      supplier_code: "T2080055",
      description: "Papel Lustre negro",
      images: ["PRD0000032.png"],
      inStock: 36,
      price: 36.64,
      slug: "Papel_Lustre_negro",
      tags: ["Papel Lustre negro"],
      title: "Papel Lustre negro",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000033",
      supplier_code: "T2080056",
      description: "Papel Lustre blanco",
      images: ["PRD0000033.png"],
      inStock: 37,
      price: 37.64,
      slug: "Papel_Lustre_blanco",
      tags: ["Papel Lustre blanco"],
      title: "Papel Lustre blanco",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000034",
      supplier_code: "T2080057",
      description: "Papel Lustre lila",
      images: ["PRD0000034.png"],
      inStock: 38,
      price: 38.64,
      slug: "Papel_Lustre_lila",
      tags: ["Papel Lustre lila"],
      title: "Papel Lustre lila",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000035",
      supplier_code: "T2080058",
      description: "Papel Lustre verde bandera",
      images: ["PRD0000035.png"],
      inStock: 39,
      price: 39.64,
      slug: "Papel_Lustre_verde_bandera",
      tags: ["Papel Lustre verde bandera"],
      title: "Papel Lustre verde bandera",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000036",
      supplier_code: "T2080059",
      description: "Papel Lustre morado",
      images: ["PRD0000036.png"],
      inStock: 40,
      price: 40.64,
      slug: "Papel_Lustre_morado",
      tags: ["Papel Lustre morado"],
      title: "Papel Lustre morado",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000037",
      supplier_code: "T2080060",
      description: "Papel Lustre amarillo",
      images: ["PRD0000037.png"],
      inStock: 41,
      price: 41.64,
      slug: "Papel_Lustre_amarillo",
      tags: ["Papel Lustre amarillo"],
      title: "Papel Lustre amarillo",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000038",
      supplier_code: "T2080061",
      description: "Papel Lustre naranja",
      images: ["PRD0000038.png"],
      inStock: 42,
      price: 42.64,
      slug: "Papel_Lustre_naranja",
      tags: ["Papel Lustre naranja"],
      title: "Papel Lustre naranja",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000039",
      supplier_code: "T2080062",
      description: "Papel Lustre Rosa Pastel",
      images: ["PRD0000039.png"],
      inStock: 43,
      price: 43.64,
      slug: "Papel_Lustre_Rosa_Pastel",
      tags: ["Papel Lustre Rosa Pastel"],
      title: "Papel Lustre Rosa Pastel",
      category: "computing-printing",
    },
    {
      barcode: "PRD0000040",
      supplier_code: "T2080063",
      description: "Papel Lustre Rosa Mexicano",
      images: ["PRD0000040.png"],
      inStock: 44,
      price: 44.64,
      slug: "Papel_Lustre_Rosa_Mexicano",
      tags: ["Papel Lustre Rosa Mexicano"],
      title: "Papel Lustre Rosa Mexicano",
      category: "school",
    },
    {
      barcode: "PRD0000041",
      supplier_code: "T2080064",
      description: "Papel Lustre Verde Limon",
      images: ["PRD0000041.png"],
      inStock: 45,
      price: 45.64,
      slug: "Papel_Lustre_Verde_Limon",
      tags: ["Papel Lustre Verde Limon"],
      title: "Papel Lustre Verde Limon",
      category: "school",
    },
    {
      barcode: "PRD0000042",
      supplier_code: "T2080065",
      description: "Papel America Morado",
      images: ["PRD0000042.png"],
      inStock: 46,
      price: 46.64,
      slug: "Papel_America_Morado",
      tags: ["Papel America Morado"],
      title: "Papel America Morado",
      category: "school",
    },
    {
      barcode: "PRD0000043",
      supplier_code: "T2080066",
      description: "Papel America Verde Bandera",
      images: ["PRD0000043.png"],
      inStock: 47,
      price: 47.64,
      slug: "Papel_America_Verde_Bandera",
      tags: ["Papel America Verde Bandera"],
      title: "Papel America Verde Bandera",
      category: "school",
    },
    {
      barcode: "PRD0000044",
      supplier_code: "T2080067",
      description: "Papel America Naranja",
      images: ["PRD0000044.png"],
      inStock: 48,
      price: 48.64,
      slug: "Papel_America_Naranja",
      tags: ["Papel America Naranja"],
      title: "Papel America Naranja",
      category: "school",
    },
    {
      barcode: "PRD0000045",
      supplier_code: "T2080068",
      description: "Papel America Negro",
      images: ["PRD0000045.png"],
      inStock: 49,
      price: 49.64,
      slug: "Papel_America_Negro",
      tags: ["Papel America Negro"],
      title: "Papel America Negro",
      category: "school",
    },
    {
      barcode: "PRD0000046",
      supplier_code: "T2080069",
      description: "Papel America Amarillo",
      images: ["PRD0000046.png"],
      inStock: 50,
      price: 50.64,
      slug: "Papel_America_Amarillo",
      tags: ["Papel America Amarillo"],
      title: "Papel America Amarillo",
      category: "school",
    },
    {
      barcode: "PRD0000047",
      supplier_code: "T2080070",
      description: "Papel America Azul Rey",
      images: ["PRD0000047.png"],
      inStock: 51,
      price: 51.64,
      slug: "Papel_America_Azul_Rey",
      tags: ["Papel America Azul Rey"],
      title: "Papel America Azul Rey",
      category: "school",
    },
    {
      barcode: "PRD0000048",
      supplier_code: "T2080071",
      description: "Papel America Azul Pastel",
      images: ["PRD0000048.png"],
      inStock: 52,
      price: 52.64,
      slug: "Papel_America_Azul_Pastel",
      tags: ["Papel America Azul Pastel"],
      title: "Papel America Azul Pastel",
      category: "school",
    },
    {
      barcode: "PRD0000049",
      supplier_code: "T2080072",
      description: "Papel America Blanco",
      images: ["PRD0000049.png"],
      inStock: 53,
      price: 53.64,
      slug: "Papel_America_Blanco",
      tags: ["Papel America Blanco"],
      title: "Papel America Blanco",
      category: "school",
    },
    {
      barcode: "PRD0000050",
      supplier_code: "T2080073",
      description: "Papel America Café",
      images: ["PRD0000050.png"],
      inStock: 54,
      price: 54.64,
      slug: "Papel_America_Café",
      tags: ["Papel America Café"],
      title: "Papel America Café",
      category: "school",
    },
    {
      barcode: "PRD0000051",
      supplier_code: "T2080074",
      description: "Papel America Rojo",
      images: ["PRD0000051.png"],
      inStock: 55,
      price: 55.64,
      slug: "Papel_America_Rojo",
      tags: ["Papel America Rojo"],
      title: "Papel America Rojo",
      category: "school",
    },
    {
      barcode: "PRD0000052",
      supplier_code: "T2080075",
      description: "Papel America Rosa",
      images: ["PRD0000052.png"],
      inStock: 56,
      price: 56.64,
      slug: "Papel_America_Rosa",
      tags: ["Papel America Rosa"],
      title: "Papel America Rosa",
      category: "school",
    },
    {
      barcode: "PRD0000053",
      supplier_code: "T2080076",
      description: "Papel America Verde Limon",
      images: ["PRD0000053.png"],
      inStock: 57,
      price: 57.64,
      slug: "Papel_America_Verde_Limon",
      tags: ["Papel America Verde Limon"],
      title: "Papel America Verde Limon",
      category: "school",
    },
    {
      barcode: "PRD0000054",
      supplier_code: "T2080077",
      description: "Papel China Blanco",
      images: ["PRD0000054.png"],
      inStock: 58,
      price: 58.64,
      slug: "Papel_China_Blanco",
      tags: ["Papel China Blanco"],
      title: "Papel China Blanco",
      category: "school",
    },
    {
      barcode: "PRD0000055",
      supplier_code: "T2080078",
      description: "Papel China Rosa Mexicano",
      images: ["PRD0000055.png"],
      inStock: 59,
      price: 59.64,
      slug: "Papel_China_Rosa_Mexicano",
      tags: ["Papel China Rosa Mexicano"],
      title: "Papel China Rosa Mexicano",
      category: "school",
    },
    {
      barcode: "PRD0000056",
      supplier_code: "T2080079",
      description: "Papel China Rosa Pastel",
      images: ["PRD0000056.png"],
      inStock: 60,
      price: 60.64,
      slug: "Papel_China_Rosa_Pastel",
      tags: ["Papel China Rosa Pastel"],
      title: "Papel China Rosa Pastel",
      category: "school",
    },
    {
      barcode: "PRD0000057",
      supplier_code: "T2080080",
      description: "Papel China Lila",
      images: ["PRD0000057.png"],
      inStock: 61,
      price: 61.64,
      slug: "Papel_China_Lila",
      tags: ["Papel China Lila"],
      title: "Papel China Lila",
      category: "school",
    },
    {
      barcode: "PRD0000058",
      supplier_code: "T2080081",
      description: "Papel China Morado",
      images: ["PRD0000058.png"],
      inStock: 62,
      price: 62.64,
      slug: "Papel_China_Morado",
      tags: ["Papel China Morado"],
      title: "Papel China Morado",
      category: "school",
    },
    {
      barcode: "PRD0000059",
      supplier_code: "T2080082",
      description: "Papel China Amarillo",
      images: ["PRD0000059.png"],
      inStock: 63,
      price: 63.64,
      slug: "Papel_China_Amarillo",
      tags: ["Papel China Amarillo"],
      title: "Papel China Amarillo",
      category: "school",
    },
    {
      barcode: "PRD0000060",
      supplier_code: "T2080083",
      description: "Papel China Naraja",
      images: ["PRD0000060.png"],
      inStock: 64,
      price: 64.64,
      slug: "Papel_China_Naraja",
      tags: ["Papel China Naraja"],
      title: "Papel China Naraja",
      category: "school",
    },
    {
      barcode: "PRD0000061",
      supplier_code: "T2080084",
      description: "Papel China Rojo",
      images: ["PRD0000061.png"],
      inStock: 65,
      price: 65.64,
      slug: "Papel_China_Rojo",
      tags: ["Papel China Rojo"],
      title: "Papel China Rojo",
      category: "school",
    },
    {
      barcode: "PRD0000062",
      supplier_code: "T2080085",
      description: "Papel China Azul Rey",
      images: ["PRD0000062.png"],
      inStock: 66,
      price: 66.64,
      slug: "Papel_China_Azul_Rey",
      tags: ["Papel China Azul Rey"],
      title: "Papel China Azul Rey",
      category: "school",
    },
    {
      barcode: "PRD0000063",
      supplier_code: "T2080086",
      description: "Papel China Azul Cielo",
      images: ["PRD0000063.png"],
      inStock: 67,
      price: 67.64,
      slug: "Papel_China_Azul_Cielo",
      tags: ["Papel China Azul Cielo"],
      title: "Papel China Azul Cielo",
      category: "school",
    },
    {
      barcode: "PRD0000064",
      supplier_code: "T2080087",
      description: "Papel China Verde Limon",
      images: ["PRD0000064.png"],
      inStock: 68,
      price: 68.64,
      slug: "Papel_China_Verde_Limon",
      tags: ["Papel China Verde Limon"],
      title: "Papel China Verde Limon",
      category: "school",
    },
    {
      barcode: "PRD0000065",
      supplier_code: "T2080088",
      description: "Papel China Verde Bandera",
      images: ["PRD0000065.png"],
      inStock: 69,
      price: 69.64,
      slug: "Papel_China_Verde_Bandera",
      tags: ["Papel China Verde Bandera"],
      title: "Papel China Verde Bandera",
      category: "school",
    },
    {
      barcode: "PRD0000066",
      supplier_code: "T2080089",
      description: "Papel China Café",
      images: ["PRD0000066.png"],
      inStock: 70,
      price: 70.64,
      slug: "Papel_China_Café",
      tags: ["Papel China Café"],
      title: "Papel China Café",
      category: "school",
    },
    {
      barcode: "PRD0000067",
      supplier_code: "T2080090",
      description: "Papel China Gris",
      images: ["PRD0000067.png"],
      inStock: 71,
      price: 71.64,
      slug: "Papel_China_Gris",
      tags: ["Papel China Gris"],
      title: "Papel China Gris",
      category: "school",
    },
    {
      barcode: "PRD0000068",
      supplier_code: "T2080091",
      description: "Papel China Negro",
      images: ["PRD0000068.png"],
      inStock: 72,
      price: 72.64,
      slug: "Papel_China_Negro",
      tags: ["Papel China Negro"],
      title: "Papel China Negro",
      category: "school",
    },
    {
      barcode: "PRD0000069",
      supplier_code: "T2080092",
      description: "Papel Crepe Rojo",
      images: ["PRD0000069.png"],
      inStock: 73,
      price: 73.64,
      slug: "Papel_Crepe_Rojo",
      tags: ["Papel Crepe Rojo"],
      title: "Papel Crepe Rojo",
      category: "school",
    },
    {
      barcode: "PRD0000070",
      supplier_code: "T2080093",
      description: "Papel Crepe Negro",
      images: ["PRD0000070.png"],
      inStock: 74,
      price: 74.64,
      slug: "Papel_Crepe_Negro",
      tags: ["Papel Crepe Negro"],
      title: "Papel Crepe Negro",
      category: "school",
    },
    {
      barcode: "PRD0000071",
      supplier_code: "T2080094",
      description: "Papel Crepe Blanco",
      images: ["PRD0000071.png"],
      inStock: 75,
      price: 75.64,
      slug: "Papel_Crepe_Blanco",
      tags: ["Papel Crepe Blanco"],
      title: "Papel Crepe Blanco",
      category: "school",
    },
    {
      barcode: "PRD0000072",
      supplier_code: "T2080095",
      description: "Papel Crepe Lila ",
      images: ["PRD0000072.png"],
      inStock: 76,
      price: 76.64,
      slug: "Papel_Crepe_Lila_",
      tags: ["Papel Crepe Lila "],
      title: "Papel Crepe Lila ",
      category: "school",
    },
    {
      barcode: "PRD0000073",
      supplier_code: "T2080096",
      description: "Papel Crepe Morado",
      images: ["PRD0000073.png"],
      inStock: 77,
      price: 77.64,
      slug: "Papel_Crepe_Morado",
      tags: ["Papel Crepe Morado"],
      title: "Papel Crepe Morado",
      category: "school",
    },
    {
      barcode: "PRD0000074",
      supplier_code: "T2080097",
      description: "Papel Crepe Azul Cielo",
      images: ["PRD0000074.png"],
      inStock: 78,
      price: 78.64,
      slug: "Papel_Crepe_Azul_Cielo",
      tags: ["Papel Crepe Azul Cielo"],
      title: "Papel Crepe Azul Cielo",
      category: "school",
    },
    {
      barcode: "PRD0000075",
      supplier_code: "T2080098",
      description: "Papel Crepe Azul Rey",
      images: ["PRD0000075.png"],
      inStock: 79,
      price: 79.64,
      slug: "Papel_Crepe_Azul_Rey",
      tags: ["Papel Crepe Azul Rey"],
      title: "Papel Crepe Azul Rey",
      category: "school",
    },
    {
      barcode: "PRD0000076",
      supplier_code: "T2080099",
      description: "Papel Crepe Verde Limon",
      images: ["PRD0000076.png"],
      inStock: 80,
      price: 80.64,
      slug: "Papel_Crepe_Verde_Limon",
      tags: ["Papel Crepe Verde Limon"],
      title: "Papel Crepe Verde Limon",
      category: "school",
    },
    {
      barcode: "PRD0000077",
      supplier_code: "T2080100",
      description: "Papel Crepe Verde Bandera",
      images: ["PRD0000077.png"],
      inStock: 81,
      price: 81.64,
      slug: "Papel_Crepe_Verde_Bandera",
      tags: ["Papel Crepe Verde Bandera"],
      title: "Papel Crepe Verde Bandera",
      category: "school",
    },
    {
      barcode: "PRD0000078",
      supplier_code: "T2080101",
      description: "Papel Crepe Café",
      images: ["PRD0000078.png"],
      inStock: 82,
      price: 82.64,
      slug: "Papel_Crepe_Café",
      tags: ["Papel Crepe Café"],
      title: "Papel Crepe Café",
      category: "school",
    },
    {
      barcode: "PRD0000079",
      supplier_code: "T2080102",
      description: "Papel Crepe Gris",
      images: ["PRD0000079.png"],
      inStock: 83,
      price: 83.64,
      slug: "Papel_Crepe_Gris",
      tags: ["Papel Crepe Gris"],
      title: "Papel Crepe Gris",
      category: "school",
    },
    {
      barcode: "PRD0000080",
      supplier_code: "T2080103",
      description: "Papel Crepe Bugambilia",
      images: ["PRD0000080.png"],
      inStock: 84,
      price: 84.64,
      slug: "Papel_Crepe_Bugambilia",
      tags: ["Papel Crepe Bugambilia"],
      title: "Papel Crepe Bugambilia",
      category: "school",
    },
    {
      barcode: "PRD0000081",
      supplier_code: "T2080104",
      description: "Papel Crepe Rosa Palido",
      images: ["PRD0000081.png"],
      inStock: 85,
      price: 85.64,
      slug: "Papel_Crepe_Rosa_Palido",
      tags: ["Papel Crepe Rosa Palido"],
      title: "Papel Crepe Rosa Palido",
      category: "school",
    },
    {
      barcode: "PRD0000082",
      supplier_code: "T2080105",
      description: "Papel Crepe Amarillo Huevo",
      images: ["PRD0000082.png"],
      inStock: 86,
      price: 86.64,
      slug: "Papel_Crepe_Amarillo_Huevo",
      tags: ["Papel Crepe Amarillo Huevo"],
      title: "Papel Crepe Amarillo Huevo",
      category: "school",
    },
    {
      barcode: "PRD0000083",
      supplier_code: "T2080106",
      description: "Papel Crepe Amarillo Canario",
      images: ["PRD0000083.png"],
      inStock: 87,
      price: 87.64,
      slug: "Papel_Crepe_Amarillo_Canario",
      tags: ["Papel Crepe Amarillo Canario"],
      title: "Papel Crepe Amarillo Canario",
      category: "school",
    },
    {
      barcode: "PRD0000084",
      supplier_code: "T2080107",
      description: "Papel de regalo ",
      images: ["PRD0000084.png"],
      inStock: 88,
      price: 88.64,
      slug: "Papel_de_regalo_",
      tags: ["Papel de regalo "],
      title: "Papel de regalo ",
      category: "school",
    },
    {
      barcode: "PRD0000085",
      supplier_code: "T2080108",
      description: "Foamy T/C Carne",
      images: ["PRD0000085.png"],
      inStock: 89,
      price: 89.64,
      slug: "Foamy_T/C_Carne",
      tags: ["Foamy T/C Carne"],
      title: "Foamy T/C Carne",
      category: "school",
    },
    {
      barcode: "PRD0000086",
      supplier_code: "T2080109",
      description: "Foamy T/C Morado",
      images: ["PRD0000086.png"],
      inStock: 90,
      price: 90.64,
      slug: "Foamy_T/C_Morado",
      tags: ["Foamy T/C Morado"],
      title: "Foamy T/C Morado",
      category: "school",
    },
    {
      barcode: "PRD0000087",
      supplier_code: "T2080110",
      description: "Foamy T/C Negro",
      images: ["PRD0000087.png"],
      inStock: 91,
      price: 91.64,
      slug: "Foamy_T/C_Negro",
      tags: ["Foamy T/C Negro"],
      title: "Foamy T/C Negro",
      category: "school",
    },
    {
      barcode: "PRD0000088",
      supplier_code: "T2080111",
      description: "Foamy T/C Blanco",
      images: ["PRD0000088.png"],
      inStock: 92,
      price: 92.64,
      slug: "Foamy_T/C_Blanco",
      tags: ["Foamy T/C Blanco"],
      title: "Foamy T/C Blanco",
      category: "school",
    },
    {
      barcode: "PRD0000089",
      supplier_code: "T2080112",
      description: "Foamy T/C Verde Limon",
      images: ["PRD0000089.png"],
      inStock: 93,
      price: 93.64,
      slug: "Foamy_T/C_Verde_Limon",
      tags: ["Foamy T/C Verde Limon"],
      title: "Foamy T/C Verde Limon",
      category: "school",
    },
    {
      barcode: "PRD0000090",
      supplier_code: "T2080113",
      description: "Foamy T/C Verde Bandera",
      images: ["PRD0000090.png"],
      inStock: 94,
      price: 94.64,
      slug: "Foamy_T/C_Verde_Bandera",
      tags: ["Foamy T/C Verde Bandera"],
      title: "Foamy T/C Verde Bandera",
      category: "school",
    },
    {
      barcode: "PRD0000091",
      supplier_code: "T2080114",
      description: "Foamy T/C Azul Rey",
      images: ["PRD0000091.png"],
      inStock: 95,
      price: 95.64,
      slug: "Foamy_T/C_Azul_Rey",
      tags: ["Foamy T/C Azul Rey"],
      title: "Foamy T/C Azul Rey",
      category: "school",
    },
    {
      barcode: "PRD0000092",
      supplier_code: "T2080115",
      description: "Foamy T/C Azul Cielo",
      images: ["PRD0000092.png"],
      inStock: 96,
      price: 96.64,
      slug: "Foamy_T/C_Azul_Cielo",
      tags: ["Foamy T/C Azul Cielo"],
      title: "Foamy T/C Azul Cielo",
      category: "school",
    },
    {
      barcode: "PRD0000093",
      supplier_code: "T2080116",
      description: "Foamy T/C Café",
      images: ["PRD0000093.png"],
      inStock: 97,
      price: 97.64,
      slug: "Foamy_T/C_Café",
      tags: ["Foamy T/C Café"],
      title: "Foamy T/C Café",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000094",
      supplier_code: "T2080117",
      description: "Foamy T/C Amarillo Huevo",
      images: ["PRD0000094.png"],
      inStock: 98,
      price: 98.64,
      slug: "Foamy_T/C_Amarillo_Huevo",
      tags: ["Foamy T/C Amarillo Huevo"],
      title: "Foamy T/C Amarillo Huevo",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000095",
      supplier_code: "T2080118",
      description: "Foamy T/C Amarillo Canario",
      images: ["PRD0000095.png"],
      inStock: 99,
      price: 99.64,
      slug: "Foamy_T/C_Amarillo_Canario",
      tags: ["Foamy T/C Amarillo Canario"],
      title: "Foamy T/C Amarillo Canario",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000096",
      supplier_code: "T2080119",
      description: "Foamy T/C Naranja",
      images: ["PRD0000096.png"],
      inStock: 100,
      price: 100.64,
      slug: "Foamy_T/C_Naranja",
      tags: ["Foamy T/C Naranja"],
      title: "Foamy T/C Naranja",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000097",
      supplier_code: "T2080120",
      description: "Foamy T/C Gris",
      images: ["PRD0000097.png"],
      inStock: 101,
      price: 101.64,
      slug: "Foamy_T/C_Gris",
      tags: ["Foamy T/C Gris"],
      title: "Foamy T/C Gris",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000098",
      supplier_code: "T2080121",
      description: "Foamy T/C Rosa Claro",
      images: ["PRD0000098.png"],
      inStock: 102,
      price: 102.64,
      slug: "Foamy_T/C_Rosa_Claro",
      tags: ["Foamy T/C Rosa Claro"],
      title: "Foamy T/C Rosa Claro",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000099",
      supplier_code: "T2080122",
      description: "Foamy T/C Fucsia",
      images: ["PRD0000099.png"],
      inStock: 103,
      price: 103.64,
      slug: "Foamy_T/C_Fucsia",
      tags: ["Foamy T/C Fucsia"],
      title: "Foamy T/C Fucsia",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000100",
      supplier_code: "T2080123",
      description: "Foamy T/C Diamantado Blanco",
      images: ["PRD0000100.png"],
      inStock: 104,
      price: 104.64,
      slug: "Foamy_T/C_Diamantado_Blanco",
      tags: ["Foamy T/C Diamantado Blanco"],
      title: "Foamy T/C Diamantado Blanco",
      category: "arts-crafts",
    },
    {
      barcode: "PRD0000101",
      supplier_code: "T2080124",
      description: "Foamy T/C Diamantado Morado",
      images: ["PRD0000101.png"],
      inStock: 105,
      price: 105.64,
      slug: "Foamy_T/C_Diamantado_Morado",
      tags: ["Foamy T/C Diamantado Morado"],
      title: "Foamy T/C Diamantado Morado",
      category: "arts-crafts",
    },
  ],
};
