<template>
  <button
    :title="theme == 'dark' ? 'Dark Theme' : 'Light Theme'"
    @click="toggleTheme()"
    class="theme"
  >
    <Moon :is="theme == 'dark' ? 'Moon' : 'Sun'" height="20px" />
  </button>
</template>
