'use client'

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const contactOptions = [
  { icon: Mail, title: 'Email support', value: 'hello@gocart.store', detail: 'We reply within one business day.' },
  { icon: Phone, title: 'Call our team', value: '+91 1800 123 4567', detail: 'Mon–Fri, 9:00 AM–6:00 PM IST.' },
  { icon: MapPin, title: 'Visit our studio', value: 'Bengaluru, India', detail: 'By appointment for business orders.' },
]

export default function ContactPage() {
  return (
    <main className="mx-6"><section className="max-w-7xl mx-auto py-16 sm:py-24"><p className="text-xs uppercase tracking-[.25em] text-green-700 font-semibold">Contact GoCart</p><h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-950 mt-5">Let’s find the right setup.</h1><p className="text-slate-500 leading-7 mt-5 max-w-xl">Questions about a product, a bulk order, or a business setup? Send us a note and our team will get back to you.</p><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 mt-12"><div className="space-y-4">{contactOptions.map(({ icon: Icon, title, value, detail }) => <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 p-5"><div className="rounded-xl bg-green-50 p-3 text-green-700"><Icon size={20} /></div><div><h2 className="font-semibold text-slate-900">{title}</h2><p className="text-sm text-slate-700 mt-1">{value}</p><p className="text-xs text-slate-400 mt-1">{detail}</p></div></div>)}</div><form className="rounded-2xl bg-slate-950 p-7 sm:p-10 text-white" onSubmit={(event) => event.preventDefault()}><div className="flex items-center gap-3"><MessageCircle className="text-green-400" size={22} /><h2 className="text-xl font-semibold">Send us a message</h2></div><div className="grid sm:grid-cols-2 gap-4 mt-7"><label className="text-sm text-slate-300">Your name<input required className="mt-2 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white outline-none focus:border-green-400" placeholder="Jane Smith" /></label><label className="text-sm text-slate-300">Email address<input required type="email" className="mt-2 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white outline-none focus:border-green-400" placeholder="jane@company.com" /></label></div><label className="block text-sm text-slate-300 mt-4">How can we help?<textarea required rows="5" className="mt-2 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white outline-none resize-none focus:border-green-400" placeholder="Tell us what you need..." /></label><button type="submit" className="mt-6 rounded-lg bg-green-500 px-6 py-3 font-semibold text-slate-950 hover:bg-green-400 transition">Send message</button></form></div></section></main>
  )
}
