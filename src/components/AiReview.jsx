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
        keywords.map((keyword, index) => (
          <KeywordRectangle
            key={index}
            content={keyword.keyword}
            color={getColor(keyword.type)}
          />
        ))
      )}
    </div>
  );
}
