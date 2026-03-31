<script>
export default {
  name: 'TextInput',
  props: ['modelValue'],
  data() {
    return {
      focused: false
    }
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    onFocus() {
      this.focused = true
    },
    onBlur() {
      this.focused = false
    }
  }
}
</script>

<template>
  <div class="input-background">
    <div class="input-title">
      invitation code
    </div>
    <div class="input-sector" :class="{selected: focused}">
      <input class="input-text" :value="modelValue" @input="onInput" @focus="onFocus"
             @blur="onBlur" />
    </div>
  </div>
</template>

<style scoped>
.input-background {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.125rem;
}

.input-title {
  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 0.725rem;
  font-weight: 300;
}

.input-sector {
  padding: 0.125rem 0.3125rem;

  border-bottom: 1px solid var(--color-text-primary);
}

.input-sector.selected {
  border-bottom: 1px solid var(--color-surface-tag);
}

.input-text {
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;

  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;

  box-sizing: border-box;
  appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
}
</style>
