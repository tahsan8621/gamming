import "./globals.css";
import Header from "@/app/components/Layouts/Header";
import Sidebar from "@/app/components/Layouts/Sidebar";
import Footer from "@/app/components/Layouts/Footer/Footer";

export default function RootLayout({

                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <div className={`flex`}>
            <Sidebar/>
            <main className={`main`}>
                <Header/>
                {children}
                <Footer/>
            </main>

        </div>

        </body>
        </html>
    );
}
