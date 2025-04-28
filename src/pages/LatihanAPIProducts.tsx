import React, { useEffect, useState } from "react";
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Modal } from '@mui/material';

interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quota: number;
}

const Produk: React.FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [cartItems, setCartItems] = useState<{ id: number, quantity: number }[]>([]);
    const [openCartModal, setOpenCartModal] = useState(false);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                const updatedProducts = res.data.map((product: ProductType) => ({
                    ...product,
                    quota: Math.floor(Math.random() * (10 + 1)),
                }));
                setProducts(updatedProducts);
            })
            .catch((err) => {
                console.error("Gagal ambil data:", err);
            });
    }, []);


    const toggleCart = (productId: number) => {
        const productInCart = cartItems.find(item => item.id === productId);
        if (productInCart) {
            setCartItems(cartItems.filter(item => item.id !== productId));
        } else {
            setCartItems([...cartItems, { id: productId, quantity: 1 }]);
        }
    };

    const updateQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity < 1 || newQuantity > products.find(p => p.id === productId)?.quota!) return;
        setCartItems(cartItems.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItemFromCart = (productId: number) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const handleOpenCartModal = () => setOpenCartModal(true);
    const handleCloseCartModal = () => setOpenCartModal(false);

    // Fungsi untuk menghitung total harga keranjang
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                return total + product.price * item.quantity;
            }
            return total;
        }, 0);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-100 to-pink-100 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-slate-700">Katalog Online Ieumah</h1>
                <div className="relative cursor-pointer" onClick={handleOpenCartModal}>
                    <ShoppingCartIcon style={{ fontSize: 36 }} className="text-slate-700" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">{cartItems.length}</span>
                </div>
            </div>

            {/* Creator Info */}
            <p className="text-center text-sm text-gray-500">
                Created by Harist Fadlilah - 232605005
            </p>
            <p className="text-center text-xs text-gray-500 mb-10">
                Refresh Aja Kalau Ganemu Kouta = 0
            </p>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 12).map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-48 w-full object-contain bg-gray-100 p-4"
                        />
                        <div className="p-6 flex flex-col justify-between h-60">
                            <div>
                                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{product.title}</h2>
                                <p className="text-gray-700 flex items-center mb-2">
                                    <AttachMoneyIcon fontSize="small" className="mr-1" /> {product.price}
                                </p>
                                <p className="text-gray-500 text-sm line-clamp-2">{product.description.slice(0, 80)}...</p>
                                <p className="text-red-500 text-sm font-bold">Kuota: {product.quota}</p>
                            </div>

                            <button
                                onClick={() => toggleCart(product.id)}
                                className={`mt-4 flex items-center justify-center w-full py-2 px-4 rounded-lg transition font-semibold ${cartItems.some(item => item.id === product.id)
                                    ? 'bg-red-500 hover:bg-red-600 text-white'
                                    : product.quota <= 0
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-green-500 hover:bg-green-600 text-white'
                                    }`}
                                disabled={product.quota <= 0 && !cartItems.some(item => item.id === product.id)}
                            >
                                <ShoppingCartIcon fontSize="small" className="mr-2" />
                                {cartItems.some(item => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Cart Details */}
            <Modal
                open={openCartModal}
                onClose={handleCloseCartModal}
                aria-labelledby="cart-modal-title"
                aria-describedby="cart-modal-description"
            >
                <div className="bg-white p-6 rounded-lg w-11/12 sm:w-1/2 md:w-1/3 mx-auto mt-20 shadow-xl">
                    <h2 className="text-2xl font-semibold">Detail Cart</h2>
                    <span className=" mb-20">Mohon Uangnya Pas yaa Gada Receh hehe :)</span>
                    <div className="space-y-4 mt-10">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-lg text-gray-500">Keranjang Anda kosong</p>
                        ) : (
                            cartItems.map((item) => {
                                const product = products.find(p => p.id === item.id);
                                return (
                                    product && (
                                        <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                                            <div className="flex items-center">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="h-16 w-16 object-contain mr-4"
                                                />
                                                <div>
                                                    <h3 className="text-lg font-semibold">{product.title}</h3>
                                                    <p className="text-gray-500 text-sm">{product.price}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                    className="px-4 py-2 text-white bg-blue-500 rounded-lg disabled:bg-gray-300"
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    disabled={item.quantity >= product.quota}
                                                    className="px-4 py-2 text-white bg-blue-500 rounded-lg disabled:bg-gray-300"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeItemFromCart(item.id)}
                                                className="text-red-500 font-semibold"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )
                                );
                            })
                        )}
                    </div>

                    {/* Total Belanja */}
                    <div className="mt-6 flex justify-between font-semibold text-lg">
                        <span>Total Belanja:</span>
                        <span>{calculateTotal().toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleCloseCartModal}
                            className="px-6 py-2 bg-red-500 text-white rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Produk;
