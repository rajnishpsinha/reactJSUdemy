// import React from "react";
import logo from "./assets/investment-calculator-logo.png";
import InvestmentForm from "./InvestmentForm";

function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm></InvestmentForm>
    </div>
  );
}

export default App;
