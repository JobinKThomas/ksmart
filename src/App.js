import Header from "./components/Header";
import Report from "./pages";
import styled from "styled-components";

function App() {
  return (
    <Appdata>
      <Header />
      <Report />
    </Appdata>
  );
}

export default App;

const Appdata = styled.div`
  background-color: #e1e6e3;
  height: 100vh;
  @media only screen and (max-width: 767px) {
    height: 100%;
  }
`;
