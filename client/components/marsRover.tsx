import React, { ChangeEvent, useState } from "react";

export default function MarsRover() {
    const [inputCommands, setInputCommands] = useState("");
    const [roverImage, setRoverImage] = useState("/public/img/rover_north.jpg");

    const handleCommandInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const commands = event.target.value;
        setInputCommands(commands);
    };

    const handleExecuteButtonOnClick = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(inputCommands === "R") {
            setRoverImage("/public/img/rover_east.jpg");
        }
    }
    return (
        <div>
            <div className="grid-location">
                <img src={roverImage} />
            </div>

            <input data-test="commandInput" type="text" value={inputCommands} onChange={handleCommandInputOnChange}></input>
            <button data-test="executeButton" onClick={handleExecuteButtonOnClick}>Execute</button>
        </div>
    );
};