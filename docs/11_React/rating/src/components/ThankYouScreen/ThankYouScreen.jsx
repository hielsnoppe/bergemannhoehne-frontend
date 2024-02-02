/* eslint-disable react/prop-types */
import './ThankYouScreen.css';
import submitImage from '../../../projekt-assets/illustration-thank-you.svg';

// handleRating
// onClick, onSubmit, onRating
// onclick, onsubmit, onfocus, onchange, onhover, on...
// ...Callback

const ThankYouScreen = ({ rating }) => {
    return (
        <>
            <thank-you-wrapper>
                <img src={submitImage} alt='Thank You Image' />
                <span>You selected {rating} out of 5</span>
                <h2>Thank You!</h2>
                <p>
                    We appreciate you taking the time to give a rating. If you ever need more
                    support, don’t hesitate to get in touch!
                </p>
            </thank-you-wrapper>
        </>
    );
};

export default ThankYouScreen;
