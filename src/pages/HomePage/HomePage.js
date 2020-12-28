import Calculator from "../../components/calculator/Calculator";
import "./HomePage.css";

const HomePage = (params) => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          width: "400px",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div style={{ marginLeft: "10px" }}>&lt;</div>
        <div
          style={{
            color: "rgb(54, 133, 245)",
            marginLeft: "100px",
          }}
        >
          Let's plan your saving goal
        </div>
      </div>
      <Calculator />
    </div>
  );
};

export default HomePage;
