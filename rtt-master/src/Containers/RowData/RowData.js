import React, { Component } from 'react';
import './RowData.css';
import DataDisplay from '../../Components/ProfileRow/DataDisplay/DataDisplay';
import DataInput from '../../Components/ProfileRow/DataInput/DataInput';
import * as Users from '../../Services/users.service';

class RowData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            data: this.props.data
        }
        this.getUserProperties();
        this.callback = this.callback.bind(this);
    }

    render() {
        return (
            <div className="rowData-container">
                {this.isChecked()}
                <div className="data-toggle-button" onClick={this.toggleChecked.bind(this)}>
                    t
                </div>
            </div>
        );
    }

    isChecked() {
        return (this.state.isChecked) ? <DataInput data={this.state.data} callback={this.callback} /> : <DataDisplay data={this.state.data} />;
    }

    toggleChecked() {
        this.setState(() => {
            return { isChecked: !this.state.isChecked }
        })
    }

    getUserProperties() {
        const data = Users.getInfo();
        console.log(data);

        this.setState(() => { data: data }, () => console.log(this.state.data));
    }

    callback(data) {
        this.setState({ data: data });
    }
}

export default RowData;
