import './Digital.css';
import {useState} from 'react';


import Image1 from '../images/Digi/Audrey2022_1.jpg';
import Image2 from '../images/Digi/az me povolaji k sobe_1.jpg';
import Image3 from '../images/Digi/2-KiRi-Cal2023_1.jpg';
import Image4 from '../images/Digi/2 girls in Tokyo - Copy_1.jpg';
import Image5 from '../images/Digi/albert - Copy_1.jpg';
import Image6 from '../images/Digi/angel under - Copy_1.jpg';
import Image7 from '../images/Digi/apocalypse forest - Copy_1.jpg';
import Image8 from '../images/Digi/blue dragons - Copy_1.jpg';
import Image9 from '../images/Digi/BLUE flower - Copy_1.jpg';
import Image10 from '../images/Digi/Blue urban vector - Copy_1.jpg';
import Image11 from '../images/Digi/bros_1.jpg';
import Image12 from '../images/Digi/catwoman- Copy_1.jpg';
import Image13 from '../images/Digi/Certosa from Hell_1.jpg';
import Image14 from '../images/Digi/Charon 3 obalka by KiRi_1.jpg';
import Image15 from '../images/Digi/Chick - Copy_1.jpg';
import Image16 from '../images/Digi/chick killa1 - Copy_1.jpg';
import Image17 from '../images/Digi/city sunset - Copy_1.jpg';
import Image18 from '../images/Digi/clockwork birdie_1.jpg';
import Image19 from '../images/Digi/Conan a kraska z Khitaie_1.jpg';
import Image20 from '../images/Digi/crow_1.jpg';
import Image21 from '../images/Digi/cyber goth girl - Copy_1.jpg';
import Image22 from '../images/Digi/cyberpunk street_1.jpg';
import Image23 from '../images/Digi/dolly - Copy_1.jpg';
import Image24 from '../images/Digi/double tree - Copy_1.jpg';
import Image25 from '../images/Digi/Dragons_1.jpg';
import Image26 from '../images/Digi/dreamgirl - Copy_1.jpg';
import Image27 from '../images/Digi/Edward - Copy_1.jpg';
import Image28 from '../images/Digi/error_1.jpg';
import Image29 from '../images/Digi/fire troll_1.jpg';
import Image30 from '../images/Digi/green universe - Copy_1.jpg';
import Image31 from '../images/Digi/hejkal - Copy_1.jpg';
import Image32 from '../images/Digi/her_1.jpg';
import Image33 from '../images/Digi/Hermina Cat - Copy_1.jpg';
import Image34 from '../images/Digi/jellyfish_1.jpg';
import Image35 from '../images/Digi/jill_1.jpg';
import Image36 from '../images/Digi/joker in tokyo- Copy_1.jpg';
import Image37 from '../images/Digi/JUPcover11 - Copy_1.jpg';
import Image38 from '../images/Digi/jupiter14cover - Copy_1.jpg';
import Image39 from '../images/Digi/just a lil boy_1.jpg';
import Image40 from '../images/Digi/king of this wood_1.jpg';
import Image41 from '../images/Digi/kitty- Copy_1.jpg';
import Image42 from '../images/Digi/let it be light - Copy_1.jpg';
import Image43 from '../images/Digi/lollyB - Copy_1.jpg';
import Image44 from '../images/Digi/LOVEisLOVE_1.jpg';
import Image45 from '../images/Digi/Lucka1_1.jpg';
import Image46 from '../images/Digi/man of my dreams_1.jpg';
import Image47 from '../images/Digi/marais - Copy_1.jpg';
import Image48 from '../images/Digi/marais2 - Copy_1.jpg';
import Image49 from '../images/Digi/Maria2_1.jpg';
import Image50 from '../images/Digi/Miguel Fractal_1.jpg';
import Image51 from '../images/Digi/mouse_1.jpg';
import Image52 from '../images/Digi/mummy_1.jpg';
import Image53 from '../images/Digi/my world_1.jpg';
import Image54 from '../images/Digi/Nasleduj bieleho kralika_1.jpg';
import Image55 from '../images/Digi/NEUROMANCER_1.jpg';
import Image56 from '../images/Digi/night sky_1.jpg';
import Image57 from '../images/Digi/Nula sa rovna jednej_1.jpg';
import Image58 from '../images/Digi/Obalka 1_1.jpg';
import Image59 from '../images/Digi/Obalka Bazina2_1.jpg';
import Image60 from '../images/Digi/obey_1.jpg';
import Image62 from '../images/Digi/octopi_1.jpg';
import Image63 from '../images/Digi/odtlacok-Kozak_1.jpg';
import Image64 from '../images/Digi/papa-legba_1.jpg';
import Image65 from '../images/Digi/pastel killer_1.jpg';
import Image66 from '../images/Digi/Pilipiuk ilustr.Obalka4_1.jpg';
import Image67 from '../images/Digi/post apo baby_1.jpg';
import Image68 from '../images/Digi/PTRSLV12345_1.jpg';
import Image69 from '../images/Digi/purple cat_1.jpg';
import Image70 from '../images/Digi/red postapo_1.jpg';
import Image71 from '../images/Digi/run sharky_1.jpg';
import Image72 from '../images/Digi/RUN_1.jpg';
import Image73 from '../images/Digi/Sesivance 2 obalka od KiRi_1.jpg';
import Image74 from '../images/Digi/skyline7.3_1.jpg';
import Image75 from '../images/Digi/SLOVENSKE TEMNO final1_1.jpg';
import Image76 from '../images/Digi/space kitty1_1.jpg';
import Image77 from '../images/Digi/space monster_1.jpg';
import Image78 from '../images/Digi/Ti co prichadzaju v tme_1.jpg';
import Image79 from '../images/Digi/twins1_1.jpg';
import Image80 from '../images/Digi/type_writerBrowFinal_1.jpg';
import Image81 from '../images/Digi/ukraine FINAL COVER_1.jpg';
import Image82 from '../images/Digi/Under-sea_1.jpg';
import Image83 from '../images/Digi/urban_1.jpg';
import Image84 from '../images/Digi/Vila_1.jpg';
import Image85 from '../images/Digi/violet trouble_1.jpg';
import Image86 from '../images/Digi/Violet1_1.jpg';
import Image87 from '../images/Digi/virtual_1.jpg';
import Image88 from '../images/Digi/We rather leave_1.jpg';
import Image89 from '../images/Digi/whale_1.jpg';
import Image90 from '../images/Digi/Z popola_1.jpg';
import Image91 from '../images/Digi/zilinska nemocnica_1.jpg';

