import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import doc1 from "./images/doc1.png";

const App = () => {
  const containerStyles = () => {
    return {
      width: 1280,
      margin: "auto",
      border: "1px solid black",
      backgroudColor: "#EEE",
      borderRadius: 8,
      padding: 12,
      textAlign: "center",
    };
  };

  const docNames = {
    doc1: "Bruno Trova",
    doc2: "Claudia Roberta",
    doc3: "Maricio Trova",
  };

  return (
    <div style={containerStyles()}>
      <h2> MINHA FAMILIA</h2>
      <div
        style={{
          margin: 8,
          border: "1px solid #DDD",
          borderRadius: 8,
          padding: 8,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div className="profissional">
          <img src={doc1} />
          <p>{docNames.doc1}</p>
        </div>

        <div className="profissional">
          <img src={process.env.PUBLIC_URL + "doc2.png"} />
          <p>{docNames.doc2}</p>
        </div>

        <div className="profissional">
          <img src="https://s2-ge.glbimg.com/NImRmPKPU5VCQ_7prhCtVB33E9o=/0x0:2048x1363/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/d/L/IFsVduQGu3f2BZGL78ig/mauricio-cruzeiro.jpg" />
          <p>{docNames.doc3}</p>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
