import React, { useState, useEffect } from 'react';

const ChessPlayerDashboard = ({ username }) => {
    // State variables to hold player details, game metrics, and online status
    const [playerDetails, setPlayerDetails] = useState(null);
    const [gameMetrics, setGameMetrics] = useState(null);
    const [isOnline, setIsOnline] = useState(false);

    // Function to fetch player details, game metrics, and online status
    const fetchPlayerData = async () => {
        try {
            // Fetch player details
            const userDetailsResponse = await fetch(`https://lichess.org/api/user/${username}`);
            const userDetails = await userDetailsResponse.json();
            setPlayerDetails(userDetails);

            // Fetch game metrics
            const gameMetricsResponse = await fetch(`https://lichess.org/api/user/${username}/games`);
            const games = await gameMetricsResponse.json();
            const blitzGames = games.filter(game => game.perf === 'blitz');
            const bulletGames = games.filter(game => game.perf === 'bullet');
            const correspondenceGames = games.filter(game => game.perf === 'correspondence');
            setGameMetrics({ blitz: blitzGames.length, bullet: bulletGames.length, correspondence: correspondenceGames.length });

            // Check online status
            setIsOnline(userDetails.online);
        } catch (error) {
            console.error('Error fetching player data:', error);
        }
    };

    // Fetch player data on component mount
    useEffect(() => {
        fetchPlayerData();
    }, [username]);

    return (
        <div>
            {/* Display player details */}
            {playerDetails && (
                <div>
                    <h2>{playerDetails.username}</h2>
                    <p>Rating: {playerDetails.perfs.blitz.rating}</p>
                    <p>Country: {playerDetails.profile.country}</p>
                </div>
            )}

            {/* Display game metrics */}
            {gameMetrics && (
                <div>
                    <h3>Game Metrics</h3>
                    <p>Blitz Games: {gameMetrics.blitz}</p>
                    <p>Bullet Games: {gameMetrics.bullet}</p>
                    <p>Correspondence Games: {gameMetrics.correspondence}</p>
                </div>
            )}

            {/* Display online status */}
            <div>
                <h3>Online Status</h3>
                <p>{isOnline ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    );
};

export default ChessPlayerDashboard;
