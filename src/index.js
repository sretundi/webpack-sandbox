
import React from 'react';
import ReactDOM from 'react-dom';

const Lazy = React.lazy(() => import('./lazy'));

export default class Index extends React.Component {

    render() {
        return ( 
            <div>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Lazy />
                </React.Suspense>
                <p>hello world again</p> 
            </div>
        )
    }
}

const root = document.querySelector('main');

ReactDOM.render(<Index />, root);
