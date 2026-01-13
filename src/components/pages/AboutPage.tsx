import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Heart, TrendingUp, X, Linkedin } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

// Inline mock data - replace with your actual team data
const TEAM_DATA = [
  {
    _id: '1',
    fullName: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Sarah brings over 20 years of technology leadership experience to TechVision. Before joining as CEO, she led digital transformation initiatives at Fortune 500 companies and has a proven track record of scaling businesses through innovation and strategic partnerships.',
    linkedinProfile: 'https://linkedin.com/in/sarahjohnson',
    displayOrder: 1
  },
  {
    _id: '2',
    fullName: 'Michael Chen',
    role: 'Chief Technology Officer',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Michael is a visionary technologist with expertise in cloud architecture, AI/ML, and enterprise systems. He has architected solutions for some of the world\'s most demanding technology challenges and holds multiple patents in distributed computing.',
    linkedinProfile: 'https://linkedin.com/in/michaelchen',
    displayOrder: 2
  },
  {
    _id: '3',
    fullName: 'Emily Rodriguez',
    role: 'VP of Engineering',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    bio: 'Emily leads our engineering teams with a focus on innovation, quality, and team development. She has built and scaled engineering organizations from the ground up and is passionate about fostering inclusive, high-performing teams.',
    linkedinProfile: 'https://linkedin.com/in/emilyrodriguez',
    displayOrder: 3
  },
  {
    _id: '4',
    fullName: 'David Kim',
    role: 'Chief Financial Officer',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    bio: 'David brings deep financial expertise and strategic thinking to TechVision. His experience spans both startups and established enterprises, helping companies optimize their financial operations and achieve sustainable growth.',
    linkedinProfile: 'https://linkedin.com/in/davidkim',
    displayOrder: 4
  }
];

export default function AboutPage() {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState<any[]>([]);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  useEffect(() => {
    // Simulate loading data (without async call)
    const sortedTeam:any = [...TEAM_DATA].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    setTeam(sortedTeam);

    if (memberId) {
      const member = sortedTeam.find((m:any) => m._id === memberId);
      if (member) {
        setSelectedMember(member);
      }
    }
  }, [memberId]);

  const handleMemberClick = (member:any) => {
    setSelectedMember(member);
    navigate(`/about/${member._id}`);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    navigate('/about');
  };

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do, from code quality to client service.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that drive competitive advantage.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices in every engagement.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We invest in our people and partnerships, fostering continuous learning and mutual success.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto px-6 md:px-8 lg:px-12">
        <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-wide">
              About TechVision
            </h1>
            <p className="font-paragraph font-[500] text-base text-secondary/80">
              Empowering businesses through innovative technology solutions since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-8 bg-light-gray/30">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-wide">Our Mission</h2>
              <p className="font-paragraph font-[500] text-base text-secondary mb-6">
                To deliver enterprise-level IT solutions that transform businesses and drive sustainable growth. We believe technology should be an enabler, not a barrier, and we're committed to making advanced IT capabilities accessible to organizations of all sizes.
              </p>
              <p className="font-paragraph font-[500] text-base text-secondary">
                Through strategic partnerships, continuous innovation, and unwavering dedication to client success, we help businesses navigate the complexities of digital transformation with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 p-12 rounded-lg"
            >
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-heading font-bold text-primary mb-2">500+</div>
                  <p className="font-paragraph text-base text-secondary">Projects Delivered</p>
                </div>
                <div>
                  <div className="text-5xl font-heading font-bold text-primary mb-2">98%</div>
                  <p className="font-paragraph text-base text-secondary">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-5xl font-heading font-bold text-primary mb-2">15+</div>
                  <p className="font-paragraph text-base text-secondary">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-wide">Our Vision</h2>
            <p className="font-paragraph font-[500] text-base text-secondary mb-6">
              To be the most trusted technology partner for enterprises worldwide, recognized for our technical excellence, innovative solutions, and commitment to client success.
            </p>
            <p className="font-paragraph font-[500] text-base text-secondary">
              We envision a future where businesses can leverage technology seamlessly to achieve their strategic objectives, and we're dedicated to making that vision a reality through our comprehensive IT services and solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-8 bg-light-gray/30">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-wide">Our Core Values</h2>
            <p className="font-paragraph font-[500] text-base text-secondary max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="font-paragraph text-sm text-secondary">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-8">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center tracking-wide">Our Story</h2>
            
            <div className="space-y-6">
              <p className="font-paragraph font-[500] text-base text-secondary">
                TechVision was founded in 2010 by a team of enterprise IT veterans who recognized a critical gap in the market: businesses needed sophisticated technology solutions, but most providers either lacked the technical depth or the business acumen to deliver truly transformative results.
              </p>
              
              <p className="font-paragraph font-[500] text-base text-secondary">
                Starting with a small team of five engineers in San Francisco, we set out to build a different kind of IT services company—one that combined deep technical expertise with strategic business thinking. Our first client, a mid-sized financial services firm, trusted us to modernize their legacy infrastructure. The project's success led to referrals, and our reputation for excellence began to grow.
              </p>
              
              <p className="font-paragraph font-[500] text-base text-secondary">
                Over the years, we've expanded our capabilities, grown our team to over 200 professionals, and served clients across industries including finance, healthcare, retail, and manufacturing. We've navigated technology shifts from on-premise to cloud, from monoliths to microservices, and from traditional IT to AI-powered solutions.
              </p>
              
              <p className="font-paragraph font-[500] text-base text-secondary">
                Today, TechVision is recognized as a trusted partner for Fortune 500 companies and innovative startups alike. But our core mission remains unchanged: to deliver technology solutions that create real business value, backed by exceptional service and unwavering integrity.
              </p>
              
              <p className="font-paragraph font-[500] text-base text-secondary">
                As we look to the future, we're excited about the opportunities ahead—from AI and machine learning to edge computing and quantum technologies. Whatever the next wave of innovation brings, we'll be ready to help our clients harness it for competitive advantage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 px-8 bg-light-gray/30">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-wide">
              Leadership Team
            </h2>
            <p className="font-paragraph font-[500] text-base text-secondary max-w-2xl mx-auto">
              Meet the visionaries driving innovation and excellence at TechVision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => handleMemberClick(member)}
                className="bg-background border border-light-gray rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-colors group"
              >
                {member.photo && (
                  <div className="aspect-square overflow-hidden bg-light-gray">
                    <img
                      src={member.photo}
                      alt={member.fullName || 'Team member'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {member.fullName}
                  </h3>
                  <p className="font-paragraph text-base text-secondary">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-background border-b border-light-gray p-6 flex justify-between items-center shadow-sm">
                <h2 className="font-heading text-2xl font-bold text-foreground tracking-wide">
                  {selectedMember.fullName}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-light-gray rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    {selectedMember.photo && (
                      <div className="aspect-square rounded-lg overflow-hidden bg-light-gray mb-6">
                        <img
                          src={selectedMember.photo}
                          alt={selectedMember.fullName || 'Team member'}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-heading text-base font-semibold text-foreground mb-2 tracking-wide">
                          Role
                        </h3>
                        <p className="font-paragraph text-sm text-secondary">
                          {selectedMember.role}
                        </p>
                      </div>
                      {selectedMember.linkedinProfile && (
                        <div>
                          <a
                            href={selectedMember.linkedinProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-paragraph text-sm font-medium hover:underline"
                          >
                            <Linkedin size={20} />
                            LinkedIn Profile
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      Biography
                    </h3>
                    <div className="font-paragraph text-base text-secondary whitespace-pre-line">
                      {selectedMember.bio}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      </div>
    </div>
  );
}