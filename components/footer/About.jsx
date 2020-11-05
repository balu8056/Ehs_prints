import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";

const About = () => {
  return (
    <div className="about p-5" style={{ backgroundColor: "lightgray" }}>
      <div className="container row p-1">
        <div className="col-sm-6 pl-5">
          <h5>CONTACT US</h5>

          <div className="row p-1">
            <LocationOnOutlinedIcon style={{ fontSize: "20px" }} />
            <p className="pl-2" style={{ fontSize: "13px" }}>
              45, old Agrawal Nagar, Indore, Madhya Pradesh, Pin: 452001
            </p>
          </div>

          <div className="row p-1">
            <PhoneOutlinedIcon style={{ fontSize: "20px" }} />
            <p className="pl-2" style={{ fontSize: "13px" }}>
              +91 9632418602
            </p>
          </div>

          <div className="row p-1">
            <MailOutlineOutlinedIcon style={{ fontSize: "20px" }} />
            <p className="pl-2" style={{ fontSize: "13px" }}>
              hello@ehsposters.com
            </p>
          </div>

          <div className="row p-1">
            <QueryBuilderOutlinedIcon style={{ fontSize: "20px" }} />
            <p className="pl-2" style={{ fontSize: "13px" }}>
              Mon - Fri: 9:00 - 17:00
            </p>
          </div>
        </div>

        <div className="col-sm">
          <div className="row p-1 ">
            <h5>INFORMATIONS</h5>
          </div>

          <div className="row p-1">
            <a className="text-dark" href="/#">
              Create An Account
            </a>
          </div>

          <div className="row p-1">
            <a className="text-dark" href="/#">
              Making Payments
            </a>
          </div>
          <div className="row p-1">
            <a className="text-dark" href="/#">
              Buyer Protection
            </a>
          </div>
          <div className="row p-1">
            <a className="text-dark" href="/#">
              New User Guide
            </a>
          </div>
        </div>

        <div className="col-sm">
          <div className="row p-1 ">
            <h5>MY ACCOUNT</h5>
          </div>

          <div className="row p-1">
            <a className="text-dark" href="/#">
              MY ACCOUNT
            </a>
          </div>
          <div className="row p-1">
            <a className="text-dark" href="/#">
              Order History
            </a>
          </div>
          <div className="row p-1">
            <a className="text-dark" href="/#">
              Order Tracking
            </a>
          </div>
        </div>

        <div className="col-sm">
          <div className="row p-1 ">
            <h5>COMPONY INFO</h5>
          </div>

          <div className="row p-1">
            <a className="text-dark" href="/#">
              Home
            </a>
          </div>

          <div className="row p-1">
            <a className="text-dark" href="/#">
              Affiliates
            </a>
          </div>
          <div className="row p-1">
            <a className="text-dark" href="/#">
              FAQ
            </a>
          </div>
          <div className="row p-1">
            <a className="text-dark" href="/#">
              Privacy Policy
            </a>
          </div>

          <div className="row p-1">
            <a className="text-dark" href="/#">
              Support
            </a>
          </div>
          <div className="row p-1">
            <a className="text-dark" href="/#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
