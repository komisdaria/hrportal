/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import employeesOption, { IOneProfile } from "../../store/employeesOption";
import { toJS } from "mobx";
import { Card, ListGroup, Button, ToggleButton } from "react-bootstrap";
import { observer } from "mobx-react";

type TProps = {
  data: undefined | IOneProfile[];
  dataFromFetch: IOneProfile[]
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
    const findPerson = dataFromFetch.find((el) => el.phone === id);
    //@ts-ignore
    setPerson(findPerson);
  }, []);
  //@ts-ignore
  console.log(person);

  return (
    <div>
      {fii && (
        <Card style={{ width: "18rem", marginLeft: "25px", marginTop: "30px", marginBottom:"30px" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
              Vocation status: {fii.vocation ? "yes" : "no"}
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
          <Card style={{ width: "18rem", marginLeft: "25px", marginTop: "30px", marginBottom:"30px" }}>
            <Card.Img variant="top" src={person.picture.large} />
            <Card.Body>
              <Card.Title>
                {person.name.first} {person.name.last}
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Phone: {person.cell}</ListGroup.Item>
              <ListGroup.Item>Mail: {person.email}</ListGroup.Item>
              <ListGroup.Item>
                {person.gender === "female" ? "She" : "He"}
                {" works since "} {person.registered.date.slice(0, 4)}
              </ListGroup.Item>
              <ListGroup.Item>{`Lives in country ${person.location.country} ${' , city: '} ${person.location.city}`}
              </ListGroup.Item>
              <ListGroup.Item>
                Vocation status: {person.location && "no" }
              </ListGroup.Item>
            </ListGroup>
            {/* <ToggleButton
              className="mb-2"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              checked={fii.vocation}
              value="1"
              onChange={() => employeesOption.vocationEmployee(fii.id)}
            >
              In vocation
            </ToggleButton>  */}

            {/* <Button
              variant="outline-danger"
              onClick={() => employeesOption.removeEmployee(person.id.value)}
            >
              Delete
            </Button> */}
            <Card.Body>
              <Card.Link href="/employees">back</Card.Link>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
});

export { CardEmployee };
