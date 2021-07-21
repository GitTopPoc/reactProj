import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setusersAC, unfollowAC} from "../../../redux/users-reducer";

let mapDispatchToProps = (dispatch) => {
    return {

        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setusersAC(users));
        }

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);