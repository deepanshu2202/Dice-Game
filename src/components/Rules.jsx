import './rules.css';

const Rules = () => {

    return (
        <div id='rules-root'>
            <div id='heading-box'>
                <h1>
                    How to play Dice game
                </h1>
            </div>

            <ul id='rules-list'>
                <li>Select any number and click on Dice image.</li>
                <li>After click on dice if selected number is equal to dice number you will get twice points as on the dice.</li>
                <li>If you get wrong guess then 1 point will be dedcuted</li>
            </ul>
        </div>
    )
}

export default Rules;