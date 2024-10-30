import React, { useState, useEffect } from 'react'
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom'
import { Search, Twitter, Linkedin, Mail, Facebook } from 'lucide-react'
import styles from '../../pages/Shop/Shop.module.scss'
import Star from '../../components/UI/Star/StarBtn'
import Footer from '../../components/Footer/Footer'
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from '../../components/SliderCard/SliderCard'
import Count from '../../components/Count/Count'
import { useAuth } from '../../AuthContext'
import axios from '../../axios'
import Header from '../../components/Header/Header'
import LoadingBar from '../../components/UI/Loading/Loading'

export default function Shop() {
  const [onLike, setOnLike] = useState(false);
  const [activeSection, setActiveSection] = useState('desc');
  const { handleCountChange, handleAddToCart, cartItems } = useAuth();

  const [randomItem, setRandomItem] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  const item = location.state?.item || randomItem;
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandomItem = async () => {
      try {
        const response = await axios.get('/product');
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setRandomItem(response.data.results[randomIndex]);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке товара:', error);
        setLoading(false);
      }
    };

    if (!item) {
      fetchRandomItem();
    } else {
      setCount(item.count);
      setLoading(false);
    }
  }, [item]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleOnLike = () => {
    setOnLike(!onLike);
  };

  const handleBuyNow = () => {
    navigate('/check', { state: { item } });
  };

  if (loading) {
    return <LoadingBar />;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const handleMouseEnter = (path) => {
    setHover(path);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <>

      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>

      <section className={styles.shop}>
        <div className="container">

          <div className={styles.shop_item}>
            <div className={styles.shop_item_content}>
              <div className={styles.shop_item_content_species}>
                {item.images && Array.isArray(item.images) && item.images.length > 0 ? (
                  item.images.map((imgObj, index) => (
                    <div key={imgObj.id} className={styles.shop_item_content_species_img}>
                      <img src={imgObj.image} alt={`${item.name} ${index + 1}`} />
                    </div>
                  ))
                ) : (
                  <p>Изображения отсутствуют</p>
                )}
              </div>

              <div className={styles.shop_item_content_block}>
                <div className={styles.shop_item_content_block_icon}>
                  <Search className={styles.icon_block} />
                  <div className={`${styles.like_block} `}>
                    <button onClick={handleOnLike} >
                      {onLike ? <img src="/assets/img/fullHeart.png" alt="" /> : <img src="/assets/img/greenHeart.png" alt="" />}
                    </button>
                  </div>
                </div>
                <img src={item.image} alt={item.name} />
              </div>
            </div>
            {/* {cartItems.map(item => ( */}
            <div className={styles.shop_item_infor}>

              <div className={styles.shop_item_infor_title}>
                <h2>{item.name}</h2>
                <div className={styles.shop_item_infor_title_price}>
                  <p>{item.price}</p>
                  <div className={styles.review}>
                    <Star />
                  </div>
                </div>
              </div>
              <div className={styles.shop_item_infor_text}>
                <h4>Short Description:</h4>
                <p>{item.description}</p>
              </div>

              <div className={styles.shop_item_infor_cart}>
                <Count
                  itemId={item.id}
                  initialCount={item.count || 1}
                  onCountChange={(newCount) => {
                    setCount(newCount)
                    handleCountChange(item.id, newCount);
                  }}
                  stock={item.stock}
                />
                <div className={styles.shop_item_infor_cart_buy}>
                  <button onClick={handleBuyNow}>Buy Now</button>
                </div>
                <div className={`${styles.shop_item_infor_cart_add} ${styles.block}`}>
                  <button onClick={() => handleAddToCart({ ...item, count })}>
                    <p >
                      add to cart
                    </p>
                    <div className={`${styles.add_img_none}`}>
                      <img src="/assets/img/cartFot.png" alt="" />
                    </div>
                  </button>
                </div>

                <div className={`${styles.img_add_none} ${styles.img_add} `}>
                  <button onClick={() => handleAddToCart({ ...item, count })}>
                    <img src="/assets/img/cartFot.png" alt="" />
                  </button>
                </div>

                <div className={`${styles.shop_item_infor_cart_like} ${styles.like_none}`}>
                  <button onClick={handleOnLike}>
                    {onLike ? <img src="/assets/img/fullHeart.png" alt="" /> : <img src="/assets/img/greenHeart.png" alt="" />}
                  </button>
                </div>


              </div>

              <div className={styles.shop_item_infor_deck}>
                <h2>
                  <span>SKU:</span> 1995751877966
                </h2>
                <h2>
                  <span>Categories:</span> Potter Plants
                </h2>
                <h2>
                  <span>Tags:</span> Home, Garden, Plants
                </h2>
                <div className={styles.shop_item_infor_deck_social}>
                  <p>Share this product:</p>
                  <div className={styles.shop_item_infor_deck_social_icon}>
                    <button><Facebook /></button>
                    <button><Twitter /></button>
                    <button><Linkedin /></button>
                    <button><Mail /></button>
                  </div>
                </div>
              </div>

            </div>
            {/* //  ))} */}
          </div>

          <div className={`${styles.shop_mini} ${styles.mini_block}`}>

            <div className={styles.shop_mini_card}>
              <div className={styles.shop_mini_card_species}>
                <div className={styles.shop_mini_card_species_exit}>
                  <div className={styles.exit}>
                    <Link to='/'>
                      <img src="/assets/svg/exit.svg" alt="" />
                    </Link>
                  </div>
                  <div className={styles.fav}>
                    <button onClick={handleOnLike} >
                      {onLike ? <img src="/assets/img/fullHeart.png" alt="" /> : <img src="/assets/img/greenHeart.png" alt="" />}
                    </button>
                  </div>
                </div>
                <Slider {...settings}>
                  {item.images && item.images.map((index) => (
                    <div key={index} className={styles.shop_mini_card_species_img}>
                      <img src={item.image} alt={`${item.name} ${index + 1}`} />
                    </div>
                  ))}
                </Slider>

              </div>

            </div>
            <div className={styles.shop_mini_content}>
              <div className={styles.shop_mini_content_title}>
                <h2>
                  {item.name}
                </h2>
              </div>
              <div className={styles.shop_mini_content_desc}>
                <p>
                  {item.description}
                </p>
              </div>

              <div className={styles.shop_mini_content_deck}>
                <h2>
                  <span>SKU:</span> 1995751877966
                </h2>
                <h2>
                  <span>Categories:</span> Potter Plants
                </h2>
                <h2>
                  <span>Tags:</span> Home, Garden, Plants
                </h2>
              </div>
              <div className={styles.shop_mini_bottom}>
                <div className={styles.shop_mini_bottom_count}>
                  <div className={styles.count}>
                    <h3>
                      Qty
                    </h3>
                    <Count
                      itemId={item.id}
                      initialCount={item.count || 1}
                      onCountChange={(newCount) => {
                        setCount(newCount)
                        handleCountChange(item.id, newCount);
                      }}
                      stock={item.stock}
                    />
                  </div>



                  <div className={styles.shop_mini_bottom_count_price}>
                    <p>
                      $ {item.price}
                    </p>
                  </div>
                </div>
                <div className={styles.shop_mini_bottom_cart}>
                  <div className={styles.buy}>
                    <button onClick={handleBuyNow}>Buy Now</button>
                  </div>
                  <div className={styles.add}>
                    <button onClick={() => handleAddToCart({ ...item, quantity })}>
                      <img src="/assets/img/cartShop.png" alt="" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </section>
      <section className={styles.description}>
        <div className='container'>
          <div className={styles.description_item}>
            <div className={styles.description_item_nav}>
              <nav>
                <ul>
                  <li>
                    <button
                      className={activeSection === 'desc' ? styles.active : ''}
                      onClick={() => handleSectionChange('desc')}
                      onMouseEnter={() => handleMouseEnter('/')}
                      onMouseLeave={handleMouseLeave}
                    >
                      Product Description
                    </button>
                  </li>
                  <li>
                    <button
                      className={activeSection === 'reviews' ? styles.active : ''}
                      onClick={() => handleSectionChange('reviews')}
                      onMouseEnter={() => handleMouseEnter('/')}
                      onMouseLeave={handleMouseLeave}
                    >
                      Reviews
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.description_item_title}>
              {activeSection === 'desc' && (
                <div>
                  <p>{item.description}</p>
                </div>
              )}
              {activeSection === 'reviews' && (
                <div>
                  <p>
                    Customer reviews will appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className='container'>
          <div className={styles.products_item}>
            <h4>
              Releted Products
            </h4>
            <div className={styles.products_item_cards}>
              <SliderCard />
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
}
