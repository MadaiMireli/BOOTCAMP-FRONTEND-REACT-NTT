import { CategoryResponse } from './';

export interface Category {
    id: string;
    name: string;
}

export const mapperCategoryResponseToCategory = (category: CategoryResponse): Category => {
    return {
        id: category.slug,
        name: category.name,
    };
}