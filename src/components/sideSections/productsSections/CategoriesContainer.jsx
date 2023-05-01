import React from "react";
import { CategoriesContainerStyled } from "../../../pages/products/ProductsStyles";
import { SideBtn } from "../../UI/SideBtn";
import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "../../../redux/categories/categoriesSlice";

export default function CategoriesContainer() {
  const { categories, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  return (
    <>
      <CategoriesContainerStyled>
        {categories.map((cat) => (
          <SideBtn
            className="category"
            key={cat.id}
            selected={cat.category === selectedCategory}
            onClick={() =>
              dispatch(categoriesActions.selectCategory(cat.category))
            }
          >
            {cat.title}
          </SideBtn>
        ))}
      </CategoriesContainerStyled>
    </>
  );
}
