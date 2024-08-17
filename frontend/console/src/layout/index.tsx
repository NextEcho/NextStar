import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import NavBar from "./NavBar";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Layout className="min-h-screen h-full bg-[#222943]">
            <Sider
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                className="bg-[#272E48]"
            >
                <SideMenu />
            </Sider>
            <Layout>
                <Header className="h-40 text-slate-50 bg-[#1F243A] p-0">
                    <NavBar />
                </Header>
                <Content className="bg-[#222943] p-4 text-slate-200">
                    <Outlet></Outlet>
                </Content>
                <Footer className="text-center p-0 leading-[48px] bg-[#222943] text-slate-200 font-sans">
                    ©{new Date().getFullYear()} Designed by NextEcho
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
