<template>
  <router-link
    title="Logo"
    class="logo logo-secondary transform-scale-h"
    to="/"
  >
    <img @click="closeModal" src="/images/logo/logo-2.svg" alt="Logo" />
  </router-link>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$route.path;
    },
    showMenuModal() {
      return this.$store.state.modal.showMenuModal;
    },
  },
  methods: {
    closeModal() {
      if (this.currentPage === "/") {
        if (this.showMenuModal) {
          this.$store.commit("modal/closeMenuModal");
        }
      } else {
        return;
      }
    },
  },
};
</script>
