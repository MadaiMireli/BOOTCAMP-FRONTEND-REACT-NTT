import { Category, CategoryResponse } from "../interfaces";

export const mapperCategoryResponseToCategory = (category: CategoryResponse): Category => {
    return {
        id: category.slug,
        name: category.name,
    };
}