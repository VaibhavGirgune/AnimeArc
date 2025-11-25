import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import AppFooter from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />

      <Layout.Content>
        <Outlet />
      </Layout.Content>

      <AppFooter />
    </Layout>
  );
}
