import { Link } from 'react-router-dom'

function ArtikelPopuler({ articles }) {
	return (
		<section id="artikel" className="section">
			<h2 style={{ paddingBottom: 30 }}>Artikel Populer</h2>
			<div className="card-grid">
				{articles.map((article, index) => (
					<div className="card" key={index}>
						<img src={article.image} alt={article.title} />
						<div className="card-body">
							<h3>{article.title}</h3>
							<p>{article.description}</p>
							<Link to={article.link} className="btn-outline">Baca Selengkapnya</Link>
						</div>
					</div>
				))}
				<Link to="/artikel" className="btn-outline" style={{ marginLeft: 'auto', display: 'block', width: 'fit-content' }}>Artikel Lainnya</Link>
			</div>
		</section>
	)
}

export default ArtikelPopuler