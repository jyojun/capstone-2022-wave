import React, { useState, useEffect } from "react";
import Place from "./Place";
import { PlacesDiv } from "../../Style/PlaceCSS.js";
import { BtnDiv } from "../../Style/DetailCSS";
import { Link } from "react-router-dom";
function Places() {
  let db = [
    {
      name: "Moldoba1",
      location: "Korea",
    },
    {
      name: "Moldoba2",
      location: "Korea",
    },
    {
      name: "Moldoba3",
      location: "Korea",
    },
    {
      name: "Moldoba4",
      location: "Korea",
    },
    {
      name: "Moldoba5",
      location: "Korea",
    },
  ];
  const [Places, setPlaces] = useState([]);
  useEffect(() => {
    setPlaces(db);
  }, []);

  return (
    <PlacesDiv>
      <BtnDiv>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
          }}
        >
          <Link
            to="/placeUpload"
            style={{
              color: "black",
              textDecoration: "none",
              border: "1px solid grey",
              borderRadius: "5px",
              padding: "5px",
            }}
            className="write"
          >
            장소등록(관리자용)
          </Link>
        </button>
      </BtnDiv>
      <div className="row">
        {Places.map((place, idx) => {
          return (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-3">
              <Place place={place} />
            </div>
          );
        })}
      </div>
    </PlacesDiv>
  );
}

export default Places;
