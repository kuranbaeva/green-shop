import React, { useState } from 'react';
import './Image.scss'

const ImageCarousel = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="carousel-container">
            <div className="thumbnail-list">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleImageClick(image)}
                        className={`thumbnail ${image === selectedImage ? 'selected' : ''}`}
                    >
                        <img src={image} alt={`Миниатюра ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="main-preview">
                <img src={selectedImage} alt="Выбранное изображение" />
            </div>
        </div>
    );
};

export default ImageCarousel;
