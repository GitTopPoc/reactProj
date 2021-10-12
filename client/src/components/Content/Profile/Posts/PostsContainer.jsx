import {addPost} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";



let mapStateToProps = (state) => ({
    profilePage : state.profilePage,
    profile : state.profilePage.profile

});
const PostsContainer = connect(mapStateToProps, {addPost})(Posts)
export default PostsContainer;