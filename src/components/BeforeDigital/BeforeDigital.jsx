import { useState } from 'react';

import './BeforeDigital.css';

// Import each image individually
import Image1 from '../images/BefoDigi/alien_1.jpg';
import Image2 from '../images/BefoDigi/autoportret_Final_1.jpg';
import Image3 from '../images/BefoDigi/autoportret2final_1.jpg';
import Image4 from '../images/BefoDigi/autoportretCB_1.jpg';
import Image5 from '../images/BefoDigi/beyond repair_1.jpg';
import Image6 from '../images/BefoDigi/bloody hit.bmp_1.jpg';
import Image7 from '../images/BefoDigi/Cyber_rage_Jup8Reboot_1.jpg';
import Image8 from '../images/BefoDigi/dokonale stastie_1.jpg';
import Image9 from '../images/BefoDigi/DSC02573_1.jpg';
import Image10 from '../images/BefoDigi/DSCN0805_1.jpg';
import Image11 from '../images/BefoDigi/fight till end_1.jpg';
import Image12 from '../images/BefoDigi/FrankYello_1.jpg';
import Image13 from '../images/BefoDigi/future city_1.jpg';
import Image14 from '../images/BefoDigi/f-witcher-preliv-v2_1.jpg';
import Image15 from '../images/BefoDigi/gatpar0001_1.jpg';
import Image16 from '../images/BefoDigi/hladny tovar HD_1.jpg';
import Image17 from '../images/BefoDigi/I will always love your head_1.jpg';
import Image18 from '../images/BefoDigi/IMG_0454_1.jpg';
import Image19 from '../images/BefoDigi/Janosik2011_1.jpg';
import Image20 from '../images/BefoDigi/KamilaCyber_1.jpg';
import Image21 from '../images/BefoDigi/KamilaFinal_1.jpg';
import Image22 from '../images/BefoDigi/kvet_1.jpg';
import Image23 from '../images/BefoDigi/killer_1.jpg';
import Image24 from '../images/BefoDigi/KyberCislo14_1.jpg';
import Image25 from '../images/BefoDigi/let the music in_1.jpg';
import Image26 from '../images/BefoDigi/levia final_1.jpg';
import Image27 from '../images/BefoDigi/Levia hiding_1.jpg';
import Image28 from '../images/BefoDigi/Levia_1.jpg';
import Image29 from '../images/BefoDigi/BadHorse_1.jpg';
import Image30 from '../images/BefoDigi/memoryRaceFinal_1.jpg';
import Image31 from '../images/BefoDigi/mrtva stetka_1.jpg';
import Image32 from '../images/BefoDigi/Nelly_1.jpg';
import Image33 from '../images/BefoDigi/binka_1.jpg';
import Image34 from '../images/BefoDigi/No Future No Hope - Droppova.Zuzana_1.jpg';
import Image35 from '../images/BefoDigi/NokCityWarrior1_1.jpg';
import Image36 from '../images/BefoDigi/obalka_vyssiezaujmy_1.jpg';
import Image37 from '../images/BefoDigi/pilipiuk_1.jpg';
import Image38 from '../images/BefoDigi/rage_1.jpg';
import Image39 from '../images/BefoDigi/reiki tree_1.jpg';
import Image40 from '../images/BefoDigi/Reikiiii_1.jpg';
import Image41 from '../images/BefoDigi/retro music_1.jpg';
import Image42 from '../images/BefoDigi/Scifi-head_1.jpg';
import Image43 from '../images/BefoDigi/Scream_1.jpg';
import Image44 from '../images/BefoDigi/Scream2_1.jpg';
import Image45 from '../images/BefoDigi/shroom_1.jpg';
import Image46 from '../images/BefoDigi/Slabej-Droppova_1.jpg';
import Image47 from '../images/BefoDigi/smrtakBLUE_1.jpg';
import Image48 from '../images/BefoDigi/steamMRS.final_1.jpg';
import Image49 from '../images/BefoDigi/steamTime_1.jpg';
import Image50 from '../images/BefoDigi/stena detail_1.jpg';
import Image51 from '../images/BefoDigi/stena_1.jpg';
import Image52 from '../images/BefoDigi/Strato_1.jpg';
import Image53 from '../images/BefoDigi/Toko1_1.jpg';
import Image54 from '../images/BefoDigi/two_1.jpg';
import Image55 from '../images/BefoDigi/valkyrie_1.jpg';
import Image56 from '../images/BefoDigi/WIN version2018_1.jpg';
import Image57 from '../images/BefoDigi/wonder glass_1.jpg';
import Image58 from '../images/BefoDigi/zentangle1_1.jpg';
import Image59 from '../images/BefoDigi/zina the warior_1.jpg';
import Image60 from '../images/BefoDigi/Zina_1.jpg';
import Image61 from '../images/BefoDigi/ZombieWoman_1.jpg';
import Image62 from '../images/BefoDigi/Zotzilaah_1.jpg';
import Image63 from '../images/BefoDigi/ZuzBlood1_1.jpg';
import Image64 from '../images/BefoDigi/ZuzWildBlue_1.jpg';
import Image65 from '../images/BefoDigi/zveroclovek_1.jpg';

