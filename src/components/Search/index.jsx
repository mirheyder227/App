import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import searchIcon from "../../assets/images/icons/HomePageIcon/Header-Icon/search-mobile.svg";
import styles from "./search.module.scss";
import { roots } from "../../Pages/Routes/constans";
import { Link } from "react-router-dom";

const Search = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [input, setInput] = useState("");
  const { data } = useFetch(
    `/products?filters[title][$contains]=${input}&populate=*`
  );
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    setIsHovering(false);
    setInput("");
    setProducts([]);
  };
  useEffect(() => {
    if (input !== "") {
      setProducts(data?.data);
    } else {
      setProducts([]);
    }
  }, [input, data]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  console.log(products);
  return (
    <div className={styles.Search}>
      <input type="text" value={input} onChange={handleChange} />
      <img id="search-icon" src={searchIcon} alt="Search Icon" />

      <div
        className={`${isHovering ? styles.searching : styles.searchingHidden}`}
      >
        {products && products.length > 0 && (
          <div className={styles.productsList}>
            {products?.map((product) => {
              return (
                <Link
                  key={product.id}
                  to={`${roots.Product}${product.id}`}
                  onClick={handleClick}
                >
                  <div className={styles.searchCard}>
                    <div className={styles.paymentProductBox}>
                      <div className={styles.paymentTitle}>
                        <h4>{product?.attributes?.title}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
