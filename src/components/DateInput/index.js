import "./DateInput.css";

const DateInput = ({ onLeftClick, onRightClick, ...props }) => {
  return (
    <div className="custom-date-input-container">
      <button
        className="custom-date-input-button custom-date-input-button-left"
        onClick={onLeftClick}
      >
        &lt;
      </button>
      <input readOnly className="custom-date-input" {...props} />
      <button
        className="custom-date-input-button custom-date-input-button-right"
        onClick={onRightClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default DateInput;
