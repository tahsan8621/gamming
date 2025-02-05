import "./globals.css";
import Header from "@/app/components/Layouts/Header";
import Sidebar from "@/app/components/Layouts/Sidebar";

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
            </main>
        </div>

        <footer className="p-4 bg-gray-200 text-center">© 2025 My App</footer>
        </body>
        </html>
    );
}
