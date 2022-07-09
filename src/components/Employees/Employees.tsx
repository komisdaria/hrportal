/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import employeesOption, { IOneProfile } from "../../store/employeesOption";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { toJS } from "mobx";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "../Pagination/Pagination";
import { Button } from "react-bootstrap";
import "./_Employees.scss";

type TProps = {
  loading: boolean;
  personsPerPage: number;
  totalPersons: number;
  currentPerson: IOneProfile[];
  paginate: (pageNumber: number) => void;
};

const Employees = observer((props: TProps) => {
  const {
    currentPerson,
    loading,
    totalPersons,
    personsPerPage,
    paginate,
  } = props;

useEffect(()=>{
  employeesOption.sliceData
}, [])


  const removePersone = (id: string) => {
    console.log(id, toJS(employeesOption.employeesNewData),toJS(currentPerson) );
    
    employeesOption.removeEmployeeFetch(id)
  }

  if (loading) {
    return <Spinner animation="border" variant="success" />;
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* {employeesOption.employeesData.map((empl) => (
        <div key={empl.id} className="employees">
          <Card style={{ width: "20rem", marginLeft: "25px", marginTop: "30px", marginBottom:"30px" }}>
            <Card.Body>
              <Card.Title>{empl.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {empl.email}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {empl.phone}
              </Card.Subtitle>
              <Card.Text>
                You can coose if this employee has vocation or if this employee
                fired only on personal info, link about
              </Card.Text>
              <NavLink
      to={`/employees/${empl.id}`} style={{ fontSize: "16px", color: "gray", fontWeight: "400" }} >About {empl.name}</NavLink>

              <br />
             
            </Card.Body>
          </Card>
          <br />
         
        
        </div>
      ))} */}

        {
          employeesOption.sliceData &&
          employeesOption.sliceData.map((person: IOneProfile) => (
              <div key={person.email} style={{display: "flex"}}>
                <Card
                  style={{
                    width: "20rem",
                    marginLeft: "25px",
                    marginTop: "30px",
                    marginBottom: "30px",
                    backgroundColor: "#b8e5ab",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      {person.name.first} {person.name.last}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {person.email}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      {person.cell}
                    </Card.Subtitle>
                    <Card.Text>
                      You can choose if {person.name.first} has vocation on personal info, link about
                    </Card.Text>
                    <NavLink 
                    className="link-about"
                    to={`/employees/${person.id.value}`}>
                      More info about {person.name.first} {person.name.last}
                    </NavLink>

                    <br />
                    <Button
                      variant="outline-danger"
                      style={{ marginTop: "15px" }}
                      onClick={() =>
                       removePersone(person.email)
                      }
                    >
                      Delete if {person.gender === "female" ? "she" : "he"} fired
                    </Button>
                  </Card.Body>
                </Card>
                <br />
              </div>
            ))
        }
      </div>
      <Pagination
        personsPerPage={personsPerPage}
        totalPersons={totalPersons}
        paginate={paginate}
      />
    </>
  );
});

export default Employees;
