import React, { useState, useEffect } from 'react';

const ChessPlayerDashboard = ({playerUsername}) => {
    const [playerData, setPlayerData] = useState({});

    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response = await fetch(`https://lichess.org/api/user/${playerUsername}`, {
                    method: "GET",
                  });
                const data = await response.json();
                setPlayerData(data);
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };

        if(playerUsername !== undefined) fetchPlayerData();
    }, [playerUsername]);

    if (!playerData || Object.keys(playerData).length === 0) {
        return <p>Loading...</p>;
    }

    // Destructure playerData object
    const { id, username, perfs, createdAt, seenAt, playTime, url, count } = playerData;

    return (
        <div className="dashboard-container">
            <h2 className="username">Username: {username}</h2>
            <div className="stats-container">
                {/* Display performance metrics */}
                <div className="metric">
                    <h3>Performance Metrics</h3>
                    <ul>
                        {Object.keys(perfs).map((perfKey, index) => (
                            <li key={index}>
                                <span className="perf-name">{perfKey}</span>: {perfs[perfKey].games} games, {perfs[perfKey].rating} rating
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Display play time */}
                <div className="metric">
                    <h3>Play Time</h3>
                    <p>Total: {playTime.total} minutes</p>
                </div>
                {/* Display game count */}
                <div className="metric">
                    <h3>Game Count</h3>
                    <ul>
                        {Object.keys(count).map((countKey, index) => (
                            <li key={index}>
                                {countKey}: {count[countKey]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Display additional information */}
            <div className="additional-info">
                <p><strong>ID:</strong> {id}</p>
                <p><strong>Created At:</strong> {new Date(createdAt).toLocaleString()}</p>
                <p><strong>Last Seen At:</strong> {new Date(seenAt).toLocaleString()}</p>
                <p><strong>Profile URL:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
            </div>
        </div>
    );
};

export default ChessPlayerDashboard;
