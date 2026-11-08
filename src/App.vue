<script setup>
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen">
    <NavBar />
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-100 py-8">
      <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="font-mono text-xs text-[#4a4a6a]">
          Built with Vue 3 + Pinia + TailwindCSS
        </p>
        <p class="text-xs text-[#4a4a6a]">
          © 2025 Satya Febi Nugroho — All rights reserved
        </p>
      </div>
    </footer>
  </div>
</template>
