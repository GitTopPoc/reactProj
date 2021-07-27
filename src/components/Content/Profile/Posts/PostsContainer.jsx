import {addPostAction} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            let action = addPostAction(text);
            dispatch(action);
        }
    }
}

let mapStateToProps = (state) => ({
    profilePage : state.profilePage,
    profile : state.profilePage.profile

});
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;