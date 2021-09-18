import React, {useContext, useState, useEffect} from "react";
import {WappContext} from "wapplr-react/dist/common/Wapp";

import style from "./style.css";
import photo from "./photo.jpg";
import howWasItMade from "./how-was-it-made.jpg";
import clsx from "clsx";

export default function Concept(props) {

    const context = useContext(WappContext);
    const {wapp} = context;
    wapp.styles.use(style);

    return (
        <div className={style.concept}>
            <div className={style.section}>
                <div className={style.title}>
                    <span>{"The vase "}</span>
                    <span className={style.and}>{"and "}</span>
                    <span className={style.finialColor}>{"the finial"}</span>
                </div>
                <div className={style.subtitle}>
                    {"A conceptual, new-media-art website for the 'The vase and the finial' painting"}
                </div>
            </div>
            <div className={style.section}>
                <div className={style.sectionTitle}>{"Concept"}</div>
                <div className={style.sectionContent}>
                    <div className={style.column}>
                        <div>{"In logical order, an artist creates a work in such a way that first make sketches and learn about the subject, then create the artwork. Now my concept was to reverse this process:"}</div>
                        <ul>
                            <li>{"the oil painting was made first (2012)"}</li>
                            <li>{"then the computer-edited 2D version was made (2021)"}</li>
                        </ul>
                        <div>{"During the process the artwork to become more perfect, more realistic. I was wondering how changes the end result, and what is changing in the creator."}</div>
                        <div>{"When I get to the end of the process I learned it perfectly where is the correct shadow and what is the exact shape. But it can't impress the original artwork because it was completed 9 years ago."}</div>
                        <div>{"The 2 images and this website where I present them together, is an interactive realization of a conceptual idea what presenting the creating process. Separately examined the painting is a realistic still life."}</div>
                    </div>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.sectionTitle}>{"The original"}</div>
                <div className={style.sectionContent}>
                    <div className={style.column}>
                        <div>{"In 2012, I painted this still life on 40x50 canvas with oil. My teacher was Csaba Flip. He is a Munkacsy award-winning painter and teacher. I created this painting in his studio."}</div>
                        <div>{"In the composition show a vase and a finial next to each other. The black vase is from my mother, and the roof decoration is made of copper by my carpenter father."}</div>
                    </div>
                    <div className={clsx(style.column, style.grayBgForPhoto)}>
                        <img className={style.photo} src={photo}/>
                    </div>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.sectionTitle}>{"Why pure-css?"}</div>
                <div className={style.sectionContent}>
                    <div className={style.column}>
                        <div>{"I made version 2D with pure-css. There is only one reason for this: I am a developer, and it was a challenge for me. In Illustrator, I could have done it much faster, but it’s just would have been a sketch .... In this form, it is also valid as an independent artwork within the code-art genre."}</div>
                        <div>{"Some people use a program that converts an image to css, but that's not the real solution, it's just a game, or a joke: \"look how skillful I am?\". All this program does is convert the image pixel by pixel. Real pure-css creations consist of shapes like vector graphics and not pixels."}</div>
                        <div className={clsx(style.column, style.grayBgForPhoto)}>
                            <img className={style.howWasItMade} src={howWasItMade}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.sectionTitle}>{"Code art"}</div>
                <div className={style.sectionContent}>
                    <div className={style.column}>
                        <div>{"There are countless types of computer-generated artworks. The generative art when an object repeats, and one or more parameters are constantly changing. One such branch of art is the fractal."}</div>
                        <div>{"The code art is a branch of digital art which instead of to show repetitions, all item is unique as a brushstroke."}</div>
                        <div>{"In programming, object inheritance is often used, especially In object-oriented programming. Functional conventions, on the other hand, require it that the result should always be a new object and not the modified version of the old object. What is the most basic object? A point, a line, a circle or a square, possibly a number, or a string... it is a far-reaching philosophical question."}</div>
                        <div>{"In code art, the expectation is that the items are completely independent of each other so inheritance of the objects should be used as little as possible."}</div>
                        <div>{"Obviously, this also depends on the specifics of the language used. Eg some the pure css artworks there are approaches fit into the code art category.  They do not strive to creating generations or visualize the program code objects in a generalized way,  but use the code as a tool for creating a full-fledged graphics."}</div>
                        <div>{"Overall, code art contrasts itself with generative art and uses the code as a tool. There are no programmed processes in it which would generate the creation of items. Each item exists on its own, independent of the other items, and its creation is the task of the artist."}</div>
                        <div>{"This is not to say only descriptive languages usable for it, scripting languages  usable too respecting the conventions of the branch of art."}</div>
                        <div>{"Some representatives of code art:"}</div>
                        <ul>
                            <li><a href={"https://github.com/cyanharlow"} target={"_blank"}>{"Diana Smith (cyanharlow)"}</a></li>
                            <li><a href={"https://www.newrafael.com/websites"} target={"_blank"}>{"Some of Rafaël Rozendaal's atrworks"}</a></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.sectionTitle}>{"About me"}</div>
                <div className={style.sectionContent}>
                    <div className={style.column}>
                        <div><span>{"You can read more about me on my "}</span><span><a href={"https://github.com/C4RC0"} target={"_blank"}>{"Github"}</a></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
