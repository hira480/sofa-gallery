import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='container'>
            <h2>How React Work?</h2>
            <p>React is a JavaScript Library that was created to develop user interface. ReactJs divide the whole project into some small parts which called components. Component is helpful for organize and debug the code and also increase the performance of a website. React is a one way data binding (unidirectional).</p>
            <h2>What is the difference between Props and State?</h2>
            <p>The difference between props and state is the value of props is read only. We can’t set props value and can’t modify. On the other hand State is a hook. State can be change asynchronously and also State can be modify.</p>
        </div>
    );
};

export default Question;