const images = [
  { src: Image1, alt: 'alien_1' },
  { src: Image2, alt: 'autoportret_Final_1' },
  { src: Image3, alt: 'autoportret2final_1' },
  { src: Image4, alt: 'autoportretCB_1' },
  { src: Image5, alt: 'beyond repair' },
  { src: Image6, alt: 'bloody hit' },
  { src: Image7, alt: 'cyber rage' },
  { src: Image8, alt: 'dokonale stastie' },
  { src: Image9, alt: 'DSC02573' },
  { src: Image10, alt: 'DSCN0805' },
  { src: Image11, alt: 'fight till end' },
  { src: Image12, alt: 'Frank Yello' },
  { src: Image13, alt: 'future city' },
  { src: Image14, alt: 'f-witcher-preliv-v2' },
  { src: Image15, alt: 'gatpar0001' },
  { src: Image16, alt: 'hladny tovar' },
  { src: Image17, alt: 'I will always love your head' },
  { src: Image18, alt: 'IMG_0454' },
  { src: Image19, alt: 'Janosik2011' },
  { src: Image20, alt: 'KamilaCyber' },
  { src: Image21, alt: 'KamilaFinal' },
  { src: Image22, alt: 'kvet' },
  { src: Image23, alt: 'killer' },
  { src: Image24, alt: 'KyberCislo14' },
  { src: Image25, alt: 'let the music in' },
  { src: Image26, alt: 'levia final' },
  { src: Image27, alt: 'Levia hiding' },
  { src: Image28, alt: 'Levia' },
  { src: Image29, alt: 'Bad Horse' },
  { src: Image30, alt: 'memory' },
  { src: Image31, alt: 'mrtva stetka' },
  { src: Image32, alt: 'Nelly' },
  { src: Image33, alt: 'binka' },
  { src: Image34, alt: 'No Future No Hope' },
  { src: Image35, alt: 'NokCityWarrior1' },
  { src: Image36, alt: 'obalka_vyssiezaujmy' },
  { src: Image37, alt: 'pilipiuk' },
  { src: Image38, alt: 'rage' },
  { src: Image39, alt: 'reiki tree' },
  { src: Image40, alt: 'Reikiiii' },
  { src: Image41, alt: 'retro music' },
  { src: Image42, alt: 'Scifi-head' },
  { src: Image43, alt: 'Scream' },
  { src: Image44, alt: 'Scream2' },
  { src: Image45, alt: 'shroom' },
  { src: Image46, alt: 'Slabej' },
  { src: Image47, alt: 'smrtak' },
  { src: Image48, alt: 'steamMRS' },
  { src: Image49, alt: 'steamTime' },
  { src: Image50, alt: 'stena detail' },
  { src: Image51, alt: 'stena' },
  { src: Image52, alt: 'Strato' },
  { src: Image53, alt: 'Toko1' },
  { src: Image54, alt: 'two' },
  { src: Image55, alt: 'valkyrie' },
  { src: Image56, alt: 'WIN version2018' },
  { src: Image57, alt: 'wonder glass' },
  { src: Image58, alt: 'zentangle1' },
  { src: Image59, alt: 'zina the warrior' },
  { src: Image60, alt: 'Zina' },
  { src: Image61, alt: 'Zombie' },
  { src: Image62, alt: 'Zotzilaah' },
  { src: Image63, alt: 'ZuzBlood' },
  { src: Image64, alt: 'ZuzWildBlue' },
  { src: Image65, alt: 'zveroclovek' },

];

const BeforeDigital = () => {
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
          <h1>Before Digital</h1>
          <p>
            Before 2019, I used to draw and paint with markers, pencils, and paints on paper.
            <br />
            Here are some of my artworks from that era.
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

export default BeforeDigital;
