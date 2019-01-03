<template>
  <div id="mainmenu">
    <div style="text-align:center" class="menu-padding">
      <img src="https://www.lykke.com/img/lykke_new.svg">
      <div>Publication platform</div>
    </div>

    <div class="menu-padding">
      <form class="form-inline form_search">
        <div class="input-group">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon"
          >
          <div class="input-group-append">
            <button class="btn btn-icon" type="button" id="button-addon">
              <i class="icon icon--search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="main-menu">
      <router-link to="/" class="menu-item" v-bind:class="{ active: thePath=='/'}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M28.688 0H3.313c-.375 0-.625.313-.625.688v30.625c0 .375.25.688.625.688h25.375c.375 0 .625-.313.625-.688V.688c0-.375-.25-.688-.625-.688zM28 30.688H4V1.313h3.313v1.375h-.625v2.625h2.625V2.688h-.625V1.313h4v1.375H12v2.625h2.688V2.688H14V1.313h4v1.375h-.688v2.625H20V2.688h-.688V1.313h4v1.375h-.625v2.625h2.625V2.688h-.625V1.313H28zM23.313 9.313H8.688c-.375 0-.688.313-.688.688s.313.688.688.688h14.625c.375 0 .688-.313.688-.688s-.313-.688-.688-.688zm0 4H8.688c-.375 0-.688.313-.688.688s.313.688.688.688h14.625c.375 0 .688-.313.688-.688s-.313-.688-.688-.688zm0 4H8.688c-.375 0-.688.313-.688.688s.313.688.688.688h14.625c.375 0 .688-.313.688-.688s-.313-.688-.688-.688zm0 4H8.688c-.375 0-.688.313-.688.688s.313.688.688.688h14.625c.375 0 .688-.313.688-.688s-.313-.688-.688-.688zm0 4H8.688c-.375 0-.688.313-.688.688s.313.688.688.688h14.625c.375 0 .688-.313.688-.688s-.313-.688-.688-.688z"
          ></path>
        </svg>
        Articles
      </router-link>

      <router-link
        to="/newarticle"
        class="menu-item"
        v-bind:class="{ active: thePath=='/newarticle'}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="M28.5 7.313L24.687 3.5a.68.68 0 0 0-.938 0l-.5.563a3.26 3.26 0 0 0-1.813-.563c-.938 0-1.75.313-2.375.938l-7.563 7.563a.68.68 0 0 0 0 .938.71.71 0 0 0 .5.188.677.677 0 0 0 .438-.188l7.563-7.5c.563-.625 1.5-.75 2.25-.438l-6 6.063-13.25 13.188v.063c-.063 0-.063.063-.125.188L.061 31.066a.664.664 0 0 0 .125.75.71.71 0 0 0 .5.188c.063 0 .188 0 .25-.063l6.563-2.813c.125-.063.188-.063.188-.125h.063l13.188-13.25 7.563-7.5c.125-.125.188-.313.188-.5s-.063-.313-.188-.438zM1.938 30.063l1.813-4.188 2.375 2.375zm5.312-2.5L4.437 24.75l12.25-12.25 2.813 2.813zm13.188-13.188l-2.813-2.813 6.125-6.188.5-.438 2.813 2.813z"
          ></path>
        </svg>
        New Article
      </router-link>

      <router-link to="/team" class="menu-item" v-bind:class="{ active: thePath=='/team'}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-miterlimit="10" fill="none">
            <path
              d="M4 6.609V8l-2.539.726C.933 8.877.5 9.45.5 10v.5H6m1-3.922V8l2.538.726c.529.151.962.724.962 1.274v.5H5"
            ></path>
            <ellipse cx="5.5" cy="3.771" rx="3" ry="3.271"></ellipse>
            <path
              d="M8.469 3.198c-.5.5-1.93.476-2.469-.528-1 1-2.625 1-3.434.429M17 6.609V8l-2.539.726c-.528.151-.961.724-.961 1.274v.5H19m1-3.906V8l2.538.726c.529.151.962.724.962 1.274v.5H18"
            ></path>
            <ellipse cx="18.5" cy="3.771" rx="3" ry="3.271"></ellipse>
            <path
              d="M21.453 3.195c-.5.5-1.914.479-2.453-.525-1 1-2.625 1-3.434.429M10.5 19.609V21l-2.539.726C7.433 21.877 7 22.45 7 23v.5h5.5m1-3.891V21l2.538.726c.529.151.962.724.962 1.274v.5h-5.5"
            ></path>
            <ellipse cx="12" cy="16.771" rx="3" ry="3.271"></ellipse>
            <path d="M14.953 16.17c-.5.5-1.914.503-2.453-.5-1 1-2.625 1-3.434.429"></path>
            <path stroke-linecap="round" d="M4 12.5L6.5 15M20 12.5L17.5 15"></path>
          </g>
        </svg>Team
      </router-link>

      <div class="menu-separator">SETTINGS</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class MainMenu extends Vue {
  thePath = "";

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.thePath = this.$route.path;
  }
}
</script>

<style lang="scss">
#mainmenu {
  padding: 0;
  background: #f3f8fb;
  height: 100%;
  box-shadow: 0 3px 5px lightgray;
}

.menu-padding {
  padding: 15px;
}

.menu-item {
  padding: 10px 5px 10px 20px;
  margin-right: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  display: block;
  stroke: #000;
}

.menu-separator {
  margin-top: 30px;
  padding-left: 20px;
  font-size: 13px;
}

.main-menu .active {
  background: #0389ef;
  color: white;
  display: block;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.466);
}

.main-menu .active:hover {
  background: #209eff;
  color: white;
}

.main-menu .active svg {
  fill: white;
  stroke: white;
}

.menu-item svg {
  width: 16px;
  margin-right: 5px;
}

.menu-item:hover {
  background: #0389ef1c;
}

.main-menu a {
  text-decoration: none !important;
}
</style>

