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
    name: 'Fotoshooting "Brautpaar des Jahres"',
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
    name: 'Location "Die Werkstatt"',
    images: [
      { src: "/photos/location/8M4A3426.jpg" },
      { src: "/photos/location/8M4A3422.jpg" },
      { src: "/photos/location/8M4A3430.jpg" },
      { src: "/photos/location/8M4A3420.jpg" },
      { src: "/photos/location/8M4A3410.jpg" },
      { src: "/photos/location/8M4A3414.jpg" },
      { src: "/photos/location/8M4A3425.jpg" },
      { src: "/photos/location/8M4A3427.jpg" },
      { src: "/photos/location/8M4A3438.jpg" },
      { src: "/photos/location/8M4A3775.jpg" },
    ],
  },
  {
    name: "Fotobox",
    images: [
      { src: "/photos/fotobox/20250322_174755_155_IMG_0005.jpg" },
      { src: "/photos/fotobox/20250322_180026_424_IMG_0006.jpg" },
      { src: "/photos/fotobox/20250322_180600_266_IMG_0015.jpg" },
      { src: "/photos/fotobox/20250322_192944_183_IMG_0025.jpg" },
      { src: "/photos/fotobox/20250322_193426_759_IMG_0035.jpg" },
      { src: "/photos/fotobox/20250322_194329_684_IMG_0044.jpg" },
      { src: "/photos/fotobox/20250322_194356_848_IMG_0045.jpg" },
      { src: "/photos/fotobox/20250322_194516_012_IMG_0048.jpg" },
      { src: "/photos/fotobox/20250322_210334_455_IMG_0061.jpg" },
      { src: "/photos/fotobox/20250322_210507_245_IMG_0065.jpg" },
      { src: "/photos/fotobox/20250322_213824_384_IMG_0081.jpg" },
      { src: "/photos/fotobox/20250322_214743_647_IMG_0087.jpg" },
      { src: "/photos/fotobox/20250322_221413_423_IMG_0094.jpg" },
      { src: "/photos/fotobox/20250322_221441_875_IMG_0095.jpg" },
      { src: "/photos/fotobox/20250322_221805_194_IMG_0098.jpg" },
      { src: "/photos/fotobox/20250322_222920_910_IMG_0107.jpg" },
      { src: "/photos/fotobox/20250322_223121_331_IMG_0112.jpg" },
      { src: "/photos/fotobox/20250322_223543_173_IMG_0124.jpg" },
      { src: "/photos/fotobox/20250322_223929_589_IMG_0134.jpg" },
      { src: "/photos/fotobox/20250322_225441_400_IMG_0141.jpg" },
      { src: "/photos/fotobox/20250322_225503_027_IMG_0142.jpg" },
      { src: "/photos/fotobox/20250322_231147_818_IMG_0146.jpg" },
      { src: "/photos/fotobox/20250322_235016_987_IMG_0151.jpg" },
      { src: "/photos/fotobox/20250322_235312_263_IMG_0154.jpg" },
      { src: "/photos/fotobox/20250322_235624_626_IMG_0158.jpg" },
      { src: "/photos/fotobox/20250323_000721_633_IMG_0175.jpg" },
      { src: "/photos/fotobox/20250323_003151_514_IMG_0193.jpg" },
      { src: "/photos/fotobox/20250323_004921_822_IMG_0198.jpg" },
      { src: "/photos/fotobox/20250323_012750_177_IMG_0199.jpg" },
      { src: "/photos/fotobox/20250323_012859_596_IMG_0201.jpg" },
      { src: "/photos/fotobox/20250323_020554_464_IMG_0203.jpg" },
      { src: "/photos/fotobox/20250323_020655_794_IMG_0206.jpg" },
    ],
  },
  {
    name: "Gäste & Party",
    images: [
      { src: "/photos/party/8M4A3589.jpg" },
      { src: "/photos/party/8M4A3711.jpg" },
      { src: "/photos/party/Q35A0450.jpg" },
      { src: "/photos/party/8M4A3536.jpg" },
      { src: "/photos/party/8M4A3546.jpg" },
      { src: "/photos/party/Q35A0439.jpg" },
      { src: "/photos/party/8M4A3607.jpg" },
      { src: "/photos/party/Q35A0477.jpg" },
      { src: "/photos/party/8M4A3567.jpg" },
      { src: "/photos/party/8M4A3578.jpg" },
      { src: "/photos/party/Q35A0297.jpg" },
      { src: "/photos/party/Q35A0446.jpg" },
      { src: "/photos/party/8M4A3656.jpg" },
      { src: "/photos/party/Q35A0281.jpg" },
      { src: "/photos/party/Q35A0413.jpg" },
      { src: "/photos/party/8M4A3440.jpg" },
      { src: "/photos/party/8M4A3722.jpg" },
      { src: "/photos/party/Q35A0296.jpg" },
      { src: "/photos/party/8M4A3549.jpg" },
      { src: "/photos/party/8M4A3601.jpg" },
      { src: "/photos/party/8M4A3744.jpg" },
      { src: "/photos/party/8M4A3759.jpg" },
      { src: "/photos/party/8M4A3774.jpg" },
      { src: "/photos/party/Q35A0342-Verbessert-RR.jpg" },
      { src: "/photos/party/Q35A0459.jpg" },
      { src: "/photos/party/h8nzc9vn.jpg" },
      { src: "/photos/party/ekmm45lw.jpeg" },
      { src: "/photos/party/phm1g7dn.jpg" },
      { src: "/photos/party/raau2u54.jpg" },
      { src: "/photos/party/aplfinj7.jpg" },
      { src: "/photos/party/u5vsp6uo.jpeg" },
      { src: "/photos/party/m53phajc.jpeg" },
      { src: "/photos/party/m3vs7lua.jpeg" },
      { src: "/photos/party/jzjeh085.jpeg" },
      { src: "/photos/party/8M4A3616-1.JPG" },
      { src: "/photos/party/j9souo76.jpeg" },
    ],
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentFolder, setCurrentFolder] = useState<number>(0);

  const handleClick = (folderIndex: number, imageIndex: number) => {
    setCurrentFolder(folderIndex);
    setIndex(imageIndex);
    setOpen(true);
  };

  const handleAccordionSelect = (eventKey: any) => {
    if (eventKey) {
      setTimeout(() => {
        const element = document.getElementById(`accordion-${eventKey}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  };

  const getCurrentFolderImages = () => {
    return galleryData[currentFolder].images;
  };

  return (
    <Accordion onSelect={handleAccordionSelect}>
      {galleryData.map((folder, folderIndex) => (
        <Accordion.Item
          key={folderIndex}
          eventKey={folderIndex.toString()}
          id={`accordion-${folderIndex}`}
        >
          <Accordion.Header>{folder.name}</Accordion.Header>
          <Accordion.Body>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-2">
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
        slides={getCurrentFolderImages().map((img) => ({ src: img.src }))}
      />
    </Accordion>
  );
}
