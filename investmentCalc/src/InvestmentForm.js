import  { useState } from "react";
import InvestmentReturn from "./InvestmentReturnTable";

function InvestmentForm(props) {
  // const yearlyData = []; // per-year results

  const [yearlyData, setYearlyData] = useState();

  const [entertedCurrentSaving, setCurrentSaving] = useState("");
  const [enteredYealyContribution, setYearlyContribution] = useState("");
  const [enteredExpectedInterest, setExpectedInterest] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");

  const newForm = {
    currentSaving: entertedCurrentSaving,
    yearlyContribution: enteredYealyContribution,
    expectedInterest: enteredExpectedInterest,
    duration: enteredDuration,
  };

  const currentSavingHandler = (event) => setCurrentSaving(event.target.value);
  const yearlyContributionHandler = (event) =>
    setYearlyContribution(event.target.value);
  const interestRateHandler = (event) =>
    setExpectedInterest(event.target.value);
  const durationHandler = (event) => setEnteredDuration(event.target.value);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = +userInput["currentSaving"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    const data = [];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      data.push({
        // feel free to change the shape of the data pushed to the array!
        key: Math.random().toString(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setYearlyData(data);
    console.log("data ", data);
    console.log("yearly data", yearlyData);
    console.log("yearly data", yearlyData);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("new form", newForm);
    calculateHandler(newForm);
  };

  const resetHandler=(event)=>{
    setYearlyData(null);
  }

  return (
    <div>
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={currentSavingHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={yearlyContributionHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={interestRateHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={durationHandler} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
      <InvestmentReturn investmentResult={yearlyData}></InvestmentReturn>
    </div>
  );
}
export default InvestmentForm;
