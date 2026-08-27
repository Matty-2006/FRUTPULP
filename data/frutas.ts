export type Fruta = {
  nombre: string;
  /** Emoji grande y apetecible para el protagonista (disponible en todos los SO, sin fondo). */
  emoji: string;
  /** Tonalidad que colorea el halo/glow y el acento cuando esta fruta está activa. */
  color: string;
  /** Descripción corta y premium que aparece bajo el nombre. */
  tagline: string;
};

export const frutas: Fruta[] = [
  {
    nombre: "Frutilla",
    emoji: "🍓",
    color: "#e74c6f",
    tagline: "Dulce, fresca y con carácter",
  },
  {
    nombre: "Mora",
    emoji: "🫐",
    color: "#8e44ad",
    tagline: "Intensa, con acidez justa",
  },
  {
    nombre: "Guanábana",
    emoji: "🍏",
    color: "#2ecc71",
    tagline: "Cremosa y refrescante",
  },
  {
    nombre: "Tomate de árbol",
    emoji: "🍅",
    color: "#e74c3c",
    tagline: "Fresco, ligeramente ácido",
  },
  {
    nombre: "Piña",
    emoji: "🍍",
    color: "#f1c40f",
    tagline: "Tropical y naturalmente dulce",
  },
  {
    nombre: "Tamarindo",
    emoji: "🫘",
    color: "#a67c52",
    tagline: "Dulce con un toque cítrico",
  },
  {
    nombre: "Naranjilla",
    emoji: "🍊",
    color: "#f39c12",
    tagline: "Cítrica y refrescante",
  },
];
