 import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "antd";
import FilterComponent from "./components/Filter";
import styles from "./productList.module.scss";
import useFetch from "../../hooks/useFetch";
import Card from "../components/Second-card";
import Carusel from "./components/Carusel";
import { roots } from "../Routes/constans";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/products?pagination[page]=${
      searchParams.get("page") || 1
    }&pagination[pageSize]=2
 &${
   !isNaN(searchParams.get("minPrice")) && searchParams.get("minPrice") != null
     ? `filters[$or][0][price][$gt]=${searchParams.get("minPrice")}`
     : ""
 }
&${
      !isNaN(searchParams.get("maxPrice")) &&
      searchParams.get("maxPrice") != null
        ? `filters[$or][0][price][$lt]=${searchParams.get("maxPrice")}`
        : ""
    }

    &populate=*`
  );

  const setParams = (name, value) => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.productListContainer}>
      <div className={styles.Carusel}>
        <Carusel />
      </div>
      <div className={styles.Container}>
        <FilterComponent searchParams={searchParams} setParams={setParams} />

        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : error ? (
          <div className={styles.Error}>
            <Link to={`${roots.Error}`}>
              Error: Click here to navigate to the error page
            </Link>
          </div>
        ) : (
          <div className={styles.ShContainer}>
             <div className={styles.shoesCard}>
            {data?.data?.map((product) => (
              <Link key={product.id} to={`${roots.Product}${product.id}`}>
                <Card
                  key={product?.id}
                  img={`${import.meta.env.VITE_UPLOAD_IMG}${
                    product?.attributes?.images?.data[0]?.attributes?.url
                  }`}
                  shoesType={product?.attributes?.title}
                  Link={product?.attributes?.description}
                  priceOutdated={product?.attributes?.price}
                  priceNew={product?.attributes?.NewPrice}
                />
              </Link>
            ))}
          </div>
          <div className={styles.Pagination}>
        <Pagination
          defaultCurrent={parseInt(searchParams.get("page")) || 1}
          defaultPageSize={data?.meta?.pagination.pageSize}
          total={data?.meta?.pagination.total * 10}
          onChange={(page) => {
            setParams("page", page);
          }}
        />
      </div>
          </div>
         
        )}
      </div>
 
    </div>
  );
};

export default ProductList;
