import React from 'react'
import c from './Message.module.css'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div className={c.container}>
            <div className={c.forImage}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={c.angle}/>
            <div className={c.blackbox}>
                <div>
                    <div><span className={c.name}>{props.name}</span></div>
                    <div><span className={c.message}>{props.message}</span></div>
                </div>
                <div className={c.time}>
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
