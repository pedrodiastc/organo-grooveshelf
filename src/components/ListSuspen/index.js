import './listsuspen.css';

const ListSuspen = (props) => {
  return (
    <div className="list-suspen">
      <label> {props.label}</label>
      <select
        onChange={(evento) => props.toChange(evento.target.value)}
        value={props.InputValue}
        required={props.FormRequired}
      >
        <option value="">Select an option</option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListSuspen;
