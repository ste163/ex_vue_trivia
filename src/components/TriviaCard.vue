<template>
  <section class="card card__trivia">
    <p class="trivia__difficulty">{{ item.difficulty }}</p>
    <p class="trivia__question">{{ item.question }}</p>
    <button class="trivia__reveal">Reveal answer</button>
  </section>
</template>

<script>
export default {
  props: {
    item: Object
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
}

.trivia__reveal {
  grid-row: 3;
  grid-column: 1 / 3;
  align-self: end;
  justify-self: center;

  width: 70%;
}
</style>
