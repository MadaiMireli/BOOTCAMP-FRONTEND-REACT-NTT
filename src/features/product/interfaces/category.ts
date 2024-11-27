import { CategoryResponse } from './';

export interface Category {
    id: string;
    name: string;
}

// no hay que mezclar interfaces con mappers

export const mapperCategoryResponseToCategory = (category: CategoryResponse): Category => {
    return {
        id: category.slug,
        name: category.name,
    };
}