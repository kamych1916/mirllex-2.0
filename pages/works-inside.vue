<template>
  <div id="works-inside-index">
    <main id="main" class="site-main bg-half-ring-right bg-half-ring-top">
      <section id="page-content">
        <div class="wrapper">
          <div id="single">
            <div class="row gutter-width-lg single-content">
              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                <div
                  v-for="item in items"
                  :key="item.id"
                  class="img object-fit"
                >
                  <div class="object-fit-cover">
                    <img :src="item.imgSrc" :alt="item.alt" />
                  </div>
                </div>
              </div>

              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                <p class="date">
                  <span class="large">25</span> May,
                  {{ new Date().getFullYear() }}
                </p>

                <h1 class="small">Product photography</h1>

                <div class="description">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa.
                  </p>

                  <h5>Idea</h5>

                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate. At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique
                    sunt in culpa.
                  </p>

                  <h5>Product features</h5>

                  <ul>
                    <li>At vero eos et accusamus</li>
                    <li>At vero eos et accusamus</li>
                    <li>At vero eos et accusamus</li>
                    <li>At vero eos et accusamus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import WorksInsideData from "~/data/works-inside/worksInsideData.json";

export default {
  data() {
    return {
      items: WorksInsideData.worksInsideData,
    };
  },
  mounted: function () {
    document.body.classList.add("single");
    document.body.classList.add("single-portfolio");
    document.body.classList.add("bg-fixed");
    document.body.classList.add("bg-line");
  },
  beforeDestroy() {
    document.body.classList.remove("single");
    document.body.classList.remove("single-portfolio");
    document.body.classList.remove("bg-fixed");
    document.body.classList.remove("bg-line");
  },
  metaInfo: {
    title: "Works inside | Oxer - Minimal Portfolio Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
