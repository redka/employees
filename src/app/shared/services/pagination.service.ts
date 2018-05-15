export class PaginationService {
  constructor() {}

  range(start, count) {
    return Array.apply(0, Array(count))
      .map(function (element, index) {
        return index + start;
      });
  }

  getPages(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 5;

    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = this.range(startPage, endPage);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}