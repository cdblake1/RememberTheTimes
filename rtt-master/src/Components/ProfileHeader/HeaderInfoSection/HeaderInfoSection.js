import React, {
    Component
} from 'react';
import './HeaderInfoSection.css';
import HeaderInfoContainer from '../../../Containers/HeaderInfoContainer/HeaderInfoContainer';

class HeaderInfoSection extends Component {
    render() {
        return ( <
            div >
            <
            HeaderInfoContainer label = ""
            endpoint = "Caleb Blake" / >
            <
            HeaderInfoContainer label = "sex"
            endpoint = "Male" / >
            <
            HeaderInfoContainer label = "age"
            endpoint = "24" / >
            <
            /div>
        );
    }
}

export default HeaderInfoSection;