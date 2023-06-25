export interface Carusel {
    id:number,
    titulo: String,
    descripcion:String,
    imagen: String
}

export const CaruselFotos:Array<Carusel>=[
    {
      id:1,
      titulo: "1",
      descripcion:"descripcion1",
      imagen:"../../assets/noticias/1.jpg"
    },
    {
        id:2,
        titulo: "Foto2",
        descripcion:"descripcion2",
        imagen:"../../assets/noticias/2.jpg"
      },
    {
        id:3,
        titulo: "¿Las sociedad ha realmente ha avanzado hacia un mundo inclusivo?",
        descripcion:"descripcion3",
        imagen:"../../assets/noticias/3.jpg"
    },
]