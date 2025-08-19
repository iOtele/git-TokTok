import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TokTokWhySection = () => {
  const benefits = [
    "Stay updated without social media noise",
    "Promote your business on a budget",
    "Save time with personalized recaps",
    "Access via SMS or Web URL",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-gray-100 px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-10">
            Why TokTok?
          </h1>

          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl shadow-sm border border-purple-100 p-5 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-lg text-gray-800 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </section>

       
        <section>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Revenue Opportunities
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            TokTok partners with influencers, runs targeted ads, and offers
            premium subscriptions for exclusive content — creating sustainable
            value for both users and brands.
          </motion.p>
        </section>
      </div>
    </div>
  );
};

export default TokTokWhySection;
