interface NavigationButtonProps {
    direction: string,
    onClick: () => void
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick }) => {
    const rotate = direction === "left" ? "" : "rotate-180";

    return (
        <button
            className={`absolute ${direction === "left" ? "left-3 lg:left-3" : "right-3 lg:right-3"} bg-opacity-50 hover:bg-opacity-100 top-1/2 -translate-y-1/2 transition ease-in-out delay-150 hover:scale-110 duration-300`}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                className={`${rotate}`}
            >
                <g filter="url(#filter0_d)">
                    <path
                        d="M7 26C7 12.7452 17.7452 2 31 2C44.2548 2 55 12.7452 55 26C55 39.2548 44.2548 50 31 50C17.7452 50 7 39.2548 7 26Z"
                        fill="white"
                    ></path>
                    <path
                        d="M34.2044 16.2905C34.5949 16.681 34.5949 17.3141 34.2044 17.7047L25.9116 25.9974L29.2587 29.3373C29.6492 29.7278 29.6492 30.361 29.2587 30.7515C28.8682 31.142 28.235 31.142 27.8445 30.7515L23.7903 26.7045C23.3998 26.314 23.3998 25.6809 23.7903 25.2903L32.7902 16.2905C33.1807 15.8999 33.8139 15.8999 34.2044 16.2905Z"
                        fill="black"
                    ></path>
                    <path
                        d="M31.3816 32.8808C31.7721 32.4902 32.4053 32.4902 32.7958 32.8808L34.21 34.295C34.6006 34.6855 34.6006 35.3187 34.21 35.7092C33.8195 36.0997 33.1863 36.0997 32.7958 35.7092L31.3816 34.295C30.9911 33.9045 30.9911 33.2713 31.3816 32.8808Z"
                        fill="black"
                    ></path>
                </g>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="5"></feOffset>
                        <feGaussianBlur stdDeviation="3.5"></feGaussianBlur>
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                        ></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                    </filter>
                </defs>
            </svg>
        </button>
    );
};

export default NavigationButton;
