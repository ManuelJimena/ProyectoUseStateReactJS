import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
        <span>Languages</span>
      <div className="card"> 
        <p>{languages.language}</p>
      </div>
        <span>Skills</span>
      <div className="habilities card">
        {habilities.map((txt) => (
          <p>{txt}</p>
        ))}
      </div>
        <span>Volunteer</span>
      <div className="volunteer card">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
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
