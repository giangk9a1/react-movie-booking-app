import { Outlet } from "react-router-dom";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
export default function HomeTemplate() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 font-['Manrope',ui-sans-serif,sans-serif] text-slate-100 antialiased">
            <Header />
            
            <main className="flex-1 pb-28 pt-14 md:pb-24 md:pt-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
