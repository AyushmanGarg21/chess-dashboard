import React, { useState, useEffect } from 'react';


const GameVisualizer = ({gameId}) => {
    const [gameData, setGameData] = useState(null);

    const fetchGameData = async () => {
        try {
            const response = await fetch(`https://lichess.org/game/export/${gameId}`);
            const data = await response.json();
            setGameData(data);
        } catch (error) {
            console.error('Error fetching game data:', error);
        }
    };

    useEffect(() => {
        fetchGameData();
    }, [gameId]);

    return (
        <div>
            {gameData ? (
                <div>
                    <h2>Game Visualizer</h2>
                </div>
            ) : (
                <p>Loading game data...</p>
            )}
        </div>
    );
};

export default GameVisualizer;
