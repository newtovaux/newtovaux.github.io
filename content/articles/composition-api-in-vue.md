---
title: Composition API in Vuew
description: I was inspired to switch one of my small apps to use the Composition API via the Vue v2 plugin.
tags: tag1
author:
  name: newtovaux
---

After listening to the good Views on Vue podcast, and specifically the episode on the Composition API (https://devchat.tv/views-on-vue/vov-126-vue-composition-api-and-nuxt-with-daniel-roe/) I was inspired (/mentally encouraged) to switch one of my small apps to use the Composition API.

For those that haven’t read up on it, the (brief) details are here (note this is Vue v3 documentation): https://v3.vuejs.org/guide/composition-api-introduction.html

I was implementing it in a Vue v2 app (as I use Vuetify and a few other bits that aren’t Vue v3 ready), so used the Composition API Plugin for Vue v2: https://github.com/vuejs/composition-api

It’s fairly simple to get your head around as a concept (a lot now lives in setup()). The two major points I learned were:

- You have to watch out for those variables that you want to make ‘reactive’, using ref()
- You have to watch out for those computed methods, using computed()
- I found a really useful ‘cheatsheet’ here: https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf – it’s great as a quick reference.