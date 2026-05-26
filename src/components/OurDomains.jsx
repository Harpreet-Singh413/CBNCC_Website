import { motion } from 'framer-motion';
import { domainsData } from '../data/domains';

export default function OurDomains() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const blobVariants = {
    animate1: {
      x: [0, 50, -30, 0],
      y: [0, -40, 30, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    animate2: {
      x: [0, -60, 40, 0],
      y: [0, 50, -40, 0],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 xl:px-24 bg-[#ECEBEC] overflow-hidden select-none">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(17, 17, 17, 0.08) 1.5px, transparent 1.5px),
            linear-gradient(rgba(17, 17, 17, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 17, 17, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
          backgroundPosition: 'center center'
        }}
      />

      <motion.div 
        variants={blobVariants}
        animate="animate1"
        className="absolute top-1/4 left-1/10 w-[400px] h-[400px] rounded-full bg-white/70 filter blur-[100px] pointer-events-none"
      />
      <motion.div 
        variants={blobVariants}
        animate="animate2"
        className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-white/60 filter blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block font-space text-[11px] font-bold tracking-[0.3em] uppercase text-brand-dark/50 bg-white/50 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.01)]"
          >
            CBNCC Ecosystem
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sora text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tight mb-6"
          >
            Our Domains
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-space text-base md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Explore the core technology pillars driving developer communities, shaping engineering talents, and engineering software products.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {domainsData.map((domain) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.id}
                variants={cardVariants}
                className="group relative flex flex-col h-[260px] p-8 rounded-3xl bg-white/35 backdrop-blur-xl border border-white/60 shadow-premium hover:shadow-premium-hover transition-shadow duration-500 overflow-hidden cursor-pointer"
                whileHover={{ 
                  y: -8, 
                  scale: 1.015,
                  backgroundColor: 'rgba(255, 255, 255, 0.6)'
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10 flex flex-col items-start">
                  
                  <div className="w-full flex items-center justify-between mb-8">
                    {/* Icon Container with smooth Inversion on Hover */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 border border-white/90 text-brand-dark group-hover:bg-brand-dark group-hover:text-[#ECEBEC] group-hover:scale-110 shadow-sm transition-all duration-500">
                      <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6" />
                    </div>
                    
                    <span className="font-space text-[10px] font-semibold text-brand-dark/40 group-hover:text-brand-dark/60 tracking-wider bg-white/20 px-2.5 py-1 rounded-md border border-white/30 transition-colors duration-300">
                      {domain.tag}
                    </span>
                  </div>

                  <h3 className="font-sora text-xl font-bold text-brand-dark mb-3 tracking-tight">
                    {domain.title}
                  </h3>
                  <p className="font-space text-sm text-brand-muted leading-relaxed max-w-[90%] group-hover:text-brand-dark/80 transition-colors duration-300">
                    {domain.description}
                  </p>
                </div>
                <div className="absolute inset-0 border border-brand-dark/0 group-hover:border-brand-dark/10 rounded-3xl pointer-events-none transition-colors duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
