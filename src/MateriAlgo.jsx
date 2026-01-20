import { Link } from "react-router-dom";

export default function MateriAi() {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to="/"><img className="logo" src="/assets/logo.svg" alt="" srcSet="" /></Link>
                    <div className="burger-menu">
						<div className="bar" />
						<div className="bar" />
						<div className="bar" />
					</div>
					<ul className="nav-links">
						<Link to="/" className="btn-outline">Menu Utama</Link>
					</ul>
                </div>
            </nav>
            <img className="notFound" src="/assets/notFound.png" alt="" srcSet="" />
            <footer className="footer">
                <p>© 2025 ThinkLyttleStars. Semua hak dilindungi.</p>
            </footer>
        </>
    );
}
