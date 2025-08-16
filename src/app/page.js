import Image from 'next/image';

const categories = [
  { name: "Motorized Blinds", image: "/images/categories/motorized-blinds.jpg" },
  { name: "Roller Blinds", image: "/images/categories/roller-blinds.jpg" },
  { name: "Roman Shades", image: "/images/categories/roman-shades.jpg" },
  { name: "Sheer Curtains", image: "/images/categories/sheer-curtains.jpg" },
  { name: "Curtains & Drapery", image: "/images/categories/wooden-blinds.jpg" },
  { name: "Zebra Blinds", image: "/images/categories/zebra-blinds.jpg" },
];

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
  <Image
    src="/logo.png" // make sure you place your logo inside public/logo.png
    alt="Blinds Spot Logo"
    width={40}
    height={40}
    className="object-contain"
  />
  <span className="text-2xl font-bold">Blinds Spot</span>
</div>
          <nav className="hidden md:flex space-x-6 text-sm">
  <a href="#home" className="hover:text-primary">Home</a>
  <a href="#products" className="hover:text-primary">Products</a>
  <a href="#gallery" className="hover:text-primary">Gallery</a>
  <a href="#why" className="hover:text-primary">Why Blinds Spot</a>
  <a href="#contact" className="hover:text-primary">Contact</a>
</nav>
          <a
  href="https://wa.me/12016653031?text=Hi%20Blinds%20Spot%2C%20I%20want%20a%20free%20quote%20for%20my%20window%20blinds."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white px-4 py-2 rounded-md text-sm"
>
  Get Free Quote
</a>
        </div>
      </header>
      
      {/* Hero Section */}
<section id="home" className="relative h-[80vh] w-full">
  <div className="absolute inset-0 -z-10">
    <Image
      src="/images/hero.jpg"
      alt="Stylish window blinds and curtains"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  </div>

  <div className="relative z-10 flex flex-col justify-center items-center text-white text-center px-4 h-full bg-black/50">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Smart Blinds & Curtains That Redefine Your Space
    </h1>
    <p className="text-lg mb-6 max-w-2xl">
      Discover modern window treatments with style, automation & personalization.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
  <a
    href="#products"
    className="bg-white text-black px-6 py-3 rounded-md font-medium"
  >
    Explore Styles
  </a>
  
  <a
    href="https://wa.me/12016653031?text=Hi%20Blinds%20Spot%2C%20I%20want%20to%20book%20a%20free%20visit%20for%20my%20window%20blinds."
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white px-6 py-3 rounded-md font-medium text-white"
  >
    Book Free Visit
  </a>
</div>
  </div>
</section>

      {/* Product Categories */}
<section id="products" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold text-center mb-12">
      Explore Our Popular Categories
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <div className="relative h-48 w-full">
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">{cat.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Elegant & Functional</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Blinds Spot */}
      {/* Why Blinds Spot */}
<section id="why" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold mb-12">Why Blinds Spot?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "All-in-One Service",
          description: "From measurement to installation — we handle everything.",
          icon: "🧰",
        },
        {
          title: "Creative Design Team",
          description: "Get expert help in picking modern and elegant styles.",
          icon: "🎨",
        },
        {
          title: "Smart Home Integration",
          description: "Automate your blinds with remote and app control.",
          icon: "📱",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 border rounded-xl shadow-sm hover:shadow-md transition hover:scale-105"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Gallery */}
      {/* Gallery */}
<section id="gallery" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-semibold mb-10">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="relative group overflow-hidden rounded-lg">
          <Image
            src={`/images/gallery/gallery-${i + 1}.jpg`}
            alt={`Gallery ${i + 1}`}
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
    <a
  href="https://www.instagram.com/blindsspot.us?igsh=aThkamRjbWFmc2gz&utm_source=qr"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-10 px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
    See More Projects
  </button>
</a>
  </div>
</section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">What Our Clients Say</h2>
          <div className="space-y-6">
            {["Amazing service & quality.", "Loved the designs and fast install.", "Smart blinds made our life easy!"].map((text, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-sm">
                <p className="italic">“{text}”</p>
                <p className="text-sm text-gray-500 mt-2">– Client {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
<section className="py-16 bg-black text-white text-center">
  <h2 className="text-3xl font-semibold mb-4">
    Ready to transform your windows?
  </h2>
  <p className="mb-6">
    Get a personalized design + free consultation today.
  </p>
  <a
    href="https://wa.me/12016653031?text=Hi%20Blinds%20Spot%2C%20I%20am%20interested%20in%20transforming%20my%20windows.%20Please%20share%20more%20details."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-6 py-3 rounded-md inline-block"
  >
    Book Now on WhatsApp
  </a>
</section>

      {/* Footer */}
      <footer id="contact" className="py-10 bg-gray-900 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2">Blinds Spot</h4>
            <p>One-stop solution for creative window interiors.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: blindsspot.us@gmail.com</p>
            <p>Phone: +1-201-665-3031</p>
            <p>Instagram: @blindsspot</p>
          </div>
        </div>
      </footer>
    </div>
  );
}