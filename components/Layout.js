import Script from "next/script";

import HeadMeta from "./HeadMeta";
import Navbar from "./Navbar";

const GA_MEASUREMENT_ID = "G-LM46T5SBKY";

function Layout({ children }) {
    return (
        <div>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', ${GA_MEASUREMENT_ID});
                `}
            </Script>
            <HeadMeta />
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
