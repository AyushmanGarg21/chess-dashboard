import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({userId, setUserId , gameId, setGameId}) => {


    const handleUserInputChange = (event) => {
        setUserId(event.target.value);
    };

    const handleGameInputChange = (event) => {
        setGameId(event.target.value);
    };

    return (
        <div className="home-container">
            <h2>Welcome to Chess Player Dashboard!</h2>
            <p>Explore chess player details and game data.</p>
            <div>
                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={userId}
                    onChange={handleUserInputChange}
                />
                <Link to={`/player/${userId}`}>
                    <button>Show Player Details</button>
                </Link>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter Game ID"
                    value={gameId}
                    onChange={handleGameInputChange}
                />
                <Link to={`/game/${gameId}`}>
                    <button>Show Game Visualizer</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
