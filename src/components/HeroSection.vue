<script setup>
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
</script>

<template>
  <section id="about" class="min-h-screen flex items-center pt-20">
    <div class="max-w-5xl mx-auto px-6 py-20 w-full">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Text -->
        <div class="space-y-6">
          <div class="font-mono text-sm text-[#6c63ff] mb-2">Hello, world! 👋</div>
          <h1 class="text-5xl md:text-6xl font-bold text-[#1a1a2e] leading-tight">
            {{ store.profile.name }}
          </h1>
          <p class="text-lg text-[#6c63ff] font-medium">{{ store.profile.title }}</p>
          <p class="text-[#4a4a6a] leading-relaxed text-base">
            {{ store.profile.bio }}
          </p>
          <div class="flex items-center gap-2 text-sm text-[#4a4a6a]">
            <span>📍</span>
            <span>{{ store.profile.location }}</span>
          </div>
          <div class="flex gap-4 pt-2">
            <a
              :href="store.profile.github"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a2e] text-white rounded-xl text-sm font-medium hover:bg-[#6c63ff] transition-colors duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              :href="store.profile.linkedin"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 border border-[#6c63ff] text-[#6c63ff] rounded-xl text-sm font-medium hover:bg-[#6c63ff] hover:text-white transition-colors duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Visual -->
        <div class="flex justify-center">
          <div class="relative">
            <!-- Avatar placeholder -->
            <div class="w-72 h-72 rounded-3xl bg-linear-to-br from-[#6c63ff] to-[#00c896] p-1">
              <div class="w-full h-full rounded-3xl bg-cream flex items-center justify-center">
                 <img class="w-60" src="/assets/img/satya.png" alt="Satya Photo">
              </div>
            </div>
            <!-- Floating badge -->
            <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100 font-mono text-xs text-[#6c63ff]">
              $ git push origin main ✓
            </div>
            <div class="absolute -top-4 -left-4 bg-green-soft rounded-2xl px-4 py-2 shadow-sm font-mono text-xs text-[#00c896] font-medium">
              kubectl apply -f . ✓
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

