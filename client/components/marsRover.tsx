import React, { ChangeEvent, useState } from "react";

export default function MarsRover() {
    const [inputCommands, setInputCommands] = useState("");
    const [roverImage, setRoverImage] = useState("/public/img/rover_north.jpg");
    const [roverLocation, setRoverLocation] = useState({x:0, y:0, direction: 'N'});

    const handleCommandInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const commands = event.target.value;
        setInputCommands(commands);
    };

    const handleExecuteButtonOnClick = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let instructions = inputCommands.split(',');
        let currentLocation = roverLocation;

        for(let instruction of instructions) {
            currentLocation = executeInstruction(instruction, currentLocation);
        };

        setRoverLocation(currentLocation);
        updateRoverImage(currentLocation.direction);
    }

    function updateRoverImage(direction: string) {
        switch (direction) {
            case 'N':
                setRoverImage("/public/img/rover_north.jpg");
                break;
            case 'E':
                setRoverImage("/public/img/rover_east.jpg");
                break;
            case 'S':
                setRoverImage("/public/img/rover_south.jpg");
                break;
            case 'W':
                setRoverImage("/public/img/rover_west.jpg");
                break;
        }
    }


    const grid = [];

    for(let x = 9; x >= 0; x--) {
        for(let y = 9; y >= 0; y--) {
            if(x == roverLocation.x && y == roverLocation.y) {
                grid.push(<div className={`grid-location_${x}_${y}`} key={`${x},${y}`}>
                    <img src={roverImage} />
                </div>);
                continue;
            }
            grid.push(<div className={`grid-location_${x}_${y}`} key={`${x},${y}`}></div>)
        }
    }

    return (
        <div>
            {grid}
            <input data-test="commandInput" type="text" value={inputCommands} onChange={handleCommandInputOnChange}></input>
            <button data-test="executeButton" onClick={handleExecuteButtonOnClick}>Execute</button>
        </div>
    );
};

function executeInstruction(instruction: string, currentLocation: { x: number; y: number; direction: string;}) {
    if (instruction === "R") {
        currentLocation = executeRightTurn(currentLocation);
    }
    if (instruction === "L") {
        currentLocation = executeLeftTurn(currentLocation);
    }
    if (instruction === "M") {
        currentLocation = executeMoveForward(currentLocation);
    }
    return currentLocation;
}

function executeMoveForward(currentRoverLocation: { x: number; y: number; direction: string; }) {
    let { x, y, direction } = currentRoverLocation;
    if (direction === 'N') {
        y += 1;
        if (y > 9) {
            y = 0;
        }
    }
    if (direction === 'E') {
        x += 1;
        if (x > 9) {
            x = 0;
        }
    }
    if (direction === 'W') {
        x -= 1;
        if (x < 0) {
            x = 9;
        }
    }
    if (direction === 'S') {
        y -= 1;
        if (y < 0) {
            y = 9;
        }
    }

    return {x, y, direction};
}


function executeRightTurn(currentRoverLocation: {x: number; y: number; direction: string;}) {
    let {direction} = currentRoverLocation
    if(direction === 'N') {
        return {...currentRoverLocation, direction: 'E'};
    }
    if(direction === 'E') {
        return {...currentRoverLocation, direction: 'S'};
    }
    if(direction === 'S') {
        return {...currentRoverLocation, direction: 'W'};
    }
    if(direction === 'W') {
        return {...currentRoverLocation, direction: 'N'};
    }
    return currentRoverLocation;
}

function executeLeftTurn(currentRoverLocation: {x: number; y: number; direction: string;}) {
    let {direction} = currentRoverLocation
    if(direction === 'N') {
        return {...currentRoverLocation, direction: 'W'};
    }
    if(direction === 'E') {
        return {...currentRoverLocation, direction: 'N'};
    }
    if(direction === 'S') {
        return {...currentRoverLocation, direction: 'E'};
    }
    if(direction === 'W') {
        return {...currentRoverLocation, direction: 'S'};
    }
    return currentRoverLocation;
}