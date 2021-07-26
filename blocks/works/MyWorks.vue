<template>
  <div class="gallery">
    <div class="wrapper">
      <ul class="gallery-filter list-unstyled no-space">
        <Fragment v-for="filterItem in filterItems" :key="filterItem.id">
          <li @click="filter">
            <a
              :title="filterItem.title"
              class="btn btn-link transform-scale-h click"
              :data-filter="filterItem.filter"
              href=""
              >{{ filterItem.title }}</a
            >
          </li>

          <li>
            <span class="btn btn-link">-</span>
          </li>
        </Fragment>
      </ul>
    </div>

    <div class="gallery-item-wrapper">
      <div class="gallery-items">
        <router-link
          v-for="galleryItem in galleryItems"
          :key="galleryItem.id"
          :title="galleryItem.title"
          :class="['gallery-item active ' + galleryItem.category]"
          :to="galleryItem.link"
        >
          <div class="img object-fit">
            <div class="object-fit-cover">
              <img :src="galleryItem.imgSrc" :alt="galleryItem.title" />
            </div>
          </div>

          <div class="gallery-hover">
            <h4 class="p-5" :style="{ color: galleryItem.color }">
              <p class="mb-2" style="font-size: 12px">Кейс</p>
              {{ galleryItem.title }}
            </h4>

            <span
              class="btn btn-link border-0 transform-scale-h p-0"
              :style="{ color: galleryItem.color }"
            >
              подробнее
              <i class="icon-c icon-arrow-right"></i>
            </span>
          </div>
        </router-link>
      </div>
    </div>

    <div v-if="currentPage === '/'" class="text-center no-space">
      <router-link
        title="See more"
        class="btn btn-link border-0 p-0 transform-scale-h"
        to="/works"
        >Подробнее про кейсы<i class="icon-c icon-arrow-right"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";
let Isotope;
if (process.browser) {
  Isotope = require("isotope-layout");
}
import ImagesLoaded from "imagesloaded";

import FilterData from "~/data/works/filterData.json";
import GalleryData from "~/data/works/galleryData.json";

export default {
  name: "My-Works",
  data() {
    return {
      filterItems: FilterData.filterData,
      galleryItems: GalleryData.galleryData,
    };
  },
  components: {
    Fragment,
    Isotope,
    ImagesLoaded,
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
  methods: {
    filter(event) {
      event.preventDefault();

      const filter = event.target;
      const filterValue = filter.getAttribute("data-filter");
      const filters = document.querySelectorAll(".gallery-filter .click");

      filters.forEach((filter) => {
        if (filter.classList.contains("active")) {
          filter.classList.remove("active");
        }
      });

      filter.classList.add("active");

      this.changeLayout(filterValue);
    },
    changeLayout(newFilter) {
      const grid = document.querySelector(".gallery-items");

      if (this.iso === undefined) {
        this.iso = new Isotope(grid, {
          itemSelector: ".gallery-item",
          masonry: {
            horizontalOrder: true,
          },
        });
      }

      if (newFilter === "*") {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: newFilter });
      }
    },
  },
  mounted() {
    const lastLi = document.querySelector(
      ".gallery .gallery-filter"
    ).lastElementChild;
    lastLi.remove();

    const filters = document.querySelectorAll(".gallery-filter .click");
    filters.forEach((filter) => {
      if (filter.getAttribute("data-filter") === "*") {
        filter.classList.add("active");
      }
    });

    const grid = document.querySelector(".gallery-items");

    const iso = new Isotope(grid, {
      itemSelector: ".gallery-item",
      masonry: {
        horizontalOrder: true,
      },
    });

    const imgLoad = new ImagesLoaded(grid);

    imgLoad.on("progress", function (instance, image) {
      iso.layout();
    });
  },
  unmounted() {
    this.iso.destroy();
  },
};
</script>

