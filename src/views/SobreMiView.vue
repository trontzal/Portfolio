<template>
  <div>
    <p class="reveal-text">{{ revealedText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalText: "Tu párrafo a revelar letra a letra.",
      revealedText: ""
    };
  },
  mounted() {
    this.revealText();
  },
  methods: {
    revealText() {
      const textArray = this.originalText.split("");
      let currentIndex = 0;

      const revealInterval = setInterval(() => {
        if (currentIndex < textArray.length) {
          this.revealedText += textArray[currentIndex];
          currentIndex++;
        } else {
          clearInterval(revealInterval);
        }
      }, 20); // Cambia este valor para ajustar la velocidad de la revelación
    }
  }
};
</script>

<style>
.reveal-text {
  overflow: hidden;
  white-space: nowrap;
}
</style>
