import { Link } from 'react-router-dom'

function ArtikelPopuler({ artikel }) {
	return (
		<section id="artikel" className="py-16 px-4 text-center">
			<h2 className='text-center pb-8 text-3xl font-bold'>Artikel Populer</h2>
			<div className="flex flex-wrap justify-center gap-6 w-[90%] mx-auto">
				{artikel.map((art, index) => (
					<div className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-[#f4f7fc] rounded-lg shadow-md overflow-hidden transition-transform duration-300 p-2.5 flex flex-col justify-between" key={index}>
						<img src={art.image} alt={art.title} className="w-full h-[200px] object-contain bg-[#f8f9fa] mt-5" />
						<div className="flex flex-col justify-between my-5">
							<h3 className="mb-2 text-lg font-bold mt-2.5">{art.title}</h3>
							<p className="text-base mb-4 text-[#444]">{art.description}</p>
							<Link to={art.link} className="border border-[#2E4365] text-[#2E4365] py-2 px-4 rounded-md no-underline self-center mt-auto hover:bg-[#2E4365] hover:text-[#F3D58D]">Baca Selengkapnya</Link>
						</div>
					</div>
				))}
				<Link to="/artikel" className="border border-[#2E4365] text-[#2E4365] py-2 px-4 rounded-md no-underline self-center mt-auto hover:bg-[#2E4365] hover:text-[#F3D58D] ml-auto block w-fit">Artikel Lainnya</Link>
			</div>
		</section>
	)
}

export default ArtikelPopuler