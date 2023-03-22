import Newreport from "../components/Newreport";
import RecentgenerateReport from "../components/Recentreport";
import styled from "styled-components";

function Report() {
  return (
    <Reports>
      <h1>Reports</h1>
      <Newreport />
      <RecentgenerateReport />
    </Reports>
  );
}

export default Report;

const Reports = styled.div`
  margin: 20px;
  h1{
    font-size: 36px;
    font-weight: 700;
    color: #195734;
  }
`;
