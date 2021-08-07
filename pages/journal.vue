<template>
  <div id="journal-index">
    <main id="main" class="site-main p-0 mt-5">
      <PageTitle />

      <section id="page-content" class="spacer p-top-xl">
        <div id="blog">
          <div class="wrapper">
            <div class="row gutter-width-lg">
              <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <Blog />

                <LoadMore />
              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import PageTitle from "~/blocks/journal/PageTitle";
import Blog from "~/blocks/journal/Blog";
import LoadMore from "~/components/Loadmore/Loadmore";
import Sidebar from "~/blocks/journal/Sidebar";

export default {
  components: {
    PageTitle,
    Blog,
    LoadMore,
    Sidebar,
  },
  mounted: function () {
    document.body.classList.add("blog");
    document.body.classList.add("bg-fixed");
    document.body.classList.add("bg-line");
  },
  beforeDestroy() {
    document.body.classList.remove("blog");
    document.body.classList.remove("bg-fixed");
    document.body.classList.remove("bg-line");
  },
  metaInfo: {
    title: "Journal | Oxer - Minimal Portfoli Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
