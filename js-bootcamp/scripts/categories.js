export class Category {
  async fetchCategories() {
    try {
      const response = await fetch("https://dummyjson.com/products/categories").then(response => response.json());
      return response.map(this.#mapperCategories);
    } catch (error) {
      console.error(error);
    }
  }

  renderCategories(categories) {
    const selectRender = document.querySelector(".categories .category-select");
    selectRender.replaceChildren();

    const defaultCategory = this.#addDynamicContentCategory({
      id: "",
      name: "Todas las categorías",
    });
    selectRender.appendChild(defaultCategory);

    categories.forEach((category) => {
      const option = this.#addDynamicContentCategory(category);
      selectRender.appendChild(option);
    });
  }

  #addDynamicContentCategory(category) {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    return option;
  }

  #mapperCategories(category) {
    return {
      id: category.slug,
      name: category.name, 
    }
  }

}
