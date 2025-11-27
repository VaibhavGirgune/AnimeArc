import { useEffect, useState } from "react";
import { Carousel, Tag, Space, Typography } from "antd";
import { StarFilled, CalendarOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { getTopAnime } from "../../api/hpmepag-api";

const { Title, Paragraph } = Typography;

export default function CarouselComponent({ onLoad }) {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    getTopAnime().then((data) => {
      const filtered = data.filter((anime) => anime?.images?.jpg?.large_image_url);
      setAnimeList(filtered.slice(0, 8));
      if (onLoad) onLoad();
    });
  }, [onLoad]);

  if (animeList.length === 0) return null;

  return (
    <Carousel autoplay autoplaySpeed={5000} effect="fade">
      {animeList.map((anime) => (
        <div key={anime.mal_id}>
          <div className="relative w-full h-[500px] bg-black overflow-hidden">
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent">
              <div className="h-full flex items-center px-16 max-w-7xl">
                <div className="max-w-2xl">
                  <Space direction="vertical" size="large">
                    <Space wrap>
                      {anime.score && (
                        <Tag color="gold" icon={<StarFilled />} style={{ fontSize: 14, padding: "4px 12px" }}>
                          {anime.score}
                        </Tag>
                      )}
                      {anime.year && (
                        <Tag icon={<CalendarOutlined />} style={{ fontSize: 14, padding: "4px 12px" }}>
                          {anime.year}
                        </Tag>
                      )}
                      {anime.type && (
                        <Tag color="blue" style={{ fontSize: 14, padding: "4px 12px" }}>
                          {anime.type}
                        </Tag>
                      )}
                      {anime.episodes && (
                        <Tag icon={<PlayCircleOutlined />} style={{ fontSize: 14, padding: "4px 12px" }}>
                          {anime.episodes} Episodes
                        </Tag>
                      )}
                    </Space>

                    <Title level={1} style={{ color: "white", margin: 0, fontSize: 48 }}>
                      {anime.title}
                    </Title>

                    {anime.title_english && anime.title_english !== anime.title && (
                      <Title level={3} style={{ color: "#d1d5db", margin: 0, fontWeight: 300 }}>
                        {anime.title_english}
                      </Title>
                    )}

                    {anime.synopsis && (
                      <Paragraph
                        ellipsis={{ rows: 3 }}
                        style={{ color: "#e5e7eb", fontSize: 16, margin: 0 }}
                      >
                        {anime.synopsis}
                      </Paragraph>
                    )}

                    {anime.genres && anime.genres.length > 0 && (
                      <Space wrap>
                        {anime.genres.slice(0, 5).map((genre) => (
                          <Tag key={genre.mal_id} color="cyan">
                            {genre.name}
                          </Tag>
                        ))}
                      </Space>
                    )}
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
