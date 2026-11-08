<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>

<template>
  <section id="experience" class="py-24 bg-white/40">
    <div class="max-w-5xl mx-auto px-6">
      <div class="mb-14">
        <p class="font-mono text-sm text-[#6c63ff] mb-2">04. experience</p>
        <h2 class="text-3xl font-bold text-[#1a1a2e]">Where I've worked</h2>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#6c63ff] via-[#00c896] to-transparent hidden sm:block"></div>

        <div class="space-y-10">
          <div
            v-for="(exp, i) in store.experience"
            :key="i"
            class="sm:pl-12 relative"
          >
            <!-- Dot -->
            <div class="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-[#6c63ff] items-center justify-center">
              <div class="w-2.5 h-2.5 rounded-full bg-[#6c63ff]"></div>
            </div>

            <div class="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#6c63ff]/30 hover:shadow-lg transition-all duration-300">
              <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 class="text-base font-semibold text-[#1a1a2e]">{{ exp.role }}</h3>
                  <p class="text-sm text-[#6c63ff] font-medium mt-0.5">{{ exp.company }}</p>
                </div>
                <span class="font-mono text-xs text-[#4a4a6a] bg-[#f8f6f1] px-3 py-1 rounded-lg whitespace-nowrap">
                  {{ exp.period }}
                </span>
              </div>
              <p class="text-sm text-[#4a4a6a] leading-relaxed">{{ exp.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

