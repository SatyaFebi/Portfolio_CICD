import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    profile: {
      name: 'Satya Febi Nugroho',
      title: 'Fullstack Developer & DevOps Engineer',
      tagline: 'I build products and ship them reliably.',
      bio: 'Passionate about crafting scalable web applications and automating infrastructure. I thrive at the intersection of development and operations — writing clean code and keeping systems running smooth.',
      email: 'satya@example.com',
      github: 'https://github.com/SatyaFebi',
      linkedin: 'https://linkedin.com/in/satyafbi',
      location: 'Indonesia 🇮🇩',
    },
    skills: [
      { category: 'Frontend', items: ['Vue.js', 'React', 'TypeScript', 'TailwindCSS', 'Nuxt.js'] },
      { category: 'Backend', items: ['Node.js', 'Go', 'Laravel', 'PostgreSQL', 'Redis'] },
      { category: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux'] },
      { category: 'Cloud', items: ['AWS', 'GCP', 'Terraform', 'GitHub Actions', 'Ansible'] },
    ],
    projects: [
      {
        id: 1,
        name: 'Portfolio CI/CD Pipeline',
        desc: 'Automated deployment pipeline with GitHub Actions, Docker, and Nginx. Zero-downtime deployments with health checks.',
        tags: ['DevOps', 'Docker', 'GitHub Actions', 'Nginx'],
        type: 'devops',
        repo: '#',
        live: '#',
      },
      {
        id: 2,
        name: 'E-Commerce Platform',
        desc: 'Full-stack e-commerce app with Vue 3, Laravel backend, payment gateway integration, and real-time inventory.',
        tags: ['Vue 3', 'Laravel', 'MySQL', 'Stripe'],
        type: 'fullstack',
        repo: '#',
        live: '#',
      },
      {
        id: 3,
        name: 'Microservice Orchestration',
        desc: 'Kubernetes-based microservice architecture with service mesh, distributed tracing, and centralized logging.',
        tags: ['Kubernetes', 'Go', 'Grafana', 'Prometheus'],
        type: 'devops',
        repo: '#',
        live: '#',
      },
      {
        id: 4,
        name: 'Real-time Dashboard',
        desc: 'Analytics dashboard with WebSocket live updates, Chart.js visualizations, and role-based access control.',
        tags: ['Vue 3', 'Node.js', 'WebSocket', 'PostgreSQL'],
        type: 'fullstack',
        repo: '#',
        live: '#',
      },
    ],
    experience: [
      {
        company: 'PT. Tech Indonesia',
        role: 'Senior Fullstack Developer & DevOps',
        period: '2023 — Present',
        desc: 'Lead development of cloud-native applications. Architect CI/CD pipelines and manage Kubernetes clusters for 20+ microservices.',
      },
      {
        company: 'StartupXYZ',
        role: 'Fullstack Developer',
        period: '2021 — 2023',
        desc: 'Built and maintained SaaS platform serving 10k+ users. Migrated monolith to microservices, reducing deployment time by 70%.',
      },
      {
        company: 'Freelance',
        role: 'Web Developer',
        period: '2019 — 2021',
        desc: 'Delivered 15+ projects for clients across various industries. Specialized in Vue.js SPAs and RESTful API development.',
      },
    ],
    activeFilter: 'all',
  }),

  getters: {
    filteredProjects(state) {
      if (state.activeFilter === 'all') return state.projects
      return state.projects.filter(p => p.type === state.activeFilter)
    },
  },

  actions: {
    setFilter(filter) {
      this.activeFilter = filter
    },
  },
})

