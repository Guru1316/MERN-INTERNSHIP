// import '../App.css';
// import { NavLink } from 'react-router-dom';
// import ProtectedRoute from '../pages/ProtectedRoutes';

// const Header  = () => {
//     return(
//         <>
//         <header className='header'>
//         <img src="/image.png" alt="logo"/>
//         <div className='links'>
//           <NavLink to={"/"} >Home</NavLink>
//           <ProtectedRoute>
//             <NavLink to={"/diary"} >Diary</NavLink>
//             {/* <NavLink to={"/episode"} >Episode</NavLink> */}
//             <NavLink to={'/addSeries'} >Add Series</NavLink>
//             <NavLink to={"/reviews"} >Reviews</NavLink>
//             {/* <NavLink to={"/season"} >Season</NavLink> */}
//             {/* <NavLink to={"/series"} >Series</NavLink> */}
//             <NavLink to={"/watchlist"} >Watchlist</NavLink>
//           </ProtectedRoute>
//           <NavLink to={"/login"} >Login / Register</NavLink>
//           {/* <NavLink to={"/register"} >Register</NavLink> */}
//         </div>
//       </header>
//         </>
//     )
// }

// export default Header;

import '../App.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem("auth");

    const handleLogout = () => {
        localStorage.removeItem("auth");
        alert("Logged Out Successfully");
        navigate("/login");
    }

    return (
        <>
            <header className='header'>
                <img src="/image.png" alt="logo" />
                <div className='links'>
                    <NavLink to={"/"}>Home</NavLink>

                    {auth === "true" && (
                        <>
                            <NavLink to={"/diary"}>Diary</NavLink>
                            <NavLink to={"/addSeries"}>Add Series</NavLink>
                            {/* <NavLink to={"/reviews"}>Reviews</NavLink> */}
                            <NavLink to={"/watchlist"}>Watchlist</NavLink>
                        </>
                    )}

                    {auth === "true" ? (
                        <a onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</a>
                    ) : (
                        <NavLink to={"/login"}>Login / Register</NavLink>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;
