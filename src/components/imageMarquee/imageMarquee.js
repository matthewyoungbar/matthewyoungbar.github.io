import React from 'react';
import Marquee from "react-fast-marquee";
import lilo from '../../assets/pictures/lilo.png';
import matthewlilo from '../../assets/pictures/matthew&lilo.jpg';
import pictureFrame from '../../assets/pictures/window.gif';
import freestyle from '../../assets/pictures/freestyle.jpg';
import butterfly from '../../assets/pictures/butterfly.jpg';
import sign from '../../assets/pictures/sitting_on_sign.jpg';
import westHallGraduation from '../../assets/pictures/cap_gown_west_hall.png';
import graduationGroup from '../../assets/pictures/graduation_group.png';
import frozenGorge from '../../assets/pictures/frozen_gorge.png';
import coolView from '../../assets/pictures/cool_view.png';
import minecraftFight from '../../assets/pictures/minecraft_fight.gif';
import './imageMarquee.css';

// https://www.npmjs.com/package/react-fast-marquee

function ImageMarquee () {
  return (
    <Marquee className="marquee-image" gradient={false} style={{ position: 'relative', zIndex: '-1' }}>
      <img src={lilo} alt="Lilo the dog"/>
      <img src={freestyle} alt="Swimming Freestyle"/>
      <img src={sign} alt="Matthew sitting on Rensselaer sign"/>
      <img src={coolView} alt="On top of a mountain"/>
      <img src={pictureFrame} alt="Frame Effect"/>
      <img src={westHallGraduation} alt="Cap and Gown outside West Hal"/>
      <img src={matthewlilo} alt="Matthew and Lilo"/>
      <img src={graduationGroup} alt="Group of friends at Graduation"/>
      <img src={butterfly} alt="Swimming Butterfly"/>
      <img src={frozenGorge} alt="Frozen gorge"/>
      <img src={minecraftFight} alt="Minecraft Fight"/>
    </Marquee>
  );
}

export default ImageMarquee;
