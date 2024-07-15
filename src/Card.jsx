import { useState } from "react";
import PropTypes from 'prop-types'

function Card(props) {
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
            <div className="team">
                <h1 className="team-name">{props.name}</h1>

                <div className="team-score-container">
                    <div className="team-score">
                        <h1 className="score">{formatCount(count)}</h1>
                    </div>
                    <div className="math">
                        <button onClick={decrementCount} className="btn">-</button>
                        <button onClick={incrementCount} className="btn">+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

// props
Card.propTypes = {
    name: PropTypes.string,
}

export default Card;