// Sidebar.js
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose, fun }) {
    const top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const nav = useNavigate()

    const change = (e) => {
        e.preventDefault();
        nav('/')
        fun(!isOpen)
    }
    const change2 = (e) => {
        e.preventDefault();
        nav('/shop')
        fun(!isOpen)
    }
    return (
            <div className={['w-full h-screen fixed top-0 z-70 bg-[#0000006f]', isOpen ? 'translate-x-0' : '-translate-x-full transform transition-transform duration-300'].join(' ')} onClick={onClose}>
                <div
                    className={[
                        'fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300',
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    ].join(' ')}
                >
                    <button className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
                        ✕
                    </button>
                    <div className="p-6">
                        <h2 className="font-semibold text-xl mb-6">Menu</h2>
                        <nav className="flex flex-col gap-6">
                            <Link onClick={change} to="/" className="text-lg">Home</Link>
                            <Link onClick={change2} to="/shop" className="text-lg">Shop</Link>
                        </nav>
                    </div>
                </div>
            </div>
    );
}
