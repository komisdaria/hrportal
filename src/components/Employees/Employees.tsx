/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import employeesOption, { IOneProfile } from "../../store/employeesOption";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { toJS } from "mobx";

type TProps = {
  data: undefined | IOneProfile[];
  dataFromFetch: IOneProfile[];
};

const Employees = observer((props: TProps) => {
  const { data, dataFromFetch } = props;

  return (
    <>
      <div style={{ display: "flex" }}>
        {employeesOption.employeesData.map((empl) => (
          <div key={empl.id} className="employees">
            <Card
              style={{
                width: "20rem",
                marginLeft: "25px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <Card.Body>
                <Card.Title>{empl.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {empl.email}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {empl.phone}
                </Card.Subtitle>
                <Card.Text>
                  You can coose if this employee has vocation or if this
                  employee fired only on personal info, link about
                </Card.Text>
                <NavLink
                  to={`/employees/${empl.id}`}
                  style={{ fontSize: "16px", color: "gray", fontWeight: "400" }}
                >
                  About {empl.name}
                </NavLink>

                <br />
              </Card.Body>
            </Card>
            <br />
          </div>
        ))}
        {/* <Button onClick={() => employeesOption.fetchEmpl()}>fetch</Button> */}

        {dataFromFetch &&
          dataFromFetch.map((person: IOneProfile) => (
            <>
              <Card
                key={person.cell}
                style={{
                  width: "20rem",
                  marginLeft: "25px",
                  marginTop: "30px",
                  marginBottom: "30px",
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
                    You can coose if this employee has vocation or if this
                    employee fired only on personal info, link about
                  </Card.Text>
                  <NavLink to={`/employees/${person.phone}`}>
                    More info about {person.name.first} {person.name.last}
                  </NavLink>

                  <br />
                </Card.Body>
              </Card>
              <br />
            </>
          ))}
      </div>
    </>
  );
});

export default Employees;
