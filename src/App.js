import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaGithub, FaChartLine, FaGlobe, FaUsers, FaApple, FaArrowUp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Social Showcase', path: '/social' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a2 2 0 00-4 0v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5a6 6 0 016-6z" /><circle cx="4" cy="4" r="2" fill="currentColor" /><rect x="2" y="8" width="4" height="12" rx="1" fill="currentColor" /></svg>
  ) },
  { name: 'X', href: 'https://twitter.com', icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M6.94 2h2.7l5.36 7.91L20.5 2H23l-7.5 10.5L23 22h-2.7l-5.36-7.91L3.5 22H1l7.5-10.5L1 2h2.7l5.36 7.91L17.5 2z" fill="currentColor"/></svg>
  ) },
  { name: 'Instagram', href: 'https://instagram.com', icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><circle cx="17" cy="7" r="1.5" fill="currentColor"/></svg>
  ) },
  { name: 'Facebook', href: 'https://facebook.com', icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M17 2.05c-2.76 0-5 2.24-5 5v2H8v4h4v8h4v-8h3l1-4h-4V7.05c0-.55.45-1 1-1h3V2.05h-3z" fill="currentColor"/></svg>
  ) },
  { name: 'GitHub', href: 'https://github.com', icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.8c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="currentColor"/></svg>
  ) },
];

function SocialIcons({ className = '' }) {
  return (
    <div className={`flex space-x-5 text-2xl ${className}`}>
      <a href="https://linkedin.com/in/srijan-mishraa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue transition-colors"><FaLinkedin /></a>
      <a href="https://x.com/srijanweb3" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="hover:text-blue transition-colors"><FaXTwitter /></a>
      <a href="https://www.instagram.com/shivamm.mishraa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue transition-colors"><FaInstagram /></a>
      <a href="https://www.facebook.com/Shivam.Mishraaaaa" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue transition-colors"><FaFacebook /></a>
      <a href="https://github.com/Shiv-web3" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue transition-colors"><FaGithub /></a>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur shadow-lg' : 'bg-background/60'} text-primary`}> 
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-6">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="hover:text-accent transition-colors font-medium text-base md:text-lg">
              {link.name}
            </Link>
          ))}
        </div>
        <SocialIcons className="hidden md:flex" />
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-surface text-secondary py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Srijan Mishra</div>
        <SocialIcons />
        <div className="mt-2 md:mt-0">srijan.web3@gmail.com</div>
      </div>
    </footer>
  );
}

