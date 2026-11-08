<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Fullstack', value: 'fullstack' },
  { label: 'DevOps', value: 'devops' },
]

const tagColors = [
  'bg-[#e8e6ff] text-[#6c63ff]',
  'bg-[#d4f7ef] text-[#00c896]',
  'bg-[#fff3e0] text-orange-500',
  'bg-[#fce4ec] text-pink-500',
]
</script>

<template>
  <section id="projects" class="py-24">
    <div class="max-w-5xl mx-auto px-6">
      <div class="mb-10">
        <p class="font-mono text-sm text-[#6c63ff] mb-2">03. projects</p>
        <h2 class="text-3xl font-bold text-[#1a1a2e]">Things I've built</h2>
      </div>

      <!-- Filter tabs -->
      <div class="flex gap-2 mb-10">
        <button
          v-for="f in filters"
          :key="f.value"
          @click="store.setFilter(f.value)"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          :class="store.activeFilter === f.value
            ? 'bg-[#6c63ff] text-white'
            : 'bg-white text-[#4a4a6a] hover:bg-[#e8e6ff] hover:text-[#6c63ff] border border-gray-100'"
        >
          {{ f.label }}
        </button>
      </div>

      <!-- Project grid -->
      <div class="grid sm:grid-cols-2 gap-6">
        <div
          v-for="project in store.filteredProjects"
          :key="project.id"
          class="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#6c63ff]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center"
              :class="project.type === 'devops' ? 'bg-[#d4f7ef]' : 'bg-[#e8e6ff]'"
            >
              <span class="text-lg">{{ project.type === 'devops' ? '⚙️' : '🚀' }}</span>
            </div>
            <div class="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a :href="project.repo" target="_blank" class="text-[#4a4a6a] hover:text-[#6c63ff]" title="Repo">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a :href="project.live" target="_blank" class="text-[#4a4a6a] hover:text-[#6c63ff]" title="Live">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>

          <h3 class="text-base font-semibold text-[#1a1a2e] mb-2">{{ project.name }}</h3>
          <p class="text-sm text-[#4a4a6a] leading-relaxed mb-4 flex-1">{{ project.desc }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, i) in project.tags"
              :key="tag"
              class="px-2.5 py-0.5 rounded-lg text-xs font-medium"
              :class="tagColors[i % tagColors.length]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

