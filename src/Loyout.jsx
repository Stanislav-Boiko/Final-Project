
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './Loyout.scss';
import { ViewModeProvider } from './context/ViewModeContext';

function Loyout () {

    return (
        <ViewModeProvider>
            <Header/>
            <div className="container">

                <Outlet />


                <Footer/>
            </div>
        </ViewModeProvider>
    )
}

export default Loyout;