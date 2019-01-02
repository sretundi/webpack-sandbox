
import React from 'react';
import ReactDOM from 'react-dom';

export default class Index extends React.Component {
    render() {
        return ( <p>hello world again</p> )
    }
}

const root = document.querySelector('main');

ReactDOM.render(<Index />, root);
