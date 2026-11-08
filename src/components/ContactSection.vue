<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)

function submit() {
  // Handle form submission — integrate with your backend/email service
  sent.value = true
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <section id="contact" class="py-24">
    <div class="max-w-5xl mx-auto px-6">
      <div class="mb-14">
        <p class="font-mono text-sm text-[#6c63ff] mb-2">05. contact</p>
        <h2 class="text-3xl font-bold text-[#1a1a2e]">Let's work together</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left -->
        <div class="space-y-6">
          <p class="text-[#4a4a6a] leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
          </p>
          <div class="space-y-4">
            <a :href="`mailto:${store.profile.email}`"
              class="flex items-center gap-3 text-sm text-[#4a4a6a] hover:text-[#6c63ff] transition-colors group"
            >
              <div class="w-9 h-9 rounded-xl bg-[#e8e6ff] flex items-center justify-center group-hover:bg-[#6c63ff] transition-colors">
                <svg class="w-4 h-4 text-[#6c63ff] group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              {{ store.profile.email }}
            </a>
            <a :href="store.profile.github" target="_blank"
              class="flex items-center gap-3 text-sm text-[#4a4a6a] hover:text-[#6c63ff] transition-colors group"
            >
              <div class="w-9 h-9 rounded-xl bg-[#e8e6ff] flex items-center justify-center group-hover:bg-[#6c63ff] transition-colors">
                <svg class="w-4 h-4 text-[#6c63ff] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              GitHub
            </a>
          </div>
        </div>

        <!-- Form -->
        <div v-if="!sent" class="space-y-4">
          <div>
            <label class="block text-xs font-medium text-[#4a4a6a] mb-1.5">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="John Doe"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#1a1a2e] placeholder-gray-300 focus:outline-none focus:border-[#6c63ff] focus:ring-2 focus:ring-[#6c63ff]/20 transition"
            />
          </div>
          <div>
            <label class="block text-xs font-medium text-[#4a4a6a] mb-1.5">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="john@example.com"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#1a1a2e] placeholder-gray-300 focus:outline-none focus:border-[#6c63ff] focus:ring-2 focus:ring-[#6c63ff]/20 transition"
            />
          </div>
          <div>
            <label class="block text-xs font-medium text-[#4a4a6a] mb-1.5">Message</label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Tell me about your project..."
              class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#1a1a2e] placeholder-gray-300 focus:outline-none focus:border-[#6c63ff] focus:ring-2 focus:ring-[#6c63ff]/20 transition resize-none"
            ></textarea>
          </div>
          <button
            @click="submit"
            class="w-full py-3 bg-[#6c63ff] text-white rounded-xl text-sm font-semibold hover:bg-[#5a52e0] transition-colors duration-200"
          >
            Send Message →
          </button>
        </div>

        <div v-else class="bg-[#d4f7ef] rounded-2xl p-8 text-center">
          <div class="text-4xl mb-3">✅</div>
          <p class="text-[#1a1a2e] font-semibold">Message sent!</p>
          <p class="text-sm text-[#4a4a6a] mt-1">I'll get back to you soon.</p>
          <button @click="sent = false" class="mt-4 text-xs text-[#00c896] font-medium hover:underline">
            Send another
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