function Home() {
  // Use the same project data as Projects section for consistency
  const featuredProjects = [
    {
      name: 'Atua AI',
      brief: 'AI-powered solutions for the next generation of web applications.',
      link: process.env.PUBLIC_URL + '/atuaai.pdf',
      thumb: 'atua-ai-thumb.jpg',
      isExternal: false,
    },
    {
      name: 'Kaj Labs',
      brief: 'Innovating at the intersection of technology and creativity.',
      link: process.env.PUBLIC_URL + '/kaj-labs.pdf',
      thumb: 'kaj-labs-thumb.jpg',
      isExternal: false,
    },
    {
      name: 'Lithosphere Network',
      brief: 'Lithosphere is the next-generation network for cross-chain applications powered by AI & Deep Learning.',
      link: 'https://lithosphere.network/',
      thumb: 'lithosphere-thumb.png',
      isExternal: true,
    },
  ];

  return (
    <div className="w-full bg-background text-primary font-sans pt-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-20 gap-10">
        <div className="flex-1 flex flex-col items-start justify-center space-y-6">
          <div
            className="text-base md:text-lg font-semibold mb-2"
            style={{
              fontFamily: 'Noto Sans, sans-serif',
              fontStyle: 'italic',
              color: '#b0b3b8',
            }}
          >
            Great marketing isn't just hype, it's impact you can measure!
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold italic mb-4 text-accent"
            style={{
              fontFamily: 'Montserrat, Poppins, sans-serif',
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #a855f7)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-move 4s ease-in-out infinite',
            }}
          >
            Srijan Mishra
          </h1>
          <style>{`
            @keyframes gradient-move {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
          <div className="text-sm md:text-lg text-secondary max-w-xl mb-2">
            Also known by the name Shivam, a marketing mind who's helped build and market brands in just about every space you can think of: Web3, AI, B2B, B2C, edtech, consumer tech, entertainment, fashion, exhibitions, and beyond.
          </div>
          <div className="flex space-x-4 mt-2">
            <Link to="/contact" className="px-6 py-2 rounded-lg bg-blue text-background font-bold shadow hover:bg-blue-dark hover:scale-105 transition text-sm md:text-base">Let's Connect</Link>
            <Link to="/projects" className="px-6 py-2 rounded-lg border-2 border-teal text-teal font-bold hover:bg-teal hover:text-background hover:scale-105 transition text-sm md:text-base">See My Work</Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Hero Banner Image - larger, no border, icons inside */}
          <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl mb-6 bg-background flex flex-col items-center justify-center relative" style={{height: '28rem'}}>
            <img src={process.env.PUBLIC_URL + '/thumbnails/homepage-1.jpg'} alt="Srijan Mishra Hero Banner" className="object-contain w-full h-full" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-5 bg-background/80 px-4 py-2 rounded-full shadow-lg">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
      {/* Recent Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProjects.map((proj) => (
            <a
              key={proj.name}
              href={proj.link}
              target={proj.isExternal ? '_blank' : '_self'}
              rel={proj.isExternal ? 'noopener noreferrer' : undefined}
              className="bg-surface rounded-2xl shadow-xl p-5 flex flex-col items-center transition-transform duration-500 hover:scale-105 hover:border-2 hover:border-blue hover:shadow-blue-500/40 hover:shadow-2xl group cursor-pointer"
              style={{ boxShadow: '0 4px 32px 0 rgba(59,130,246,0.10)' }}
            >
              <div className="w-full h-60 bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={publicThumbnails[proj.thumb]}
                  alt={proj.name + ' thumbnail'}
                  className="object-cover h-full w-full rounded-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xl font-bold mb-1 text-accent text-center">{proj.name}</div>
              <div className="text-secondary text-sm text-center">{proj.brief}</div>
            </a>
          ))}
        </div>
        <div className="mt-6 text-right">
          <Link to="/projects" className="inline-block px-5 py-2 rounded-full border border-accent text-accent font-semibold hover:bg-accent hover:text-background transition">View All</Link>
        </div>
      </section>
      {/* Numbers Section with icons */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">The numbers tell the story:</h2>
        <ul className="space-y-4 text-lg text-secondary">
          <li className="flex items-center gap-3"><FaChartLine className="text-blue text-2xl" /><span><span className="text-blue font-bold">1200%</span> Digital Engagement Surge across portfolio projects.</span></li>
          <li className="flex items-center gap-3"><FaGlobe className="text-blue text-2xl" /><span><span className="text-blue font-bold">Global Stage Presence</span> at CES 2023, Token2049, Web3 Amsterdam, where industry leaders gather.</span></li>
          <li className="flex items-center gap-3"><FaUsers className="text-blue text-2xl" /><span><span className="text-blue font-bold">10,000+</span> Community Members built from zero, not bought.</span></li>
          <li className="flex items-center gap-3"><FaApple className="text-blue text-2xl" /><span><span className="text-blue font-bold">Apple Inc. Recognition</span> for uncovering critical security vulnerabilities.</span></li>
          <li className="flex items-center gap-3"><FaArrowUp className="text-blue text-2xl" /><span><span className="text-blue font-bold">180% Revenue Acceleration</span> through campaigns that convert.</span></li>
        </ul>
      </section>
      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What I Bring to the Table</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Growth & Leadership', icon: <FaLinkedin />, desc: 'Product launches, GTM, revenue scaling, stakeholder engagement' },
            { title: 'Web3 & AI Marketing', icon: <FaXTwitter />, desc: 'Blockchain, tokenomics, AI-driven funnels, DAO/NFT, prompt engineering' },
            { title: 'Content & Creative', icon: <FaInstagram />, desc: 'Copywriting, video production, podcasts, storytelling, campaign strategy' },
            { title: 'Performance Marketing', icon: <FaFacebook />, desc: 'SEO/SEM, PPC, Meta/Google Ads, funnel optimization, e-commerce' },
            { title: 'Community Building', icon: <FaGithub />, desc: 'Discord, X, Telegram, meme/community page growth, event management' },
            { title: 'AI-Powered Precision', icon: <span className="text-2xl">🤖</span>, desc: 'Data-driven decisions. AI-optimized funnels. Campaigns that learn and adapt in real-time.' },
          ].map(skill => (
            <div key={skill.title} className="flex flex-col items-center bg-surface rounded-xl p-8 shadow hover:scale-105 transition">
              <div className="mb-4 text-3xl text-blue">{skill.icon}</div>
              <div className="font-bold text-lg mb-2 text-accent text-center">{skill.title}</div>
              <div className="text-secondary text-center">{skill.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Automated thumbnail imports
const thumbnails = {};
function importAll(r) {
  r.keys().forEach((key) => {
    const clean = key.replace('./', '');
    thumbnails[clean] = r(key);
  });
}
importAll(require.context('./assets/thumbnails', false, /\.(jpg|png)$/));

// Public thumbnails mapping
const publicThumbnails = {
  'atua-ai-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/atua-ai-thumb.jpg',
  'kaj-labs-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/kaj-labs-thumb.jpg',
  'lithosphere-thumb.png': process.env.PUBLIC_URL + '/thumbnails/lithosphere-thumb.png',
  'near-protocol-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/near-protocol-thumb.jpg',
  'quillaudits-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/quillaudits-thumb.jpg',
  'ajna-lens-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/ajna-lens-thumb.jpg',
  'srijan-pet-collective-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/srijan-pet-collective-thumb.jpg',
  'abec-acetech-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/abec-acetech-thumb.jpg',
  'amazonia-koa-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/amazonia-koa-thumb.jpg',
  'electronic-world-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/electronic-world-thumb.jpg',
  'econest-fittrack-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/econest-fittrack-thumb.jpg',
  'glen-group-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/glen-group-thumb.jpg',
  'recro-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/recro-thumb.jpg',
  'smart-interviews-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/smart-interviews-thumb.jpg',
  'karas-group-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/karas-group-thumb.jpg',
  'beardo-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/beardo-thumb.jpg',
  'bob-cafe-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/bob-cafe-thumb.jpg',
  'dainik-bhaskar-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/dainik-bhaskar-thumb.jpg',
  'digital-shelf-thumb.png': process.env.PUBLIC_URL + '/thumbnails/digital-shelf-thumb.png',
  'mileseducation-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/mileseducation-thumb.jpg',
  'snow-world-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/snow-world-thumb.jpg',
  'gemius-thumb.png': process.env.PUBLIC_URL + '/thumbnails/gemius-thumb.png',
  'kayak-aso-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/kayak-aso-thumb.jpg',
  'metroshoes-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/metroshoes-thumb.jpg',
  'dapp-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/dapp-thumb.jpg',
  'econest-&-fittrack-thumb.jpg': process.env.PUBLIC_URL + '/thumbnails/econest-&-fittrack-thumb.jpg',
  'homepage-1.jpg': process.env.PUBLIC_URL + '/thumbnails/homepage-1.jpg',
};

function Projects() {
  const projects = [
    { name: 'Atua AI', description: 'AI-powered solutions for the next generation of web applications. Building intelligent systems that adapt and learn.', pdf: process.env.PUBLIC_URL + '/atuaai.pdf', thumb: 'atua-ai-thumb.jpg' },
    { name: 'Kaj Labs', description: 'Innovating at the intersection of technology and creativity. Where bold ideas meet cutting-edge execution.', pdf: process.env.PUBLIC_URL + '/kaj-labs.pdf', thumb: 'kaj-labs-thumb.jpg' },
    { name: 'Lithosphere Network', description: 'Lithosphere is the next-generation network for cross-chain applications powered by AI & Deep Learning.', pdf: 'https://lithosphere.network/', thumb: 'lithosphere-thumb.png', isExternal: true },
    { name: 'NEAR Protocol', description: 'Scaled a global blockchain edtech community with targeted campaigns and educational content, connecting developers and learners worldwide.', pdf: process.env.PUBLIC_URL + '/near-protocol.pdf', thumb: 'near-protocol-thumb.jpg' },
    { name: 'QuillAudits', description: 'Positioned a blockchain security audit firm with accessible, technical marketing—helping them attract clients in a crowded Web3 space.', pdf: process.env.PUBLIC_URL + '/quillaudits.pdf', thumb: 'quillaudits-thumb.jpg' },
    { name: 'Ajna Lens', description: 'Drove AR/VR product adoption with B2B and B2C GTM strategy, generating 1,000+ leads and positioning the brand as a leader in immersive tech.', pdf: process.env.PUBLIC_URL + '/ajna-lens.pdf', thumb: 'ajna-lens-thumb.jpg' },
    { name: 'The Pet Collective', description: 'Developed content and digital strategy for a leading pet community, boosting engagement and growing their online audience.', pdf: process.env.PUBLIC_URL + '/srijan-pet-collective.pdf', thumb: 'srijan-pet-collective-thumb.jpg' },
    { name: 'ABEC Acetech', description: "Directed digital event marketing and influencer activation for Asia's top architecture expo, setting new engagement records.", pdf: process.env.PUBLIC_URL + '/abec-acetech.pdf', thumb: 'abec-acetech-thumb.jpg' },
    { name: 'Amazonia KOA', description: "Launched performance campaigns and growth strategies for Amazonia's F&B business, enhancing local brand awareness.", pdf: process.env.PUBLIC_URL + '/amazonia-koa.pdf', thumb: 'amazonia-koa-thumb.jpg' },
    { name: 'Electronic World', description: 'Built and optimized e-commerce funnels for a US-based consumer tech brand, scaling digital revenue on Amazon and Shopify.', pdf: process.env.PUBLIC_URL + '/electronic-world.pdf', thumb: 'electronic-world-thumb.jpg' },
    { name: 'Econest FitTrack', description: 'Consulted on digital marketing best practices for KPI Institute, helping them reach and educate a broader professional audience.', pdf: process.env.PUBLIC_URL + '/econest-fittrack.pdf', thumb: 'econest-fittrack-thumb.jpg' },
    { name: 'Glen Group', description: 'Crafted a comprehensive brand pitch and GTM plan for Glen Group, elevating its position in a competitive market.', pdf: process.env.PUBLIC_URL + '/glen-group.pdf', thumb: 'glen-group-thumb.jpg' },
    { name: 'Recro', description: 'Helped refine digital brand and performance marketing for a tech hiring platform, improving lead quality and pipeline efficiency.', pdf: process.env.PUBLIC_URL + '/recro.pdf', thumb: 'recro-thumb.jpg' },
    { name: 'Smart Interviews', description: 'Launched and scaled digital campaigns for an edtech startup, resulting in increased brand awareness and pipeline growth.', pdf: process.env.PUBLIC_URL + '/smart-interviews.pdf', thumb: 'smart-interviews-thumb.jpg' },
    { name: 'Karas Group', description: 'Audited brand presence and digital assets for Karas Group, delivering actionable insights to improve online reputation and growth.', pdf: process.env.PUBLIC_URL + '/karasgroupaudit.pdf', thumb: 'karas-group-thumb.jpg' },
    { name: 'Beardo Audit', description: 'Evaluated and optimized digital strategy for Beardo, identifying new growth channels for this leading men\'s grooming brand.', pdf: process.env.PUBLIC_URL + '/beardo.pdf', thumb: 'beardo-thumb.jpg' },
    { name: 'Bob Cafe', description: 'Executed end-to-end digital marketing for a premium cafe, increasing brand visibility and customer acquisition.', pdf: process.env.PUBLIC_URL + '/bob-cafe.pdf', thumb: 'bob-cafe-thumb.jpg' },
    { name: 'Dainik Bhaskar', description: "Drove campaign execution and digital strategy for India's largest newspaper group, enhancing their online presence.", pdf: process.env.PUBLIC_URL + '/dainik-bhaskar.pdf', thumb: 'dainik-bhaskar-thumb.jpg' },
    { name: 'Digital Shelf', description: 'Advised on digital shelf optimization and Amazon FBA strategies to help consumer brands maximize online sales.', pdf: process.env.PUBLIC_URL + '/digital-shelf.pdf', thumb: 'digital-shelf-thumb.png' },
    { name: 'Miles Education', description: 'Led integrated marketing for an edtech platform, driving student acquisition and expanding digital reach.', pdf: process.env.PUBLIC_URL + '/mileseducation.pdf', thumb: 'mileseducation-thumb.jpg' },
    { name: 'Snow World Entertainment', description: 'Directed digital campaigns for a leading entertainment chain, increasing customer engagement and venue footfall.', pdf: process.env.PUBLIC_URL + '/snow-world-entertainment.pdf', thumb: 'snow-world-thumb.jpg' },
    { name: 'Gemius', description: 'Provided strategic marketing guidance for a market intelligence firm, focusing on data-driven campaign optimization.', pdf: process.env.PUBLIC_URL + '/gemius.pdf', thumb: 'gemius-thumb.png' },
    { name: 'Kayak Keywords ASO', description: 'Designed an app store optimization (ASO) strategy for Kayak, driving organic downloads and improving keyword rankings.', pdf: process.env.PUBLIC_URL + '/kayak-keywords-aso.pdf', thumb: 'kayak-aso-thumb.jpg' },
    { name: 'KPI Institute', description: 'Developed a digital marketing and positioning strategy for an eco-friendly fitness startup, driving awareness and early adoption for a unique wellness solution.', pdf: process.env.PUBLIC_URL + '/the-kpi-institute.pdf', thumb: 'kpi-institute-thumb.jpg' },
    { name: 'Metroshoes', description: 'Formulated and implemented a digital roadmap for Metroshoes, driving online engagement and expanding their digital sales footprint.', pdf: process.env.PUBLIC_URL + '/metroshoes.pdf', thumb: 'metroshoes-thumb.jpg' },
    { name: 'Dapp Luxury Grooming', description: 'Developed and executed a digital growth plan for a multi-venture fitness and grooming brand—driving awareness, engagement, and audience building across social platforms.', pdf: process.env.PUBLIC_URL + '/dapp.pdf', thumb: 'dapp-thumb.jpg' },
    { name: 'Beardo Audit', description: 'Evaluated and optimized digital strategy for Beardo, identifying new growth channels for this leading men\'s grooming brand.', pdf: process.env.PUBLIC_URL + '/beardo.pdf', thumb: 'beardo-thumb.jpg' },
  ];

  return (
    <div className="w-full bg-background text-primary font-sans pt-20">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-accent text-center">Shaping What's Next</h1>
        <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto text-center">From AI and blockchain to brands, tech, and entertainment, I help ideas become movements and businesses become leaders, no matter the industry.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            project.pdf ? (
              <a key={project.name} href={project.pdf} target="_blank" rel="noopener noreferrer" className="group bg-surface rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-2 hover:border-blue transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
                <div className="h-48 w-full flex items-center justify-center bg-muted overflow-hidden">
                  {publicThumbnails[project.thumb] ? (
                    <img src={publicThumbnails[project.thumb]} alt={project.name + ' thumbnail'} className="object-cover h-full w-full max-w-[200px] max-h-[140px] rounded-md group-hover:scale-105 transition-transform duration-300" />
                  ) : thumbnails[project.thumb] ? (
                    <img src={thumbnails[project.thumb]} alt={project.name + ' thumbnail'} className="object-cover h-full w-full max-w-[200px] max-h-[140px] rounded-md group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <>
                      {console.warn(`Missing thumbnail for project: ${project.name} (expected: ${project.thumb})`)}
                      <div className="flex flex-col items-center justify-center w-full h-full text-secondary">
                        <span className="text-4xl">🖼️</span>
                        <span className="text-xs mt-2">No Image</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col items-center">
                  <h3 className="text-base font-semibold text-accent mb-2" style={{fontFamily: 'Montserrat, Poppins, sans-serif'}}>{project.name}</h3>
                  <p className="text-secondary text-sm mb-2 flex-1">{project.description}</p>
                </div>
              </a>
            ) : (
              <div key={project.name} className="group bg-surface rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center opacity-60 cursor-not-allowed">
                <div className="h-48 w-full flex items-center justify-center bg-muted overflow-hidden">
                  {publicThumbnails[project.thumb] ? (
                    <img src={publicThumbnails[project.thumb]} alt={project.name + ' thumbnail'} className="object-cover h-full w-full max-w-[200px] max-h-[140px] rounded-md" />
                  ) : thumbnails[project.thumb] ? (
                    <img src={thumbnails[project.thumb]} alt={project.name + ' thumbnail'} className="object-cover h-full w-full max-w-[200px] max-h-[140px] rounded-md" />
                  ) : (
                    <>
                      {console.warn(`Missing thumbnail for project: ${project.name} (expected: ${project.thumb})`)}
                      <div className="flex flex-col items-center justify-center w-full h-full text-secondary">
                        <span className="text-4xl">🖼️</span>
                        <span className="text-xs mt-2">No Image</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col items-center">
                  <h3 className="text-base font-semibold text-accent mb-2" style={{fontFamily: 'Montserrat, Poppins, sans-serif'}}>{project.name}</h3>
                  <p className="text-secondary text-sm mb-2 flex-1">{project.description}</p>
                  <span className="text-xs text-red-500 font-semibold mt-2">Coming Soon</span>
                </div>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
}
// Social Showcase Data (all links except the first Google Drive link)
const socialShowcaseLinks = [
  // Web3 & AI
  { title: 'Apple Inc.', url: 'https://support.apple.com/en-ph/102838', type: 'website' },
  { title: 'KaJ Labs', url: 'https://kajlabs.org/', type: 'website' },
  { title: 'KaJ Labs X', url: 'https://x.com/kajlabs', type: 'x' },
  { title: 'Emerge Group X', url: 'https://x.com/emerge_grp/status/1911746877256814842', type: 'x' },
  { title: 'KaJ Labs X Post', url: 'https://x.com/KaJLabs/status/1911691935703773242', type: 'x' },
  { title: 'KaJ Labs X Post', url: 'https://x.com/KaJLabs/status/1925495847875448843', type: 'x' },
  { title: 'KaJ Labs X Post', url: 'https://x.com/KaJLabs/status/1906617565490581512', type: 'x' },
  { title: 'Lithosphere', url: 'https://lithosphere.network/', type: 'website' },
  { title: 'Lithosphere X', url: 'https://x.com/superlitho', type: 'x' },
  { title: 'Atua AI', url: 'https://atua.ai/', type: 'website' },
  { title: 'Atua AI X', url: 'https://x.com/atuaai', type: 'x' },
  { title: 'Atua AI X Post', url: 'https://x.com/atuaai/status/1838862000715370728', type: 'x' },
  { title: 'Atua AI X Post', url: 'https://x.com/AtuaAI/status/1924815958188949629', type: 'x' },
  { title: 'Atua AI X Post', url: 'https://x.com/AtuaAI/status/1928373396443627650', type: 'x' },
  { title: 'Atua AI X Post', url: 'https://x.com/AtuaAI/status/1928135941966942472', type: 'x' },
  { title: 'Atua AI X Post', url: 'https://x.com/AtuaAI/status/1909891533416935926', type: 'x' },
  { title: 'Atua AI X Post', url: 'https://x.com/AtuaAI/status/1909850949897822527', type: 'x' },
  { title: 'Companeons X', url: 'https://x.com/Companeons/status/1907078125043003451', type: 'x' },
  { title: 'FurGPT', url: 'https://furgpt.org/', type: 'website' },
  { title: 'FurGPT X', url: 'https://x.com/gptfur', type: 'x' },
  { title: 'FurGPT X Post', url: 'https://x.com/GPTFur/status/1838783223117287930', type: 'x' },
  { title: 'FurGPT X Post', url: 'https://x.com/GPTFur/status/1928360744510443614', type: 'x' },
  { title: 'FurGPT X Post', url: 'https://x.com/GPTFur/status/1925854242641784893', type: 'x' },
  { title: 'FurGPT X Post', url: 'https://x.com/GPTFur/status/1922230337347977271', type: 'x' },
  { title: 'Mansa AI', url: 'https://www.mansa.ai/', type: 'website' },
  { title: 'Atua AI News', url: 'https://markets.financialcontent.com/stocks/article/newsfile-2025-4-14-atua-ai-expands-xrp-cryptocurrency-stack-to-support-advanced-financial-automation', type: 'website' },
  { title: 'Atua AI News', url: 'https://markets.businessinsider.com/news/stocks/atua-ai-boosts-bitcoinpowered-frameworks-to-enable-secure-scalable-ai-applications-1034558247', type: 'website' },
  { title: 'Atua AI News', url: 'https://techbullion.com/atua-ai-tua-highlights-continued-integration-of-grok-api-to-power-real-time-enterprise-intelligence/', type: 'website' },
  { title: 'The Coin Republic', url: 'https://www.thecoinrepublic.com/', type: 'website' },
  { title: 'The Coin Republic Video', url: 'https://www.thecoinrepublic.com/?playlist=525e6c2&video=f9ce186', type: 'website' },
  { title: 'NEAR Edu', url: 'https://github.com/NEAR-Edu', type: 'github' },
  { title: 'NEAR Academy', url: 'https://near.academy/', type: 'website' },
  // AjnaLens
  { title: 'AjnaLens', url: 'https://www.ajnalens.com/', type: 'website' },
  { title: 'AjnaLens Blog', url: 'https://www.ajnalens.com/blog/', type: 'website' },
  { title: 'AjnaLens X Post', url: 'https://twitter.com/ajnalens/status/1487269130067939328', type: 'twitter' },
  { title: 'AjnaLens X Post', url: 'https://twitter.com/ajnalens/status/1559880300368433152', type: 'twitter' },
  { title: 'AjnaLens YouTube', url: 'https://youtu.be/Ds1RQvaX-VI', type: 'youtube' },
  { title: 'AjnaLens YouTube', url: 'https://youtu.be/8cZYywXuIDc', type: 'youtube' },
  { title: 'AjnaLens YouTube', url: 'https://youtu.be/ZFSq0w6s9Zs', type: 'youtube' },
  { title: 'AjnaLens YouTube', url: 'https://youtu.be/Bv-_N3vWjJw', type: 'youtube' },
  { title: 'AjnaLens YouTube', url: 'https://youtu.be/C9260NpT62Y', type: 'youtube' },
  { title: 'AjnaLens Instagram Reel', url: 'https://www.instagram.com/reel/Ce03vvXjyWk/?igshid=Zjc2ZTc4Nzk=', type: 'instagram' },
  { title: 'AjnaLens Instagram Reel', url: 'https://www.instagram.com/reel/CgWp8K7jJmR/?igshid=NmNmNjAwNzg=', type: 'instagram' },
  { title: 'AjnaLens Instagram TV', url: 'https://www.instagram.com/tv/CdLYBQHDFEN/?igshid=NmNmNjAwNzg=', type: 'instagram' },
  // MirrAR
  { title: 'MirrAR Instagram', url: 'https://instagram.com/trymirrar?utm_medium=copy_link', type: 'instagram' },
  { title: 'MirrAR Blog 1', url: 'https://www.mirrar.com/blogs/4-pain-points-buying-jewelry-online', type: 'website' },
  { title: 'MirrAR Blog 2', url: 'https://www.mirrar.com/blogs/how-omnichannel-will-shape-retail', type: 'website' },
  { title: 'MirrAR Blog 3', url: 'https://www.mirrar.com/blogs/ar-vs-vr-difference-between-augmented-reality-virtual-reality', type: 'website' },
  { title: 'MirrAR Blog 4', url: 'https://www.mirrar.com/blogs/13-augmented-reality-statistics-2021', type: 'website' },
  { title: 'MirrAR Blog 5', url: 'https://www.mirrar.com/blogs/socialar-brands-customers-immersive-experiences', type: 'website' },
  // E-commerce
  { title: 'Mobilelink USA', url: 'https://mobilelinkusa.com/', type: 'website' },
  { title: 'Amazon Mobilyaccessories', url: 'https://www.amazon.com/stores/Mobilyaccessories/page/9BE2FD71-8186-4E87-8A94-8EB953AF2ABB', type: 'website' },
  // Acetech Exhibitions
  { title: 'Acetech YouTube', url: 'https://youtube.com/@acetechexhibition?si=HJ-DOwK6JAjNmyjs', type: 'youtube' },
  { title: 'Acetech Expo', url: 'https://acetechexpo.com/', type: 'website' },
  { title: 'Acetech Instagram', url: 'https://www.instagram.com/acetechexhibition', type: 'instagram' },
  { title: 'Acetech Reel 1', url: 'https://www.instagram.com/reel/CyXmukIa-3/', type: 'instagram' },
  { title: 'Acetech Reel 2', url: 'https://www.instagram.com/reel/CweiCFqNxZC', type: 'instagram' },
  { title: 'Acetech Reel 3', url: 'https://www.instagram.com/reel/Cw1y4T8NyMA', type: 'instagram' },
  { title: 'Acetech YouTube Channel', url: 'https://www.youtube.com/@acetechexhibition', type: 'youtube' },
  // Starconnect Entertainment
  { title: 'RS World Series Instagram', url: 'https://instagram.com/rsworldseries?utm_medium=copy_link', type: 'instagram' },
  { title: 'Pokket Cafe India Instagram', url: 'https://instagram.com/pokketcafeindia', type: 'instagram' },
  { title: 'Dappfitt Instagram', url: 'https://instagram.com/dappfitt', type: 'instagram' },
  { title: 'Official Dapp Instagram', url: 'https://instagram.com/officialdapp?igshid=NmNmNjAwNzg=', type: 'instagram' },
  // Everymedia Technologies
  { title: 'Everymedia Post 1', url: 'https://www.instagram.com/p/B6w440kpoDr/?igshid=qffzfjqp7b2w', type: 'instagram' },
  { title: 'Everymedia Post 2', url: 'https://www.instagram.com/p/B6vRIisJQqs/?igshid=1rn22gqn5t7lf', type: 'instagram' },
  { title: 'Everymedia Post 3', url: 'https://www.instagram.com/p/B6H-y65JAil/?igshid=1mbrs9xuywrol', type: 'instagram' },
  { title: 'Everymedia Post 4', url: 'https://www.instagram.com/p/B5m0oOGJz4Q/?igshid=1vgl31e70ytei', type: 'instagram' },
  { title: 'Everymedia Post 5', url: 'https://www.instagram.com/p/B5UYht_J6uK/?igshid=10u9ncnvjf17x', type: 'instagram' },
  { title: 'Everymedia Post 6', url: 'https://www.instagram.com/p/B6aLbxdJahl/?igshid=1vrl2tly8bnjm', type: 'instagram' },
  { title: 'Fox Studios India X Post 1', url: 'https://twitter.com/foxstudiosindia/status/1214539683667087360', type: 'twitter' },
  { title: 'Fox Studios India X Post 2', url: 'https://twitter.com/foxstudiosindia/status/1194862044299718657', type: 'twitter' },
  { title: 'Fox Studios India X Post 3', url: 'https://twitter.com/foxstudiosindia/status/1189506992324300801', type: 'twitter' },
  // Mishicho - The Clothing Label
  { title: 'Mishicho Instagram', url: 'https://instagram.com/mishicho_thelabel', type: 'instagram' },
  // Meme/community accounts
  { title: 'Dogo Argentino Instagram', url: 'https://instagram.com/dogoargentinogram', type: 'instagram' },
  { title: 'Chennai Talkies Instagram', url: 'https://instagram.com/chennaitalkies', type: 'instagram' },
  { title: 'Directed by Robert B. Weide Instagram', url: 'https://instagram.com/directed_by_robertb.weide', type: 'instagram' },
  { title: 'Mokka Memes Instagram', url: 'https://instagram.com/mokkamemes?igshid=Zjc2ZTc4Nzk=', type: 'instagram' },
];

function getEmbed(link) {
  // YouTube official embed
  if (link.type === 'youtube') {
    let videoId = '';
    if (link.url.includes('youtu.be/')) {
      videoId = link.url.split('youtu.be/')[1];
    } else if (link.url.includes('v=')) {
      videoId = link.url.split('v=')[1];
      if (videoId.includes('&')) videoId = videoId.split('&')[0];
    }
    if (videoId) {
      return (
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={link.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
  }
  // Instagram official embed (only for posts/reels)
  if (link.type === 'instagram' && link.url.includes('/reel/')) {
    return (
      <iframe
        src={`https://www.instagram.com/reel/${link.url.split('/reel/')[1].split('/')[0]}/embed`}
        width="100%"
        height="200"
        frameBorder="0"
        allowFullScreen
        title={link.title}
      ></iframe>
    );
  }
  // Twitter/X official embed (only for posts)
  if ((link.type === 'x' || link.type === 'twitter') && link.url.match(/status\/[0-9]+/)) {
    return (
      <blockquote className="twitter-tweet">
        <a href={link.url}>{link.title}</a>
      </blockquote>
    );
  }
  // Otherwise, no embed
  return null;
}

