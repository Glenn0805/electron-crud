import React from 'react'
import { Card, TimePicker, Typography, Input, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import SelectTaskComponent from '../time-tracker-component/SelectTaskComponent'
const TimeRecordComponent = ({ time = '00:00:00', selectedTask = '' }) => {
    const { RangePicker } = TimePicker
    const { Title } = Typography
    return (
        <Card>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
                <SelectTaskComponent task={selectedTask} width={800} />
                <RangePicker />
                <div style={{ width: 100 }}>
                    < Input size='large' disabled value={time} />
                </div>

                <Button type="primary" size='large' icon={<EditOutlined />} />
            </div>
        </Card>
    )
}

export default TimeRecordComponent