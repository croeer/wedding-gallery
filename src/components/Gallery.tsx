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
      { src: "/photos/standesamt/8M4A2188.webp" },
      { src: "/photos/standesamt/8M4A2191.webp" },
      { src: "/photos/standesamt/8M4A2254.webp" },
      { src: "/photos/standesamt/8M4A2271.webp" },
      { src: "/photos/standesamt/8M4A2274.webp" },
      { src: "/photos/standesamt/8M4A2287.webp" },
      { src: "/photos/standesamt/8M4A2302.webp" },
      { src: "/photos/standesamt/8M4A2329.webp" },
      { src: "/photos/standesamt/8M4A2344.webp" },
      { src: "/photos/standesamt/8M4A2360.webp" },
      { src: "/photos/standesamt/8M4A2390.webp" },
      { src: "/photos/standesamt/8M4A2392.webp" },
      { src: "/photos/standesamt/8M4A2508.webp" },
    ],
  },
  {
    name: 'Fotoshooting "Brautpaar des Jahres"',
    images: [
      { src: "/photos/fotoshooting/8M4A2625.webp" },
      { src: "/photos/fotoshooting/8M4A3116.webp" },
      { src: "/photos/fotoshooting/8M4A2968.webp" },
      { src: "/photos/fotoshooting/8M4A3303.webp" },
      { src: "/photos/fotoshooting/8M4A2790-2.webp" },
      { src: "/photos/fotoshooting/8M4A2659.webp" },
      { src: "/photos/fotoshooting/8M4A2772.webp" },
      { src: "/photos/fotoshooting/8M4A3364.webp" },
      { src: "/photos/fotoshooting/8M4A3311.webp" },
    ],
  },
  {
    name: 'Location "Die Werkstatt"',
    images: [
      { src: "/photos/location/8M4A3426.webp" },
      { src: "/photos/location/8M4A3422.webp" },
      { src: "/photos/location/8M4A3430.webp" },
      { src: "/photos/location/8M4A3420.webp" },
      { src: "/photos/location/8M4A3410.webp" },
      { src: "/photos/location/8M4A3414.webp" },
      { src: "/photos/location/8M4A3425.webp" },
      { src: "/photos/location/8M4A3427.webp" },
      { src: "/photos/location/8M4A3438.webp" },
      { src: "/photos/location/8M4A3775.webp" },
    ],
  },
  {
    name: "Fotobox",
    images: [
      { src: "/photos/fotobox/20250322_174755_155_IMG_0005.webp" },
      { src: "/photos/fotobox/20250322_180026_424_IMG_0006.webp" },
      { src: "/photos/fotobox/20250322_180600_266_IMG_0015.webp" },
      { src: "/photos/fotobox/20250322_192944_183_IMG_0025.webp" },
      { src: "/photos/fotobox/20250322_193426_759_IMG_0035.webp" },
      { src: "/photos/fotobox/20250322_194329_684_IMG_0044.webp" },
      { src: "/photos/fotobox/20250322_194356_848_IMG_0045.webp" },
      { src: "/photos/fotobox/20250322_194516_012_IMG_0048.webp" },
      { src: "/photos/fotobox/20250322_210334_455_IMG_0061.webp" },
      { src: "/photos/fotobox/20250322_210507_245_IMG_0065.webp" },
      { src: "/photos/fotobox/20250322_213824_384_IMG_0081.webp" },
      { src: "/photos/fotobox/20250322_214743_647_IMG_0087.webp" },
      { src: "/photos/fotobox/20250322_221413_423_IMG_0094.webp" },
      { src: "/photos/fotobox/20250322_221441_875_IMG_0095.webp" },
      { src: "/photos/fotobox/20250322_221805_194_IMG_0098.webp" },
      { src: "/photos/fotobox/20250322_222920_910_IMG_0107.webp" },
      { src: "/photos/fotobox/20250322_223121_331_IMG_0112.webp" },
      { src: "/photos/fotobox/20250322_223543_173_IMG_0124.webp" },
      { src: "/photos/fotobox/20250322_223929_589_IMG_0134.webp" },
      { src: "/photos/fotobox/20250322_225441_400_IMG_0141.webp" },
      { src: "/photos/fotobox/20250322_225503_027_IMG_0142.webp" },
      { src: "/photos/fotobox/20250322_231147_818_IMG_0146.webp" },
      { src: "/photos/fotobox/20250322_235016_987_IMG_0151.webp" },
      { src: "/photos/fotobox/20250322_235312_263_IMG_0154.webp" },
      { src: "/photos/fotobox/20250322_235624_626_IMG_0158.webp" },
      { src: "/photos/fotobox/20250323_000721_633_IMG_0175.webp" },
      { src: "/photos/fotobox/20250323_003151_514_IMG_0193.webp" },
      { src: "/photos/fotobox/20250323_004921_822_IMG_0198.webp" },
      { src: "/photos/fotobox/20250323_012750_177_IMG_0199.webp" },
      { src: "/photos/fotobox/20250323_012859_596_IMG_0201.webp" },
      { src: "/photos/fotobox/20250323_020554_464_IMG_0203.webp" },
      { src: "/photos/fotobox/20250323_020655_794_IMG_0206.webp" },
    ],
  },
  {
    name: "Gäste & Party",
    images: [
      { src: "/photos/party/8M4A3589.webp" },
      { src: "/photos/party/8M4A3711.webp" },
      { src: "/photos/party/Q35A0450.webp" },
      { src: "/photos/party/8M4A3536.webp" },
      { src: "/photos/party/8M4A3546.webp" },
      { src: "/photos/party/Q35A0439.webp" },
      { src: "/photos/party/8M4A3607.webp" },
      { src: "/photos/party/Q35A0477.webp" },
      { src: "/photos/party/8M4A3567.webp" },
      { src: "/photos/party/8M4A3578.webp" },
      { src: "/photos/party/Q35A0297.webp" },
      { src: "/photos/party/Q35A0446.webp" },
      { src: "/photos/party/8M4A3656.webp" },
      { src: "/photos/party/Q35A0281.webp" },
      { src: "/photos/party/Q35A0413.webp" },
      { src: "/photos/party/8M4A3440.webp" },
      { src: "/photos/party/8M4A3722.webp" },
      { src: "/photos/party/Q35A0296.webp" },
      { src: "/photos/party/8M4A3549.webp" },
      { src: "/photos/party/8M4A3601.webp" },
      { src: "/photos/party/8M4A3744.webp" },
      { src: "/photos/party/8M4A3759.webp" },
      { src: "/photos/party/8M4A3774.webp" },
      { src: "/photos/party/Q35A0342-Verbessert-RR.webp" },
      { src: "/photos/party/Q35A0459.webp" },
      { src: "/photos/party/h8nzc9vn.webp" },
      { src: "/photos/party/ekmm45lw.webp" },
      { src: "/photos/party/phm1g7dn.webp" },
      { src: "/photos/party/raau2u54.webp" },
      { src: "/photos/party/aplfinj7.webp" },
      { src: "/photos/party/u5vsp6uo.webp" },
      { src: "/photos/party/m53phajc.webp" },
      { src: "/photos/party/m3vs7lua.webp" },
      { src: "/photos/party/jzjeh085.webp" },
      { src: "/photos/party/8M4A3616-1.webp" },
      { src: "/photos/party/j9souo76.webp" },
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

  const getCurrentFolderImages = () => {
    return galleryData[currentFolder].images;
  };

  return (
    <Accordion>
      {galleryData.map((folder, folderIndex) => (
        <Accordion.Item key={folderIndex} eventKey={folderIndex.toString()}>
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
