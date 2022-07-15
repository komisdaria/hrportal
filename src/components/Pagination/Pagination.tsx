/* eslint-disable @typescript-eslint/ban-ts-comment */
import employeesOption, { IOneProfile } from "../../store/employeesOption";
import React, { useEffect } from "react";
import { toJS } from "mobx";
import "./_Pagination.scss";
import { observer } from "mobx-react-lite";

type TProps = {
  personsPerPage: number;
  totalPersons: number;
  paginate: (pageNumber: number) => void;
};

const Pagination = observer((props: TProps) => {
  const { personsPerPage, totalPersons, paginate } = props;
  const pageNumbers: [] = [];

  const dataFromFetch = toJS(employeesOption.employeesNewData);
  const lengthPersonsArr = dataFromFetch.length;

  const funcPage = (): number[] => {
    for (let i = 1; i <= Math.ceil(lengthPersonsArr / personsPerPage); i++) {
      // @ts-ignore
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  funcPage();

  return (
      <div className="page-container">
        {pageNumbers.map((num: number) => (
          <div className="page-item" key={num}>
            <a className="page-link" href="#"
            onClick={() => paginate(num)}
            > {num}</a>
          </div>
        ))}
      </div>
  );
});

export default Pagination;
