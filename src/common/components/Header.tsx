import { SearchNormal1, ShoppingCart } from "iconsax-react";
import { useEffect, useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { 
  Category, 
  CategoryResponse, 
  mapperCategoryResponseToCategory, 
  ProductApiResponse, 
  mapperProductResponseToProduct 
} from '../../features/product/interfaces';

export const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { setProducts, products } = useAppContext();
  
  const [originalProducts, setOriginalProducts] = useState(products);

  useEffect(() => {
    fetchData();
  }, []);

  // Actualizar originalProducts cuando products cambie (por ejemplo, al cambiar de categoría)
  useEffect(() => {
    setOriginalProducts(products);
  }, [products]);

  const fetchData = async () => {
    try {
      const response: CategoryResponse[] = await fetch("https://dummyjson.com/products/categories")
        .then(response => response.json());
      setCategories(response.map(mapperCategoryResponseToCategory));
    } catch (error) {
      console.error(error);
    }
  }
  
  const handleChangeCategory = async (category: string) => {
    try {
      const response: ProductApiResponse = await fetch(
        `https://dummyjson.com/products/category/${category}`
      ).then(response => response.json());
      
      const mappedProducts = response.products.map(mapperProductResponseToProduct);
      setProducts(mappedProducts);
      // Al cambiar de categoría, también actualizamos originalProducts
      setOriginalProducts(mappedProducts);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      // Si la búsqueda está vacía, restauramos los productos originales
      setProducts(originalProducts);
    } else {
      // Filtramos desde los productos originales
      const filteredProducts = originalProducts.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img src="https://res.cloudinary.com/dehba8l6b/image/upload/v1732413855/logoVN_kf1fdr.png" alt="Logo Viva Natura" />
          <a href="#">VIVA NATURA</a>
        </div>
        <div className="header__category">
          <select 
            className="header__category--select"
            onChange={(e) => handleChangeCategory(e.target.value)}
          >
            <option value="">Todas las categorias</option>
            {categories.map(category => (
              <option 
                key={category.id} 
                value={category.name}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="header__search">
          <input 
            type="text" 
            id="header__search--input" 
            placeholder="Buscar productos..." 
            onKeyUp={(e) => handleSearch(e.currentTarget.value)}
          />
          <button className="header__search--button">
            <SearchNormal1 size={30} />
          </button>
        </div>

        <div className="header__cart">
          <button className="header__cart--button">
            <ShoppingCart size={30} />
            <span className="header__cart--count">0</span>
          </button>
        </div>

        <div className="header__user">
          <button className="header__user--button">
            <a href="#" className="header__user--avatar">
              <img src="https://res.cloudinary.com/dehba8l6b/image/upload/v1732313890/avatar_fkbgpm.jpg" alt="Foto de Perfil" />
            </a>
          </button>
        </div>
      </div>
      <hr />
    </>
  )
}