<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  isMobileOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-[#f8f6f1]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <nav class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <button @click="scrollTo('about')" class="font-mono text-sm font-medium text-[#6c63ff]">
        sfn<span class="text-[#1a1a2e]">.dev</span>
      </button>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link">
          <button
            @click="scrollTo(link)"
            class="text-sm text-[#4a4a6a] hover:text-[#6c63ff] transition-colors duration-200 font-medium"
          >
            {{ link }}
          </button>
        </li>
      </ul>

      <!-- Mobile toggle -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-1"
        @click="isMobileOpen = !isMobileOpen"
      >
        <span class="w-6 h-0.5 bg-[#1a1a2e] transition-all" :class="isMobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
        <span class="w-6 h-0.5 bg-[#1a1a2e] transition-all" :class="isMobileOpen ? 'opacity-0' : ''"></span>
        <span class="w-6 h-0.5 bg-[#1a1a2e] transition-all" :class="isMobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="isMobileOpen"
      class="md:hidden bg-[#f8f6f1] border-t border-gray-100 px-6 pb-4"
    >
      <ul class="flex flex-col gap-4 pt-4">
        <li v-for="link in links" :key="link">
          <button @click="scrollTo(link)" class="text-sm font-medium text-[#4a4a6a] hover:text-[#6c63ff]">
            {{ link }}
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

