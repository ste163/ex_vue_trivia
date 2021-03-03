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
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");

:root {
  /* Colors */
  --black: #161419;
  --lightestBlack: #19171c;
  --lighterBlack: #25222a;
  --lightBlack: #2d2933;

  --fontWhite: #e6e6e6;
  --yellow: #e5e575;
  --lavendar: #e0bff3;

  /* Shadows */
  --shadow: -4px -4px 9px #201e24, 4px 4px 9px rgba(0, 0, 0, 0.1);
  --shadowInset: inset -4px -4px 9px #201e24,
    inset 4px 4px 9px rgba(0, 0, 0, 0.1);
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
  font-family: "Comfortaa", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5em;
}

button {
  font-family: "Comfortaa", sans-serif;
  font-weight: 900;
  font-size: 0.8em;
  color: var(--fontWhite);

  margin-bottom: 0.5em;
  padding: 0.5em 1em;

  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: transparent;

  box-shadow: var(--shadow);
}

.trivia__container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
