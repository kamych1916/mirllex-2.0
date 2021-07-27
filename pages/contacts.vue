<template>
  <div id="contacts-index">
    <main id="main" class="site-main">
      <PageTitle />

      <section id="page-content" class="block spacer p-top-xl">
        <div class="wrapper">
          <div id="contacts" class="block">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                <h2 class="pb-4">Заходите <span class="line">в гости</span></h2>

                <p class="mt-0 pt-0">
                  Где бы вы ни были – мы всегда на связи! Аудио, видео или лично
                  – нам подходит всё!
                </p>
              </div>

              <div class="col-xl-8 col-lg-8 col-md-8 col-12 pt-2">
                <div class="list-group list-group-horizontal-sm">
                  <div class="list-group-item">
                    <h4>Город</h4>

                    <p>Душанбе <br />Санкт Петербург</p>
                  </div>

                  <div class="list-group-item">
                    <h4>Телефон</h4>

                    <p>
                      <a title="+992 918 622 774" href="tel:+992918622774">
                        +992 918 622 774 &nbsp;( Рахимов Камол )
                      </a>
                      <a title="+7 981 125 99 48" href="tel:+79811259948">
                        +7 981 125 99 48 &nbsp;&nbsp;( Тьет Зъонг )
                      </a>
                    </p>
                  </div>
                  <div class="list-group-item mb-0 pb-0">
                    <h4>Почта</h4>

                    <p>
                      <a
                        title="info@mirllex.space"
                        href="mailto:info@mirllex.space"
                        >info@mirllex.space</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block spacer mt-5">
            <h2>Оставьте <span class="line">заявку</span></h2>

            <ContactsForm />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import PageTitle from "~/blocks/contacts/PageTitle";
import ContactsForm from "~/components/Forms/ContactsForm";

export default {
  components: {
    PageTitle,
    ContactsForm,
  },
  mounted: function () {
    document.body.classList.add("page");
    document.body.classList.add("bg-fixed");
    document.body.classList.add("bg-line");
  },
  beforeDestroy: function () {
    document.body.classList.remove("page");
    document.body.classList.remove("bg-fixed");
    document.body.classList.remove("bg-line");
  },
  metaInfo: {
    title: "Contacts | Oxer - Minimal Portfolio Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
