import { IoMdPlanet } from "react-icons/io";
import { GiSpikyExplosion } from "react-icons/gi";
import { SiOpennebula, SiStarship } from "react-icons/si";
import {
  MdSignalWifi1Bar,
  MdSignalWifiStatusbar3Bar,
  MdOutlineSignalWifiStatusbar4Bar,
} from "react-icons/md";
import { RiAliensFill } from "react-icons/ri";

// const siStarship = SiStarship();

// const riAliensFill = RiAliensFill();
// const ioMdPlanet = IoMdPlanet();
// const giSpikyExplosion = GiSpikyExplosion();
// const siOpennebula = SiOpennebula();
// const mdSignalWifi1Bar = MdSignalWifi1Bar();
// const mdSignalWifiStatusbar3Bar = MdSignalWifiStatusbar3Bar();
// const mdOutlineSignalWifiStatusbar4Bar = MdOutlineSignalWifiStatusbar4Bar();

const ICONS = [
  {
    key: 0,
    name: SiStarship,
    tag: "starShip",
  },
  {
    key: 1,
    name: RiAliensFill,
    tag: "alien",
  },
  {
    key: 2,
    name: IoMdPlanet,
    tag: "planetaryCards",
  },
  {
    key: 3,
    name: GiSpikyExplosion,
    tag: "supernovaCards",
  },
  {
    key: 4,
    name: SiOpennebula,
    tag: "nebulaCards",
  },
  {
    key: 5,
    name: MdSignalWifi1Bar,
    tag: 1,
  },
  {
    key: 6,
    name: MdSignalWifiStatusbar3Bar,
    tag: 2,
  },
  {
    key: 7,
    name: MdOutlineSignalWifiStatusbar4Bar,
    tag: 3,
  },
];

export default ICONS;

// cardsBackground: [siStarship, riAliensFill],
// cardsPicture: [ioMdPlanet, giSpikyExplosion, siOpennebula],
// difficulty: [
//   mdSignalWifi1Bar,
//   mdSignalWifiStatusbar3Bar,
//   MmdOutlineSignalWifiStatusbar4Bar,
// ],
