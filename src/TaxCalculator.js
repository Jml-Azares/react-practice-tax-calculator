import React, { useState } from "react";
import TaxRateSelector from "./TaxRateSelector";
import "./TaxCalculator.css";

const TaxCalculator = () => {
  const [income, setIncome] = useState(0);
  const [taxRate, setTaxRate] = useState(10);
  const [taxResult, setTaxResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleIncomeChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 7) {
      setIncome(inputValue);
      setErrorMessage("");
    } else {
      setErrorMessage("Maximum of 7 digits only");
    }
  };

  const handleTaxRateChange = (selectedTaxRate) => {
    setTaxRate(selectedTaxRate);
  };

  const handleCalculateTax = () => {
    const parsedIncome = parseFloat(income);
    if (isNaN(parsedIncome) || parsedIncome.toString() !== income) {
      setErrorMessage("Please input numbers only");
    } else {
      setErrorMessage("");
      const calculatedTax = (parsedIncome * taxRate) / 100;
      setTaxResult(calculatedTax);
    }
  };

  return (
    <div className="container">
      <div className="tax-calculator">
        <h1>Tax Calculator</h1>
        <h2>Tax Result: {taxResult}</h2>
        <form>
          <label htmlFor="incomeInput">Income:</label>
          <input
            type="text"
            id="incomeInput"
            className="tax-calculator-input"
            value={income}
            onChange={handleIncomeChange}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
        <TaxRateSelector handleTaxRateChange={handleTaxRateChange} />
        <div className="button">
          <button
            className="tax-calculator-button"
            onClick={handleCalculateTax}
          >
            Calculate My Income Tax
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
