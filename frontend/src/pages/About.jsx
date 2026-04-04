import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Target, Users, Globe, Award, TrendingUp } from "lucide-react";
import { companyInfo, services } from "../mock/data";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Purity",
      description: "We ensure every product is 100% organic and free from synthetic additives.",
    },
    {
      icon: Target,
      title: "Quality",
      description: "Rigorous quality control at every stage, from sourcing to packaging.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable farming methods.",
    },
    {
      icon: Award,
      title: "Traceability",
      description: "Complete transparency from farm to shipment for every product.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Your trusted partner for premium organic vetiver products with a commitment to quality, sustainability, and global excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <span className="font-semibold text-emerald-700">{companyInfo.name}</span> was founded with a vision to bring the finest organic vetiver products from India to the world. Our journey began with a deep understanding of vetiver's therapeutic and commercial value across industries like perfumery, aromatherapy, and cosmetics.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, we operate at scale, processing premium organic vetiver roots, essential oils, and powder. Despite being a growing enterprise, we've built our foundation on uncompromising quality standards, complete traceability, and sustainable sourcing practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment is simple: deliver nature's purity worldwide while maintaining the highest international quality benchmarks.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1693593785503-5bfee6d1d5ca"
                alt="Organic farming"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principles that guide everything we do at {companyInfo.name}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-emerald-700" size={28} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Packaging & Logistics Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for safe, compliant, and timely global delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={48} className="mx-auto mb-6 text-emerald-300" />
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-emerald-100">
            To be the world's most trusted supplier of organic vetiver products by maintaining unwavering commitment to quality, sustainability, and customer satisfaction. We aim to bridge the gap between traditional farming practices and modern global markets.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">From Farm to Export</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1595149417506-8651d6f7aeb8"
              alt="Quality checking"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1692148292961-210789f8d8c0"
              alt="Vetiver roots"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1760727466909-a73872aeecda"
              alt="Export packaging"
              className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
