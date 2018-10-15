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
            data: props.data
        }
        this.callback = this.callback.bind(this);
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="rowData-container">
                {this.isChecked()}
                <div className="far fa-edit data-toggle-button" onClick={this.toggleChecked.bind(this)}>
                </div>
            </div>
        );
    }

    isChecked() {
        return (this.state.isChecked) ? <DataInput data={this.props.data} callback={this.callback} /> : <DataDisplay data={this.props.data} />;
    }

    toggleChecked() {
        this.setState(() => {
            return { isChecked: !this.state.isChecked }
        })
    }

    callback(data) {
        this.setState({ data: data });
    }
}

export default RowData;
