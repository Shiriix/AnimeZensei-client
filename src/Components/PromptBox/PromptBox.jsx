import React, { useState } from "react";

const PromptBox = ({ onSend }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    await onSend(selectedValue);
  };

  return (
    <>
      <form className="form">
        <div className="form__div">
          <select
            value={selectedOption}
            onChange={handleDropdownChange}
            className="form__dropdown"
          >
            <option value="">Select...</option>
            <option value="The Avengers">The Avengers</option>
            <option value="Lion King">Lion King</option>
            <option value="Titanic">Titanic</option>
            <option value="Django Unchained">Django Unchained</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default PromptBox;
