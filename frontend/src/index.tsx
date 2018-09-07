import * as React    from 'react';
import * as ReactDOM from 'react-dom';
import * as rp       from './de/mayflower/react-primer';

const APP_TITLE:string = 'React Task List';

console.log( 'src/index.ts being invoked' );

/**
*   Being invoked when the page is loaded completely.
*/
window.onload = () : void  => {

    // create a main container and append to it to the body
    const mainContainer:HTMLDivElement = document.createElement( 'div' );
    mainContainer.id = 'mainContainer';
    document.body.appendChild( mainContainer );

    // render the App component into the main container
    ReactDOM.render(
        <rp.App
            title={ APP_TITLE }
        />,
        mainContainer
    );
};
