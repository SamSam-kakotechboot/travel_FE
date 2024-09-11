import { useState, useEffect, useRef } from 'react';

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
        const response = await fetch(`/src/testdata/${filename}`); // EC2 서버의 파일 경로에서 CSV 가져옴
        const csvText = await response.text(); // CSV 파일을 텍스트 형식으로 읽음
        const parsedData = parseCSV(csvText); // CSV 파싱 함수 호출

        if (parsedData.length > 0) {
          setKeywords(parsedData); // 파싱된 데이터 저장
        } else {
          setKeywords([]);
          setError('CSV 파일에서 키워드를 찾을 수 없습니다.');
        }
      } catch (err) {
        setError('CSV 파일을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
        prevFilename.current = filename; // filename 기억하기
      }
    };

    fetchKeywords();
  }, [filename]);

  return { keywords, loading, error };
};

// CSV 데이터를 파싱하는 함수
const parseCSV = csvText => {
  const rows = csvText.split('\n'); // 줄바꿈으로 데이터 분리
  const result = [];

  for (let i = 1; i < rows.length; i++) {
    const columns = rows[i].split(','); // 콤마로 열 분리
    if (columns.length === 2) {
      const keyword = columns[0].replace(/"/g, ''); // " 제거
      const type = columns[1].trim();
      result.push({ keyword, type }); // 키워드와 타입을 객체로 저장
    }
  }

  return result; // 파싱된 데이터 반환
};

export default useFetchKeywords;
