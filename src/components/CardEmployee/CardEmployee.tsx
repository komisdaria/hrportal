import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import employeesOption, { IOneProfile } from "../../store/employeesOption";
import { toJS } from "mobx";
import { Card, ListGroup, Button, ToggleButton } from "react-bootstrap";
import { observer } from "mobx-react";
import "./_CardEmployee.scss";
import { Link } from "react-router-dom";

type TProps = {
  data: undefined | IOneProfile[];
  dataFromFetch: IOneProfile[];
};

let person: IOneProfile;

const CardEmployee = observer((props: TProps) => {
  const { data, dataFromFetch } = props;
  const { id } = useParams();

  const [person, setPerson] = useState<IOneProfile>();

  const idEm = Number(id);
  const fiiiii = employeesOption.findEmployee(idEm);
  const fii = toJS(fiiiii);

  useEffect(() => {
    const findPerson = employeesOption.sliceData.find(
      (el) => el.id.value === id
    );

    setPerson(findPerson);
  }, [person?.vocation]);

  const setStatusVocation = (email: string) => {
    employeesOption.vocationFromFetch(email);
    console.log(toJS(employeesOption.sliceData));
    
  };

  return (
    <div>
      {fii && (
        <Card
          style={{
            width: "18rem",
            marginLeft: "25px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <Card.Body>
            
            <Card.Title>{fii.name}</Card.Title>
            <Card.Text>
              {fii.name} works in Department {fii.department.main}{" "}
              {fii.department.option}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Phone: {fii.phone}</ListGroup.Item>
            <ListGroup.Item>Mail: {fii.email}</ListGroup.Item>
            <ListGroup.Item>
              Vocation status: {fii.vocation ? "yes" : "works"}
            </ListGroup.Item>
          </ListGroup>
          <ToggleButton
            className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={fii.vocation}
            value="1"
            onChange={() => employeesOption.vocationEmployee(fii.id)}
          >
            In vocation
          </ToggleButton>

          <Button
            variant="outline-danger"
            onClick={() => employeesOption.removeEmployee(fii.id)}
          >
            Delete
          </Button>
          <Card.Body>
            <Card.Link href="/employees">back</Card.Link>
          </Card.Body>
        </Card>
      )}

      {person && (
        <>
          <Card
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
                onClick={() => setStatusVocation(person.email)}
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
      )}
    </div>
  );
});

export { CardEmployee };
