import { Card } from "antd";
const { Meta } = Card;
const CardComponent = () => (
  <Card
    hoverable
    style={{ width: 240, margin: "20px" }}
    cover={
      <img
        draggable={false}
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default CardComponent;
