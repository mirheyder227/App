import { useParams , Link} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Card2 from '../components/Second-card';
import Advertising from '../components/advertising';
import gym from '../../assets/images/HomePage/Last-Content/gym.png';
import styles from './product.module.scss';
import Card from './components/Card';
 import { roots } from '../Routes/constans';
 import arrow from '../../assets/images/HomePage/Last-Content/arrow-next.svg';

const Product = () => {
  const { id } = useParams();
  const ProductList = useFetch(`${import.meta.env.VITE_APP_STRAPI_BASE_URL}/products?populate=*`);
  const { data, loading } = useFetch(`${import.meta.env.VITE_APP_STRAPI_BASE_URL}/products/${id}?populate=*`);
  const productAttributes = data?.data;
console.log(ProductList?.data?.data);
  return (
    <div className={styles.ProductContainer}>
        <div className={styles.Link}>
          <a href="">Home</a>
          <img src={arrow} alt="" />
          <a href="">Shop</a>
        </div>
      <div className={styles.Product}>
      
        <div className={styles.productCard}>
        
          <Card
            key={productAttributes?.id}
            images={`${import.meta.env.VITE_UPLOAD_IMG}${productAttributes?.attributes?.images?.data[0]?.attributes?.url}`}
            title={productAttributes?.attributes?.title}
         
            price={productAttributes?.attributes?.price}
          
          />
        </div>
        <div className={styles.Nav}>
          <a href="/">Description</a>
          <a href="/">Additional Information</a>
          <a href="/">Reviews (0)</a>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.Card}>
            <div className={styles.cardTitle}>
              <h5>The Quick Fox Jumps Over</h5>
            </div>
            <div className={styles.cardText}>
              <h6>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                venial consequent sent nostrum met.
              </h6>
             </div>
          </div>
          <div className={styles.cardImg}>
            <img src={gym} alt="Gym" />
          </div>
        </div>
        <div className={styles.content}>
          <h3>BESTSELLER PRODUCTS</h3>
          <hr />
          {loading ? (
            <div>Loading...</div>
          ) : (
       
            <div className={styles.shoesCard}>
              { ProductList?.data?.data?.slice(0,4).map((productItem) => (
                   <Link key={productItem.id} to={`${roots.Product}${productItem.id}`}>
                   <Card2
                         key={productItem?.id}
                         img={`${import.meta.env.VITE_UPLOAD_IMG}${productItem?.attributes?.images?.data[0]?.attributes?.url}`}
                         shoesType={productItem?.attributes?.title}
                         Link={productItem?.attributes?.description}
                         priceOutdated={productItem?.attributes?.price}
                         priceNew={productItem?.attributes?.NewPrice}
                       />
                 </Link>
              ))}
            </div>
          )}
        </div>
        <Advertising />
      </div>
    </div>
  );
};

export default Product;
