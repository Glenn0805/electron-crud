import { Card } from 'antd';
import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai'
import '../style/card.css'
const Cards = () => {
    const { Meta } = Card
    return (

        <>
            <div className="site-card-border-less-wrapper">
                <Card
                    bordered={false}
                    style={{
                        width: 300,
                    }}
                    className="card"
                    actions={[
                        <AiOutlineUserAdd key="add" onClick={() => { alert('TEST') }} />,

                    ]}
                >
                    <h1>Project Name</h1>
                    <h3>Users</h3>
                    <div className='user-wrapper'>
                        <p>User 1</p>
                        <p>User 2</p>
                        <p>User 3</p>
                        <p> User 4</p>
                        <p> User 5</p>
                        <p> User 6</p>
                        <p> User 7</p>
                        <p> User 8</p>
                        <p> User 9</p>
                    </div>

                </Card>
            </div>
        </>
    );
}

export default Cards;