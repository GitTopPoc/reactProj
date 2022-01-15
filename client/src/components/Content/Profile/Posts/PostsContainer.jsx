import {createPost, getProfilePosts} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    profilePage : state.profilePage,
    profile : state.profilePage.profile,
    auth : state.auth

});

const PostsContainer = connect(mapStateToProps, {getProfilePosts, createPost})(Posts)
export default PostsContainer;