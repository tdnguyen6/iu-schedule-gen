<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/courses">Courses</router-link>
      <router-link to="/generator">Generator</router-link>
      <router-link to="/profiles">Profiles</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  padding: 0;
}
</style>
