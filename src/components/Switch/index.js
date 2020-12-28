import "./Switch.css";

const Switch = (props) => {
  return (
    <label class="custom-switch">
      <input type="checkbox" {...props} />
      <span class="custom-switch-slider"></span>
    </label>
  );
};

export default Switch;
