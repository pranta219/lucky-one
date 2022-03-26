import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text'>
            <h2>
                How React Works?
            </h2>
            <h4>
                React A seam to seam creates another dom similar to this browser dom called virtual dom. Now this dome looks exactly like the real dome, but this virtual dome is actually a JavaScript object. React builds it in such a way that any element can be modified easily and efficiently using JavaScript with this DOM. Now here too React does another job. Reacts create not one but two virtual domes. But why two? Yes, this is the trick. When the user takes an action in the React app or does something we call a change in the Dome, React puts those changes in one of the two virtual Domes, and the other is in the previous version.
            </h4>
            <h2>
                Props vs State Different?
            </h2>
            <h4>
                Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.
            </h4>
        </div>
    );
};

export default Footer;