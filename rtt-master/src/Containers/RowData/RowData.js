import React, { Component } from 'react';
import './RowData.css';
import DataDisplay from '../../Components/ProfileRow/DataDisplay/DataDisplay';
import DataInput from '../../Components/ProfileRow/DataInput/DataInput';

class RowData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            data: this.props.data
        }

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
        console.log('ISCHECKED EXECUTED', this.state.isChecked);
        return (this.state.isChecked) ? <DataInput data={this.state.data} callback={this.callback} /> : <DataDisplay data={this.state.data} />;
    }

    toggleChecked() {
        console.log('clicked!')
        console.log('BEFORE', this.state.isChecked);
        this.setState(() => {
            return { isChecked: !this.state.isChecked }
        })
        console.log(this.state);
        console.log('AFTER', this.state.isChecked);

    }

    callback(data) {
        this.setState({ data });
    }
}

export default RowData;
