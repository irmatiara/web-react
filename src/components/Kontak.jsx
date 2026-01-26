import { useState } from "react";

function Kontak() {
	const [form, setForm] = useState({
		nama: "",
		email: "",
		pesan: ""
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("pesan anda sudah di kirim");

		// reset form
		setForm({
			nama: "",
			email: "",
			pesan: ""
		});
	};

	return (
		<section id="kontak" className="section" style={{ backgroundColor: '#F5F5DC' }}>
			<h2>Contact Us</h2>
			<form name="contact-form" onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 15}}>
				<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
					<label htmlFor="name">Nama Lengkap</label>
					<input type="text" id="name" name="nama" value={form.nama} onChange={handleChange} style={{ width: 250 }}/>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" value={form.email} onChange={handleChange} style={{ width: 250 }}/>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
					<label htmlFor="pesan">Pesan</label>
					<textarea id="pesan" name="pesan" rows={3} value={form.pesan} onChange={handleChange} style={{ width: 250 }}/>
				</div>
				<button type="submit" className="btn-primary">Kirim</button>
			</form>
		</section>
	);
}

export default Kontak;