function SocialShowcase() {
  return (
    <div className="w-full bg-background text-primary min-h-screen pt-20 pb-10">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Social Showcase</h1>
        <p className="text-lg text-secondary text-center mb-10 max-w-2xl mx-auto">A gallery of my work, campaigns, and collaborations across social media, web, and industry platforms.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {socialShowcaseLinks.map((item, idx) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center hover:shadow-2xl hover:border-2 hover:border-blue transition-all duration-300 cursor-pointer p-4"
              style={{ minHeight: 320 }}
            >
              <div className="w-full flex-1 flex items-center justify-center mb-3 min-h-[80px]">
                {getEmbed(item) || (
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${new URL(item.url).hostname}&sz=64`}
                    alt={item.title}
                    className="w-12 h-12 object-contain rounded mb-2 bg-muted"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="font-semibold text-base text-accent mb-1 truncate w-full" title={item.title}>{item.title}</div>
              <div className="text-xs text-secondary truncate w-full">{item.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
function About() { 
  return (
    <div className="w-full bg-background text-primary font-sans pt-20">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-16 text-accent text-center" style={{fontFamily: 'Montserrat, Poppins, sans-serif'}}>About Me</h1>
        
        {/* Section 1: The Story Behind the Strategy */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <img 
              src={process.env.PUBLIC_URL + '/thumbnails/about-photo-1.JPG'} 
              alt="Srijan Mishra - Professional headshot" 
              className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-3xl object-cover shadow-2xl border-8 border-surface"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent mb-6">The Story Behind the Strategy</h2>
            <div className="space-y-4 text-secondary text-lg">
              <p>I didn't start in marketing. I started in curiosity.</p>
              <p>As a kid, my world revolved around tech. From playing video games to <strong><em>building my first PC from scratch</em></strong> (with the cabinet perpetually open and wires everywhere), I loved figuring out how things worked. My natural inclination towards understanding what resonated with people—whether radio, television, or digital ads, guided me into marketing. I intuitively knew how to craft <strong><em>impactful, creative messaging</em></strong> that connected and subtly persuaded.</p>
              <p>This passion for detail and relentless hands-on approach led me deeper into tech, creativity, writing, and even security research, earning <strong><em>recognition from Apple Inc.</em></strong> for identifying a critical security vulnerability.</p>
            </div>
          </div>
        </div>

        {/* Section 2: My Unconventional Path */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent mb-6">My Unconventional Path</h2>
            <div className="space-y-4 text-secondary text-lg">
              <p>My entry into marketing wasn't traditional. I started deep in the <strong><em>technical trenches</em></strong>—uncovering vulnerabilities, troubleshooting hidden problems, and understanding complex systems. This technical backbone gave me an edge most marketers miss: <strong><em>the ability to see beneath the surface</em></strong>.</p>
              <p>When I got into marketing, I carried this analytical mindset with me. Campaigns weren't just activities; they were <strong><em>puzzles</em></strong>. I sought to understand why certain strategies resonated deeply while others faded away, always aiming to craft <strong><em>lasting impressions</em></strong>.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={process.env.PUBLIC_URL + '/thumbnails/about-photo-2.jpg'} 
              alt="Srijan Mishra - Technical work" 
              className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-3xl object-cover shadow-2xl border-8 border-surface"
            />
          </div>
        </div>

        {/* Section 3: Driven by Human Insight */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <img 
              src={process.env.PUBLIC_URL + '/thumbnails/about-photo-3.png'} 
              alt="Srijan Mishra - Strategic thinking" 
              className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-3xl object-cover shadow-2xl border-8 border-surface"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent mb-6">Driven by Human Insight</h2>
            <div className="space-y-4 text-secondary text-lg">
              <p>I'm fascinated by the <strong><em>intersection of emerging technology and human psychology</em></strong>:</p>
              <ul className="space-y-2 text-secondary">
                <li>• How do you make <strong><em>AI approachable</em></strong>?</li>
                <li>• How can <strong><em>blockchain become understandable and relatable</em></strong>?</li>
                <li>• How do you nurture <strong><em>authentic communities</em></strong> in an age dominated by superficial engagement?</li>
              </ul>
              <p>These are more than marketing questions—they're <strong><em>fundamentally human challenges</em></strong>. Addressing them requires empathy, deep technical knowledge, and an understanding of human behavior.</p>
            </div>
          </div>
        </div>

        {/* Section 4: My Approach */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent mb-6">My Approach</h2>
            <div className="space-y-4 text-secondary text-lg">
              <div className="flex items-start space-x-3">
                <span className="text-blue text-xl">•</span>
                <div>
                  <span className="font-semibold text-accent">Start with "Why"</span> Understanding the deeper purpose behind every campaign.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue text-xl">•</span>
                <div>
                  <span className="font-semibold text-accent">Systems Thinking</span> Recognizing marketing as interconnected with product, customer experience, culture, and strategy.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue text-xl">•</span>
                <div>
                  <span className="font-semibold text-accent">Build, Don't Broadcast</span> Creating genuine value, building lasting relationships, and earning attention authentically.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue text-xl">•</span>
                <div>
                  <span className="font-semibold text-accent">Meaningful Metrics</span> Prioritizing data that truly signifies brand health and business impact, beyond vanity metrics.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={process.env.PUBLIC_URL + '/thumbnails/about-photo-4.png'} 
              alt="Srijan Mishra - Focused approach" 
              className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-3xl object-cover shadow-2xl border-8 border-surface"
            />
          </div>
        </div>

        {/* Section 5: Beyond Work */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <img 
              src={process.env.PUBLIC_URL + '/thumbnails/about-photo-5.JPG'} 
              alt="Srijan Mishra - Beyond work" 
              className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-3xl object-cover shadow-2xl border-8 border-surface"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent mb-6">Beyond Work</h2>
            <div className="space-y-4 text-secondary text-lg">
              <p>When I'm not crafting strategic campaigns or building communities, I'm deeply immersed in exploring <strong><em>advancements in AI and Web3</em></strong>—not just as a marketer, but as someone genuinely intrigued by the technology transforming our world.</p>
              <p><strong><em>Mentorship</em></strong> is another passion of mine. Having navigated the leap from technical specialist to creative leader, I actively mentor emerging talents bridging tech and marketing, guiding them through the nuanced challenges of combining diverse disciplines.</p>
            </div>
          </div>
        </div>

        {/* Section 6: Looking Ahead */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent mb-6">Looking Ahead</h2>
            <div className="space-y-4 text-secondary text-lg">
              <p>Marketing today stands at a <strong><em>pivotal moment</em></strong>. AI revolutionizes content creation and distribution, Web3 redefines community dynamics, and consumer expectations evolve rapidly.</p>
              <p>I'm not simply adapting—I'm <strong><em>actively shaping these transformations</em></strong>. Whether it's representing pioneering AI companies at global conferences, cultivating authentic communities around groundbreaking technology, or guiding legacy brands through future-proof strategies, I'm committed to <strong><em>defining the next era of marketing</em></strong>.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={process.env.PUBLIC_URL + '/thumbnails/about-photo-6.jpg'} 
              alt="Srijan Mishra - Looking ahead" 
              className="w-96 h-96 md:w-[450px] md:h-[450px] rounded-3xl object-cover shadow-2xl border-8 border-surface"
            />
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-surface rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-accent mb-6">Let's Connect</h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">Great partnerships start with meaningful conversations. Whether you're launching something new, scaling something existing, or trying to figure out what's next, let's talk.</p>
          <p className="text-lg text-accent font-semibold mb-8">Because the most rewarding challenges are those we solve together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-3 rounded-lg bg-blue text-background font-bold shadow hover:bg-blue-dark hover:scale-105 transition">
              Get in Touch
            </Link>
            <a href="https://linkedin.com/in/srijan-mishraa" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border-2 border-teal text-teal font-bold hover:bg-teal hover:text-background hover:scale-105 transition">
              LinkedIn
            </a>
            <a href="https://x.com/srijanweb3" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border-2 border-blue text-blue font-bold hover:bg-blue hover:text-background hover:scale-105 transition">
              Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  ); 
}
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS configuration
    const serviceId = 'service_gq3rvnq';
    const templateId = 'template_u5vlr2g';
    const publicKey = 'A-ES4P8aRHuEyQYd_';
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Srijan',
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully! I\'ll get back to you soon.');
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Sorry, there was an error sending your message. Please try again or email me directly.');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full bg-background text-primary font-sans pt-20">
      <section className="max-w-2xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-16">
          <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue via-teal to-accent shadow-lg">
            <svg className="w-10 h-10 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-1M16 3.13a4 4 0 01.88 7.9M8 3.13a4 4 0 00-.88 7.9" /></svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent text-center" style={{fontFamily: 'Montserrat, Poppins, sans-serif'}}>Let's Get in Touch</h1>
          <p className="text-xl text-secondary mb-8 max-w-2xl text-center">
            I'm always excited to explore new projects, ideas, and collaborations. Whether you're launching something big, need strategic marketing advice, or simply want to discuss the next big thing in tech—I'm all ears.
          </p>
        </div>

        {/* Unified Contact Options Card */}
        <div className="bg-surface rounded-2xl p-8 shadow-lg mb-16 w-full max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-accent mb-6 text-center">Contact Options</h2>
          <div className="flex flex-col divide-y divide-muted">
            {/* Email */}
            <a href="mailto:srijan.web3@gmail.com" className="flex items-center py-4 gap-4 group hover:bg-muted/60 rounded-lg transition">
              <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-accent">Email</div>
                <div className="text-blue group-hover:underline">srijan.web3@gmail.com</div>
              </div>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/srijan-mishraa" target="_blank" rel="noopener noreferrer" className="flex items-center py-4 gap-4 group hover:bg-muted/60 rounded-lg transition">
              <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                <FaLinkedin className="text-background text-xl" />
              </div>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-secondary text-sm">Professional network</div>
              </div>
            </a>
            {/* Twitter */}
            <a href="https://x.com/srijanweb3" target="_blank" rel="noopener noreferrer" className="flex items-center py-4 gap-4 group hover:bg-muted/60 rounded-lg transition">
              <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                <FaXTwitter className="text-background text-xl" />
              </div>
              <div>
                <div className="font-semibold">Twitter</div>
                <div className="text-secondary text-sm">Thoughts & insights</div>
              </div>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/shivamm.mishraa" target="_blank" rel="noopener noreferrer" className="flex items-center py-4 gap-4 group hover:bg-blue/60 rounded-lg transition">
              <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                <FaInstagram className="text-background text-xl" />
              </div>
              <div>
                <div className="font-semibold">Instagram</div>
                <div className="text-secondary text-sm">Behind-the-scenes</div>
              </div>
            </a>
            {/* GitHub */}
            <a href="https://github.com/Shiv-web3" target="_blank" rel="noopener noreferrer" className="flex items-center py-4 gap-4 group hover:bg-blue/60 rounded-lg transition">
              <div className="w-10 h-10 bg-blue rounded-full flex items-center justify-center">
                <FaGithub className="text-background text-xl" />
              </div>
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-secondary text-sm">Technical projects</div>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface rounded-2xl p-8 shadow-lg mb-16 w-full max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-accent mb-6 text-center">Prefer a Quick Message?</h2>
          <p className="text-center text-secondary mb-8">Fill out the form below, and I'll get back to you shortly.</p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-accent mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-accent mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-accent mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-accent mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent resize-none"
                placeholder="Tell me about your project, idea, or question..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue text-background font-bold rounded-lg hover:bg-blue-dark hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue to-teal rounded-2xl p-12 text-background mt-12">
          <h2 className="text-3xl font-bold mb-4">I look forward to connecting and turning ideas into impact!</h2>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="flex flex-col min-h-screen bg-background text-primary font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/social" element={<SocialShowcase />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
