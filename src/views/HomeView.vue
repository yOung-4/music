<script>
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'HomeVIew',
  components: {
    SideBar
  }
}
</script>

<template>
  <div class="home">
    <SideBar />
    <router-view />
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  padding: 1.25rem 1.875rem;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  background: var(--color-background-primary);
}
</style>
