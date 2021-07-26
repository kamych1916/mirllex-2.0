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

    <section id="contact" class="block spacer p-top-xl">
      <div class="wrapper">
        <div class="text-center">
          <h3 class="mb-0 after">
            Хотите проект от диджитал агентства Mirllex? <br />Вы можете сделать
            это прямо сейчас!
          </h3>

          <div class="block spacer p-top-lg">
            <router-link
              title="Contacts"
              to="/contacts"
              class="btn btn-dark btn-bold transform-scale-h border-0"
              >заказть проект</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- <Blog /> -->
  </main>
</template>

<script>
import PageTitle from "~/blocks/index/PageTitle";
import MyWorks from "~/blocks/works/MyWorks";
import OurServices from "~/blocks/services/OurServices";
// import Blog from "~/blocks/index/Blog";
export default {
  components: {
    PageTitle,
    MyWorks,
    OurServices,
    // Blog,
  },
};
</script>

<style>
</style>
