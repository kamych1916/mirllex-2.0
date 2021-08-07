<template>
  <div class="menu-toggle align-self-center no-space">
    <nuxt-link
      to="/journal"
      class="btn btn-link border-0 transform-scale-h"
      data-toggle="modal"
      data-target="#menu-modal"
    >
      <span class="align-middle">Блог</span>
    </nuxt-link>
    <button
      @click="toggleMenuModal"
      type="button"
      class="btn btn-link border-0 p-0 transform-scale-h"
      data-toggle="modal"
      data-target="#menu-modal"
    >
      <span class="align-middle">Меню</span>
      <i class="icon-c icon-menu"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Menu-Modal-Button",
  methods: {
    toggleMenuModal: function (event) {
      this.$store.commit("modal/toggleMenuModal");
    },
  },
};
</script>
