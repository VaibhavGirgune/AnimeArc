import { Layout } from "antd";

const { Footer } = Layout;

export default function AppFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      © {new Date().getFullYear()} MyApp. All Rights Reserved.
    </Footer>
  );
}
