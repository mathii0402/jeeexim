import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import ProductCard from "../components/ProductCard";
import { companyInfo, products, whyChooseUs } from "../mock/data";
import { ArrowRight, Leaf, Award, Package, DollarSign, Factory, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  Leaf,
  Award,
  Package,
  DollarSign,
  Factory,
  ShieldCheck,
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://customer-assets.emergentagent.com/job_agri-commerce-14/artifacts/intylyoh_image.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {companyInfo.tagline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Premium organic vetiver products sourced with purity, sustainability, and international quality at the core.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-6 text-lg">
                Explore Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-stone-900 px-8 py-6 text-lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <span className="font-semibold text-stone-800">{companyInfo.name}</span> is a trusted manufacturer of premium organic vetiver products. We specialize in manufacturing 100% pure vetiver roots, essential oils, and powder for global markets.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our in-house manufacturing facility and commitment to purity, sustainability, and international quality standards ensures that every product meets the highest benchmarks for perfumery, aromatherapy, cosmetics, and herbal applications.
              </p>
              <Link to="/about">
                <Button className="bg-stone-700 hover:bg-stone-800">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595149417506-8651d6f7aeb8"
                alt="Quality organic farming"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm font-medium">Organic Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of premium organic vetiver products, meticulously processed to preserve natural purity and potency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through quality, transparency, and reliable global service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-stone-700" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-stone-200 max-w-2xl mx-auto">
            Experience the finest organic vetiver products with reliable global delivery and exceptional quality standards.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-6 text-lg font-semibold">
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
