import ProductCard from "../components/ProductCard";
import { products } from "../mock/data";
import { Package, Leaf, Sparkles } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Premium organic vetiver products crafted with nature's finest ingredients, processed with care to maintain purity and potency.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} featured />
                
                {/* Additional Product Details */}
                <div className="mt-6 space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Sparkles size={18} className="text-amber-600" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Package size={18} className="text-emerald-600" />
                      Applications
                    </h4>
                    <ul className="space-y-1">
                      {product.applications.map((app, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Our Products Special
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-gray-600 text-sm">
                Sourced from certified organic farms with no synthetic additives or chemicals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Rigorously tested to meet international quality and safety standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="text-emerald-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export Ready</h3>
              <p className="text-gray-600 text-sm">
                Compliant packaging and documentation for seamless global shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Interested in Bulk Orders?
            </h2>
            <p className="text-emerald-100 mb-6 text-lg">
              Contact us for custom bulk packaging solutions and competitive pricing.
            </p>
            <a
              href="mailto:jeeexportsandimports@gmail.com"
              className="inline-block bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
