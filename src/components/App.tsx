/* eslint-disable @typescript-eslint/no-empty-function */
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
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ personsPerPage ] = useState<number>(3);
  // const [currentPerson, setCurPer] = useState();

  useEffect(() => {
    const getPersons = () => {
      setLoading(true);
       // @ts-ignore
     employeesOption.fetchEmpl();
    }
    getPersons()
    setLoading(false);
  }, [])


  // useEffect((): void => {
  //   // const dataEmployees = 
  //   employeesOption.fetchEmpl();
  //   // @ts-ignore
  //   setData(employeesOption.fetchEmpl());

  //   //   fetch('https://randomuser.me/api/?results=10')
  //   //     .then(response => response.json())
  //   //     .then(json => {
  //   //  setData(json.results)
  //   //    })
  // }, []);

  const dataFromFetch = toJS(employeesOption.employeesNewData);

const lastCountPerson: number = currentPage * personsPerPage;
const firstPersonCount = lastCountPerson - personsPerPage;

// const currentPerson = dataFromFetch.slice(firstPersonCount, lastCountPerson); // получаем текущую страницу 

// const currentPers = employeesOption.curPerson(firstPersonCount, lastCountPerson) // получаем текущую страницу 




useEffect(() => {
    employeesOption.curPerson(firstPersonCount, lastCountPerson)
    toJS(employeesOption.sliceData)
}, [firstPersonCount, lastCountPerson])

const currentPerson = toJS(employeesOption.sliceData);
console.log(currentPerson);


const paginate = (pageNumber: number) => {
  setCurrentPage(pageNumber)
}

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="employees"
            element={<Employees
              loading={loading}
              personsPerPage={personsPerPage}
              totalPersons={dataFromFetch.length}
           
                // @ts-ignore
              paginate={paginate}
                // @ts-ignore
              currentPerson={currentPerson}
             />}
          />
          <Route
            path="employees/:id"
            element={<CardEmployee dataFromFetch={dataFromFetch}
             data={data} 
             />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
