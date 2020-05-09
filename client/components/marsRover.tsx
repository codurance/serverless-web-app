import React, { ChangeEvent, useState } from "react";

export default function MarsRover() {
    const [inputCommands, setInputCommands] = useState("");
    const [roverImage, setRoverImage] = useState("/public/img/rover_north.jpg");

    const handleCommandInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const commands = event.target.value;
        setInputCommands(commands);
    };

    const handleExecuteButtonOnClick = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        executeRightTurn(inputCommands, setRoverImage);
        if(inputCommands === "L") {
            setRoverImage("/public/img/rover_west.jpg");
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

function executeRightTurn(inputCommands: string, setRoverImage: React.Dispatch<React.SetStateAction<string>>) {
    if (inputCommands === "R") {
        setRoverImage("/public/img/rover_east.jpg");
    }
    if (inputCommands === "R,R") {
        setRoverImage("/public/img/rover_south.jpg");
    }
    if (inputCommands === "R,R,R") {
        setRoverImage("/public/img/rover_west.jpg");
    }
}
