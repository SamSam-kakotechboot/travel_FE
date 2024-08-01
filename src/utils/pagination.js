export const getTotalPages = (items, itemsPerPage) => {
  return Math.ceil(items.length / itemsPerPage);
};

export const getCurrentItems = (items, currentPage, itemsPerPage) => {
  return items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
};
