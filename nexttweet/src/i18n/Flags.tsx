import PL from "../assets/flags/PL.svg";
import EN from "../assets/flags/EN.svg";
import DE from "../assets/flags/DE.svg";

const Flags = (country: string) => {
  const flagsMap: { [key: string]: string } = {
    PL: PL,
    EN: EN,
    DE: DE,
  };
  
  return flagsMap[country] || 'Default flag or error handling here';
}