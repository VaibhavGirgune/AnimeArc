import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

export default function Navbar() {
  const location = useLocation();

  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <div
        style={{
          float: "left",
          color: "white",
          fontSize: 22,
          marginRight: 40,
          fontWeight: "bold",
        }}
      >
        MyApp
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={[
          { label: <Link to="/">Home</Link>, key: "/" },
          { label: <Link to="/about">About</Link>, key: "/about" },
          { label: <Link to="/contact">Contact</Link>, key: "/contact" },
        ]}
      />
    </Header>
  );
}
