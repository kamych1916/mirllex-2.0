<template>
  <header id="header" class="site-header">
    <div class="wrapper d-flex justify-content-between">
      <div class="align-self-center">
        <Logo />
      </div>

      <MenuModalButton />
    </div>
  </header>
</template>

<script>
import Logo from "./HeaderLogo";

export default {
  name: "Header",
  components: {
    Logo,
  },
};
</script>
