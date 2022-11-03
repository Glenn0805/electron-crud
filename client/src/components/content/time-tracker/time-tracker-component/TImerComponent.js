import React, { useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import { Button, Typography, Form } from 'antd'


const TImerComponent = (props) => {
    const [buttonLabel, setButtonLabel] = useState('Start')
    const [buttonColor, setButtonColor] = useState('primary')
    const time = new Date()
    const { Title } = Typography;

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    const startAndStopTimer = () => {
        props.test()
        if (isRunning) {
            setButtonLabel('Start')
            setButtonColor('primary')
            return reset(time, false)
        }
        setButtonColor('danger')
        setButtonLabel('Stop')
        return start()
    }

    let hrs = hours.toString().length === 1 ? `0${hours}` : hours
    let mins = minutes.toString().length === 1 ? `0${minutes}` : minutes
    let secs = seconds.toString().length === 1 ? `0${seconds}` : seconds
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Title >{`${hrs}:${mins}:${secs}`}</Title >
                <Button size='large' type={buttonColor} onClick={startAndStopTimer}> {buttonLabel}</Button>
            </div>

        </>

    )
}

export default TImerComponent