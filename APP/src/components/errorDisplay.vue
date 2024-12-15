<template>
  <div class="error-message">
    <svg class="icon" viewBox="0 0 24 24">
      <path
        d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zM13 16h-2v-2h2v2zM13 12h-2V7h2v5z"
      />
    </svg>
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    error: {
      type: Boolean,
      required: true,
    },
    errorMessage: {
      type: String,
      default: 'An error has occurred.',
    },
  },
}
</script>

<style scoped>
.error-message {
  display: flex;
  align-items: center;
  background-color: #ffe6e6;
  border: 1px solid #ff4d4d;
  color: #d8000c;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
}

.icon {
  fill: #d8000c;
  height: 24px;
  width: 24px;
  margin-right: 10px;
}
</style>