const images = [
  { src: Image1, alt: 'Audrey2022' },
  { src: Image2, alt: 'az me povolaji k sobe' },
  { src: Image3, alt: '2-KiRi-Cal2023' },
  { src: Image4, alt: '2 girls in Tokyo - Copy' },
  { src: Image5, alt: 'albert - Copy' },
  { src: Image6, alt: 'angel under - Copy' },
  { src: Image7, alt: 'apocalypse forest - Copy' },
  { src: Image8, alt: 'blue dragons - Copy' },
  { src: Image9, alt: 'BLUE flower - Copy' },
  { src: Image10, alt: 'Blue urban vector - Copy' },
  { src: Image11, alt: 'bros' },
  { src: Image12, alt: 'catwoman- Copy' },
  { src: Image13, alt: 'Certosa from Hell' },
  { src: Image14, alt: 'Charon 3 obalka by KiRi' },
  { src: Image15, alt: 'Chick - Copy' },
  { src: Image16, alt: 'chick killa1 - Copy' },
  { src: Image17, alt: 'city sunset - Copy' },
  { src: Image18, alt: 'clockwork birdie' },
  { src: Image19, alt: 'Conan a kraska z Khitaie' },
  { src: Image20, alt: 'crow' },
  { src: Image21, alt: 'cyber goth girl - Copy' },
  { src: Image22, alt: 'cyberpunk street' },
  { src: Image23, alt: 'dolly - Copy' },
  { src: Image24, alt: 'double tree - Copy' },
  { src: Image25, alt: 'Dragons' },
  { src: Image26, alt: 'dreamgirl - Copy' },
  { src: Image27, alt: 'Edward - Copy' },
  { src: Image28, alt: 'error' },
  { src: Image29, alt: 'fire troll' },
  { src: Image30, alt: 'green universe - Copy' },
  { src: Image31, alt: 'hejkal - Copy' },
  { src: Image32, alt: 'her' },
  { src: Image33, alt: 'Hermina Cat - Copy' },
  { src: Image34, alt: 'jellyfish' },
  { src: Image35, alt: 'jill' },
  { src: Image36, alt: 'joker in tokyo- Copy' },
  { src: Image37, alt: 'JUPcover11 - Copy' },
  { src: Image38, alt: 'jupiter14cover - Copy' },
  { src: Image39, alt: 'just a lil boy' },
  { src: Image40, alt: 'king of this wood' },
  { src: Image41, alt: 'kitty- Copy' },
  { src: Image42, alt: 'let it be light - Copy' },
  { src: Image43, alt: 'lollyB - Copy' },
  { src: Image44, alt: 'LOVEisLOVE' },
  { src: Image45, alt: 'Lucka1' },
  { src: Image46, alt: 'man of my dreams' },
  { src: Image47, alt: 'marais - Copy' },
  { src: Image48, alt: 'marais2 - Copy' },
  { src: Image49, alt: 'Maria2' },
  { src: Image50, alt: 'Miguel Fractal' },
  { src: Image51, alt: 'mouse' },
  { src: Image52, alt: 'mummy' },
  { src: Image53, alt: 'my world' },
  { src: Image54, alt: 'Nasleduj bieleho kralika' },
  { src: Image55, alt: 'NEUROMANCER' },
  { src: Image56, alt: 'night sky' },
  { src: Image57, alt: 'Nula sa rovna jednej' },
  { src: Image58, alt: 'Obalka 1' },
  { src: Image59, alt: 'Obalka Bazina2' },
  { src: Image60, alt: 'obey' },
  { src: Image62, alt: 'octopi' },
  { src: Image63, alt: 'odtlacok-Kozak' },
  { src: Image64, alt: 'papa-legba' },
  { src: Image65, alt: 'pastel killer' },
  { src: Image66, alt: 'Pilipiuk ilustr.Obalka4' },
  { src: Image67, alt: 'post apo baby' },
  { src: Image68, alt: 'PTRSLV12345' },
  { src: Image69, alt: 'purple cat' },
  { src: Image70, alt: 'red postapo' },
  { src: Image71, alt: 'run sharky' },
  { src: Image72, alt: 'RUN' },
  { src: Image73, alt: 'Sesivance 2 obalka od KiRi' },
  { src: Image74, alt: 'skyline7.3' },
  { src: Image75, alt: 'SLOVENSKE TEMNO final1' },
  { src: Image76, alt: 'space kitty1' },
  { src: Image77, alt: 'space monster' },
  { src: Image78, alt: 'Ti co prichadzaju v tme' },
  { src: Image79, alt: 'twins1' },
  { src: Image80, alt: 'type_writerBrowFinal' },
  { src: Image81, alt: 'ukraine FINAL COVER' },
  { src: Image82, alt: 'Under-sea' },
  { src: Image83, alt: 'urban' },
  { src: Image84, alt: 'Vila' },
  { src: Image85, alt: 'violet trouble' },
  { src: Image86, alt: 'Violet1' },
  { src: Image87, alt: 'virtual' },
  { src: Image88, alt: 'We rather leave' },
  { src: Image89, alt: 'whale' },
  { src: Image90, alt: 'Z popola' },
  { src: Image91, alt: 'zilinska nemocnica' },
];

const Digital = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      
      <div className="main-container">
        <div>
          <h1>Digital</h1>
          <p>
          Starting October 2019, I fell in love in using pen tablet. In the very beginning, I was using free softs like Gimp and Krita, which was perfect for learning many useful techniques.
          Later on, I switched to Adobe Photoshop and Illustrator, which I use to this day. I also use Corel Paint Studio for some of my works.
            <br />
            Here are some of my artworks from more recent era.
          </p>
        </div>
        <div className="gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={() => openModal(image)} // Open modal on click
            />
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Digital;
