import React, { useState } from 'react';

function Calculator() {
	const [result, setResult] = useState(0);
	const [value, setValue] = useState('');

	const handleClick = e => {
		setValue(value + e.target.value);
	};

	const handleClear = () => {
		setResult(0);
		setValue('');
	};

	const handleCalculate = () => {
		setResult(eval(value));
		setValue('');
	};

	return <div>
		      
		<h1>
			Four-Function Calculator
		</h1>
		      
		<input type="text" value={value} onChange={e => setValue(e.target.value)} />
		      
		<br />
		      
		<button value="1" onClick={handleClick}>
			1
		</button>
		      
		<button value="2" onClick={handleClick}>
			2
		</button>
		      
		<button value="3" onClick={handleClick}>
			3
		</button>
		      
		<button value="+" onClick={handleClick}>
			+
		</button>
		      
		<br />
		      
		<button value="4" onClick={handleClick}>
			4
		</button>
		      
		<button value="5" onClick={handleClick}>
			5
		</button>
		      
		<button value="6" onClick={handleClick}>
			6
		</button>
		      
		<button value="-" onClick={handleClick}>
			-
		</button>
		      
		<br />
		      
		<button value="7" onClick={handleClick}>
			7
		</button>
		      
		<button value="8" onClick={handleClick}>
			8
		</button>
		      
		<button value="9" onClick={handleClick}>
			9
		</button>
		      
		<button value="*" onClick={handleClick}>
			*
		</button>
		      
		<br />
		      
		<button value="0" onClick={handleClick}>
			0
		</button>
		      
		<button value="/" onClick={handleClick}>
			/
		</button>
		      
		<button onClick={handleClear}>
			C
		</button>
		      
		<button onClick={handleCalculate}>
			=
		</button>
		      
		<br />
		      
		<p>
			Result: 
			{result}
		</p>
		    
	</div>;
}

export default Calculator;