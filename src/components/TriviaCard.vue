<template>
  <section class="card card__trivia">
    <p class="trivia__difficulty">{{ item.difficulty }}</p>
    <p
      class="trivia__question"
      :class="{
        trivia__answer: item.answerShown === true
      }"
    >
      {{ displayCardText }}
    </p>
    <button
      class="trivia__reveal"
      :class="{
        reveal__answered: item.answerShown === true
      }"
      @click="handleRevealClick"
    >
      Reveal answer
    </button>
  </section>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    handleRevealClick() {
      this.$emit("reveal-answer", this.item);
    }
  },
  computed: {
    displayCardText() {
      if (this.item.answerShown) {
        return this.item.answer;
      }
      return this.item.question;
    }
  }
};
</script>

<style scoped>
.card__trivia {
  display: grid;
  flex-basis: 20%;
  min-width: 11em;
  font-size: 1.5em;
}

.trivia__difficulty {
  grid-row: 1;
  grid-column: 1 / 3;
  padding: 0.5em 0em 1em 1em;

  font-size: 0.75em;
  font-weight: 100;
}

.trivia__question {
  grid-row: 2;
  grid-column: 1 / 3;
  align-self: start;
  padding: 0em 1em 1em 1em;

  font-size: 0.8em;
  letter-spacing: 0.1em;

  transition: 0.3s;
}

.trivia__answer {
  color: var(--yellow);
  box-shadow: var(--shadowInset);
  border-radius: 20px;
  padding: 1em;
  margin: 0.5em;
  text-align: center;
}

.trivia__reveal {
  grid-row: 3;
  grid-column: 1 / 3;
  align-self: end;
  justify-self: center;

  width: 70%;
  transition: 0.3s;
}

.reveal__answered {
  cursor: auto;
  opacity: 0;
}
</style>
