import './home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/play');
    }

    return (
        <div id='home-root'>
            <div id='img-div'><img id='home-img' src="/images/dice.png" alt="dice" /></div>

            <ul id='home-list'>
                <li><h1 id='home-heading'>DICE GAME</h1></li>
                <li><button id='play-btn' onClick={handleClick}>Play Now</button></li>
            </ul>
        </div>
    )
}

export default Home;