import Hero from "./components/hero";
import Card from "./components/Card";
import styles from "./Home.module.scss";
import Card2 from "../components/Second-card";
import Products from "./components/product";
import { Bestseller, Product, shoes, Gym } from "../Js/db";
import Featured from "../../assets/images/HomePage/OurPro/clothes.png";
import Gymnastic from "../components/Gym";
import ShoesCard from "./components/Featured";
import Form from "./components/Form";
import video from "../../assets/images/HomePage/Card/Video card.png";
import arrow from "../../assets/images/HomePage/Last-Content/arrow-next.svg";
import Advertising from "../components/advertising";
import useFetch from "../../hooks/useFetch";
const Home = () => {
  const { data, loading } = useFetch(`/products?populate=*`);
  
  
 


  return (
    <div className={styles.HomePage}>
      <Hero />
      <Advertising />
      <div className={styles.cardContainer}>
        <div className={styles.productHeader}>
          <h2 className={styles.Featured}>Featured Products</h2>
          <h2 className={styles.Prob}>Problems trying to resolve</h2>
          <p className={styles.Text}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian.
          </p>
        </div>
        <div className={styles.cardContent}>
          {Bestseller.map((Bestseller) => {
            return (
              <Card
                key={Bestseller.id}
                img={Bestseller.img}
                descr={Bestseller.descr}
                title={Bestseller.title}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
     
      {loading ? (
          <div>Loading.....</div>
        ) : (
      
          <div className={styles.shoesCard}>
            {data?.data?.map((product) => {
              return (
                <Card2
         
                  key={product?.id}
                  img={`${import.meta.env.VITE_UPLOAD_IMG}${product?.attributes?.images?.data[0]?.attributes?.url}`}
                  shoesType={product?.attributes?.title}
                  Link={product?.attributes?.description}
                  priceOutdated={product?.attributes?.price}
                  priceNew={product?.attributes?.NewPrice}
                />
              );
            })}
          </div>
        )}
        <div className={styles.vidTxt}>
          <div className={styles.videoAndText}>
            <img src={video} alt="" />
          </div>
          <div className={styles.bag}>
            <hr />
            <a href="#">Special Offer</a>
            <h2>Bag for equipment</h2>
            <p>Problems trying to resolve the conflict between </p>
            <button>
              See More Offers
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.ProductContainer}>
        <div className={styles.productCard}>
          <div className={styles.productHeader}>
            <h2 className={styles.Featured}>Featured Products</h2>
            <h2 className={styles.Prob}>BESTSELLER 
PRODUCTS</h2>
            <p className={styles.Text}>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian.
            </p>
            <p className={styles.Links}>
              <a href="">See More</a>
            </p>
          </div>

          <div className={styles.prdCard}>
            {Product.map((Prod) => {
              return (
                <Products
                  key={Prod.id}
                  img={Prod.img}
                  shoesType={Prod.shoesType}
                  Link={Prod.Link}
                  priceOutdated={Prod.priceOutdated}
                  priceNew={Prod.priceNew}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.FeaturedContainer}>
        <div className={styles.FeaturedHeader}>
          <img src={Featured} alt="" />
          <div className={styles.box}>
            <div className={styles.context}>
              <h2 className={styles.Featured}>Our Top Products</h2>

              <p className={styles.Text}>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian.
              </p>
            </div>
            <div className={styles.productContent}>
              {shoes.map((shoe) => {
                return (
                  <ShoesCard
                    key={shoe.id}
                    images={shoe.images}
                    title={shoe.title}
                    text={shoe.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gymContainer}>
        <div className={styles.gymBox}>
        {Gym.map((Gym) => {
          return <Gymnastic key={Gym.id} gymImg={Gym.gymImg} />;
        })}
        </div>
     
      </div>




      <Form />
    </div>
  );
};

export default Home;
