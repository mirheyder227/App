import styles from "./filter.module.scss";
import blue from "../../../../assets/images/icons/HomePageIcon/product/blue.svg";
import red from "../../../../assets/images/icons/HomePageIcon/product/orange.svg";
import green from "../../../../assets/images/icons/HomePageIcon/product/green.svg";
import Search from "../../../../components/Search";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../../../api/category";

const FilterComponent = ({ setParams, searchParams }) => {
  const [categoriesData, setCategoriesData] = useState([]);

  // Assuming this part is within a React component
const checkedCheckboxesArray = searchParams.get("categories")?.split(',') || [];
const [checkedCheckboxes, setCheckedCheckboxes] = useState(
  checkedCheckboxesArray.map((x) => Number(x)) || []
);

const onChangeSearchParams = (e, categoryId) => {
  setParams("page", 1);

  setCheckedCheckboxes((prevState) => {
    const updatedCheckboxes = e.target.checked
      ? [...prevState, categoryId]
      : prevState.filter((id) => id !== categoryId);

    const updatedCategories = Array.from(new Set(updatedCheckboxes.map(Number)));

    searchParams.set("categories", updatedCategories.join(','));
    setSearchParams(searchParams);

    return updatedCheckboxes;
  });
};

// Rest of your component

  useEffect(() => {
    async function fetchCategories() {
      const categoriesDB = await getAllCategories();
      setCategoriesData(categoriesDB);
    }
    fetchCategories();
  }, [searchParams]);
  console.log(categoriesData);
  return (
    <div className={styles.FilterContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.filter}>
          <h5>Filter :</h5>
          <Search />
        </div>
        <hr />
        <div className={styles.card}>
          <h5>Brands</h5>
          {[
            "Variations",
            "Girls",
            "Swimming",
            "Running",
            "Uncategorized",
            "Urban",
          ].map((label, index) => (
            <div key={index} className={styles.checkbox}>
              <input type="checkbox" />
              <label>{label}</label>
            </div>
          ))}
        </div>

        <hr />
        <div className={styles.card}>
          <h5>Color</h5>
          <p>
            <img src={blue} alt="Blue" /> Uncategorized
          </p>
          <p>
            <img src={blue} alt="Blue" /> Swimming
          </p>
          <p>
            <img src={red} alt="Red" /> Swim Equipment
          </p>
          <p>
            <img src={green} alt="Green" /> Uncategorized
          </p>
        </div>

        <hr />
          
        <div className={styles.card}>
          <h5>Category</h5>
          {categoriesData?.data?.map((category) => (
            <div key={category.id} className={styles.radio}>
              <input
                type="radio"
                id={category.id}
                onChange={() =>
                  setParams("category", category?.id)
                }
              />
              <label htmlFor={category?.attributes?.title}>
                {category?.attributes?.title}
              </label>
            </div>
          ))}
        </div>

        <hr />
        <div className={styles.card}>
          <input type="range" />

          <div className={styles.btn}>
            <button onClick={() => setParams("page", 1)}>
              <input
                type="number"
                value={searchParams.get("minPrice") || ""}
                onChange={(e) => setParams("minPrice", e.target.value)}
              />
            </button>
            <button onClick={() => setParams("page", 1)}>
              <input
                type="number"
                value={searchParams.get("maxPrice") || ""}
                onChange={(e) => setParams("maxPrice", e.target.value)}
              />
            </button>
          </div>
          <div className={styles.btn2}>
            <button onClick={() => setParams("page", 1)}>
              <h6>Filter</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
