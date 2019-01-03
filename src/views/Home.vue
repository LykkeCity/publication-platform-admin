<template>
  <div class="home">
    <table style="width:100%">
      <tr>
        <td>
          <h1>Your articles</h1>
        </td>
        <td style="text-align:right">
          <button class="btn btn-success btn-lg">New article</button>
        </td>
      </tr>
    </table>
    <hr>
    <div v-for="article in articles" :key="article.id">
      <div class="preview-title">{{article.title}}</div>
      <div class="preview-brief">{{article.brief}}</div>

      <hr>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import articlesModule from "@/store/modules/ArticleInfo";

@Component({
  components: {}
})
export default class Home extends Vue {
  get articles() {
    return articlesModule.articles;
  }
}
</script>
<style lang="scss">
@import "src/styles/vars";
.preview-title {
  font-family: $font-default;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 5px;
}

.preview-brief {
  font-family: $font-default;
  font-size: 14px;
  font-weight: 400;
}
</style>

