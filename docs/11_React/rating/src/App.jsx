import { useState } from 'react';
import './App.css';

import RatingScreen from './components/RatingScreen/RatingScreen';
import ThankYouScreen from './components/ThankYouScreen/ThankYouScreen';

const App = () => {
    
    const [submitted, setSubmitted] = useState(false);
    const [rating, setRating] = useState(null);

    const handleRating = (rating) => {
        setRating(rating);
    };

    // let content;
    // if (!submitted) {
    //     content = <RatingScreen onSubmit={() => setSubmitted(true)} onRating={handleRating} />
    // }
    // else {
    //     content = <ThankYouScreen rating={rating} />
    // }

    // const content2 = (!submitted) ?
    //     <RatingScreen onSubmit={() => setSubmitted(true)} onRating={handleRating} />
    //     : <ThankYouScreen rating={rating} />;

    return (
        <>
            {/* {content}
            {content2} */}
            {!submitted ? (
                <RatingScreen onSubmit={() => setSubmitted(true)} onRating={handleRating} />
            ) : (
                <ThankYouScreen rating={rating} />
            )}
            {/* {!submitted && <RatingScreen onSubmit={() => setSubmitted(true)} onRating={handleRating} />}
            {submitted && <ThankYouScreen rating={rating} />} */}
        </>
    );
};

export default App;
