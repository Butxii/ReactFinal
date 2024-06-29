import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { translations } = useLanguage();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const nekos = await Promise.all(Array.from({ length: 6 }).map(() =>
        axios.get('https://nekos.life/api/v2/img/neko')
      ));
      setImages(nekos.map(response => response.data.url));
    };

    fetchImages();
  }, []);

  return (
    <div className="gallery-container">
      <h1>{translations.galleryHeader}</h1>
      <div className="row">
        {images.map((url, index) => (
          <div key={index} className="col-md-4 gallery-item">
            <img src={url} alt={`Neko ${index}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
