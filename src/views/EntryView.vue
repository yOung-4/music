<script>
import BaseButton from '@/components/BaseButton.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'EntryView',
  components: {
    BaseButton,
    TextInput
  },
  data() {
    return {
      inputValue1: ""
    }
  },
}
</script>

<template>
  <div class="content-background">
    <div class="card-group">

      <div class="card">
        <div class="title-text">
          Welcome to Listen Together!
        </div>
      </div>

      <div class="card">
        <div class="info-text">
          To start, you can join a existing room by an invitation code.
          <br />Or, you can create your own room,
          <br />and let others join by sharing the invitation code.
        </div>
      </div>

      <div class="card">
        <div class="sector">
          <div class="entry-title">
            Enter a room by invitation code
          </div>
          <div class="divider" />
          <TextInput class="button" v-model="inputValue1" />
          <BaseButton class="button" button-text="Enter" />
        </div>

        <div class="sector">
          <div class="entry-title">
            Create your own room
          </div>
          <div class="divider" />
          <div class="enter-text">
            let others join by sharing the invitation code displayed in your room.
          </div>
          <BaseButton class="button" button-text="create" />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.content-background {
  padding-top: 1.5625rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3125rem;
  flex: 1 0 0;
}

.card-group {
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
}

.card {
  display: flex;
  padding: 0.9375rem 4.375rem 0.9375rem 0.9375rem;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5625rem;

  border-radius: 1.5625rem;
  background: var(--color-background-secondary);
}

.title-text {
  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 900;
}

.info-text {
  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 0.875rem;
  font-weight: 400;
}

.sector {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.625rem;
}

.entry-title {
  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  font-weight: 400;
}

.divider {
  height: 0.0625rem;
  background: var(--color-surface-selected);
}

.button {
  align-self: flex-start;
}

.enter-text {
  color: var(--color-text-primary);
  font-family: "Roboto Mono", monospace;
  font-size: 0.875rem;
  font-weight: 400;
}
</style>
