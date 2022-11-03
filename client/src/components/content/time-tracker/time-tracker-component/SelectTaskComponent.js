import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import React, { useState, useRef } from 'react';
const { Option } = Select;
let index = 0;
const SelectTaskComponent = ({ defaultValue = "", width = 300, task }) => {
    const [items, setItems] = useState(['Intramart', 'Anshin', 'Break', 'Training', 'Others']);
    const [name, setName] = useState('');
    const [selectedValue, setSelectedValue] = useState(task)
    const inputRef = useRef(null);
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, name || `New item ${index++}`]);
        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };
    const SelectedTaskOnchange = (e) => {
        setSelectedValue(e)
    }
    return (
        <Select
            style={{
                width: width,
                height: '36px'
            }}
            onChange={SelectedTaskOnchange}
            size="large"
            placeholder="Select Task"
            defaultValue={defaultValue}
            value={selectedValue}
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider
                        style={{
                            margin: '8px 0',
                        }}
                    />
                    <Space
                        style={{
                            padding: '0 8px 4px',
                        }}
                    >
                        <Input
                            placeholder="Enter task"
                            ref={inputRef}
                            value={name}
                            onChange={onNameChange}
                        />
                        <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                            Add Task
                        </Button>
                    </Space>
                </>
            )}
        >
            {items.map((item) => (
                <Option key={item}>{item}</Option>
            ))}
        </Select>
    );
};
export default SelectTaskComponent;