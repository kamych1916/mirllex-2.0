<template>
  <nav class="menu-primary">
    <ul class="clearfix list-unstyled">
      <li
        @click="toggleMenuModal"
        :class="[currentPage === '/' ? activeClass : '', 'menu-item']"
      >
        <router-link title="Home" to="/">Главная</router-link>
      </li>

      <!-- <li
        @click="toggleMenuModal"
        :class="[currentPage.includes('about') ? activeClass : '', 'menu-item']"
      >
        <router-link title="About" to="/about">О нас</router-link>
      </li> -->

      <li
        @click="toggleMenuModal"
        :class="[currentPage.includes('works') ? activeClass : '', 'menu-item']"
      >
        <router-link title="Works" to="/works">Кейсы</router-link>
      </li>

      <li
        @click="toggleMenuModal"
        :class="[
          currentPage.includes('journal') ? activeClass : '',
          'menu-item',
        ]"
      >
        <router-link title="Journal" to="/journal">Новости</router-link>
      </li>

      <li
        @click="toggleMenuModal"
        :class="[
          currentPage.includes('contacts') ? activeClass : '',
          'menu-item',
        ]"
      >
        <router-link title="Contacts" to="/contacts">Контакты</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "current-menu-item",
    };
  },
  methods: {
    toggleMenuModal() {
      this.$store.commit("modal/toggleMenuModal");
      this.$store.commit("modal/variablesNull");
    },
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
};
</script>
