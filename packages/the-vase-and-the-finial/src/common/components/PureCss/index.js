import React, {useContext, useEffect, useState, useRef} from "react";
import {WappContext} from "wapplr-react/dist/common/Wapp";
import style from "./style.css";
import clsx from "clsx";

const containers = {};

export default function PureCss(props) {

    const context = useContext(WappContext);

    const {wapp} = context;
    const {fullscreen = true} = props;

    wapp.styles.use(style);

    const container = useRef();
    const scaleRef = useRef();

    if (!containers[wapp.globals.WAPP]){
        containers[wapp.globals.WAPP] = {};
    }

    function getScale() {
        const parentContainer = containers[wapp.globals.WAPP].current || typeof window !== "undefined" && window;
        const scaleContainer = containers[wapp.globals.WAPP].scale && containers[wapp.globals.WAPP].scale.children[0];
        if (parentContainer && scaleContainer){
            return Math.min(parentContainer.offsetWidth / scaleContainer.offsetWidth, parentContainer.offsetHeight / scaleContainer.offsetHeight)
        }
        return 1;
    }

    const [scale, setScale] = useState(getScale());

    useEffect(function didMount(){

        function onResize() {
            const scale = getScale();
            setScale(scale)
        }

        function addResizeListeners() {
            if (container.current && typeof ResizeObserver !== "undefined") {
                const resizeObserver = new ResizeObserver((entries) => {
                    onResize(entries);
                });
                resizeObserver.observe(container.current);
                return function removeEventListener(){
                    resizeObserver.disconnect();
                }
            } else {
                window.addEventListener("resize", onResize);
                return function removeEventListener(){
                    window.removeEventListener("resize", onResize);
                }
            }
        }

        containers[wapp.globals.WAPP].current = container.current;
        containers[wapp.globals.WAPP].scale = scaleRef.current;

        const removeResizeListeners = addResizeListeners();
        onResize();

        return function willUnmount() {
            removeResizeListeners();
        }

    }, []);

    return (
        <div className={clsx(style.canvas, {[style.fullscreen] : fullscreen})} ref={container}>
            <div className={style.bg} />
            <div className={style.center}>
                <div className={style.scale} ref={scaleRef} style={{transform: "scale("+scale+")"}}>
                    <div className={style.composition}>
                        <div className={style.group}>
                        <div className={style.bgGroup}>
                            <div className={style.wall}>
                                <div className={style.layer1}>
                                    <div className={style.gray} />
                                </div>
                            </div>
                            <div className={style.table} >
                                <div className={style.layer1}>
                                    <div className={style.brown} />
                                </div>
                            </div>
                        </div>
                        <div className={style.objectGroup}>
                            <div className={style.vase}>
                                <div className={style.layer1}>
                                    <div className={style.tableShadow}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part3)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                    <div className={style.wallShadow}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part3)}>
                                            <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part4)}>
                                            <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part5)} >
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part6)} >
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part7)} >
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part8)} >
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part9)} >
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part10)} >
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part11)} >
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.layer2}>
                                    <div className={clsx(style.defaultShape, style.part1)}>
                                        <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part2)}>
                                        <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part3)}>
                                        <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part4)}>
                                        <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part5)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part6)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part7)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part8)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part9)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part10)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part11)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part12)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                </div>

                                <div className={clsx(style.layer3)}>
                                    <div className={clsx(style.defaultShape, style.part1)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                </div>

                                <div className={clsx(style.layer4)}>
                                    <div className={clsx(style.defaultShape, style.part1)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part2)} >
                                        <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part3)} >
                                        <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part4)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part5)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part6)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part7)} >
                                        <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                    </div>
                                </div>

                                <div className={clsx(style.layer5)}>
                                    <div className={clsx(style.defaultShape, style.part1)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part2)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part3)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                </div>

                                <div className={clsx(style.layer6)}>
                                    <div className={clsx(style.defaultShape, style.part1)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part2)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part3)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part4)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part5)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part6)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part7)} >
                                        <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                    </div>
                                </div>

                                <div className={clsx(style.layer7)}>
                                    <div className={clsx(style.defaultShape, style.part1)} />
                                    <div className={clsx(style.defaultShape, style.part2)} />
                                    <div className={clsx(style.defaultShape, style.part3)} >
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                    <div className={clsx(style.defaultShape, style.part4)} >
                                        <div />

                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />
                                        <div />

                                        <div />
                                        <div />

                                    </div>
                                </div>

                            </div>
                            <div className={style.bulrush}>
                                <div className={style.layer1}>
                                    <div className={style.wallShadow}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part3)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part4)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.layer2}>
                                    <div className={style.stalk}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.concave)}/>
                                        </div>
                                    </div>
                                    <div className={style.cylindricalHead}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part3)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.layer3}>
                                    <div className={style.cylindricalHead}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.layer4}>
                                    <div className={style.cylindricalHead}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.finial}>
                                <div className={style.layer1}>
                                    <div className={style.tableShadow}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                    <div className={style.wallShadow}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part3)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.layer2}>
                                    <div className={style.coneLower}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part3)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part4)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                    <div className={style.dodecahedron}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.pentagon)}>
                                                <div />
                                                <div />
                                            </div>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.pentagon)}>
                                                <div />
                                                <div />
                                            </div>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part3)}>
                                            <div className={clsx(style.defaultShapeInner, style.pentagon)}>
                                                <div />
                                                <div />
                                            </div>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part4)}>
                                            <div className={clsx(style.defaultShapeInner, style.pentagon)}>
                                                <div />
                                                <div />
                                            </div>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part5)}>
                                            <div className={clsx(style.defaultShapeInner, style.pentagon)}>
                                                <div />
                                                <div />
                                            </div>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part6)}>
                                            <div className={clsx(style.defaultShapeInner, style.pentagon)}>
                                                <div />
                                                <div />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.coneUpper}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part3)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part4)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.layer3}>
                                    <div className={style.dodecahedron}>
                                        <div className={clsx(style.defaultShape, style.part1)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)} />
                                        </div>
                                        <div className={clsx(style.defaultShape, style.part2)}>
                                            <div className={clsx(style.defaultShapeInner, style.convex)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
