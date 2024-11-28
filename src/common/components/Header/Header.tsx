import "./Header.css"
import { SearchNormal1, ShoppingCart } from "iconsax-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router';

import { useAppContext } from "../../hooks/useAppContext";
import {
  Category,
  CategoryResponse,
  mapperCategoryResponseToCategory,
  ProductApiResponse,
  mapperProductResponseToProduct,
} from "../../../features/product/interfaces";

export const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { state, dispatch } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: CategoryResponse[] = await fetch(
        `${import.meta.env.VITE_BASE_URL}/products/categories`
      ).then((response) => response.json());
      setCategories(response.map(mapperCategoryResponseToCategory));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeCategory = async (category: string) => {
    let urlToConsult = `${
      import.meta.env.VITE_BASE_URL
    }/products/category/${category}`;

    try {
      if (!category) {
        urlToConsult = `${import.meta.env.VITE_BASE_URL}/products`;
      }
      const response: ProductApiResponse = await fetch(urlToConsult).then(
        (response) => response.json()
      );

      dispatch({
        type: "LOAD_PRODUCTS",
        payload: response.products.map(mapperProductResponseToProduct),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query: string) => {
    if (!query) return;

    dispatch({ type: "FILTERED_PRODUCTS", payload: query });
  };

  const handleGoToCart = () => navigate('/cart');

  const sizeProductsInCart = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img
            src="https://res.cloudinary.com/dehba8l6b/image/upload/v1732413855/logoVN_kf1fdr.png"
            alt="Logo Viva Natura"
          />
          <Link to="/">VIVA NATURA</Link>
        </div>
        <div className="header__category">
          <select
            className="header__category--select"
            onChange={(e) => handleChangeCategory(e.target.value)}
          >
            <option value="">Todas las categorias</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
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
          <button className="header__cart--button" onClick={handleGoToCart}>
            <ShoppingCart size={30} />
            <span className="header__cart--count">{sizeProductsInCart}</span>
          </button>
        </div>

        <div className="header__user">
          <button className="header__user--button">
            <a href="#" className="header__user--avatar">
              <img
                src="https://res.cloudinary.com/dehba8l6b/image/upload/v1732313890/avatar_fkbgpm.jpg"
                alt="Foto de Perfil"
              />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
