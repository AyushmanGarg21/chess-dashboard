import React ,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChessPlayerDashboard from './ChessPlayerDashboard';
import GameVisualizer from './GameVisualizer';
import Home from './Home';

const App = () => {
    const [userId, setUserId] = useState('');
    const [gameId, setGameId] = useState('');
    return (
        <div className='app-container'>
            <h1 className="app-title">Chess Player Dashboard App</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<Home userId = {userId} setUserId = {setUserId} gameId = {gameId}setGameId={setGameId} />} />
                    <Route path="/game/:gameId" element={<GameVisualizer gameId={gameId}/>} />
                    <Route path="/player/:username" element={<ChessPlayerDashboard playerUsername = {userId}/>} />
                </Routes>   
            </Router>
        </div>
    );
};

export default App;
