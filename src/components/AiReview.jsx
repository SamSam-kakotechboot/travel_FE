import KeywordRectangle from './KeywordRectangle';

export default function AIReview({ keywordsLoading, keywordsError, keywords }) {
  function getColor(type) {
    switch (type) {
      case 'negative':
        return 'bg-red-400 bg-opacity-50';
      case 'neutral':
        return 'bg-yellow-400 bg-opacity-50';
      default:
        return null;
    }
  }

  const positive_keyword = keywords.filter(
    keyword => keyword.type === 'positive'
  );

  const negative_keyword = keywords.filter(
    keyword => keyword.type === 'negative'
  );

  return (
    <div className="keyword-rectangle-container flex flex-wrap gap-2 max-w-full">
      {keywordsLoading ? (
        <div>키워드를 불러오는 중...</div>
      ) : keywordsError ? (
        <KeywordRectangle
          content={keywordsError}
          color="bg-purple-400 bg-opacity-50"
        />
      ) : (
        <>
          <div className="w-full flex flex-wrap gap-1">
            {positive_keyword.map((keyword, index) => (
              <KeywordRectangle
                key={index}
                content={keyword.keyword}
                color={getColor(keyword.type)}
              />
            ))}
          </div>
          <div className="w-full flex flex-wrap gap-1">
            {negative_keyword.map((keyword, index) => (
              <KeywordRectangle
                key={index}
                content={keyword.keyword}
                color={getColor(keyword.type)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
