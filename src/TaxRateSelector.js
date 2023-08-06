import React, { useState } from "react";
import "./TaxRateSelector.css";

const TaxRateSelector = ({ handleTaxRateChange }) => {
  const [taxRate, setTaxRate] = useState(10);

  const handleOnChange = (e) => {
    const selectedTaxRate = parseInt(e.target.value);
    setTaxRate(selectedTaxRate);
    handleTaxRateChange(selectedTaxRate);
  };

  return (
    <div className="tax-rate">
      <label htmlFor="taxRateSelect">Tax Rate: </label>
      <select id="taxRateSelect" value={taxRate} onChange={handleOnChange}>
        <option value={10}>10%</option>
        <option value={15}>15%</option>
        <option value={20}>20%</option>
        <option value={30}>30%</option>
      </select>
    </div>
  );
};

export default TaxRateSelector;
