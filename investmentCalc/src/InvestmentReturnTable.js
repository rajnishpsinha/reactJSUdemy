// import React from "react";
import "./InvestmentForm.css";
import "./InvestmentReturnTable.css";

const InvestmentReturn = (props) => {
  let investmentRecords = props.investmentResult;

  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {investmentRecords == null || investmentRecords === undefined
          ? console.log("no record")
          : investmentRecords.map((item) => {
              return (
                <tbody>
                  <tr key={item.year}>
                    <td>{item.year}</td>
                    <td>{item.savingsEndOfYear}</td>
                    <td>{item.yearlyInterest}</td>
                    <td>{item.yearlyContribution}</td>
                    <td>{item.savingsEndOfYear}</td>
                  </tr>
                </tbody>
              );
            })}
      </table>
    </div>
  );
};
export default InvestmentReturn;
