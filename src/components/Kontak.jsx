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
			<h2 className="mb-10 text-xl font-bold md:text-2xl">Contact Us</h2>
			<form name="contact-form" onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full md:max-w-[400px]">
					<label htmlFor="name" className="mb-2 md:mb-0">Nama Lengkap</label>
					<input type="text" id="name" name="nama" value={form.nama} onChange={handleChange} className="w-full md:w-[250px] border border-gray-300 rounded p-2 text-black"/>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full md:max-w-[400px]">
					<label htmlFor="email" className="mb-2 md:mb-0">Email</label>
					<input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="w-full md:w-[250px] border border-gray-300 rounded p-2 text-black"/>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full md:max-w-[400px]">
					<label htmlFor="pesan" className="mb-2 md:mb-0">Pesan</label>
					<textarea id="pesan" name="pesan" rows={3} value={form.pesan} onChange={handleChange} className="w-full md:w-[250px] border border-gray-300 rounded p-2 text-black"/>
				</div>
				<button type="submit" className="btn-primary">Kirim</button>
			</form>
		</section>
	);
}

export default Kontak;
