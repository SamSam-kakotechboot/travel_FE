import { useState, useEffect, useRef } from 'react';

// JSON 데이터 import
import ganghwaLuge from '../testdata/Ganghwa_Luge.json';
import gangneungArteMuseum from '../testdata/Gangneung_Arte_Museum.json';
import gwacheonSeoulLand from '../testdata/Gwacheon_Seoul_Land.json';
import jejuAquaPlanet from '../testdata/Jeju_Aqua_Planet.json';
import jejuArteMuseum from '../testdata/Jeju_Arte_Museum.json';
import jejuEcoLand from '../testdata/Jeju_Eco_Land.json';
import jejuTourPass from '../testdata/Jeju_Tour_Pass.json';
import seoulLotteWorld from '../testdata/Seoul_Lotte_World.json';
import seoulYeouidoCruise from '../testdata/Seoul_Yeouido_Cruise.json';
import yonginEverland from '../testdata/Yongin_Everland.json';
import yonginFolkVillage from '../testdata/Yongin_Folk_Village.json';

const useFetchKeywords = filename => {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevFilename = useRef(null);

  useEffect(() => {
    if (prevFilename.current === filename) return; // 이미 호출된 filename이면 무시

    const fetchKeywords = async () => {
      console.log(filename);
      try {
        setLoading(true);

        // 미리 import한 JSON 데이터와 filename 비교
        let jsonData;
        switch (filename) {
          case 'Ganghwa Luge':
            jsonData = ganghwaLuge;
            break;
          case 'Gangneung Arte Museum':
            jsonData = gangneungArteMuseum;
            break;
          case 'Gwacheon Seoul Land':
            jsonData = gwacheonSeoulLand;
            break;
          case 'Jeju Aqua Planet':
            jsonData = jejuAquaPlanet;
            break;
          case 'Jeju Arte Museum':
            jsonData = jejuArteMuseum;
            break;
          case 'Jeju Eco Land':
            jsonData = jejuEcoLand;
            break;
          case 'Jeju Tour Pass':
            jsonData = jejuTourPass;
            break;
          case 'Seoul Lotte World':
            jsonData = seoulLotteWorld;
            break;
          case 'Seoul Yeouido Cruise':
            jsonData = seoulYeouidoCruise;
            break;
          case 'Yongin Everland':
            jsonData = yonginEverland;
            break;
          case 'Yongin Folk Village':
            jsonData = yonginFolkVillage;
            break;
          default:
            jsonData = null; // 해당하는 JSON 파일이 없을 경우 null로 설정
        }

        if (jsonData) {
          setKeywords(jsonData); // 해당하는 JSON 데이터를 사용
        } else {
          setKeywords([]);
          setError('해당 JSON 파일을 찾을 수 없습니다.');
        }
      } catch (err) {
        setError('JSON 파일을 불러오는 중 오류가 발생했습니다.');
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
