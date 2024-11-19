import { ICategory } from "../interfaces/in/category";
import { ICategoryOut } from "../interfaces/out/category";

export class Category {
  async fetchCategories() {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/categories"
      ).then((response) => response.json());
      return response.map(this.mapperCategories);
    } catch (error) {
      console.error(error);
    }
  }

  renderCategories(categories: ICategoryOut[]) {
    const selectRender = document.querySelector(".categories .category-select");
    if (selectRender) {
      selectRender.replaceChildren();
    }

    const defaultCategory = this.addDynamicContentCategory({
      id: "",
      name: "Todas las categorías",
    });

    if (selectRender) {
      selectRender.appendChild(defaultCategory);
    }

    categories.forEach((category) => {
      const option = this.addDynamicContentCategory(category);
      if (selectRender) {
        selectRender.appendChild(option);
      }
    });
  }

  private addDynamicContentCategory(category: ICategoryOut) {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    return option;
  }

  private mapperCategories(category: ICategory) {
    return {
      id: category.slug,
      name: category.name,
    };
  }
}
