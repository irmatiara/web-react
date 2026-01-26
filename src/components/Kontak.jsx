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
		<section id="kontak" className="bg-[#F5F5DC] py-16 px-4 text-center">
			<h2 className="mb-10 text-xl">Contact Us</h2>
			<form name="contact-form" onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
				<div className="flex justify-between w-[400px]">
					<label htmlFor="name">Nama Lengkap</label>
					<input type="text" id="name" name="nama" value={form.nama} onChange={handleChange} className="w-[250px] border border-gray-300 rounded p-2 text-black"/>
				</div>
				<div className="flex justify-between w-[400px]">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="w-[250px] border border-gray-300 rounded p-2 text-black"/>
				</div>
				<div className="flex justify-between w-[400px]">
					<label htmlFor="pesan">Pesan</label>
					<textarea id="pesan" name="pesan" rows={3} value={form.pesan} onChange={handleChange} className="w-[250px] border border-gray-300 rounded p-2 text-black"/>
				</div>
				<button type="submit" className="btn-primary">Kirim</button>
			</form>
		</section>
	);
}

export default Kontak;
