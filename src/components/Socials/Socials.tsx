import fb from "../../assets/img/fb.svg"
import ig from "../../assets/img/ig.svg"
import yt from "../../assets/img/yt.svg"
import x from "../../assets/img/x.svg"
import tk from "../../assets/img/tk.svg"


const Socials = () => {
    return (
        <div className="flex justify-center gap-2 px-3">
            <img src={tk} alt="Facebook" className="w-5 h-5 cursor-pointer dark:filter dark:invert dark:grayscale" />
            <img src={ig} alt="Instagram" className="w-5 h-5 cursor-pointer dark:filter dark:invert dark:grayscale" />
            <img src={x} alt="Twitter" className="w-5 h-5 cursor-pointer dark:filter dark:invert dark:grayscale" />
            <img src={fb} alt="Facebook" className="w-5 h-5 cursor-pointer dark:filter dark:invert dark:grayscale" />            
            <img src={yt} alt="YouTube" className="w-5 h-5 cursor-pointer dark:filter dark:invert dark:grayscale" />
        </div>
    );
};

export default Socials;