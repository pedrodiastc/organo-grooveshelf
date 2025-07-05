import './DefaultButton.css';

const defaultButton = (props) => {
  return (
    <button type="submit" className="default-button">
      {props.children}
    </button>
  );
};

export default defaultButton;
