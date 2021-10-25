import React from "react";
import {connect} from "react-redux";
import Register from "./Register"

class RegisterContainer extends React.Component {
    render() {
        return <>
            <Register {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => ({
    state: state
})

export default connect(mapStateToProps)(RegisterContainer);