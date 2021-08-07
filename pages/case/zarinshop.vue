<template>
  <div id="works-inside-index">
    <main id="main" class="site-main bg-half-ring-right bg-half-ring-top pt-2">
      <section id="page-content">
        <div class="wrapper">
          <div id="single">
            <div class="row">
              <div class="col-lg my-5">
                <p class="date ml-1">
                  с <span class="large">10</span>декабря 2020 по
                  <span class="large">01</span>февраля 2021
                </p>
                <h1 class="smallest">
                  ZarinShop&nbsp;&mdash; интернет-магазин.
                </h1>
                <p style="color: #d07679">
                  Система находится в альфа-тестировании.
                </p>
              </div>
              <div
                class="
                  col-lg
                  my-5
                  d-flex
                  justify-content-lg-end justify-content-center
                "
              >
                <img width="200" height="50" src="/images/zarinshop-logo.jpg" />
              </div>
            </div>
            <div class="container mb-5">
              <p>
                <b class="fs-22">Клиент и задача</b>
              </p>
              <p class="mb-5">
                &laquo;ZarinShop&raquo; является компанией, производящей большое
                количество домашнего текстиля в&nbsp;Узбекистане.
              </p>
              <p>
                Необходимо было перевести продажи товаров
                из&nbsp;оффлайн-режима&nbsp;&mdash; в онлайн, тем самым
                автоматизировать процесс выкладки и&nbsp;продажи товаров.
                Заказчик потребовал создать интернет-магазин (как и веб, так и
                мобильные версии).
              </p>
            </div>

            <div class="my-5">
              <img width="100%" src="/images/zarinshop-background-1.png" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Цели</b>
              </p>
              <p>
                Перед нами стояли цели&nbsp;&mdash; реализовать веб
                и&nbsp;мобильные приложения, которые будут работать быстро
                и&nbsp;синхронно. Также мы&nbsp;создали удобную админ. панель,
                соответствующую всем параметрам руководства ZarinShop.
                <br />
                <br />
                Данный проект, как и&nbsp;все остальные, был разработан
                с&nbsp;нуля, без шаблонов и&nbsp;конструкторов.
              </p>
            </div>

            <div class="my-5">
              <img width="100%" src="/images/zarinshop-background-2.png" />
            </div>

            <div class="container my-5">
              <p>
                <b class="fs-22">Над проектом работали</b>
              </p>
              <div class="row">
                <div class="col-lg my-4">
                  <div>Front-end разработчик</div>
                  <div class="mt-3">
                    <b>Камол Рахимов</b>
                  </div>
                </div>
                <div class="col-lg my-4">
                  <div>Back-end разработчик</div>
                  <div class="mt-3"><b>Дмитрий Криничный</b></div>
                </div>
                <div class="col-lg my-4">
                  <div>Проектный менеджер</div>
                  <div class="mt-3"><b>Фаррух Мадаминов</b></div>
                </div>
              </div>
            </div>

            <Request class="my-5 py-5" />
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
  head: {
    title: "Кейс | Агентство Единый подрядчик",
    titleTemplate: "%s",
  },
};
</script>
