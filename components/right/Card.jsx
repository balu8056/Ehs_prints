import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

const Card = () => {
  const [cardIsHover, setCardIsHover] = useState(false);

  const setCardHoverFun = () => setCardIsHover(!cardIsHover);

  return (
    <div
      id="card1"
      className="class1 col-sm p-2"
      onMouseEnter={setCardHoverFun}
      onMouseLeave={setCardHoverFun}
      style={{
        width: "13.5rem",
        height: "17rem",
        textAlign: "center",
        float: "left",
      }}
    >
      <div className="mt-2 ml-2" style={{ position: "absolute" }}>
        <button
          style={{
            width: "40px",
            height: "22px",
            fontSize: "10px",
          }}
          className="btn btn-danger btn-sm "
        >
          SALE
        </button>
        <br />
        <div id="hS" style={{ display: cardIsHover ? "contents" : "none" }}>
          <button
            className="mt-1 hideAndSeek"
            style={{
              padding: "1px",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <FavoriteBorderOutlinedIcon
              style={{ color: "black", padding: "2px" }}
            />
          </button>
          <br />
          <button
            className="mt-1 hideAndSeek"
            style={{
              padding: "1px",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <VisibilityOutlinedIcon
              style={{ color: "black", padding: "2px" }}
            />
          </button>
        </div>
      </div>

      <img
        className="card-img-top"
        src="https://ehsprints.com/wp-content/uploads/2020/04/Posters-WorkPlace-Safety-PRD-WSH0082A-1.jpg"
        alt=""
      />
      <div className="card-body pt-0 mt-0">
        <a
          href="/#"
          className="card-text text-dark"
          style={{ fontSize: "14px" }}
        >
          Posters | Workplace Safety | PRD-WSH0082A
        </a>
      </div>
    </div>
  );
};
export default Card;
