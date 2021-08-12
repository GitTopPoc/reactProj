import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.css";


const ProfileStatus = (props) => {
    const [editMode,setEditMode] = useState(false)
    const [status,setStatus] = useState(props.status)
    const [symbolsLeft, setSymbolsLeft] = useState(300)
    let statusInputRef = useRef(status);


    useEffect(()=> {
        setStatus(props.status);
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
        statusInputRef.current = status;
    }

    const deactivateEditMode = ()  => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const statusChange = (yo) => {
            setStatus(yo.currentTarget.value)
            setSymbolsLeft(300 - yo.currentTarget.value.length)
    }

    const setSymbols = (yo) => {
        setSymbolsLeft(300 - yo.currentTarget.value.length)
    }


    return <div>
        {!editMode &&
        <div>
            <p onDoubleClick={activateEditMode}
               className={style.profile_info_text}>{!status ? 'No status' : status}</p>
        </div>
        }
        {editMode &&
        <div>
            <input autoFocus={true} type='text' onBlur={deactivateEditMode}
                   className={`${style.profile_info_text} ${style.status_input}`} placeholder='Type new status...'
                   value={status} ref={statusInputRef} onChange={statusChange} onFocus={setSymbols}/>
            <div className={style.status_change_descr}>
                <p className={style.status_change_symbols_left}>Symbols left: {symbolsLeft}</p>

            </div>
        </div>
        }

    </div>
}

export default ProfileStatus;