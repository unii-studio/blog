import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "#fdfffc",
      marginBottom: "3rem",
      borderBottom: "2px solid #e6e6e6",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center", fontSize: "18px" }}>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
