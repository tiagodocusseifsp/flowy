'use client'


import Leftbar from "./leftbar"
import Topbar from "./topbar"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";

export default function Mainbody({ children }) {

    const [showLeftBar, setLeftBarShown] = useState(true);
    const [windowSize, setWindowSize] = useState(null);

    const pathname = usePathname();

    const toogleLeftBar = () => {
        setLeftBarShown(!showLeftBar);
    }

    useEffect(() => {
        if (windowSize == "sm" || windowSize == "md")
            if (showLeftBar)
                toogleLeftBar();
    }, [pathname])

    useEffect(() => {
        function resize() {
            if (window.innerWidth < 640)
                setWindowSize("sm");
            else if (window.innerWidth < 768)
                setWindowSize("md");
            else if (window.innerWidth < 1024)
                setWindowSize("lg");
            else if (window.innerWidth < 1280)
                setWindowSize("xl");
            else
                setWindowSize("2xl");
        }

        resize();
        window.addEventListener('resize', resize);
    }, [])

    useEffect(() => {
        if (windowSize == "sm" || windowSize == "md")
            setLeftBarShown(false);
        else
            setLeftBarShown(true);
    }, [windowSize])

    return (
        <>
            <Topbar toogleLeftBar={toogleLeftBar} />

            <div className="flex mt-20">

                {showLeftBar ?
                    <div className="flex-none w-64">
                        <Leftbar show={showLeftBar} toogle={setLeftBarShown} />
                    </div>
                    : null
                }

                <div className="flex-1 mx-2">
                    {children}
                </div>
            </div>
        </>
    )
}