import { useState, useEffect } from 'react';

const useFetchImage = (apiUrl, imagePath) => {
  const [imageSrc, setImageSrc] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`${apiUrl}/${imagePath}`, {
          method: 'GET',
          credentials: 'omit' // 쿠키를 포함하지 않도록 설정
        });

        if (!response.ok) {
          throw new Error('이미지를 불러오는데 실패했습니다.');
        }

        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageSrc(imageObjectURL);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [apiUrl, imagePath]);

  return { imageSrc, loading, error };
};

export default useFetchImage;