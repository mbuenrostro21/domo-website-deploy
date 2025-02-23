import { FaInstagramSquare, FaSpotify, FaYoutube, FaSoundcloud, FaPhoneAlt} from "react-icons/fa";
import { SiBeatstars } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


function Footer (){
    return(
        <footer className='footer-container'>
            <div className='inner-footer'>
                <div className='contact-info'>
                    <p><FaLocationDot  className='footer-icons'/> Irvine, CA</p>
                    <p><MdEmail className='footer-icons'/> <a href='mailto:domolo2o9@gmail.com'>domolo2o9@gmail.com</a></p>
                    <p><FaPhoneAlt className='footer-icons'/><a href='tel:2095985596'></a> 209-598-5596</p>
                </div>
                <div>
                    <h3 className="footer-header">Socials</h3>
                    <div className='social-icons'>
                        <a href='https://open.spotify.com/artist/3WTcN9Hm901rD9uzm9okBV'>
                            <FaSpotify size={25}/>
                        </a>
                        <a href='https://www.youtube.com/channel/UCqC9xip7U5CGB7_RjLCxOmA'>
                            <FaYoutube size={25}/>
                        </a>
                        <a href='https://www.instagram.com/domolo_beats/'>
                            <FaInstagramSquare size={25}/>
                        </a>
                        <a href='https://soundcloud.com/domolo_domolo'>
                            <FaSoundcloud size={25}/>
                        </a>
                        <a href='https://www.beatstars.com/domolo2o9'>
                            <SiBeatstars size={25}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;