import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import menu from './menu';
const { Header, Content, Footer } = Layout;
const HomeLayoutContainer = () => (
    <Layout>
        <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
            }}
        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={menu}
                onClick={(e) => { console.log(e) }}
            />
        </Header>
        <Content
            className="site-layout"
            style={{
                padding: '0 50px',
                marginTop: 64,
                display: 'flex',
            }}
        >
            {/* <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
                className="site-layout-background"
                style={{
                    padding: 24,
                    minHeight: 380,
                }}
            >
                Content
            </div>
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2018 Created by Ant UED
        </Footer>
    </Layout>
);
export default HomeLayoutContainer;