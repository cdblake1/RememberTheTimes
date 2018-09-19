import React, { Component } from 'react';
import './PitchSection.css';
import PitchBlock from './PitchBlock/PitchBlock';

class PitchSection extends Component {
    render() {
        return (
            <div className="container not-selectable">
                <div className="row">
                    <PitchBlock title="Pitch One" explanation="This is our first pitch. This text is used to ascertain proper spacing and placement" />
                    <PitchBlock title="Pitch Two" explanation="This is our Second pitch. This text is used to ascertain proper spacing and placement" />
                    <PitchBlock title="Pitch two" explanation="This is our third pitch. This text is used to ascertain proper spacing and placement" />
                </div>
            </div>
        );
    }
}

export default PitchSection;
