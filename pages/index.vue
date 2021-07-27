<template>
  <main id="main" class="site-main">
    <PageTitle />

    <section id="my-works" class="block spacer m-top-xl">
      <div class="wrapper">
        <h2>
          <router-link title="My works" class="transform-scale-h" to="/works"
            >Наши <span class="line">кейсы</span></router-link
          >
        </h2>
      </div>

      <MyWorks />
    </section>

    <OurServices />

    <Request />

    <Blog />
  </main>
</template>

<script>
import PageTitle from "~/blocks/index/PageTitle";
import MyWorks from "~/blocks/works/MyWorks";
import OurServices from "~/blocks/services/OurServices";
import Blog from "~/blocks/index/Blog";
export default {
  components: {
    PageTitle,
    MyWorks,
    OurServices,
    Blog,
  },
};
</script>

<style>
</style>
