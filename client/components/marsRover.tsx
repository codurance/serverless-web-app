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
        let {x, y, direction} = roverLocation;
        let instructions = inputCommands.split(',');

        for(let instruction of instructions) {
            if (instruction === "R") {
                direction = executeRightTurn(direction);
            }
            if (instruction === "L") {
                direction = executeLeftTurn(direction);
            }
            if(instruction === "M") {
                y+=1;
            }
        };

        setRoverLocation({x, y, direction});
    }

    function executeRightTurn(direction) {
        if(direction === 'N') {
            setRoverImage("/public/img/rover_east.jpg");
            return 'E';
        }
        if(direction === 'E') {
            setRoverImage("/public/img/rover_south.jpg");
            return 'S';
        }
        if(direction === 'S') {
            setRoverImage("/public/img/rover_west.jpg");
            return 'W';
        }
        if(direction === 'W') {
            setRoverImage("/public/img/rover_north.jpg");
            return 'N';
        }
    }

    function executeLeftTurn(direction) {
        if(direction === 'N') {
            setRoverImage("/public/img/rover_west.jpg");
            return 'W';
        }
        if(direction === 'W') {
            setRoverImage("/public/img/rover_south.jpg");
            return 'S';
        }
        if(direction === 'S') {
            setRoverImage("/public/img/rover_east.jpg");
            return 'E';
        }
        if(direction === 'E') {
            setRoverImage("/public/img/rover_north.jpg");
            return 'N';
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
