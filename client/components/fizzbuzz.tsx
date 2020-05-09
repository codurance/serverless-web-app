import React, { useState, ChangeEvent } from "react";
export default function FizzBuzz() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const inputText: string = event.target.value;
        setInput(inputText);
    }

    const handleCalculateOnClick = (): void => {
        let output = [];

        input.split(", ").forEach((n) => {
            const inputNumber = parseInt(n);
            output.push(processNumber(inputNumber))
        });

        setOutput(output.join(", "));
    }

    const processNumber = (inputNumber: number) => {
        if(inputNumber % 3 == 0 && inputNumber % 5 == 0) {
            return "Fizz Buzz";
        }

        if(inputNumber % 3 == 0) {
            return "Fizz";
        }

        if(inputNumber % 5 == 0) {
            return "Buzz";
        }

        return inputNumber;
    }

    return(
        <div>
            <input data-test="fizzBuzzInput" type="text" onChange={handleInputOnChange}></input>
            <div data-test="fizzBuzzOutput">{ output }</div>
            <button data-test="fizzBuzzCalculateButton" onClick={handleCalculateOnClick}>Calculate</button>
        </div>
    );
}