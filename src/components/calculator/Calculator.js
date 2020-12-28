import "./Calculator.css";
import { useReducer } from "react";
import Switch from "../Switch";
import NumberInput from "../NumberInput";
import DateInput from "../DateInput";

import {
  addMonths,
  format,
  compareAsc,
  differenceInCalendarMonths,
} from "date-fns";

function reducer(state, action) {
  let diff = differenceInCalendarMonths(state.date, new Date().setDate(1)) + 1;

  switch (action.type) {
    case "toggleByTotalAmount":
      return {
        ...state,
        byTotalAmount: !state.byTotalAmount,
      };
    case "setTotalAmount":
      return {
        ...state,
        totalAmount: action.payload,
        monthlyAmount: Math.ceil(action.payload / diff),
      };
    case "setMonthlyAmount":
      return {
        ...state,
        monthlyAmount: action.payload,
        totalAmount: action.payload * diff,
      };
    case "incrementMonth": {
      const diff =
        differenceInCalendarMonths(
          addMonths(state.date, 1),
          new Date().setDate(1)
        ) + 1;

      return {
        ...state,
        date: addMonths(state.date, 1),
        monthlyAmount: state.byTotalAmount
          ? Math.ceil(state.totalAmount / diff)
          : state.monthlyAmount,
        totalAmount: state.byTotalAmount
          ? state.totalAmount
          : state.monthlyAmount * diff,
      };
    }
    case "decrementMonth": {
      const newDate =
        compareAsc(state.date, new Date().setDate(1)) === 1
          ? addMonths(state.date, -1)
          : state.date;
      const diff =
        differenceInCalendarMonths(newDate, new Date().setDate(1)) + 1;

      return {
        ...state,
        date: newDate,
        monthlyAmount: state.byTotalAmount
          ? Math.ceil(state.totalAmount / diff)
          : state.monthlyAmount,
        totalAmount: state.byTotalAmount
          ? state.totalAmount
          : state.monthlyAmount * diff,
      };
    }

    default:
      throw new Error();
  }
}

const initialState = {
  byTotalAmount: false,
  totalAmount: 0,
  monthlyAmount: 0,
  date: new Date().setDate(1),
};

const Calculator = () => {
  const [
    { byTotalAmount, totalAmount, monthlyAmount, date },
    dispatch,
  ] = useReducer(reducer, initialState);

  let diff = differenceInCalendarMonths(date, new Date().setDate(1)) + 1;

  return (
    <div className="custom-card">
      <h2 className="card-heading">
        Savings <br /> Calculator
      </h2>

      <div className="switch-container">
        <Switch
          id="switch"
          checked={byTotalAmount}
          onChange={(e) => {
            dispatch({ type: "toggleByTotalAmount" });
          }}
        />
        <label htmlFor="switch" className="switch-label">
          {byTotalAmount
            ? "Calculate by total amount"
            : "Calculate by monthly saving"}
        </label>
      </div>

      <div className="form-field-container">
        <label htmlFor="total-amount" className="form-field-label">
          {byTotalAmount ? "Total Amount" : "Monthly Amount"}
        </label>
        <NumberInput
          value={byTotalAmount ? totalAmount : monthlyAmount}
          onChange={(e) => {
            let val = e.target.value;
            let num = parseInt(val ? val : 0, 10);
            if (byTotalAmount) {
              dispatch({ type: "setTotalAmount", payload: num });
            } else {
              dispatch({ type: "setMonthlyAmount", payload: num });
            }
          }}
        />
      </div>

      <div className="form-field-container">
        <label htmlFor="reach-goal-by" className="form-field-label">
          Reach goal by
        </label>
        <DateInput
          value={format(date, "LLLL, yyyy")}
          onLeftClick={() => dispatch({ type: "decrementMonth" })}
          onRightClick={() => dispatch({ type: "incrementMonth" })}
        />
      </div>

      <div className="results-card">
        <div className="results">
          <span className="amount-text">
            {byTotalAmount ? "Monthly Amount" : "Total Amount"}
          </span>
          <span className="amount-value">
            ${byTotalAmount ? monthlyAmount : totalAmount}
          </span>

        </div>
        <div className="details">
          {byTotalAmount
            ? `You are planning ${diff} monthly deposits to reach your $${totalAmount} goal by ${format(
                date,
                "LLLL, yyyy"
              )}.`
            : `You are saving ${monthlyAmount} monthly to save ${totalAmount} by ${format(
                date,
                "LLLL, yyyy"
              )}.`}
        </div>
      </div>

      <button
        style={{
          width: "100%",
          backgroundColor: "#2F80ED",
          borderRadius: "5px",
          border: "none",
          color: "white",
          padding: "10px",
          marginTop: "30px",
        }}
      >
        Finish
      </button>
    </div>
  );
};
// 16, 40, 75
export default Calculator;
