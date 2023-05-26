import React, { useState } from "react";

function RelationshipCalculator() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");

  function calculateRelationship(firstName, secondName) {
    if (firstName === "" || secondName === "") {
      return "Please Enter valid input";
    }

    const commonChars = [];
    const firstNameChars = firstName.split("");
    const secondNameChars = secondName.split("");

    for (let char of firstNameChars) {
        if (secondNameChars.includes(char)) {
          commonChars.push(char);
          secondNameChars.splice(secondNameChars.indexOf(char), 1);
        }
      }
    
      firstNameChars.forEach((char, index) => {
        if (commonChars.includes(char)) {
          firstNameChars.splice(index, 1);
        }
      });
    const remainingLength =
      (firstNameChars.length + secondNameChars.length) % 6;

    console.log(remainingLength);

    switch (remainingLength) {
      case 1:
        return "Friends";
      case 2:
        return "Love";
      case 3:
        return "Affection";
      case 4:
        return "Marriage";
      case 5:
        return "Enemy";
      case 0:
        return "Siblings";
    }
  }

  const handleCalculate = () => {
    const status = calculateRelationship(firstName, secondName);
    setRelationshipStatus(status);
  };

  const handleClear = () => {
    setFirstName("");
    setSecondName("");
    setRelationshipStatus("");
  };

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate Relationship Future</button>
      <button onClick={handleClear}>Clear</button>
      <h3>{relationshipStatus}</h3>
    </div>
  );
}

export default RelationshipCalculator;
