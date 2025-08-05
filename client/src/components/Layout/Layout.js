import { Outlet } from "react-router-dom";


const Layout = () =>{
    return (
        <div className="layout">
        <header>
            <h1>Role-Based Authentication Example</h1>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>&copy; 2023 Role-Based Auth Example</p>
        </footer>
        </div>
    );

}
export default Layout;