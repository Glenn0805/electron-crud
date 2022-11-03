import React from 'react'
import { Collapse, Space } from 'antd'
import TimeRecordComponent from './TimeRecordComponent';
const TimeLogsComponent = () => {

    const { Panel } = Collapse;
    let text = 'GLENN'
    return (

        <Collapse defaultActiveKey={['1', '2', '3']}>
            <Panel header="This is panel header 1" key="1" extra={<div>TOTAL</div>}>
                <Space direction="vertical">
                    <TimeRecordComponent selectedTask='Intramart' time='01:30:12' />
                    <TimeRecordComponent selectedTask='MPMS' time='01:30:12' />
                    <TimeRecordComponent selectedTask='ANSHIN' time='01:30:12' />
                    <TimeRecordComponent selectedTask='OTHERS' time='01:30:12' />
                </Space>
            </Panel>
            <Panel header="This is panel header 2" key="2">
                <Space direction="vertical">
                    <TimeRecordComponent selectedTask='MPMS' time='01:30:12' />
                </Space>
            </Panel>
            <Panel header="This is panel header 3" key="3">
                <Space direction="vertical">
                    <TimeRecordComponent selectedTask='OTHER' time='01:30:12' />
                </Space>
            </Panel>

        </Collapse>

    )
}

export default TimeLogsComponent