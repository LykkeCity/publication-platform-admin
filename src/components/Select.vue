<template>
  <select class="form-control" :value="value" @change="changed">
    <option v-for="item in theItems" :value="item.id" :key="item.id">{{item.name}}</option>
  </select>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

interface ISelectItem {
  id: string;
  name: string;
}

@Component({
  components: {}
})
export default class MySelect extends Vue {
  @Prop()
  options?: ISelectItem[];

  @Prop()
  value?: string | null;

  get theItems() {
    return this.options;
  }

  @Emit("input")
  changed(event: any) {
    return event.target.value;
  }
}
</script>

