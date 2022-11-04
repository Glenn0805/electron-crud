import React, { useEffect } from 'react'
import { Card, Divider, Form, Alert } from 'antd';
import SelectTaskComponent from './time-tracker-component/SelectTaskComponent';
import ProfileComponent from './profile-component/ProfileComponent';
import TImerComponent from './time-tracker-component/TImerComponent';
import TimeLogsComponent from './time-logs-component/TimeLogsComponent';
import axios from 'axios'
import useTimeTrackerState from './hooks/useTimeTrackerState';

const TimeTrackerComponent = () => {
    const test = useTimeTrackerState('test')

    console.log(test)
    const testFunction = () => {
        axios.get('http://127.0.0.1:3333/home').then((response) => {
            console.log(response.data)
        })
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:3333/home').then((response) => {
            console.log(response.data)
        })

    }, [])


    return (
        <>

            <Alert style={{ position: 'fixed', bottom: 10, left: '20px', zIndex: 999, height: '50px' }} message="qweqweqweqwewqeqweqweqweweq" type="warning" showIcon closable />


            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Card style={{ width: 350, display: 'flex', justifyContent: 'center' }}>
                        <ProfileComponent />
                    </Card>
                    <Card style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <TImerComponent test={testFunction} />
                        <Divider />
                        <Form
                            layout="vertical">
                            <Form.Item
                                label='Task'>
                                <SelectTaskComponent />
                            </Form.Item>
                        </Form>
                    </Card>

                </div>
                <div>
                    <TimeLogsComponent />
                </div>
            </div>

        </>


    )
}

export default TimeTrackerComponent