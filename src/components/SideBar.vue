<script>
export default {
  name: 'SideBar',
  data() {
    return {
      PageNames: ['Now Listening', 'Music Library']
    }
  },
  methods: {
    tabClass(PageName) {
      let routeType = this.$route.meta.tab
      let isActive = false
      if (PageName === 'Now Listening' && routeType === 'Now Listening') {
        isActive = true
      } else if (PageName === 'Music Library' && routeType === 'Music Library') {
        isActive = true
      }
      return {
        active: isActive
      }
    }
  }
}
</script>

<template>
  <div class="background">

    <div class="title">
      Listen<br />Together
    </div>

    <div class="divider" />

    <div class="nav-tab-list">
      <div v-for="PageName in PageNames" :key="PageName" class="nav-tab"
           :class="tabClass(PageName)">
        <div class="tab-text" :class="{active: tabClass(PageName).active}">
          {{ PageName }}
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.background {
  width: 13.75rem;
  padding: 1.25rem 0.9375rem 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.25rem;

  border-radius: 1.5625rem;
  background: var(--color-background-secondary);
}

.title {
  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 1.75rem;
  font-weight: 900;
}

.divider {
  height: 0.0625rem;

  background: var(--color-surface-selected);
}

.nav-tab-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.3125rem;
}

.nav-tab {
  padding: 0.3125rem 0.625rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
}

.nav-tab.active {
  background: var(--color-surface-selected);
}

.tab-text {
  flex: 1 0 0;

  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 400;
}

.tab-text.active {
  color: var(--color-background-secondary);
}

</style>
