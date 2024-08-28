// src/utils/urlParams.js

export const DEFAULT_PARAMS = {
  pageNumber: '1',
  pageSize: '4',
  keyword: 'Latest',
};

export function getUrlParams(searchParams) {
  return {
    pageNumber: searchParams.get('pageNumber') || DEFAULT_PARAMS.pageNumber,
    pageSize: searchParams.get('pageSize') || DEFAULT_PARAMS.pageSize,
    keyword: searchParams.get('keyword') || DEFAULT_PARAMS.keyword,
  };
}

export function getUrlParams2(searchParams) {
  return {
    pageNumber: searchParams.get('pageNumber') || DEFAULT_PARAMS.pageNumber,
    pageSize: searchParams.get('pageSize') || '7',
    keyword: searchParams.get('keyword') || DEFAULT_PARAMS.keyword,
  };
}
