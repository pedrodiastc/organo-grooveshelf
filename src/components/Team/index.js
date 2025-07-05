import Expositor from '../Expositor';
import './Team.css';

function Team(props) {
  const BgColor = { backgroundColor: props.secondaryColor };
  const BorderColor = { borderColor: props.primaryColor };

  return props.expositors.length > 0 ? (
    <section className="team" style={BgColor}>
      <h3 style={BorderColor}>{props.name}</h3>

      <div className="team-expositors">
        {props.expositors.map((expositor) => (
          <Expositor
            key={expositor.name}
            name={expositor.name}
            position={expositor.position}
            image={expositor.image}
            backGroundColor={props.primaryColor}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  );
}

export default Team;
