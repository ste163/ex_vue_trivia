<template>
  <section class="trivia__card">
    <p class="card__difficulty">{{ item.difficulty }}</p>
    <p class="card__question">{{ item.question }}</p>
    <button class="card__reveal">Reveal answer</button>
  </section>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.trivia__card {
  display: grid;

  margin: 1em;
  border-radius: 20px;
  flex-basis: 20%;
  min-width: 11em;

  background-color: var(--lightestBlack);
  box-shadow: var(--shadow);

  font-family: sans-serif;
  font-size: 1.5em;
}

.card__difficulty {
  grid-row: 1;
  grid-column: 1 / 3;

  padding: 0.5em 0em 1em 1em;

  font-size: 0.75em;
  font-weight: 100;
}

.card__question {
  grid-row: 2;
  grid-column: 1 / 3;
  align-self: start;

  font-size: 0.8em;
  letter-spacing: 0.1em;

  padding: 0em 1em 1em 1em;
}

.card__reveal {
  grid-row: 3;
  grid-column: 1 / 3;
  align-self: end;
  justify-self: center;

  width: 70%;

  background-color: var(--lighterBlack);
}
</style>
