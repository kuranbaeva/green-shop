import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import instance from '../../axios';
import styles from '../../components/SliderCard/Slider.module.scss';

export default function Sliderss() {
    const [cardItems, setCardItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        instance.get('product/')
            .then(res => {
                setCardItems(res.data.results);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
                setError('Ошибка при загрузке данных. Попробуйте позже.');
                setIsLoading(false);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="slide">
            <Slider {...settings}>
                {cardItems.map(item => (
                    <div key={item.id} className="slide-item">
                        <div className={styles.card}>
                            <div className={styles.card_img}>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
