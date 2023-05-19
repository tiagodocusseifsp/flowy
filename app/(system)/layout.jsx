import Bottombar from "@/components/bottombar";
import Mainbody from "@/components/mainbody";

export default function SystemLayout({ children }) {
    return (
        <>

            <header>
                {/* some header here */}
            </header>

            <main>
                <Mainbody>
                    {children}
                </Mainbody>
            </main>

            <footer>
                <Bottombar />
            </footer>
        </>
    )
}