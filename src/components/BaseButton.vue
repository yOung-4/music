<script>
export default {
  name: 'BaseButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="button-background">
    <div class="text">
      {{ buttonText }}
    </div>
  </div>
</template>

<style scoped>
.button-background {
  padding: 0.3125rem 0.625rem;

  border-radius: 0.625rem;
  background: var(--color-surface-selected);
}

.text {
  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 0.625rem;
  font-weight: 300;
}
</style>
