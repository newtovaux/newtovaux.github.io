<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-btn
        icon
      >
        <NuxtLink to="/">
          <v-icon>mdi-application</v-icon>
        </NuxtLink>
      </v-btn>
      <NuxtLink to="/">
        <v-toolbar-title v-text="title">
          {{ title }}
        </v-toolbar-title>
      </NuxtLink>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      fixed: false,
      title: 'newtovaux'
    }
  }
}
</script>
<style>
.nuxt-link-active {
  text-decoration: none;
  color:rgba(0, 0, 0, 0.87) !important;
}
</style>
