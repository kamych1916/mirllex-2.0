
<template>
  <div id="home-index">
    <Loading />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/blocks/header/Header";
import Footer from "~/blocks/footer/Footer";

export default {
  components: {
    Header,

    Footer,
  },
  mounted() {
    document.body.classList.add("home");
    document.body.classList.add("bg-fixed");
    document.body.classList.add("bg-line");
  },
  beforeDestroy() {
    document.body.classList.remove("home");
    document.body.classList.remove("bg-fixed");
    document.body.classList.remove("bg-line");
  },
};
</script>
