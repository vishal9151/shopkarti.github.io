import { useState } from "react";
import { category } from "../product-category";
import ShowProduct from "./showProduct";
import Category from "./category";
export default function Main2() {
  const [categor, setCategory] = useState("electronics");
  const updateCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className="main2">
      <div className="newP">
        <div className="new-product">New products</div>
        <div className="lined"></div>
      </div>
      <svg
        className="star-2"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z"
          fill="black"
        />
      </svg>
      <div className="choice">
        {category.map((option) => (
          <Category option={option} updateCategory={updateCategory} />
        ))}
      </div>
      <div className="show-product">
        <ShowProduct categor={categor} />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="6"
        viewBox="0 0 56 6"
        fill="none"
        className="arrow-2"
        style={{marginLeft: "40px"}}
      >
        <path
          d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
          fill="#161615"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="6"
        viewBox="0 0 56 6"
        fill="none"
        className="arrow-2"
        style={{marginLeft: "20px"}}
      >
        <path
          d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
          fill="#161615"
        />
      </svg>
    </div>
  );
}
