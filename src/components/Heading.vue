<template>
  <header>
    <h1>Star Wars</h1>
    <h2>Trivia</h2>
    <section class="card card__difficulty">
      <h3>Difficulty Selection</h3>
      <div class="buttons">
        <button>Reset</button>
        <button>Easy</button>
        <button>Medium</button>
        <button>Hard</button>
      </div>
    </section>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap");

header {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  font-family: "Bowlby One SC", sans-serif;
  color: var(--yellow);
}

h1 {
  font-size: 4em;
  margin-bottom: 0;
  letter-spacing: 0.3em;
}

h2 {
  font-size: 2em;
  margin-top: 0;
  letter-spacing: 0.5em;
}

h3 {
  font-family: "Comfortaa", sans-serif;
  font-weight: 900;
  font-size: 1.3em;
  margin: 0;
  margin-bottom: 1em;
}

button {
  font-size: 1.2em;
  margin: 0.5em 1em;
}

.buttons {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.card__difficulty {
  display: flex;
  flex-flow: column wrap;
  padding: 1em;
}
</style>
