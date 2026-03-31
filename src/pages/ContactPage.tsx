import Contact from '../components/Contact'

function ContactPage() {
  return (
    <>
      <section className="pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="relative h-52 sm:h-64">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
                alt="Iletisim ve kurumsal destek"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}

export default ContactPage
