import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faBath } from "@fortawesome/free-solid-svg-icons";
const data = [
  {
    id: 1,
    title: "Grave Site Report",
    icon: faListAlt,
  },
  {
    id: 2,
    title: "Grave Site Report",
    icon: faBath,
  },
  {
    id: 3,
    title: "Grave Site Report",
    icon: faListAlt,
  },
  {
    id: 4,
    title: "Grave Site Report",
    icon: faBath,
  },
  {
    id: 5,
    title: "Grave Site Report",
    icon: faListAlt,
  },
  {
    id: 6,
    title: "Grave Site Report",
    icon: faBath,
  },
];
function Newreport() {
  return (
    <Report>
      <h2>Generate New Report</h2>
      <Newcard>
        {data.map((item, index) => (
          <Card  className="card">
            <Card.Body>
              <FontAwesomeIcon icon={item.icon} />
              <Card.Title>{item.title}</Card.Title>
              <Button variant="success">Select</Button>
            </Card.Body>
          </Card>
        ))}
      </Newcard>
    </Report>
  );
}

export default Newreport;

const Newcard = styled.div`
  display: flex;
  background-color: #fff;
  .card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18rem;
  }
  @media only screen and (max-width: 767px) {
    display: block;
    text-align: center;
    .card{
        margin: 0 auto;
        width: 100%;
    }
  }

`;
const Report = styled.div`
margin: 30px 0;
    h2 {
        font-size: 24px;
        font-weight: 700;
        color: #227847;
        margin-bottom: 30px;
    }
    // @media only screen and (max-width: 767px) {
    //     text-align: center;
    // }
`;
