import './super.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const Super = (props) => {
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 6) + 1);
    const [btnClickedValue, setBtnClickedValue] = useState(null);
    const [btnVal, setBtnVal] = useState('Show Rules');
    const [isClicked, setIsClicked] = useState(false);
    const [onRules, setOnRules] = useState(true);
    const [prevBtn, setPrevBtn] = useState(null);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    const imgRef = useRef(null);

    function handleClick(e) {
        const btn = e.target;
        if (!prevBtn) {
            setPrevBtn(btn);
        } else {
            prevBtn.style.backgroundColor = 'white';
            prevBtn.style.color = 'black';
            setPrevBtn(btn);
        }
        
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
        setBtnClickedValue(btn.value);
        setIsClicked(true);
        console.log('Value of btn clicked : ', btn.value);
    }

    function handleRollClick() {
        if (!isClicked) {
            alert('Select a number first!');
            return;
        }

        setRandomNum(Math.floor(Math.random() * 6) + 1);
        const path = `/images/f${randomNum}.png`;
        imgRef.current.src = path;
        console.log('value of dice :', randomNum);
        
        if (Number(randomNum) == Number(btnClickedValue)) {
            setScore(score + (2 * Number(btnClickedValue)));
        } else {
            setScore(score == 0 ? 0 : score - 1);
        }
    }

    function handleClickRules() {
        if (onRules) {
            navigate('/play/rules');
            setOnRules(!onRules);
            setBtnVal('Go Back');
        } else {
            navigate('/play');
            setOnRules(!onRules);
            setBtnVal('Show Rules');
        }
    }

    function handleReset() {
        setBtnClickedValue(null);
        setIsClicked(false);
        setScore(0);
        prevBtn.style.backgroundColor = 'white';
        prevBtn.style.color = 'black';
        setPrevBtn(null);
    }

    return (
        <div id='super-root' style={{height: props.rootHeight}}>
            <div id='head'>
                <div id='total-score'>
                    {score} 

                    
                </div>
                <div id='nums'>
                    
                    <button id='btn1' className='num-btn' onClick={handleClick} value={1}>1</button>
                    <button id='btn2' className='num-btn' onClick={handleClick} value={2}>2</button>
                    <button id='btn3' className='num-btn' onClick={handleClick} value={3}>3</button>
                    <button id='btn4' className='num-btn' onClick={handleClick} value={4}>4</button>
                    <button id='btn5' className='num-btn' onClick={handleClick} value={5}>5</button>
                    <button id='btn6' className='num-btn' onClick={handleClick} value={6}>6</button>
                </div>
            </div>
            <div id='neck'>
                <p>Total Score</p>
                <p>Select a Number</p>
            </div>

            <button id='home-btn' onClick={() => {navigate('/')}}>Home</button>

            <div id='body-box' style={{height: props.bodyHeight}}>
                <button id='dice-btn' onClick={handleRollClick}><img src='/images/f1.png' alt="dice-number" id='dice-box' ref={imgRef}/></button>    
                <p>Click on Dice to roll</p>
                <button id='reset-btn' onClick={handleReset}>Reset Score</button>
                <button id='rules-btn' onClick={handleClickRules}>{btnVal}</button>
            </div>
        </div>
    )
}

Super.propTypes = {
    rootHeight: PropTypes.string,
    bodyHeight: PropTypes.string,
};

export default Super;