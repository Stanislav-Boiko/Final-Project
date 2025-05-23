import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 425px;
  min-width: 320px;
  margin: 0 auto;
  padding-top: 64px;    /* Відступ під хедер */
  padding-bottom: 64px; /* Відступ під футер */
  background: #fff;
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0,0,0,0.07);
  border-radius: 12px;
  position: relative;

  @media (max-width: 425px) {
    width: 100vw;
    max-width: 425px;
    min-width: 320px;
    margin: 0 auto;
    border-radius: 12px;
  }
`;

function Loyout () {
    return (
        <>
            <Header/>
            <Container>
                <Outlet />
            </Container>
            <Footer/>
        </>
    )
}

export default Loyout;