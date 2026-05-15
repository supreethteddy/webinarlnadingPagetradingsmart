'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { motionInitial } from '@/components/motion';
import { GALLERY_ITEMS } from '@/lib/site-images';

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#040816]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[160px]" />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={motionInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
              See It Before You Read It
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Real Traders. Real Sessions.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Real Results.
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From intimate lounge training to packed seminar halls — this is the energy you join when you register.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.figure
                key={item.title}
                initial={motionInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] ${item.span}`}
              >
                <div className={`relative w-full ${item.aspect}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040816] via-[#040816]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="text-white font-semibold text-lg md:text-xl">{item.title}</p>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
