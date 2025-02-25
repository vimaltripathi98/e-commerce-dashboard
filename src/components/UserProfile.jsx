import { Dropdown, Menu, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">View Profile</Menu.Item>
    <Menu.Item key="2">Change Password</Menu.Item>
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

const UserProfileDropdown = () => (
  <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
    <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
  </Dropdown>
);

export default UserProfileDropdown;
