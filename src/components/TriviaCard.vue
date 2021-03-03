<template>
  <section class="trivia__card">
    <p class="card__difficulty">{{ item.difficulty }}</p>
    <p class="card__question">{{ item.question }}</p>
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
  border-radius: 20px;
  background-color: var(--lightBlack);

  font-family: sans-serif;

  margin: 1em;
  box-shadow: var(--shadow);
  font-size: 1.5em;
  flex-basis: 20%;
}

.card__difficulty {
  grid-template-rows: 1;
  grid-template-columns: 1 / 3;

  padding: 0.5em 0em 1em 1em;

  font-size: 0.75em;
  font-weight: 100;
}

.card__question {
  grid-template-rows: 2;
  grid-template-columns: 1 / 3;
  align-self: start;

  font-size: 0.8em;
  letter-spacing: 0.1em;

  padding: 0em 1em 1em 1em;
}
</style>
