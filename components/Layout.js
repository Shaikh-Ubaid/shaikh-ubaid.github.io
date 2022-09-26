import Script from "next/script";

import HeadMeta from "./HeadMeta";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <div>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', ${process.env.GA_MEASUREMENT_ID});
                `}
            </Script>
            <HeadMeta />
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
