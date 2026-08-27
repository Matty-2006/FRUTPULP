export type Producto = {
  nombre: string;
  imagen: string;
  descripcion: string;
  whatsapp: string;
};

const baseUrl = "https://wa.me/593984629133?text=";

function waMsg(producto: string): string {
  return `${baseUrl}Hola,%20estoy%20interesado%20en%20la%20pulpa%20de%20${producto}%20FRUTPULP.`;
}

export const productos: Producto[] = [
  {
    nombre: "Frutilla",
    imagen: "/images/productos/fresa.jpg",
    descripcion:
      "Pulpa de frutilla con un sabor dulce, fresco y natural.",
    whatsapp: waMsg("frutilla"),
  },
  {
    nombre: "Guanábana",
    imagen: "/images/productos/guanabana.jpg",
    descripcion:
      "Pulpa cremosa de guanábana con el auténtico sabor de la fruta.",
    whatsapp: waMsg("guan%C3%A1bana"),
  },
  {
    nombre: "Mora",
    imagen: "/images/productos/mora.jpg",
    descripcion:
      "Pulpa de mora con su característico sabor intenso y ligeramente ácido.",
    whatsapp: waMsg("mora"),
  },
  {
    nombre: "Naranjilla",
    imagen: "/images/productos/naranjilla.jpg",
    descripcion:
      "Pulpa de naranjilla con su sabor cítrico y refrescante.",
    whatsapp: waMsg("naranjilla"),
  },
  {
    nombre: "Piña",
    imagen: "/images/productos/piña.jpg",
    descripcion:
      "Pulpa de piña tropical, fresca y naturalmente deliciosa.",
    whatsapp: waMsg("pi%C3%B1a"),
  },
  {
    nombre: "Tamarindo",
    imagen: "/images/productos/tamarindo.jpg",
    descripcion:
      "Pulpa de tamarindo con su característico equilibrio entre dulce y ácido.",
    whatsapp: waMsg("tamarindo"),
  },
  {
    nombre: "Tomate de árbol",
    imagen: "/images/productos/tomate.jpg",
    descripcion:
      "Pulpa de tomate de árbol con sabor fresco y ligeramente ácido.",
    whatsapp: waMsg("tomate%20de%20%C3%A1rbol"),
  },
];
