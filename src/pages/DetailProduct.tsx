import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductImg from '../assets/img/produk.png';
import { Add, Remove } from '@mui/icons-material';
import ProductSection from '../components/sections/ProductSection';
import Footer from '../components/sections/FooterSection';

interface ProductType {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    gallery: string[];
    category: string;
    description: string;
}

const products: ProductType[] = [
    {
        id: 1,
        name: 'Produk A',
        price: 'Rp 150.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg, ProductImg, ProductImg],
        category: 'Elektronik',
        description: 'Deskripsi Produk A: Elektronik dengan kualitas terbaik.'
    },
    {
        id: 2,
        name: 'Produk B',
        price: 'Rp 200.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg],
        category: 'Pakaian',
        description: 'Deskripsi Produk B: Pakaian fashion terbaru dengan bahan berkualitas.'
    },
    {
        id: 3,
        name: 'Produk C',
        price: 'Rp 300.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg, ProductImg],
        category: 'Elektronik',
        description: 'Deskripsi Produk C: Peralatan elektronik yang sangat berguna untuk kehidupan sehari-hari.'
    },
    {
        id: 4,
        name: 'Produk D',
        price: 'Rp 250.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg, ProductImg],
        category: 'Perabot Rumah Tangga',
        description: 'Deskripsi Produk D: Perabot rumah tangga yang efisien dan praktis.'
    },
    {
        id: 5,
        name: 'Produk E',
        price: 'Rp 450.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg],
        category: 'Elektronik',
        description: 'Deskripsi Produk E: Alat elektronik dengan teknologi terbaru.'
    },
    {
        id: 6,
        name: 'Produk F',
        price: 'Rp 100.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg],
        category: 'Kecantikan',
        description: 'Deskripsi Produk F: Produk kecantikan yang aman dan efektif.'
    },
    {
        id: 7,
        name: 'Produk G',
        price: 'Rp 120.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg, ProductImg],
        category: 'Kesehatan',
        description: 'Deskripsi Produk G: Suplemen kesehatan untuk menjaga daya tahan tubuh.'
    },
    {
        id: 8,
        name: 'Produk H',
        price: 'Rp 180.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg],
        category: 'Aksesoris',
        description: 'Deskripsi Produk H: Aksesoris fashion yang trendi dan stylish.'
    },
    {
        id: 9,
        name: 'Produk I',
        price: 'Rp 350.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg],
        category: 'Elektronik',
        description: 'Deskripsi Produk I: Gadget canggih dengan fitur terbaru.'
    },
    {
        id: 10,
        name: 'Produk J',
        price: 'Rp 400.000',
        imageUrl: ProductImg,
        gallery: [ProductImg, ProductImg, ProductImg, ProductImg],
        category: 'Peralatan Olahraga',
        description: 'Deskripsi Produk J: Peralatan olahraga yang mendukung gaya hidup sehat.'
    }
];

const ProductDetailPage: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>(ProductImg);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        if (id) {
            const selectedProduct = products.find((product) => product.id === Number(id));
            setProduct(selectedProduct || null);
            if (selectedProduct) {
                setSelectedImage(selectedProduct.imageUrl);
            }
        }
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleIncreaseQuantity = () => setQuantity(quantity + 1);

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="container mx-auto bg-gray-100">
            {product ? (
                <div className="grid grid-cols-1 py-12 px-8 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="w-full h-96 object-contain rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        />
                        <div className="mt-4 flex space-x-4 overflow-y-hidden px-2">
                            {product.gallery.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-20 object-cover rounded-md cursor-pointer transition-all duration-300 transform hover:scale-110 hover:opacity-75 border-2 border-transparent hover:border-gray-400"
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
                        <p className="text-lg text-teal-500 mt-2">{product.price}</p>
                        <p className="mt-4 text-gray-600">{product.category}</p>
                        <p className="mt-4 text-gray-700">{product.description}</p>

                        <div className="mt-6 flex items-center space-x-4">
                            <button
                                onClick={handleDecreaseQuantity}
                                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-150"
                            >
                                <Remove />
                            </button>
                            <span className="text-xl">{quantity}</span>
                            <button
                                onClick={handleIncreaseQuantity}
                                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-150"
                            >
                                <Add />
                            </button>
                        </div>

                        <div className="mt-6 flex items-center justify-center">
                            <button
                                onClick={() => {}}
                                className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-200"
                            >
                                Pesan Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}

            <ProductSection />
            <Footer />
        </div>
    );
};

export default ProductDetailPage;