'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, Cpu, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'

const principles = [
  { icon: Cpu, title: 'Useful innovation', text: 'Technology that solves real problems instead of adding noise to your day.' },
  { icon: ShieldCheck, title: 'Quality first', text: 'Products selected for reliability, thoughtful design, and long-term value.' },
  { icon: HeartHandshake, title: 'People powered', text: 'Helpful support from your first question through post-purchase care.' },
]

export default function AboutPage() {
  return (
    <main className="mx-6">
      <section className="max-w-7xl mx-auto py-16 sm:py-24 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
        <div><p className="text-xs uppercase tracking-[.25em] text-green-700 font-semibold">About GoCart</p><h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-950 mt-5 max-w-2xl">The smarter way to shop for technology.</h1><p className="text-slate-500 leading-7 mt-6 max-w-xl">GoCart is a focused electronics marketplace for people who care about better tools, cleaner design, and technology that earns its place in their life.</p><Link href="/shop" className="inline-flex items-center gap-2 mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Explore the collection <ArrowRight size={17} /></Link></div>
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 min-h-80 flex flex-col justify-between surface-grid"><Sparkles className="text-green-400" size={28} /><div><p className="text-4xl font-semibold">Better choices.</p><p className="text-slate-400 mt-2">Less searching. More doing.</p></div></div>
      </section>
      <section className="max-w-7xl mx-auto border-t border-slate-200 py-16"><div className="grid md:grid-cols-3 gap-8">{principles.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-slate-200 p-7"><Icon className="text-green-600" size={24} /><h2 className="font-semibold text-slate-900 mt-6">{title}</h2><p className="text-sm text-slate-500 leading-6 mt-3">{text}</p></div>)}</div></section>
      <section className="max-w-7xl mx-auto bg-green-50 rounded-3xl p-8 sm:p-14 mb-20"><p className="text-xs uppercase tracking-[.2em] text-green-700 font-semibold">Our promise</p><h2 className="text-3xl font-semibold text-slate-900 mt-4 max-w-2xl">Professional-grade service without the complicated experience.</h2><div className="grid sm:grid-cols-2 gap-4 mt-8 text-sm text-slate-700"><p className="flex gap-2"><CheckCircle2 className="text-green-600" size={18} /> Secure, transparent checkout</p><p className="flex gap-2"><CheckCircle2 className="text-green-600" size={18} /> Support from real people</p><p className="flex gap-2"><CheckCircle2 className="text-green-600" size={18} /> Carefully selected products</p><p className="flex gap-2"><CheckCircle2 className="text-green-600" size={18} /> Easy returns and dependable delivery</p></div></section>
    </main>
  )
}
