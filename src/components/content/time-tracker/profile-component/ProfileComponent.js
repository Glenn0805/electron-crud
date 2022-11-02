import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';

const ProfileComponent = () => {

    return (
        <>
            <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center'
            }}>
                < Avatar size={64} icon={< UserOutlined />} />
                <h2>GLENN CAVITA</h2>
                <h4>WAD</h4>
            </div>

        </>
    )
}

export default ProfileComponent