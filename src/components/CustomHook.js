import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagePromises = Array.from({ length: 6 }, () =>
          axios.get('https://nekos.life/api/v2/img/neko')
        );
        const imageResults = await Promise.all(imagePromises);
        setImages(imageResults.map(result => result.data.url));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading };
};

export default useFetchImages;
