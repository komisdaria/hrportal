/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import employeesOption, { IOneProfile } from "../../store/employeesOption";
import React, { useEffect, useState } from "react";
import { toJS } from "mobx";
import "./_Search.scss";
import { observer } from "mobx-react-lite";
import { Form, FormControl, Button, Nav } from 'react-bootstrap';
import { Card, ListGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";



const Search = observer(() => {
 const [ valueInput, setValueInput ] = useState('');
 const [ filtered, setFiltered ] = useState([]);
 const [ chechNotFound, setCheckNotFound ] = useState(false);

//  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
  const onTextChanged = (e: any) => {
  
  if (e.target.value) {
    setValueInput(e.target.value);
  }else if (e.key === 'Enter') {
    e.preventDefault()
    setValueInput(e.target.value);
  }
 } 

//  const currentPerson = toJS(employeesOption.sliceData); 

 const onSearchProcess = () => {
setValueInput('')
// @ts-ignore
employeesOption.sliceData.map((elem: IOneProfile) => {
  if(elem.name.first.toLocaleLowerCase() === valueInput.toLocaleLowerCase() || elem.name.last.toLocaleLowerCase() === valueInput.toLocaleLowerCase()) {
    // @ts-ignore
    setFiltered([toJS(elem)])
    setCheckNotFound(false);
  }
  else {
    setFiltered([])
    setCheckNotFound(!chechNotFound)
  }
 
})
 }



 console.log(chechNotFound);
//  console.log(currentPerson);
 

  return (
      <div className="form" >
       <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Name employee"
          className="me-2"
          aria-label="Search"
          value={valueInput}
          onChange={(e) => onTextChanged(e)}
          onKeyDown={onTextChanged}
        />
        <Button variant="outline-success"
        onClick={onSearchProcess}
        >Search</Button>
      </Form>
  
<div>
{filtered ? filtered.map((person:IOneProfile) => (
      <>
      <Card
      key={person.email}
      style={{
        width: "22rem",
        marginLeft: "25px",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Card.Img variant="top" src={person.picture.large} />
      <Card.Body style={{ backgroundColor: "#b8e5ab" }}>
        <Card.Title>
          {person.name.first} {person.name.last}
          {person.vocation ? "in holidays": null}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <span className="description-about">Phone:</span> {person.cell}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="description-about">Mail:</span> {person.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="description-about">
            {person.gender === "female" ? "She" : "He"}
            {" works since "}
          </span>{" "}
          {person.registered.date.slice(0, 4)}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="description-about">Lives in</span>{" "}
          {`${person.location.country}${", city: "} ${
            person.location.city
          }`}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="description-about">Status:</span>{" "}
          {person.location && "works"}
        </ListGroup.Item>
      </ListGroup>
      <div>
        <span className="span-checked">Checked if has vocation</span>
        <br />
      <label className="switch">
        <input type="checkbox" />
        <span
          className="slider round"
        ></span>
      </label>
</div>
      <Card.Body>
        <Link
          style={{ fontWeight: "400", fontSize: "16px" }}
          to="/employees"
        >
          back
        </Link>

      </Card.Body>
    </Card>
    </>
   )): null}
</div>
<div>
  {chechNotFound && (
    <div>
      Not found this employee
      </div>
  )}
</div>
      </div>
  );
});

export default Search;
