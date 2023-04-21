import React, { useState, useEffect } from 'react';

function Game() {
	const [score, setScore] = useState(0);
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});
	const [objectVisible, setObjectVisible] = useState(false);

	const handleGameClick = () => {
		if (objectVisible) {
			setScore(score + 1);
			setObjectVisible(false);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition({
				x: Math.floor(Math.random() * window.innerWidth),
				y: Math.floor(Math.random() * window.innerHeight)
			});
			setObjectVisible(true);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return <div onClick={handleGameClick}>
		      
		<h1>
			Test your Mouse Accuracy by Clicking the Circle! What's your High Score?
		</h1>
		      
		<p>
			Score: 
			{score}
		</p>
		      
		{objectVisible && <div style={{
			position: 'absolute',
			left: position.x,
			top: position.y,
			width: '50px',
			height: '50px',
			backgroundColor: 'green',
			borderRadius: '50%'
		}}></div>}
		    
	</div>;
}

export default Game;