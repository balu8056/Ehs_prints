import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const NavBar = () => {
  const posters = [
    "Hindi",
    "Hindi and English Bilingual",
    "PPE",
    "Electrical Hazard",
    "Material Handling",
    "Chemical Hazards",
    "Fire",
    "Housekeeping",
    "Quality",
    "Environment",
    "pictograms",
  ];

  const signage = ["Signal template sheets", "Pictograms"];

  const compaigns = [
    "Fit India",
    "Monsoon Safety",
    "workright",
    "Home alone",
    "Lab and school safety",
    "Nature and safety",
  ];

  const covid_19 = ["Floor Graphics", "Poster", "Preprinted sign"];

  return (
    <div>
      <nav id="navBar1" className="navbar navbar-expand-lg">
        <small
          style={{ fontSize: "12px" }}
          className="navbar-brand text-white"
          href="/#"
        >
          Free shipping on all orders above INR.: 2,000
        </small>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li id="loginTopNav" className="pr-2">
              <a style={{ fontSize: "13px" }} className="text-white" href="/#">
                Login
              </a>
            </li>
            <li className="pl-2">
              <a style={{ fontSize: "13px" }} className="text-white" href="/#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="navBar2" className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/#">
          <img
            id="navLogoImg"
            src="https://ehsprints.com/wp-content/uploads/2018/12/cropped-EHS_-NEW_LOGO-1-300x93.jpg"
            alt="logo"
          />
        </a>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-2">
              <a className="nav-link text-white" href="/#">
                About
              </a>
            </li>

            <li className="nav-item dropdown mr-2">
              <a
                className="nav-link dropdown-toggle text-white    "
                href="/#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Posters
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {posters.map((v, i) => (
                  <a key={i} className="dropdown-item" href="/#">
                    {v}
                  </a>
                ))}
              </div>
            </li>

            <li className="nav-item dropdown mr-2">
              <a
                className="nav-link dropdown-toggle text-white    "
                href="/#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Signage
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {signage.map((v, i) => (
                  <a key={i} className="dropdown-item" href="/#">
                    {v}
                  </a>
                ))}
              </div>
            </li>

            <li className="nav-item mr-2">
              <a className="nav-link text-white" href="/#">
                Floor Graphics
              </a>
            </li>

            <li className="nav-item mr-2">
              <a className="nav-link text-white" href="/#">
                Asset Marking
              </a>
            </li>

            <li className="nav-item dropdown mr-2">
              <a
                className="nav-link dropdown-toggle text-white    "
                href="/#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Compaigns
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {compaigns.map((v, i) => (
                  <a key={i} className="dropdown-item" href="/#">
                    {v}
                  </a>
                ))}
              </div>
            </li>

            <li className="nav-item dropdown mr-2">
              <a
                className="nav-link dropdown-toggle text-warning"
                href="/#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Covid-19
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {covid_19.map((v, i) => (
                  <a key={i} className="dropdown-item" href="/#">
                    {v}
                  </a>
                ))}
              </div>
            </li>

            <li className="nav-item mr-2">
              <a className="nav-link text-white" href="/#">
                DIY
              </a>
            </li>

            <li className="nav-item mr-2">
              <a className="nav-link text-white" href="/#">
                Contact
              </a>
            </li>

            <li className="nav-item mr-2">
              <button
                style={{ border: "1px solid gray" }}
                className="nav-link btn text-white"
                href="/#"
              >
                <SearchIcon />
              </button>
            </li>

            <li className="nav-item mr-2">
              <button
                style={{ border: "1px solid gray" }}
                className="nav-link btn text-white"
                title="view your shopping cartShopping page"
                href="/#"
              >
                <ShoppingCartOutlinedIcon />
              </button>
            </li>

            <li className="nav-item mr-2 text-white">
              <div style={{ fontSize: "12px" }}>Shopping cart </div>
              <span style={{ fontSize: "12px" }}>0 items</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
