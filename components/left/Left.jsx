import React, { useState } from "react";

const Left = () => {
  const [isCovidClicked, setCovidClick] = useState(false);

  const setCovidClickFun = () => setCovidClick(!isCovidClicked);

  const [isPosterClicked, setPosterClick] = useState(false);

  const setPosterClickFun = () => {
    setPosterClick(!isPosterClicked);
    console.log(isPosterClicked);
  };
  const covid_19 = [
    "Floor_Graphics",
    "Covid-19 Poster",
    "covid-19 Preprinted Sign",
  ];

  const posters = [
    "Chemical Hazards",
    "Electrical Hazard",
    "Environment",
    "Fire",
    "General Safety",
    "Health",
    "Hindi",
    "Hindi and English Bilingual",
    "Housekeeping",
    "Material Handling",
    "PPE",
    "Quality",
  ];

  return (
    <div className="left">
      <div className="navigation">
        <ol>
          <li style={{ float: "left" }}>
            <a href="/#" className="text-dark">
              Home
            </a>
          </li>
          <li style={{ float: "left" }}>
            <a href="/#">Posters</a>
          </li>
        </ol>
      </div>

      <br />



      <div style={{ padding: "20px" }}>
        <header className="p-3 text-white bg-secondary font-weight-bold">
          PRODUCT CATEGORY
        </header>

        <p style={{ cursor: "pointer" }} className="pl-5 pt-2" href="/#">
          Asset Marking
        </p>
        <div>
          <p
            onClick={setCovidClickFun}
            style={{ cursor: "pointer" }}
            className="pl-5 pt-2"
            href="/#"
          >
            {isCovidClicked ? (
              <p>Covid-19 &#x25B2;</p>
            ) : (
              <p>Covid-19 &#x25BC; </p>
            )}
          </p>
          <div
            style={{
              display: isCovidClicked ? "block" : "none",
              backgroundColor: "lightgrey",
            }}
          >
            {covid_19.map((v, i) => (
              <p
                style={{ cursor: "pointer" }}
                key={i}
                className="pl-5 pt-2"
                href="/#"
              >
                {v}
              </p>
            ))}
          </div>
        </div>

        <p style={{ cursor: "pointer" }} className="pl-5 pt-2" href="/#">
          Floor Graphics
        </p>
        <p style={{ cursor: "pointer" }} className="pl-5 pt-2" href="/#">
          picto_picture
        </p>
        <div>
          <p
            onClick={setPosterClickFun}
            style={{ cursor: "pointer" }}
            className="pl-5 pt-2"
            href="/#"
          >
            {isPosterClicked ? (
              <p>Posters &#x25B2;</p>
            ) : (
              <p>Posters &#x25BC; </p>
            )}
          </p>
          <div
            id="posters"
            style={{
              display: isPosterClicked ? "block" : "none",
              backgroundColor: "lightgrey",
            }}
          >
            {posters.map((v, i) => (
              <p
                key={i}
                style={{ cursor: "pointer" }}
                className="pl-5 pt-2"
                href="/#"
              >
                {v}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
