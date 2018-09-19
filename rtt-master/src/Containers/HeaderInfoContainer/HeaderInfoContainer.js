import React, { Component } from "react";
import "./HeaderInfoContainer.css";
import HeaderInfo from "../../Components/ProfileHeader/HeaderInfo/HeaderInfo";

class HeaderInfoContainer extends Component {
  render() {
    return (
      <div>
        <HeaderInfo label={this.props.label} data={this.fetchData()} />
      </div>
    );
  }

  fetchData() {
    //WILL CONNECT TO DB
    return this.props.endpoint;
  }
}

export default HeaderInfoContainer;
