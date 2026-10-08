'use client'
import { Suspense } from "react"
import ProductCard from "@/components/ProductCard"
import { MoveLeftIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSelector } from "react-redux"

 function ShopContent() {

    // get query params ?search=abc
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const router = useRouter()

    const products = useSelector(state => state.product.list)

    const filteredProducts = search
        ? products.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    return (
        <div className="min-h-[70vh] mx-6">
            <div className=" max-w-7xl mx-auto">
                <div className="flex items-end justify-between gap-4 border-b border-slate-200 py-10 mb-10">
                    <div>
                        <p className="text-xs uppercase tracking-[.2em] text-green-600 font-semibold">The collection</p>
                        <h1 onClick={() => router.push('/shop')} className="text-3xl sm:text-4xl text-slate-900 mt-2 flex items-center gap-2 cursor-pointer">{search && <MoveLeftIcon size={24} />} {search ? `Results for "${search}"` : <>All <span className="font-semibold">products</span></>}</h1>
                        <p className="text-sm text-slate-500 mt-3">{filteredProducts.length} products curated for better work and everyday life.</p>
                    </div>
                    <div className="hidden sm:block text-right text-xs text-slate-400">Ships from our verified partners<br /><span className="text-slate-700">Fast, secure checkout</span></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 mx-auto mb-32">
                    {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    )
}


export default function Shop() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}