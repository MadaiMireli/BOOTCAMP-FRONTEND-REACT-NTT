import "./Header.css";
import { SearchNormal1, ShoppingCart } from "iconsax-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAppContext } from "../../hooks/useAppContext";
import { Category } from "../../../features/product/interfaces";
import {
  getCategories,
  getProductChangeCategory,
} from "../../../features/product/services";
import { RoutePages } from "../../routes";
import { LocalStorageKeys } from "@/common/constants";
import { User } from "@/features/auth/interfaces/user";

export const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { state, dispatch } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (error) {
      console.error(error);
    }
  };

  const userLogged: User = JSON.parse(
    localStorage.getItem(LocalStorageKeys.information) || "{}"
  );

  const handleChangeCategory = async (category: string) => {
    try {
      const response = await getProductChangeCategory(category);

      dispatch({
        type: "LOAD_PRODUCTS",
        payload: response,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query: string) => {
    dispatch({ type: "FILTERED_PRODUCTS", payload: query });
  };

  const handleGoToCart = () => navigate(RoutePages.Cart);

  const sizeProductsInCart = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleCloseSession = () => {
    navigate(RoutePages.Auth);
    localStorage.clear();
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Link to={RoutePages.Init}>
            <img
              src="https://res.cloudinary.com/dehba8l6b/image/upload/v1732413855/logoVN_kf1fdr.png"
              alt="Logo Viva Natura"
            />
          </Link>
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
          <button
            className="header__cart--button"
            onClick={handleGoToCart}
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={30} onClick={handleGoToCart} />
            <span className="header__cart--count">{sizeProductsInCart}</span>
          </button>
        </div>

        <div className="header__user">
          <button className="header__user--button">
            <a href="#" className="header__user--avatar">
              <img src={userLogged.image} alt="Foto de Perfil" />
            </a>
          </button>
        </div>

        <div className="header__chip">
          Bienvenid@, {userLogged.firstName}
          <button onClick={handleCloseSession}>Cerrar sesión</button>
        </div>
      </div>
    </>
  );
};
