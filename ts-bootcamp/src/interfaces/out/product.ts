// esto podr'ia estar en el mismo archivo de interfaces, si lo que buscamos es diferenciar entre la respuesta y lo que se pintar'a en la parte visual, te sugiero hacer que las interfaces de respuesta tengan el sufijo Response. Ejm: ProductResponse <- con esto se entiende que es una respuesta de algo, en este caso un servicio, y para las interfaces que se usar'an para pintar solo ponemos Product
export interface IProductOut {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}