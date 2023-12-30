import Image from "next/image";
import "@/styles/home.css";
import { TypeAnimation } from "react-type-animation";
export const Home = () => {
    return (
        <div className="home flex align-center" id="home">
            <section className="home-textHolder flex flex-col ">
                <h1>Hello, I&apos;m </h1>
                <p className="text-gradient-wrapper">
                    <TypeAnimation
                        sequence={[
                            "Dayanand !",
                            1000,
                            "a Developer !",
                            1000,
                            "a Full Stack Engineer !",
                            1000,
                        ]}
                        repeat={Infinity}
                        wrapper="span"
                        speed={50}
                    />
                </p>
                <p className="home-description">
                    A passionate web developer riding the MERN wave! 👨‍💻✨ Ready
                    to turn digital dreams into reality. Scroll down to see my
                    coding odyssey!
                </p>
            </section>

            <section className="home-imgHolder flex justify-center align-center">
                <Image
                    src={"/kakashi.png"}
                    alt="Home image"
                    width={573}
                    height={573}
                    id="homeImg"
                />
            </section>
        </div>
    );
};

export default Home;
