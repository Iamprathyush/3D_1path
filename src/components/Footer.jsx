import { motion } from 'framer-motion';

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-16 py-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-white/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="space-y-5">
            <h2 className="font-special text-3xl tracking-tight text-white">1Path Studio</h2>
            <p className="font-general text-sm text-white/50 leading-relaxed max-w-sm">
              A visual-first digital marketing and creative agency in San Jose, California — serving the Bay Area, Central Valley, and clients remotely.
            </p>
            <p className="font-general text-sm text-white/50">San Jose, CA</p>
            <p className="font-general text-sm text-white/50">hello@example.com</p>
            <p className="font-general text-sm text-white/50">(000) 000-0000</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-5">
            <h4 className="font-special text-base tracking-wide text-white">Services</h4>
            <ul className="font-general space-y-3 text-sm text-white/50">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Campaign Strategy</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Visual Production</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Social Media and Content</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Advertising and Visibility</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Reporting and Optimization</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-5">
            <h4 className="font-special text-base tracking-wide text-white">Industries</h4>
            <ul className="font-general space-y-3 text-sm text-white/50">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Restaurant marketing</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Real estate marketing</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Hospitality</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Personal brands</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Med spa and beauty</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-5">
            <h4 className="font-special text-base tracking-wide text-white">Studio</h4>
            <ul className="font-general space-y-3 text-sm text-white/50">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">The Visual Campaign</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Selected work</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Process</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Contact</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <p className="font-general text-xs text-white/30 tracking-wider">
            © 2026 1Path Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-general text-xs text-white/30 tracking-wider hover:text-white transition-colors duration-300">
              Instagram
            </a>
            <a href="#" className="font-general text-xs text-white/30 tracking-wider hover:text-white transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="font-general text-xs text-white/30 tracking-wider hover:text-white transition-colors duration-300">
              X
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}