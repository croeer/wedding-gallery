import { useState } from "react";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css"; // ⬅️ custom CSS

interface Image {
  src: string;
}

interface Folder {
  name: string;
  images: Image[];
}

const galleryData: Folder[] = [
  {
    name: "Standesamt",
    images: [
      { src: "/photos/standesamt/8M4A2188.jpg" },
      { src: "/photos/standesamt/8M4A2191.jpg" },
      { src: "/photos/standesamt/8M4A2254.jpg" },
      { src: "/photos/standesamt/8M4A2271.jpg" },
      { src: "/photos/standesamt/8M4A2274.jpg" },
      { src: "/photos/standesamt/8M4A2287.jpg" },
      { src: "/photos/standesamt/8M4A2302.jpg" },
      { src: "/photos/standesamt/8M4A2329.jpg" },
      { src: "/photos/standesamt/8M4A2344.jpg" },
      { src: "/photos/standesamt/8M4A2360.jpg" },
      { src: "/photos/standesamt/8M4A2390.jpg" },
      { src: "/photos/standesamt/8M4A2392.jpg" },
      { src: "/photos/standesamt/8M4A2508.jpg" },
    ],
  },
  {
    name: "Fotoshooting",
    images: [
      { src: "/photos/fotoshooting/8M4A2625.jpg" },
      { src: "/photos/fotoshooting/8M4A3116.jpg" },
      { src: "/photos/fotoshooting/8M4A2968.jpg" },
      { src: "/photos/fotoshooting/8M4A3303.jpg" },
      { src: "/photos/fotoshooting/8M4A2790-2.jpg" },
      { src: "/photos/fotoshooting/8M4A2659.jpg" },
      { src: "/photos/fotoshooting/8M4A2772.jpg" },
      { src: "/photos/fotoshooting/8M4A3364.jpg" },
      { src: "/photos/fotoshooting/8M4A3311.jpg" },
    ],
  },
  {
    name: "Werkstatt",
    images: [
      { src: "/photos/werkstatt/8M4A3426.jpg" },
      { src: "/photos/werkstatt/8M4A3422.jpg" },
      { src: "/photos/werkstatt/8M4A3430.jpg" },
      { src: "/photos/werkstatt/8M4A3420.jpg" },
      { src: "/photos/werkstatt/8M4A3410.jpg" },
      { src: "/photos/werkstatt/8M4A3414.jpg" },
      { src: "/photos/werkstatt/8M4A3425.jpg" },
      { src: "/photos/werkstatt/8M4A3427.jpg" },
      { src: "/photos/werkstatt/8M4A3438.jpg" },
      { src: "/photos/werkstatt/8M4A3775.jpg" },
    ],
  },
  {
    name: "Party",
    images: [
      { src: "/photos/party/img1.jpg" },
      { src: "/photos/party/img2.jpg" },
      { src: "/photos/party/img3.jpg" },
    ],
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (folderIndex: number, imageIndex: number) => {
    // Calculate the global index by summing up the lengths of previous folders
    const globalIndex =
      galleryData
        .slice(0, folderIndex)
        .reduce((sum, folder) => sum + folder.images.length, 0) + imageIndex;

    setIndex(globalIndex);
    setOpen(true);
  };

  const getAllImages = () => {
    return galleryData.flatMap((folder) => folder.images);
  };

  return (
    <Accordion defaultActiveKey="0">
      {galleryData.map((folder, folderIndex) => (
        <Accordion.Item key={folderIndex} eventKey={folderIndex.toString()}>
          <Accordion.Header>{folder.name}</Accordion.Header>
          <Accordion.Body>
            <Row xs={2} sm={3} md={4} lg={5} className="g-3">
              {folder.images.map((img, imageIndex) => (
                <Col key={imageIndex}>
                  <Card
                    className="gallery-card shadow-sm border-0 h-100"
                    onClick={() => handleClick(folderIndex, imageIndex)}
                  >
                    <div className="image-wrapper">
                      <Card.Img
                        variant="top"
                        src={img.src}
                        loading="lazy"
                        className="gallery-img"
                      />
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={getAllImages().map((img) => ({ src: img.src }))}
      />
    </Accordion>
  );
}
