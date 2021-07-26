<template></template>

<script></script>

<style lang="scss">
.header {
  // background: white;
  // box-shadow: 0 2px 3px #dcdcdc;
  .header-btn {
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
    border-radius: 35px;
    transition: 0.2s;
    background-color: #3a8ee6;
    &:hover {
      background-color: #66b1ff;
    }
  }
  .events-text {
    display: inline;
  }
  @media (max-width: 767px) {
    .events-text {
      display: none;
    }
  }
}
</style>
