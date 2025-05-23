import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 425px;
  margin: 64px auto;
  background: #fff;
  min-height: calc(100vh - 128px); /* 64px header + 64px footer */
  border-radius: 12px;
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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