import {getDialog} from "../../../../redux/messages-reducer";
import {connect} from "react-redux";
import {getStateDialogsData} from "../../../../redux/messages-selector";
import Dialogs from "./Dialogs";


let DialogsContainer = (props) => {
    return(
        <Dialogs dialogsData={props.dialogsData} getDialog={props.getDialog}/>
    )
}

let mapStateToProps = (state) => ({
    dialogsData : getStateDialogsData(state)
});


export default connect (mapStateToProps, {getDialog}) (DialogsContainer);
