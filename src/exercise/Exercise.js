// BONUS

// 5a
import { useState } from 'react';

// 1a
const Exercise = ( {good = 'Awesome', bad = 'Terrible'} ) => {
// 1c
    return (
        // 2a
        <div>
            <h1>{good}</h1>
            <h1>{bad}</h1>
            {/* 4a & 4b */}
            <button onClick = {() => alert('Congrats! You have clicked the button.')}>CLICK HERE</button>
            {/* 5b */}
            <button>STATE</button>
        </div>
    );
}

// 1b
export default Exercise;
