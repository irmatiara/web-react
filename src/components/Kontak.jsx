function Kontak() {
	return (
		<section id="kontak" className="section" style={{ backgroundColor: '#F5F5DC' }}>
			<h2>Contact Us</h2>
			<form name="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
					<label htmlFor="name">Nama Lengkap</label>
					<input type="text" id="name" name="nama" style={{ width: 250 }} />
				</div>

				<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" style={{ width: 250 }} />
				</div>

				<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
					<label htmlFor="pesan">Pesan</label>
					<textarea id="pesan" name="pesan" rows={3} style={{ width: 250 }} />
				</div>

				<button type="submit" className="btn-primary">Kirim</button>
			</form>
		</section>
	)
}

export default Kontak