import { useEffect, useState } from "react";
import { Card, Typography, Row, Col, Space } from "antd";
import { StarFilled } from "@ant-design/icons";
import { getTopRatedAnime } from "../../api/hpmepag-api";

const { Title, Text } = Typography;

const CardComponent = ({ shouldLoad }) => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    if (shouldLoad) {
      getTopRatedAnime().then((data) => setAnimeList(data));
    }
  }, [shouldLoad]);

  return (
    <div style={{ padding: "48px 32px", background: "#f5f5f5" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 48 }}>
        Top Rated Anime
      </Title>

      <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 1400, margin: "0 auto" }}>
        {animeList.map((anime) => (
          <Col xs={12} sm={8} md={6} lg={4} key={anime.mal_id}>
            <Card
              hoverable
              cover={
                <img
                  src={anime.images?.jpg?.large_image_url}
                  alt={anime.title}
                  style={{ height: 300, objectFit: "cover" }}
                />
              }
              styles={{ body: { padding: 12, height: 80, display: "flex", flexDirection: "column", justifyContent: "space-between" } }}
              style={{ height: "100%" }}
            >
              <Title
                level={5}
                ellipsis={{ rows: 2 }}
                style={{ marginBottom: 4, fontSize: 14, minHeight: 42 }}
              >
                {anime.title}
              </Title>
              {anime.score && (
                <Space size={4} style={{ fontSize: 16 }}>
                  <StarFilled style={{ color: "#faad14" }} />
                  <Text strong style={{ fontSize: 16 }}>
                    {anime.score}
                  </Text>
                </Space>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardComponent;
