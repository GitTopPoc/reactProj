import React from "react";
import style from "./style.module.css";

let statusInputRef = React.createRef();
class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        symbolsLeft: 300
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = ()  => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status)
    }

    statusChange = (yo) => {
    this.setState({
        status: yo.currentTarget.value,
        symbolsLeft: 300 - yo.currentTarget.value.length
    })

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return <div>
            {!this.state.editMode &&
            <div>
                <p onDoubleClick={this.activateEditMode}
                   className={style.profile_info_text}>{!this.props.status ? 'No status' : this.props.status}</p>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} type='text' onBlur={this.deactivateEditMode}
                       className={`${style.profile_info_text} ${style.status_input}`} placeholder='Type new status...'
                       value={ this.state.status} ref={statusInputRef} onChange={this.statusChange}/>
                <div className={style.status_change_descr}>
                    <p className={style.status_change_symbols_left}>Symbols left: {this.state.symbolsLeft}</p>

                </div>
            </div>
            }

        </div>
    }
}


export default ProfileStatus;