<template>
  <div id="works-index">
    <main id="main" class="site-main">
      <PageTitle />

      <section id="page-content" class="spacer p-top-xl">
        <MyWorks />
      </section>
    </main>
  </div>
</template>

<script>
import PageTitle from "~/blocks/works/PageTitle";
import MyWorks from "~/blocks/works/MyWorks";

export default {
  components: {
    PageTitle,
    MyWorks,
  },
  mounted: function () {
    document.body.classList.add("archive");
    document.body.classList.add("bg-fixed");
    document.body.classList.add("bg-line");
  },
  beforeDestroy() {
    document.body.classList.remove("archive");
    document.body.classList.remove("bg-fixed");
    document.body.classList.remove("bg-line");
  },
  metaInfo: {
    title: "Works | Oxer - Minimal Portfolio Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
