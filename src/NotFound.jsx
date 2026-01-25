import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MateriAi() {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 100px)' }}> {/* Adjust minHeight as needed */}
                <img className="notFound" src="/assets/notFound.png" alt="Page Not Found" style={{ maxWidth: '50%', height: 'auto' }} />
                <p style={{ marginTop: '20px', fontSize: '1.2em', textAlign: 'center' }}>Maaf halaman ini masih dalam tahap perbaikan.</p>
            </div>
            <Footer />
        </>
    );
}
