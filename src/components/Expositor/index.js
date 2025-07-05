import './Expositor.css';

const Expositor = ({ name, image, position, backGroundColor }) => {
  return (
    <div className="expositor">
      <div
        className="expositor-header"
        style={{ backgroundColor: backGroundColor }}
      >
        <img src={image} alt={name} />
      </div>

      <div className="expositor-footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Expositor;
