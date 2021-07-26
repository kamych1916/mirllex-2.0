<template>
  <div id="contacts-index">
    <main id="main" class="site-main">
      <PageTitle />

      <section id="page-content" class="block spacer p-top-xl">
        <div class="wrapper">
          <div id="contacts" class="block">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                <h2>Here you <br />can <span class="line">contact me</span></h2>

                <p class="mt-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae.
                </p>
              </div>

              <div class="col-xl-8 col-lg-8 col-md-8 col-12">
                <div class="list-group list-group-horizontal-sm">
                  <div class="list-group-item">
                    <h4>City</h4>

                    <p>Colorado Springs</p>
                  </div>

                  <div class="list-group-item">
                    <h4>Clipping</h4>

                    <p>CO</p>
                  </div>

                  <div class="list-group-item">
                    <h4>State</h4>

                    <p>Colorado</p>
                  </div>

                  <div class="list-group-item">
                    <h4>Phone</h4>

                    <p>
                      <a title="719-338-4628" href="tel:719-338-4628"
                        >719-338-4628</a
                      >
                    </p>
                  </div>
                </div>

                <div class="list-group list-group-horizontal-sm mt-0">
                  <div class="list-group-item mb-0 pb-0">
                    <h4>Email</h4>

                    <p>
                      <a
                        title="hello@yourdomain.com"
                        href="mailto:hello@yourdomain.com"
                        >hello@yourdomain.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block spacer p-top-xl">
            <h2>Fill up a <span class="line">form</span></h2>

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
