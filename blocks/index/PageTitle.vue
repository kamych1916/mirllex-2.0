<template>
  <section id="page-title" class="block">
    <div class="wrapper">
      <div class="row">
        <div class="col col-1 position-relative">
          <div class="title">
            <h1 class="h">Mirllex<span class="dot">.</span></h1>

            <div class="title-clone">Mirllex</div>
          </div>

          <div class="spacer p-top-lg">
            <!-- <p class="p-large w-75">My name is Luca Reynolds. I’m a photographer and heres is my portfolio. Have a look.</p> -->
            <p class="p-large w-75">
              Креативная студия, производящая эффективные цифровые продукты для
              прогрессивных компаний.
            </p>
            <!-- Мы&nbsp;креативная студия производящая эффективные цифровые продукты для прогрессивных компаний -->
          </div>
        </div>

        <div class="col col-2 d-none d-sm-block">
          <div class="d-flex">
            <div class="align-self-start w-100">
              <div class="img object-fit">
                <div class="object-fit-cover">
                  <img
                    src="/images/office.jpg"
                    class="img-fluid"
                    alt="Luca Reynolds"
                  />
                </div>
              </div>
            </div>

            <div class="align-self-end p-left-scroll">
              <a
                @click="scrollToSection('#my-works')"
                title="Scroll"
                class="
                  btn btn-link btn-vertical
                  transform-scale-h
                  border-0
                  p-0
                  scroll-to-id
                  d-flex
                "
                href="#my-works"
              >
                <span class="vertical-text">
                  <span>с</span>
                  <span>к</span>
                  <span>р</span>
                  <span>о</span>
                  <span>л</span>
                  <span>л</span>
                </span>

                <span class="align-self-end">
                  <i class="icon-c icon-arrow-down"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Page-Title",
};
</script>
