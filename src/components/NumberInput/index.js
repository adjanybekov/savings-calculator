import "./NumberInput.css";

// TODO only numbers
// handle errors

const NumberInput = (props) => {
  return (
    <div className="custom-number-input-container">
      <div className="custom-number-input-addon-before">$</div>
      <input className="custom-number-input" {...props} />
    </div>
  );
};

export default NumberInput;
