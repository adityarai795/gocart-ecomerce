'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import { CreditCardIcon, Heart, RotateCcw, ShieldCheck, StarIcon, TagIcon, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ product }) => {
    const productId = product.id;
    const currency = '₹';
    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const router = useRouter();
    const [mainImage, setMainImage] = useState(product.images[0]);
    const addToCartHandler = () => dispatch(addToCart({ productId }));
    const averageRating = product.rating.reduce((acc, item) => acc + item.rating, 0) / product.rating.length;
    const discount = ((product.mrp - product.price) / product.mrp * 100).toFixed(0);

    return (
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-16">
            <div className="flex max-sm:flex-col-reverse gap-4">
                <div className="flex sm:flex-col gap-3 max-sm:overflow-x-auto">
                    {product.images.map((image, index) => (
                        <button aria-label={`View product image ${index + 1}`} key={index} onClick={() => setMainImage(image)} className={`bg-slate-100 flex items-center justify-center size-20 sm:size-24 shrink-0 rounded-xl border-2 ${mainImage === image ? 'border-green-500' : 'border-transparent'}`}>
                            <Image src={image} className="group-hover:scale-105 transition" alt="" width={70} height={70} />
                        </button>
                    ))}
                </div>
                <div className="relative flex justify-center items-center min-h-[360px] sm:min-h-[520px] flex-1 bg-slate-100 rounded-2xl overflow-hidden surface-grid">
                    <span className="absolute top-5 left-5 rounded-full bg-white px-3 py-1 text-[10px] uppercase tracking-[.18em] text-slate-500">Verified product</span>
                    <button aria-label="Add product to wishlist" className="absolute top-4 right-4 rounded-full bg-white p-3 text-slate-500 hover:text-red-500 transition"><Heart size={18} /></button>
                    <Image className="max-h-[78%] w-auto object-contain" src={mainImage} alt={product.name} width={500} height={500} priority />
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-xs uppercase tracking-[.2em] text-green-700 font-semibold">{product.category}</p>
                <h1 className="text-3xl sm:text-4xl leading-tight font-semibold text-slate-900 mt-3">{product.name}</h1>
                <div className="flex items-center mt-4">
                    {Array(5).fill('').map((_, index) => <StarIcon key={index} size={15} className="text-transparent" fill={averageRating >= index + 1 ? "#16a34a" : "#D1D5DB"} />)}
                    <p className="text-sm ml-3 text-slate-500">{averageRating.toFixed(1)} · {product.rating.length} reviews</p>
                </div>
                <div className="border-y border-slate-200 py-6 my-6">
                    <div className="flex items-end gap-3">
                        <p className="text-3xl font-semibold text-slate-900">{currency}{product.price.toLocaleString('en-IN')}</p>
                        <p className="text-lg text-slate-400 line-through">{currency}{product.mrp.toLocaleString('en-IN')}</p>
                        <span className="rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">-{discount}%</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Inclusive of all applicable taxes</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-4 py-3"><TagIcon size={16} /><p>Save {currency}{(product.mrp - product.price).toLocaleString('en-IN')} on this professional pick</p></div>
                <div className="flex items-end gap-4 mt-8">
                    {cart[productId] && <div className="flex flex-col gap-2"><p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Quantity</p><Counter productId={productId} /></div>}
                    <button onClick={() => !cart[productId] ? addToCartHandler() : router.push('/cart')} className="flex-1 bg-slate-900 text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-green-700 active:scale-95 transition">{!cart[productId] ? 'Add to Cart' : 'View Cart'}</button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8 text-xs text-slate-600">
                    <p className="flex gap-2 items-center"><Truck className="text-green-600" size={18} /> Fast delivery</p>
                    <p className="flex gap-2 items-center"><ShieldCheck className="text-green-600" size={18} /> 2-year warranty</p>
                    <p className="flex gap-2 items-center"><CreditCardIcon className="text-green-600" size={18} /> Secure payment</p>
                    <p className="flex gap-2 items-center"><RotateCcw className="text-green-600" size={18} /> Easy returns</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
