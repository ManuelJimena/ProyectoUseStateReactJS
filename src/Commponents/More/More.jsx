import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <h2>Languages</h2>
      <div className="card">
        <p>{languages.language}</p>
      </div>
      <h2>Skills</h2>
      <div className="habilities card">
        {habilities.map((txt) => (
          <p key={txt}>{txt}</p>
        ))}
      </div>
      <h2>Volunteer</h2>
      <div className="volunteer card">
        {volunteer.map((item) => {
          return (
            <div key={item.id}>
              <p className="name">{item.name}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
