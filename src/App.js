import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChessPlayerDashboard from './ChessPlayerDashboard';
import GameVisualizer from './GameVisualizer';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Chess Player Dashboard App</h1>
                <Switch>
                    {/* Route to display player dashboard */}
                    <Route exact path="/player/:username">
                        <ChessPlayerDashboard />
                    </Route>
                    {/* Route to display game visualizer */}
                    <Route exact path="/game/:gameId">
                        <GameVisualizer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
