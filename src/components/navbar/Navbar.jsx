// import React, { useState } from "react";
// import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import logo from "../../assets/new-logo.svg";
// import "./navbar.css";
// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   // const onClick = () => {
//   //   console.log("onclicked");
//   //   // <Signin />;
//   // };
//   return (
    
//       <div className="gpt3__navbar">
        
//           <div className="gpt3__navbar-links">
//             <div className="gpt3__navbar-links_logo">
//               <img src={logo} alt="logo" color="white" />
//             </div>
//             <div className="gpt3__navbar-links_container">
//               <p>
//                 <Link to="/">Home</Link>
//               </p>
//               <p>
//                 <a href="#workshop">Workshop</a>
//               </p>
//               <p>
//                 <a href="#possibility">Hackathon</a>
//               </p>
//               <p>
//                 <a href="#features">Job Opportunity</a>
//               </p>
//             </div>
//           </div>
        
    
//           <div className="gpt3__navbar-sign " >
 
//               <Link to='/Login' className="btn btn-primary" style={{ marginRight: "0.5rem" }}>
//                 Sign in
//               </Link>
//               <Link to='/Login' className="btn btn-primary">
//                 Sign up
//               </Link>

            
//           </div>
    
//         <div className="gpt3__navbar-menu">
//           {toggleMenu ? (
//             <RiCloseLine
//               color="#fff"
//               size={27}
//               onClick={() => setToggleMenu(false)}
//             />
//           ) : (
//             <RiMenu3Line
//               color="#fff"
//               size={27}
//               onClick={() => setToggleMenu(true)}
//             />
//           )}
//           {toggleMenu && (
//             <div className="gpt3__navbar-menu_container scale-up-center">
//               <div className="gpt3__navbar-menu_container-links">
//                 <p>
//                   <a href="#home">Home</a>
//                 </p>
//                 <p>
//                   <a href="#workshop">Workshop</a>
//                 </p>
//                 <p>
//                   <a href="#possibility">Hackathon</a>
//                 </p>
//                 <p>
//                   <a href="#features">Job Opportunity</a>
//                 </p>
//               </div>
//               <div className="gpt3__navbar-menu_container-links-sign m">
//                 {/* <Link to="/Login">
//                 <button type="button">Sign up</button>
//                 </Link> */}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/new-logo.svg";

import { Link } from "react-router-dom";
// import logo from "../../assets/working.png";

import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  let navigate = useNavigate();
  const onClick = () => {
    console.log("onclicked");
    // <Signin />;
  };
  const handleLogout = (e)=>
  {
    localStorage.removeItem('token');
    console.log("pressed on logout");
    window.location.reload(true)
    navigate('/')
  }

  // const onClick = () => {
  //   console.log("onclicked");
  //   // <Signin />;
  // };

  return (
    
      <div className="gpt3__navbar">
        
          <div className="gpt3__navbar-links">
            {/* <div className="gpt3__navbar-links_logo">
              <img src={logo} alt="logo" color="white" />
            </div> */}
            <div className="gpt3__navbar-links_container">
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <a href="/#workshop">Workshop</a>
              </p>
              <p>
                <a href="/#possibility">Hackathon</a>
              </p>
              <p>
                <a href="/#features">Job Opportunity</a>
              </p>
            </div>
          </div>

        
    
          <div className="gpt3__navbar-sign">
              {console.log(localStorage.getItem('token'))}
              {
              (!localStorage.getItem('token')) ? <Link to='/Login' className="btn btn-primary">
                Sign in
              </Link> : <Link to ='/' className="btn btn-primary" onSubmit={handleLogout}>Logout</Link>
              }
            

      
          <div className="gpt3__navbar-sign " >
              <Link to='/Login' className="btn btn-primary">
                Sign in
              </Link>

          </div>
    
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#workshop">Workshop</a>
                </p>
                <p>
                  <a href="#possibility">Hackathon</a>
                </p>
                <p>
                  <a href="#features">Job Opportunity</a>
                </p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign m">
                {/* <Link to="/Login">
                <button type="button">Sign up</button>
                </Link> */}
              </div>
            </div>
          )}
        </div>
      </div>

  );
};

export default Navbar;



