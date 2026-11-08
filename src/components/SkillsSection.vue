<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()

const categoryColors = {
  Frontend: { bg: 'bg-[#e8e6ff]', text: 'text-[#6c63ff]' },
  Backend:  { bg: 'bg-[#d4f7ef]', text: 'text-[#00c896]' },
  DevOps:   { bg: 'bg-[#fff3e0]', text: 'text-orange-500' },
  Cloud:    { bg: 'bg-[#fce4ec]', text: 'text-pink-500' },
}
</script>

<template>
  <section id="skills" class="py-24 bg-white/40">
    <div class="max-w-5xl mx-auto px-6">
      <div class="mb-14">
        <p class="font-mono text-sm text-[#6c63ff] mb-2">02. skills</p>
        <h2 class="text-3xl font-bold text-[#1a1a2e]">What I work with</h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <div
          v-for="group in store.skills"
          :key="group.category"
          class="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#6c63ff]/30 hover:shadow-lg transition-all duration-300"
        >
          <div
            class="inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4"
            :class="[categoryColors[group.category]?.bg, categoryColors[group.category]?.text]"
          >
            {{ group.category }}
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="px-3 py-1 bg-[#f8f6f1] text-[#4a4a6a] text-sm rounded-lg font-medium border border-gray-100"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

