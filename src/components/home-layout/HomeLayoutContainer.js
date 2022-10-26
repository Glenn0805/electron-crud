import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import menu from './menu';
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import contentRoute from './content-routes';



const { Header, Content, Footer } = Layout;

const HomeLayoutContainer = () => {
    let href = document.location.pathname.slice(1)
    const [selectedKey, setSelectedKey] = useState(href)



    return (
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
                    defaultSelectedKeys={[selectedKey]}
                    selectedKeys={[selectedKey]}
                    onClick={(e) => { setSelectedKey(e.key) }}
                    items={menu}
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
                    <Routes>
                        {contentRoute.map((content) =>
                            content.element ? (<Route
                                path={content.path}
                                element={content.element}
                                key={content.id}
                                index={content.index} />
                            ) : null
                        )}


                    </Routes>
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
    )
};
export default HomeLayoutContainer;