import styles from './TextInput.module.css';

function TextInput(props) {
  const placeholderModified = `${props.placeholder}...`;

  const toType = (event) => {
    props.toChange(event.target.value);
  };

  return (
    <div className={styles.textfield}>
      <label> {props.label} </label>
      <input
        value={props.InputValue}
        onChange={toType}
        required={props.FormRequired}
        placeholder={placeholderModified}
      />
    </div>
  );
}

export default TextInput;
