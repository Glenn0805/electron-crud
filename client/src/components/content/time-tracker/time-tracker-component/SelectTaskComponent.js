import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
const { Option } = Select;
let index = 0;
const SelectTaskComponent = ({ defaultValue = "", width = 300, task }) => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [selectedValue, setSelectedValue] = useState(task)
    const inputRef = useRef(null);
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const addItem = async (e) => {
        e.preventDefault();
        console.log('wew')
        await axios.post('http://127.0.0.1:3333/home/add-task', { taskName: name }).then((response) => {
            let { data } = response
            if (data.error) return console.log('TEST')
        })

        setName('');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };
    const SelectedTaskOnchange = (e) => {
        setSelectedValue(e)
    }

    const getAllTask = async () => {
        try {
            let { data } = await axios.get('http://127.0.0.1:3333/home/get-task')
            setItems(data.taskOption)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getAllTask() }, [])


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
                <Option key={item.value}>{item.label}</Option>
            ))}
        </Select>
    );
};
export default SelectTaskComponent;