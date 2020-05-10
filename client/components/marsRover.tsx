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
                if(direction === 'N'){
                    y+=1;
                    if(y > 9) {
                        y = 0;
                    }
                }
                if(direction === 'E'){
                    x+=1;
                    if(x > 9) {
                        x = 0;
                    }
                }
                if(direction === 'W') {
                    x-=1;
                    if(x < 0) {
                        x = 9;
                    }
                }
                if(direction === 'S') {
                    y -=1;
                }
            }
        };

        setRoverLocation({x, y, direction});

        updateRoverImage(direction);
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

    function executeRightTurn(direction) {
        if(direction === 'N') {
            return 'E';
        }
        if(direction === 'E') {
            return 'S';
        }
        if(direction === 'S') {
            return 'W';
        }
        if(direction === 'W') {
            return 'N';
        }
    }

    function executeLeftTurn(direction) {
        if(direction === 'N') {
            return 'W';
        }
        if(direction === 'W') {
            return 'S';
        }
        if(direction === 'S') {
            return 'E';
        }
        if(direction === 'E') {
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
