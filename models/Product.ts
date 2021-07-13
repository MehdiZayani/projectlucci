import { Categories } from "../types/Categories";

export type Product = {
    id: number;
    category: Categories;
    name: string;
    cost: number;
    description: string;
    image: string;
}