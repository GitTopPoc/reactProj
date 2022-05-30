import React, {useEffect, useRef} from "react";
import style from "./style.module.css";
import ms from "../../../../mainStyles/ms.module.css";
import {useForm} from "react-hook-form";


const Messages = (props) => {
    let scrollBotRef = useRef();
    let scrollTopRef = useRef();
    const observer = useRef();
    useEffect(() => {
        if (props.currentPage === 1 && props.messageData.length > 15) {
            scrollBotRef.current?.scrollIntoView();

        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [props.messageData])

    useEffect(() => {
        if(observer.current) {
            observer.current.disconnect();
        }
        let callback = (entries, /*observer*/) =>{
                if(entries[0].isIntersecting) {
                    if(props.currentPage < props.maxPages && props.messageLoading === false) {
                        props.setCurrentPage(props.currentPage + 1)
                        scrollBotRef.current?.scrollIntoView(10);
                        }
                }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(scrollTopRef.current)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [props.messageLoading])

    useEffect(() => {
           if(props.currentPage !== 1) {
               props.getMessages(props.dialogId, (props.currentPage))
           }
        /* eslint-disable react-hooks/exhaustive-deps */
    },[props.currentPage])

    // MESSAGE
    const Message = (props) => {
        return (
            <div className={`${style.message}`}>
                <div
                    className={`${style.message} ${props.id === props.authUser ? style.auth_user_message : style.dialog_user_message}`}>
                    <p className={ms.regular_text}>{props.message}</p>
                </div>
            </div>
        )
    }

    // MAP MESSAGES

    let messages = props.messageData.map(m => <Message key={m._id} authUser={props.authUser} id={m.authorId}
                                                       message={m.text}/>)
    return (<div className={`${style.messages}`}>
            <div ref={scrollTopRef}/>
            {messages}
            <div ref={scrollBotRef}/>
        </div>
    )
}


export const SendMessageForm = (props) => {
    const {register, handleSubmit} = useForm();
    const formRef = useRef();

    let formSubmit = (data, currentDialog, sendMessage) => {
        sendMessage(currentDialog, data.newMessageText);
        formRef.current.reset();
    }

    let handleKeyPress = (e, currentDialog) => {
        if (e.key === "Enter") {
            e.preventDefault()
            if (e.currentTarget.value) {
                props.sendMessage(currentDialog, e.currentTarget.value)
                e.currentTarget.value = null;
            }

        }
    }

    return <>
        <form ref={formRef} className={`${style.message_form} ${props.currentDialog === undefined && style.invisible}`}
              onSubmit={handleSubmit((data) => {
                  formSubmit(data, props.currentDialog, props.sendMessage);
              })}>
            <textarea onKeyPress={(e) => {
                handleKeyPress(e, props.currentDialog, props.sendMessage)
            }} {...register("newMessageText")} className={style.input_field_text}
                      name={'newMessageText'} placeholder={'Enter new message'}/>
            <button type={"submit"} className={style.button}>Send</button>
        </form>
    </>
}


const MessageField = (props) => {
    return (
        <div className={`${ms.block_container} ${style.messages_container_wrapper}`}>
            <div className={style.dialog_header}>
                <p>Dialog header</p>
            </div>
            {props.messageData && <Messages setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} messageLoading={props.messageLoading} maxPages={props.maxPages} dialogId={props.currentDialog.params.dialogId} getMessages={props.getMessages} authUser={props.authUser} messageData={props.messageData}/>}
            <div className={style.input_field}>
                <SendMessageForm currentDialog={props.currentDialog.params.dialogId} sendMessage={props.sendMessage}/>
            </div>
        </div>
    )


}
export default MessageField;
