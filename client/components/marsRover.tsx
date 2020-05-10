import React, { ChangeEvent, useState } from "react";

export default function MarsRover() {
    const [inputCommands, setInputCommands] = useState("");
    const [roverImage, setRoverImage] = useState("/public/img/rover_north.jpg");
    const [roverLocation, setRoverLocation] = useState(90);

    const handleCommandInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const commands = event.target.value;
        setInputCommands(commands);
    };

    const handleExecuteButtonOnClick = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        executeRightTurn(inputCommands, setRoverImage);
        executeLeftTurn(inputCommands, setRoverImage);
        if(inputCommands === "M") {
            setRoverLocation(80);
        }
    }

    const grid = [];

    for(let i = 0; i < 100; i++) {
        if(i == roverLocation) {
            grid.push(<div className="grid-location" key={i}>
                <img src={roverImage} />
            </div>);
            continue;
        }
        grid.push(<div className="grid-location" key={i}></div>)
    }

    return (
        <div>
            {grid}
            <input data-test="commandInput" type="text" value={inputCommands} onChange={handleCommandInputOnChange}></input>
            <button data-test="executeButton" onClick={handleExecuteButtonOnClick}>Execute</button>
        </div>
    );
};

function executeLeftTurn(inputCommands: string, setRoverImage: React.Dispatch<React.SetStateAction<string>>) {
    if (inputCommands === "L") {
        setRoverImage("/public/img/rover_west.jpg");
    }
    if (inputCommands === "L,L") {
        setRoverImage("/public/img/rover_south.jpg");
    }
    if (inputCommands === "L,L,L") {
        setRoverImage("/public/img/rover_east.jpg");
    }
}

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
