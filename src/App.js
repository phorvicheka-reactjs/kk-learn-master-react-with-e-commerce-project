import React from 'react';
import { Link, Route } from 'react-router-dom';

import './App.css';

//import HomePage from './pages/homepage/homepage.component';

const HomePage = (props) => {
    console.log(props);
    return (
        <div>
            <Link to='/topics'>Topics</Link>
            <button onClick={() => props.history.push('/topics')}>
                Topics
            </button>
            <h1>HOME PAGE</h1>
        </div>
    );
};

const TopicList = (props) => {
    console.log(props);
    return (
        <div>
            <h1>TOPIC LIST PAGE</h1>
            <Link to={`${props.match.url}/15`}>TO TOPIC 15</Link> |
            <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link> |
            <Link to={`${props.match.url}/19`}>TO TOPIC 19</Link>
        </div>
    );
};

const TopicDetail = (props) => {
    console.log(props);
    return (
        <div>
            <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
        </div>
    );
};

function App() {
    return (
        <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/topics' component={TopicList} />
            <Route exact path='/topics/:topicId' component={TopicDetail} />
        </div>
    );
}

export default App;
