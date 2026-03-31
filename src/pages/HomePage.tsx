import About from '../components/About'
import Construction from '../components/Construction'
import Hero from '../components/Hero'
import SeoMeta from '../components/SeoMeta'
import Services from '../components/Services'

function HomePage() {
  return (
    <>
      <SeoMeta
        title="Izmir Temizlik ve Insaat Hizmetleri | Regulus Temizlik - Insaat"
        description="Izmir temizlik hizmetleri, insaat proje yonetimi, kurumsal ve bireysel temizlik cozumleri. Regulus ile profesyonel, guvenilir ve hizli hizmet alin."
        path="/"
        keywords="izmir temizlik, izmir insaat, izmir temizlik firmasi, kurumsal temizlik izmir, insaat proje yonetimi izmir"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Regulus Temizlik - Insaat',
          url: 'https://www.regulus.com.tr',
          image: 'https://www.regulus.com.tr/favicon.svg',
          telephone: '+90-535-527-12-54',
          email: 'info@regulus.com.tr',
          areaServed: 'Izmir',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Izmir',
            addressCountry: 'TR',
          },
          serviceType: ['Kurumsal Temizlik', 'Bireysel Temizlik', 'Insaat Proje Yonetimi'],
        }}
      />
      <Hero />
      <Services />
      <Construction />
      <About />
    </>
  )
}

export default HomePage
