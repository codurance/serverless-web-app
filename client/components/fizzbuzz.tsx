import React, { useState } from "react";
export default function FizzBuzz() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleInputOnChange = (event): void => {
        const inputText: string = event.target.value;
        setInput(inputText);
    }

    const handleCalculateOnClick = (_event): void => {
        const inputNumber = parseInt(input);
        if(inputNumber % 3 == 0 && inputNumber % 5 == 0) {
            setOutput("Fizz Buzz");
            return;
        }

        if(inputNumber % 3 == 0) {
            setOutput("Fizz");
            return;
        }

        if(inputNumber % 5 == 0) {
            setOutput("Buzz");
            return;
        }

        setOutput(input);
    }
    return(
        <div>
            <input data-test="fizzBuzzInput" type="text" onChange={handleInputOnChange}></input>
            <div data-test="fizzBuzzOutput">{ output }</div>
            <button data-test="fizzBuzzCalculateButton" onClick={handleCalculateOnClick}>Calculate</button>
        </div>
    );
}