import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faBath } from "@fortawesome/free-solid-svg-icons";


function RecentgenerateReport() {
  return (
    <Report>
      <h2 className="card__header">Recently Generated</h2>
      <RecentReport>
        <Card className="card">
            <Card.Body>
              <FontAwesomeIcon icon={faListAlt} />
              <Card.Title>Grave Site Report</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Ownner : Mrs.Jack Kramer
              </Card.Subtitle>
              <Card.Text>Date : All</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <FontAwesomeIcon icon={faListAlt} />
              <Card.Title>Payment History Report</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Posting : 10/10/2022 - 12/31/2022
              </Card.Subtitle>
              <Card.Text>Payment Type : All</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <FontAwesomeIcon icon={faListAlt} />
              <Card.Title>Grave Site 01-1001-01.0</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Building Person : All
              </Card.Subtitle>
              <Card.Text>Date : 10/10/2022 - 12/31/2022</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <FontAwesomeIcon icon={faListAlt} />
              <Card.Title>Burial Types</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                All BurialTyeps
              </Card.Subtitle>
            </Card.Body>
          </Card>
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
