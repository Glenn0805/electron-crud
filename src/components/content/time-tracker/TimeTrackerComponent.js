import React from 'react'
import { Card, Divider, Form } from 'antd';
import SelectTaskComponent from './time-tracker-component/SelectTaskComponent';
import ProfileComponent from './profile-component/ProfileComponent';
import TImerComponent from './time-tracker-component/TImerComponent';
import TimeLogsComponent from './time-logs-component/TimeLogsComponent';

const TimeTrackerComponent = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Card style={{ width: 350, display: 'flex', justifyContent: 'center' }}>
                    <ProfileComponent />
                </Card>
                <Card style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <TImerComponent />
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




    )
}

export default TimeTrackerComponent