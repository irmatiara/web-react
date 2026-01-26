import { Link } from 'react-router-dom'

function ArtikelPopuler({ artikel }) {
	return (
		<section id="artikel" className="py-16 px-4 text-center">
			<h2 className='text-center' style={{ paddingBottom: 30 }}>Artikel Populer</h2>
			<div className="card-grid">
				{artikel.map((art, index) => (
					<div className="card" key={index}>
						<img src={art.image} alt={art.title} />
						<div className="card-body">
							<h3>{art.title}</h3>
							<p>{art.description}</p>
							<Link to={art.link} className="btn-outline">Baca Selengkapnya</Link>
						</div>
					</div>
				))}
				<Link to="/artikel" className="btn-outline" style={{ marginLeft: 'auto', display: 'block', width: 'fit-content' }}>Artikel Lainnya</Link>
			</div>
		</section>
	)
}

export default ArtikelPopuler