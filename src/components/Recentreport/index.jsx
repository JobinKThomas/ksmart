import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faBath } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    title: "Grave Site Report",
    owner: "Mrs.Jack",
    date: "All",
    icon: faListAlt,
  },
  {
    id: 2,
    title: "Grave Site Report",
    owner: "Mrs.Jack",
    date: "All",
    icon: faListAlt,
  },
  {
    id: 3,
    title: "Grave Site Report",
    owner: "Mrs.Jack",
    date: "All",
    icon: faListAlt,
  },
  {
    id: 4,
    title: "Grave Site Report",
    owner: "Mrs.Jack",
    date: "All",
    icon: faListAlt,
  },
];

function RecentgenerateReport() {
  return (
    <Report>
      <h2 className="card__header">Recently Generated</h2>
      <RecentReport>
        {data.map((item, index) => (
          <Card className="card">
            <Card.Body>
              <FontAwesomeIcon icon={item.icon} />
              <Card.Title>{item.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Ownner {item.owner}
              </Card.Subtitle>
              <Card.Text>Date : {item.date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </RecentReport>
    </Report>
  );
}

export default RecentgenerateReport;

const RecentReport = styled.div`
  display: flex;
  gap: 20px;
  .card__header {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: green;
  }
  .card{
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
`;
