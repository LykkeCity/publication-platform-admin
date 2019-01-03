<template>
  <div id="app">
    <table id="navtable" style="width:100%">
      <tr>
        <td style="width:280px;vertical-align:top;padding: 0;">
          <MainMenu/>
        </td>

        <td style="vertical-align:top;">
          <div id="theContent">
            <router-view/>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MainMenu from "@/components/MainMenu.vue";

@Component({
  components: {
    MainMenu
  }
})
export default class App extends Vue {
  mounted() {
    window.addEventListener("resize", this.handleRessize);
    this.handleRessize();
  }

  handleRessize() {
    var height = window.innerHeight;
    var el = document.getElementById("navtable");
    if (el != null) {
      el.setAttribute(
        "style",
        "width:100%;border-spacing: 0;height: " + height + "px;"
      );
    }
  }
}
</script>


<style lang="scss">
@import "styles/vars";
@import "styles/mixins";
@import "styles/fonts";
@import "styles/typo";
@import "styles/index";

table #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn {
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.1);
}
</style>
