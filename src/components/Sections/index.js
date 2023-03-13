import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Section.css";
import profilePic from "../../assets/122751076_10221136432333479_4752614985414976348_n.jpg";

export const FLOOR_HEIGHT = 4;
export const NUM_FLOORS = 5;

export function Section(props) {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10 ${props.right ? "items-end" : "items-start"}`}
            style={{
                opacity: props.opacity,
            }}
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white  rounded-lg px-8 py-12">{props.children}</div>
                </div>
            </div>
        </section>
    );
}

export function Overlay() {
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);
    const [opacityFourthSection, setOpacityFourthSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);
    const sectionRef = useRef();
    const tl = useRef();

    const element = document.querySelector(".fade-out");

    function scrollHandler(element) {
        const distanceToTop = window.scrollY + element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const scrollTop = document.documentElement.scrollTop;

        console.log("elementHeight", elementHeight);

        const opacity = 1;

        if (scrollTop > distanceToTop) {
            opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
        }

        if (opacity >= 0) {
            element.style.opacity = opacity;
        }

    }

    window.addEventListener("scroll", scrollHandler);

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
        setOpacityFirstSection(1 - scroll.range(0, 1 / 4));
        setOpacitySecondSection(scroll.range(1 / 4, 2 / 4));
        setOpacityThirdSection(scroll.range(2 / 4, 3 / 4));
        setOpacityFourthSection(scroll.range(3 / 4, 4 / 4));
        setOpacityLastSection(scroll.range( 4 / 4, 4 / 4));
    });

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        // VERTICAL ANIMATION
        tl.current.to(
        sectionRef.current.position,
        {
            duration: 2,
            y: -FLOOR_HEIGHT * (NUM_FLOORS - 1),
        },
        0
        );

    }, [])

    return (
        <Scroll html>
            <div className="Sections-container">
                <Section opacity={ 1 }>
                    <div className="Section-container">
                        {/* <div className="Splash-text-container fade-out">
                            <p className="Splash-text">
                                Scroll down to enter my dreamworld!
                                <p className="Splash-arrow Splash-text">
                                    ↓
                                </p>
                            </p>
                        </div> */}
                    </div>
                </Section>
                <Section opacity={1}>
                    <div className="Section-container" ref={sectionRef}>
                        <p className="animate-bounce  mt-6">↑</p>
                        <h1 className="Header-text">Hey I'm Keenly!</h1>
                        <div className="About-container">
                            <div className="About-container-top">
                                <div className="Project-card-top-buttons"></div>
                                <div className="Project-card-top-buttons"></div>
                                <div className="Project-card-top-buttons"></div>
                            </div>
                            <div className="About-container-content">
                                <div className="About-text">
                                    <p className="About-paragraph">I first discovered my love for coding through the online virtual pets game, Neopets. Seeing the creative ways users were customizing their pages using HTML and CSS sparked my interest and led me to learn how to do it myself. Soon, I began helping others to customize their pages as well, and my passion for coding grew even stronger.</p>
                                    <p>
                                        <span className="strong">Email:</span> keenlyhere@gmail.com
                                    </p>
                                    <div className="About-links">
                                        <a href="https://github.com/keenlyhere" target="_blank">
                                            <i className="lni lni-github-original sized"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/keenly-chung-b10485257/" target="_blank">
                                            <i className="lni lni-linkedin-original sized"></i>
                                        </a>
                                        <a href="https://angel.co/u/keenly-chung" target="_blank">
                                            <i className="lni lni-angellist sized"></i>
                                        </a>
                                    <a href="https://keenlychung.com/KeenlyChungResume.pdf" className="About-contact">View my resume</a>

                                    </div>
                                </div>
                                <img src={profilePic} className="About-photo" alt="Keenly's profile photo" />
                            </div>
                        </div>
                    </div>
                </Section>
                <Section opacity={1}>
                    <div className="Section-container">
                        <p className="animate-bounce  mt-6">↑</p>
                        <h1 className="Header-text">Skills</h1>
                        <div className="About-container">
                            <div className="About-container-top">
                                <div className="Project-card-top-buttons"></div>
                                <div className="Project-card-top-buttons"></div>
                                <div className="Project-card-top-buttons"></div>
                            </div>
                            <div className="About-container-content">
                                <div className="About-icons">
                                    <i className="devicon-javascript-plain sizedXL"></i>
                                    <i className="devicon-python-plain sizedXL"></i>
                                    <i className="devicon-html5-plain sizedXL"></i>
                                    <i className="devicon-css3-plain sizedXL"></i>
                                    <i className="devicon-react-original sizedXL"></i>
                                    <i className="devicon-redux-original sizedXL"></i>
                                    <i className="devicon-express-original sizedXL"></i>
                                    <i className="devicon-sequelize-plain sizedXL"></i>
                                    <i className="devicon-flask-original sizedXL"></i>
                                    <i className="devicon-sqlalchemy-plain sizedXL"></i>
                                    <i className="devicon-nodejs-plain sizedXL"></i>
                                    <i className="devicon-postgresql-plain sizedXL"></i>
                                    <i className="devicon-sqlite-plain sizedXL"></i>
                                    <i className="devicon-amazonwebservices-original sizedXL"></i>
                                    <i className="devicon-mocha-plain sizedXL"></i>
                                    <i className="devicon-git-plain sizedXL"></i>
                                    <i className="devicon-github-original sizedXL"></i>
                                    <i className="devicon-photoshop-plain sizedXL"></i>
                                    <i className="devicon-illustrator-plain sizedXL"></i>
                                </div>
                            </div>

                        </div>
                        {/* <ul>
                            <li>AWS S3</li>
                            <li>Cypress.io</li>
                            <li>Pair Programming</li>
                            <li>Test-Driven Development</li>
                            <li>Object-Oriented Programming</li>
                            <li>Scrum Methodologies</li>
                        </ul> */}
                    </div>
                </Section>
                <Section opacity={1}>
                    <div className="Section-container">

                    <p className="animate-bounce  mt-6">↑</p>
                        <h1 className="Header-text">Projects!</h1>
                        <div className="Project-card-container">
                            <div className="Project-card">
                                <div className="Project-card-top">
                                    <div className="Project-card-top-buttons"></div>
                                    <div className="Project-card-top-buttons"></div>
                                    <div className="Project-card-top-buttons"></div>
                                    <p className="Project-card-top-name">Datcord</p>
                                </div>
                                <div className="Project-card-overlay"></div>
                                <img src="https://camo.githubusercontent.com/f5e67199be049af7de8ddd664a290157c2afb931d76eafec9b431347c56060bb/68747470733a2f2f692e696d6775722e636f6d2f427472466e7a472e676966" alt="Datcord Splash" />
                                <div class="Project-card-details fadeIn-bottom">
                                    <h3 class="Project-card-title">Datcord</h3>
                                    <p class="Project-card-text">Datcord is a full-stack web application clone of Discord, where users have the ability to join, create, and customize servers, and chat in real-time using Socket.io.</p>
                                    <div className="Project-card-buttons">
                                        <a href="https://datcord-project-uauy.onrender.com/" className="Project-card-button" target="_blank">Live</a>
                                        <a href="https://github.com/FatalBanana1/datcord-project-FKPW" className="Project-card-button" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>

                            <div className="Project-card">
                                <div className="Project-card-top">
                                    <div className="Project-card-top-buttons"></div>
                                    <div className="Project-card-top-buttons"></div>
                                    <div className="Project-card-top-buttons"></div>
                                    <p className="Project-card-top-name">Flappy Pork</p>
                                </div>
                                <div className="Project-card-overlay"></div>
                                <img src="https://keenlychung.com/flappy-pork/FlappyPorkDemo.gif" alt="Flappy Pork Demo" />
                                <div class="Project-card-details fadeIn-bottom">
                                    <h3 class="Project-card-title">Flappy Pork</h3>
                                    <p class="Project-card-text">Based on the mobile game Flappy Bird with a unique twist in Flappy Pork, where users navigate a flying pig through a series of obstacles.</p>
                                    <div className="Project-card-buttons">
                                        <a href="https://keenlychung.com/flappy-pork/" className="Project-card-button" target="_blank">Live</a>
                                        <a href="https://github.com/keenlyhere/Flappy-Pork" className="Project-card-button" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>

                            <div className="Project-card">
                                <div className="Project-card-top">
                                    <div className="Project-card-top-buttons"></div>
                                    <div className="Project-card-top-buttons"></div>
                                    <div className="Project-card-top-buttons"></div>
                                    <p className="Project-card-top-name">Daily Moo'd</p>
                                </div>
                                <div className="Project-card-overlay"></div>
                                <img src="https://keenlychung.com/dailymood/dm_02_dailies.gif" alt="Daily Moo'd Dailies Demo" />
                                <div class="Project-card-details fadeIn-bottom">
                                    <h3 class="Project-card-title">Daily Moo'd</h3>
                                    <p class="Project-card-text">Daily Moo’d, a cow-themed full-stack web application clone of the mobile app, Daily Bean, that allows users to record their daily mood, upload images, and record journal entries, manage tasks, and collect and care for virtual pets.</p>
                                    <div className="Project-card-buttons">
                                        <a href="https://daily-mood.onrender.com/" className="Project-card-button" target="_blank">Live</a>
                                        <a href="https://github.com/keenlyhere/daily-mood" className="Project-card-button" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </Scroll>
    );
}
