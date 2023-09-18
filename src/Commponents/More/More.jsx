import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="divider">
        <span></span>
        <span>Languages</span>
        <span></span>
      </div>
      <div className="card"> 
        <p>{languages.language}</p>
        <p>✏️ Writing: {languages.wrlevel}</p>
        <p>💭 Speaking: {languages.splevel}</p>
      </div>
        <div className="divider">
        <span></span>
        <span>Skills</span>
        <span></span>
        </div>
      <div className="habilities card">
        {habilities.map((txt) => (
          <p>🔧 {txt}</p>
        ))}
      </div>
      <div className="divider">
        <span></span>
        <span>Volunteer</span>
        <span></span>
      </div>
      <div className="volunteer card">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">🥽{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;