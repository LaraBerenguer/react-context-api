import fb from "../../assets/img/fb.svg"
import ig from "../../assets/img/ig.svg"
import yt from "../../assets/img/yt.svg"
import tw from "../../assets/img/tw.svg"


const Socials = () => {
    return (
        <div className="flex justify-center gap-2">
            <img src={fb} alt="Facebook" className="w-4 h-4 cursor-pointer dark:filter dark:invert dark:grayscale" />
            <img src={ig} alt="Instagram" className="w-4 h-4 cursor-pointer dark:filter dark:invert dark:grayscale" />
            <img src={tw} alt="Twitter" className="w-4 h-4 cursor-pointer dark:filter dark:invert dark:grayscale" />
            <img src={yt} alt="YouTube" className="w-4 h-4 cursor-pointer dark:filter dark:invert dark:grayscale" />
        </div>
    );
};

export default Socials;