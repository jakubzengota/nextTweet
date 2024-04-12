
  import React, { useState } from 'react';
import FMGitHub from '../FloatingMenu/FMGithub';
import FMLinkedin from '../FloatingMenu/FMLinkedin';


const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer_container'>
                <div className="footer_left">
                    <section className="footer_section_socialMedia">
                        <div className='footer_section_socialMedia_textMain'>
                            <span className='footer_section_socialMedia_textMain_main'>NextTweet</span>
                            <span className='footer_section_socialMedia_textMain_second'>Łatwy sposób na tweetowanie i łączenie się.</span>
                        </div>
                        <div className="footer_section_socialMedia_findUs">
                            <span>Znajdz nas na:</span>
                            <div className='footer_section_socialMedia_findUs_icons'>
                                <FMGitHub />
                                <FMLinkedin />
                            </div>

                        </div>
                    </section>
                </div>
                <div className="footer_right">
                    <section className="footer_section_register">
                        <span className="footer_section_title">Dołącz do nas</span>
                        <div className="footer_section_register_buttons">
                            <span>Zarejestruj się</span>
                            <span>Zaloguj się</span>
                        </div>
                    </section>
                    <section className="footer_section_discover">
                        <span className="footer_section_title">odkrywaj</span>
                    </section>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;