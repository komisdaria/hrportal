/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./_App.scss";
import Employees from "./Employees/Employees";
import MainPage from "./MainPage/MainPage";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { Layout } from "./Layout/Layout";
import { CardEmployee } from "./CardEmployee/CardEmployee";
import employeesOption, { IOneProfile } from "../store/employeesOption";
import { toJS } from "mobx";

type DataFetch = {
  dataFromFetch: IOneProfile;
  data: undefined | IOneProfile[];
};

function App() {
  const [data, setData] = useState([]);

  useEffect((): void => {
    const dataEmployees = employeesOption.fetchEmpl();
    // @ts-ignore
    setData([dataEmployees]);

    //   fetch('https://randomuser.me/api/?results=10')
    //     .then(response => response.json())
    //     .then(json => {
    //  setData(json.results)
    //    })
  }, []);

  const dataFromFetch = toJS(employeesOption.employeesNewData);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="employees"
            element={<Employees dataFromFetch={dataFromFetch} data={data} />}
          />
          <Route
            path="employees/:id"
            element={<CardEmployee dataFromFetch={dataFromFetch} data={data} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
