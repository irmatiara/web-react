import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import ArtikelPopuler from './components/ArtikelPopuler'
import Kontak from './components/Kontak'
import Footer from './components/Footer'

function Home() {
	const location = useLocation()

	useEffect(() => {
		if (location.hash === '#kontak') {
			document.getElementById('kontak')?.scrollIntoView({
				behavior: 'smooth',
			})
		} else {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	}, [location])

	return (
		<>
			<Navbar />
			<section className="hero">
				<img src="/assets/1.png" alt="" />
				<div className="hero-content">
					<h1>Belajar Teknologi Jadi Mudah</h1>
					<p>
						ThinkLyttleStars adalah ruang belajar yang sederhana dan ramah,
						di mana setiap artikel membantu kamu memahami dunia digital
						dengan cara yang ringan. Nggak perlu waktu lama, cukup luangkan
						beberapa menit untuk membaca dan kamu akan mendapat wawasan
						baru yang bermanfaat untuk keseharianmu.
					</p>
				</div>
			</section>
			<ArtikelPopuler artikel={[
				{
					image: '/assets/ai (2).jfif',
					title: 'Apa Itu Artificial Intelligence?',
					description: 'Kenali dasar-dasar kecerdasan buatan dan bagaimana teknologi ini mengubah dunia.',
					link: '/ai'
				},
				{
					image: '/assets/html.jfif',
					title: 'Mengenal HTML',
					description: 'Mulai langkah pertama dalam dunia pemrograman web dengan memahami struktur HTML.',
					link: '/html'
				},
				{
					image: '/assets/internet.jfif',
					title: 'Bagaimana Internet Bekerja?',
					description: 'Pelajari perjalanan data dari komputer kamu hingga sampai ke seluruh dunia!',
					link: '/internet'
				},
			]} />
			<Kontak />
			<Footer />
		</>
	)
}

export default Home