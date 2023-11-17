import Header from "../components/header";
import Fooder from "../components/fooder";
import { Outlet } from "react-router-dom";

const ClientLayout = () =>{
    return(
        <>
            <Header/>
            <Outlet></Outlet>
            <Fooder></Fooder>
        </>
    )
}

export default ClientLayout;