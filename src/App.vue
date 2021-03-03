<template>
  <section id="app">
    <heading />
    <!-- Play around with animating between list states -->
    <div class="trivia__container">
      <template v-for="item in triviaItems">
        <trivia-card :item="item" :key="item.question" />
      </template>
    </div>
  </section>
</template>

<script>
import data from "./trivia";
import Heading from "./components/Heading.vue";
import TriviaCard from "./components/TriviaCard.vue";

export default {
  data() {
    return {
      triviaItems: data,
    };
  },
  components: {
    Heading,
    TriviaCard,
  },
};
</script>

<style>
:root {
  --black: #292535;
  --lightBlack: #2c2839;
  --fontWhite: #e6e6e6;

  --shadow: -6px -6px 9px #2e2c3c, 6px 6px 9px rgba(0, 0, 0, 0.1);
  --shadowInset: inset -6px -6px 9px #2e2c3c,
    inset 6px 6px 9px rgba(0, 0, 0, 0.1);
}

body {
  display: flex;

  align-content: center;
  color: var(--fontWhite);
  letter-spacing: 0.1em;

  margin: 0;
  padding: 0;
  background-color: var(--black);
}

p {
  margin: 0;
  padding: 0;
}

.trivia__container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
