import { useState, useEffect, useRef } from 'react';
const apiUrl = import.meta.env.VITE_API_BASE_URL;

const useFetchKeywords = filename => {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevFilename = useRef(null);

  useEffect(() => {
    if (prevFilename.current === filename) return; // 이미 호출된 filename이면 무시

    const fetchKeywords = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${apiUrl}/api/images/keywords/${filename}`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setKeywords(data);
        } else {
          setKeywords([]);
          setError(data);
        }
      } catch (err) {
        setError('AI 키워드 데이터가 존재하지 않습니다.');
      } finally {
        setLoading(false);
        prevFilename.current = filename; // filename 기억하기
      }
    };
    fetchKeywords();
  }, [filename]);

  return { keywords, loading, error };
};

export default useFetchKeywords;
