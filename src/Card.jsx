import { useState } from "react";

function Card() {
    const [count, setCount] = useState(0);

    const decrementCount = () => {
        if (count <= 0) {
            alert('SCORE CANNOT BE A NEGATIVE VALUE');
        } else {
            setCount(count - 1);
        }
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    // initialize the count value in double digits
    const formatCount = (count) => {
        return count.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
    };

    return (
        <>
            <div className="team-score-container">
                <div className="team-score">
                    <h1 className="score">{formatCount(count)}</h1>
                </div>
                <div className="math">
                    <button onClick={decrementCount} className="btn">-</button>
                    <button onClick={incrementCount} className="btn">+</button>
                </div>
            </div>
        </>
    );
}

export default Card;
