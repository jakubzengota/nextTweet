const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full bg-blue-500 p-[20px] flex justify-between "
    >
      <div className="footer_left">
        <div id="footer_description">
            <div>
                <span>NextTweet</span>
                <span>Simple twitter clone.</span>

            </div>
        </div>
      </div>
      <div className="footer_right">
        <div id="footer_account"></div>
        <div id="footer_profile"></div>
        <div id="footer_help"></div>
      </div>
    </section>
  );
};

export default Footer;
