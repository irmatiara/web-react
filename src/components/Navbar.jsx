import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
	const [menuAktif, setMenuAktif] = useState(false)
	const location = useLocation()

	const notFound = location.pathname === '/notfound'
	const halamanDetail = ['/ai', '/html', '/internet', '/algo']
	const detail = halamanDetail.some(path =>
		location.pathname.startsWith(path)
	)

	const linkClass = isActive => `
		block py-3 px-4
		md:py-1.5 md:rounded-md md:border md:border-[#F3D58D]
		transition-colors
		hover:bg-[#F3D58D] hover:text-[#2E4365]
		${isActive ? 'bg-[#F3D58D] text-[#2E4365]' : 'text-[#F3D58D]'}
	`

	return (
		<nav className="bg-[#2E4365] sticky top-0 z-10 shadow-md">
			<div className="w-[90%] mx-auto min-h-[60px] flex justify-between items-center">
				<img className="h-[80px] object-contain mt-[5px]" src="/assets/logo.svg" alt="Logo"/>
				{!detail && (
					<>
						<div className="flex flex-col justify-around w-[30px] h-[20px] cursor-pointer z-20 md:hidden" onClick={() => setMenuAktif(!menuAktif)}>
							<div className="w-[30px] h-[3px] bg-[#F3D58D]" />
							<div className="w-[30px] h-[3px] bg-[#F3D58D]" />
							<div className="w-[30px] h-[3px] bg-[#F3D58D]" />
						</div>
						<ul
							className={`absolute top-[60px] left-0 w-full bg-[#2E4365] shadow-md py-4 flex-col
							md:flex md:flex-row md:static md:w-auto md:bg-transparent md:shadow-none md:py-0
							${menuAktif ? 'flex' : 'hidden'}`}>
							{notFound ? (
								<li className="text-center my-2 md:my-0"><Link to="/artikel" className={linkClass(location.pathname === '/artikel')} onClick={() => setMenuAktif(false)}>Artikel</Link></li>
							) : (
								<>
									<li className="text-center my-2 md:my-0 me-3"><Link to="/" className={linkClass(location.pathname === '/')} onClick={() => setMenuAktif(false)}>Beranda</Link></li>
									<li className="text-center my-2 md:my-0 me-3"><Link to="/artikel" className={linkClass(location.pathname === '/artikel')} onClick={() => setMenuAktif(false)}>Artikel</Link></li>
									<li className="text-center my-2 md:my-0 me-3"><Link to="/about" className={linkClass(location.pathname === '/about')} onClick={() => setMenuAktif(false)}>About Us</Link></li>
									<li className="text-center my-2 md:my-0"><Link to="/#kontak" className={linkClass(location.hash === '#kontak')} onClick={() => setMenuAktif(false)}>Kontak</Link></li>
								</>
							)}
						</ul>
					</>
				)}
			</div>
		</nav>
	)
}

export default Navbar
