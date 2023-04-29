import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CustomePagination({
  alldata,
  onPagination,
  size,
  PaginationsNumber,
  children,
}) {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(8);
  const [currentPagination, setCurrentPagination] = useState(1);
  const [pagesShowInDom, setPagesShowInDom] = useState([]);
  const [paginationShowInDom, setPaginationShowInDom] = useState();

  let PageSize = size;
  let PaginationsSize = PaginationsNumber;

  useEffect(() => {
    setDatas(alldata);
    let EndIndex = PageSize * currentPage;
    let StartIndex = EndIndex - PageSize;
    let AllShoWData = datas.slice(StartIndex, EndIndex);
    onPagination(pagesShowInDom);
    setPagesShowInDom(AllShoWData);
  }, []);

  const PagesCount = Math.ceil(datas.length / PageSize);
  let pagesNumber = Array.from(Array(PagesCount).keys());

  useEffect(() => {
    const PaginationCount = Math.ceil(pagesNumber.length / PaginationsSize);
    let paginationsNumber = Array.from(Array(PaginationCount).keys());
    setPaginationShowInDom(paginationsNumber);
  }, []);

  useEffect(() => {
    let EndIndex = PageSize * currentPage;
    let StartIndex = EndIndex - PageSize;
    let AllShoWData = datas.slice(StartIndex, EndIndex);
    onPagination(pagesShowInDom);
    setPagesShowInDom(AllShoWData);
  }, [currentPage]);

  useEffect(() => onPagination(pagesShowInDom), [pagesShowInDom]);
  const PageChange = (newPage, e) => {
    e.preventDefault();
    setCurrentPage(newPage);
  };

  useEffect(() => {
    let EndIndex = PaginationsSize * currentPagination;
    let StartIndex = EndIndex - PaginationsSize;
    let AllShoWData = pagesNumber.slice(StartIndex, EndIndex);
    setPaginationShowInDom(AllShoWData);
    setCurrentPage(AllShoWData[0] + 1);
  }, [currentPagination, datas]);

  const NextPaginationHandler = (e) => {
    e.preventDefault();
    {
      currentPagination === Math.ceil(pagesNumber.length / PaginationsSize)
        ? setCurrentPagination((p) => p)
        : setCurrentPagination((p) => p + 1);
    }
  };

  const PreviousPaginationHandler = (e) => {
    e.preventDefault();
    {
      currentPagination == 1
        ? setCurrentPagination((p) => p)
        : setCurrentPagination((p) => p - 1);
    }
  };
  return (
    <>
      {pagesShowInDom && children}

      <nav className="d-flex align-items-center justify-content-center p-5 bg-main">
        <ul className="pagination">
          <li
            className="d-flex align-items-center justify-content-center text-light-color px-2 cursor-pointer hover-text"
            onClick={(e) => {
              PreviousPaginationHandler(e);
              window.scrollTo(0, 0);
            }}
          >
            <IoIosArrowForward />
          </li>
          {paginationShowInDom &&
            paginationShowInDom.map((PageNumber) => (
              <li
                key={PageNumber + 1}
                className={
                  PageNumber + 1 === currentPage
                    ? "page-item active"
                    : "page-item"
                }
                onClick={(e) => {
                  PageChange(PageNumber + 1, e);
                  window.scrollTo(0, 0);
                }}
              >
                <a className="page-link" href="#">
                  {PageNumber + 1}
                </a>
              </li>
            ))}

          <li
            className="d-flex align-items-center justify-content-center text-light-color px-2 cursor-pointer hover-text"
            onClick={(e) => {
              NextPaginationHandler(e);
              window.scrollTo(0, 0);
            }}
          >
            <IoIosArrowBack />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default CustomePagination;
