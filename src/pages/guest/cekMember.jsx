import { useState } from 'react';
import members from '../../data/member.json'; 

export default function CekMember() {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setResult(null);

        if (!email || !email.includes('@')) {
            setError('Email harus valid dan tidak boleh kosong.');
            return;
        }

        const member = members.find(m => m.email.toLowerCase() === email.toLowerCase());

        if (member) {
            setResult(member);
        } else {
            setError('❌ Email tidak terdaftar sebagai member.');
        }
        
    };

    const getColor = (type) => {
        switch (type) {
            case 'silver': return 'bg-gray-200 text-gray-700';
            case 'gold': return 'bg-yellow-300 text-yellow-800';
            case 'platinum': return 'bg-blue-200 text-blue-800';
            default: return '';
        }
    };

    return (
       
        <div className="max-w-md mx-auto mt-10 p-5 rounded-xl shadow-md bg-white border border-orange-200">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">🍃 Cek Keanggotaan Sedap</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Masukkan email anda"
                    className="w-full border rounded p-2 mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" type="submit">
                    Cek Sekarang
                </button>
            </form>

            {error && (
                <p className="mt-4 text-red-600 font-semibold">{error}</p>
            )}

            {result && (
                <div className={`mt-4 p-4 rounded-lg ${getColor(result.tipe_member)}`}>
                    📜 Selamat datang, <strong>{result.nama}</strong>! <br />
                    Anda adalah member <strong>{result.tipe_member.toUpperCase()}</strong>.
                </div>
            )}

        </div>
    );
}
