import React from 'react'
import { Collapse, Card } from 'antd'
import TimeRecordComponent from './TimeRecordComponent';
const TimeLogsComponent = () => {

    const { Panel } = Collapse;
    let text = 'GLENN'
    return (
        <Collapse defaultActiveKey={['1', '2', '3']}>
            <Panel header="This is panel header 1" key="1">
                <TimeRecordComponent selectedTask='Intramart' time='01:30:12' />
                <TimeRecordComponent selectedTask='MPMS' time='01:30:12' />
                <TimeRecordComponent selectedTask='ANSHIN' time='01:30:12' />
                <TimeRecordComponent selectedTask='OTHERS' time='01:30:12' />
            </Panel>
            <Panel header="This is panel header 2" key="2">
                <TimeRecordComponent selectedTask='MPMS' time='01:30:12' />
            </Panel>
            <Panel header="This is panel header 3" key="3">
                <TimeRecordComponent selectedTask='OTHER' time='01:30:12' />
            </Panel>
        </Collapse>
    )
}

export default TimeLogsComponent