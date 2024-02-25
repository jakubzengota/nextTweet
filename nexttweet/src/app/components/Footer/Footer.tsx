import FloatingActionButton from "../Elements/FloatingActionButton";
import jsonData from "../../context/Layout/data.json";
import FabGitHub from "../Elements/FloatingActionButtons/FabGitHub";
interface IFooterProps {
    className?: string;
}

const Footer: React.FC<IFooterProps> = ({ className }) => {
    const github = jsonData.profile.github;
    const linkedin= jsonData.profile.linkedin;

    const classNames = `${className} w-full p-[20px] flex justify-between`;
  return (
    <footer
      id="footer"
      className={classNames}
    >
      <div className="footer_left">
        <div id="footer_description">
            <div>
                <span>NextTweet</span>
                <span>Simple twitter clone.</span>
            </div>
            <div id="footer_findUs">
                <span>Find us on:</span>
                <div id="footer_icons" style={{position:"relative"}}>
                   {/* <FabGitHub data={github}/> */}
                </div>
            </div>
        </div>
      </div>
      <div className="footer_right">
        <div id="footer_account"></div>
        <div id="footer_profile"></div>
        <div id="footer_help"></div>
      </div>
    </footer>
  );
};

export default Footer;
