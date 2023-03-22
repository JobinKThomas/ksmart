import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faBath } from "@fortawesome/free-solid-svg-icons";
const data = [
  {
    id: 1,
    title: "Grave Sites",
    icon: faListAlt,
  },
  {
    id: 2,
    title: "Payment History",
    icon: faBath,
  },
  {
    id: 3,
    title: "Payment Types",
    icon: faListAlt,
  },
  {
    id: 4,
    title: "Burial Types",
    icon: faBath,
  },
  {
    id: 5,
    title: "Funeral Homes",
    icon: faListAlt,
  },
  {
    id: 6,
    title: "Section Codes",
    icon: faBath,
  },
];
function Newreport() {
  return (
    <Report>
      <h2>Generate New Report</h2>
      <Newcard>
        {data.map((item, index) => (
          <Card className="card">
            <Card.Body className="card__body">
              <FontAwesomeIcon icon={item.icon} className="card__icon" />
              <Title>{item.title}</Title>
              <Button className="card__button">Select</Button>
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
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18rem;
    border: none !important;
    height: 150px;
    // border-right: 1px solid #ccc !important;
  }
  .card__button {
    background-color: #03ac13;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 20px;
    margin-top: 15px;
    border-radius: 25px;
    width: 100%;
    min-width: 100px;
  }
  .card__icon {
    text-align: center;
    width: 100%;
  }
//   .card__body {
//     border-right: 1px solid #ccc !important;
//   }
  @media only screen and (max-width: 767px) {
    display: block;
    text-align: center;
    .card {
      margin: 0 auto;
      width: 100%;
    }
  }
`;
const Title = styled.h3`
  font-size: 14px;
  margin-top: 10px;
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
