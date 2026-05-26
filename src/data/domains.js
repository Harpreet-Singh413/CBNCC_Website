import { 
  FiGlobe, 
  FiSmartphone, 
  FiCpu, 
  FiTerminal, 
  FiLayers, 
  FiShield, 
  FiCloud, 
  FiGitBranch 
} from 'react-icons/fi';

export const domainsData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Crafting responsive, secure, and lightning-fast digital solutions using cutting-edge frameworks.',
    icon: FiGlobe,
    accentColor: 'from-[#111111]/30 to-[#555555]/10',
    tag: 'Web & Interaction'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Building high-performance native and cross-platform mobile systems for modern devices.',
    icon: FiSmartphone,
    accentColor: 'from-[#111111]/30 to-[#8E8E93]/20',
    tag: 'Mobile Systems'
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    description: 'Developing intelligence via deep neural networks, predictive models, and custom data pipelines.',
    icon: FiCpu,
    accentColor: 'from-[#555555]/30 to-[#C8C7C8]/10',
    tag: 'Intelligence Systems'
  },
  {
    id: 'comp-prog',
    title: 'Competitive Programming',
    description: 'Sharpening logic, efficiency, and algorithmic speed to dominate in global contests.',
    icon: FiTerminal,
    accentColor: 'from-[#111111]/40 to-[#A3A3A3]/20',
    tag: 'Algorithms'
  },
  {
    id: 'ui-ux',
    title: 'UI / UX Design',
    description: 'Crafting responsive user experiences, clean interfaces, and beautiful digital systems.',
    icon: FiLayers,
    accentColor: 'from-[#8E8E93]/30 to-[#ECEBEC]/50',
    tag: 'Human Interface'
  },
  {
    id: 'cybersec',
    title: 'Cybersecurity',
    description: 'Securing assets, auditing complex systems, and implementing defense cryptography.',
    icon: FiShield,
    accentColor: 'from-[#111111]/30 to-[#555555]/15',
    tag: 'Security & Trust'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Architecting scalable serverless clusters, automated pipelines, and cloud infra.',
    icon: FiCloud,
    accentColor: 'from-[#555555]/20 to-[#A3A3A3]/30',
    tag: 'Cloud & Infrastructure'
  },
  {
    id: 'open-source',
    title: 'Open Source',
    description: 'Building shared packages, collaborating on global libraries, and shaping tools.',
    icon: FiGitBranch,
    accentColor: 'from-[#111111]/40 to-[#C8C7C8]/20',
    tag: 'Global Tech'
  }
];
