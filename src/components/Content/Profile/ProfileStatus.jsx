import React from "react";
import style from "./style.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'No status yet'
    }
    activateEditMode() {
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
    }



    render() {

        return <div>
            {!this.state.editMode &&
            <div>
                <p onDoubleClick={this.activateEditMode.bind(this)}
                   className={style.profile_info_text}>{!this.props.status ? 'No status' : this.props.status}</p>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type='text'
                       className={`${style.profile_info_text} ${style.status_input}`} placeholder='Type new status...'
                       value={this.props.status}/>
            </div>
            }

        </div>
    }
}


export default ProfileStatus;