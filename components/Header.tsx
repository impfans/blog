import React, { useEffect, useState } from "react";
React.useLayoutEffect = React.useEffect 
import Router from "next/router";
import { Row, Col, Menu, Drawer } from "antd";
import { HeaderBox } from "@styles/stylesJs/header";
import {
    HomeOutlined,
    CalendarOutlined,
    TagOutlined,
    PictureOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { throttle } from "utils";
const Header = () => {
    const [drawerDisplay, setDrawerDisplay] = useState(false);
    const [isUp, setIsUp] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.onscroll = throttle(() => {
            const y = document.documentElement.scrollTop;
            setIsUp(y > 200 && y > scrollY);
            setScrollY(y);
        }, 300);
    },[]);
    const clickNav = (e: any) => {
        if (e.key === "NOTE") {
            return;
        }
        setDrawerDisplay(false);
        Router.push(e.key);
    };
    const drawerControl = () => {
        setDrawerDisplay(!drawerDisplay);
    };

    const generateMenu = () => (
        <Menu
            onClick={clickNav}
            mode={drawerDisplay ? "vertical" : "horizontal"}
        >
            <Menu.Item key="/" icon={<HomeOutlined />}>
                主页
            </Menu.Item>
            <Menu.Item key="/timeLine" icon={<CalendarOutlined />}>
                时间轴
            </Menu.Item>
            <Menu.Item key="/gallery" icon={<PictureOutlined />}>
                相册
            </Menu.Item>
            {/* <SubMenu icon={<ToolOutlined />} title="工具">
            </SubMenu> */}
            <Menu.Item key="/about" icon={<TagOutlined />}>
                关于
            </Menu.Item>
        </Menu>
    );
    return (
        <HeaderBox isUp={isUp}>
            <div id="ribbon" />
            <Row justify="space-around">
                <Col xs={0} sm={18} className="nav">
                    {generateMenu()}
                </Col>
                <Col xs={24} sm={0} className="nav-icon">
                    <MenuFoldOutlined onClick={drawerControl} />
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={drawerControl}
                        visible={drawerDisplay}
                    >
                        {generateMenu()}
                    </Drawer>
                </Col>
            </Row>
        </HeaderBox>
    );
};

export default Header;
