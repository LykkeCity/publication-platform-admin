<template>
  <div class="new">
    <InviteContributor ref="modalInvite"/>
    <table style="width:100%">
      <tr>
        <td>
          <h1>Team members</h1>
        </td>
        <td style="text-align:right">
          <button class="btn btn-success btn-lg" v-on:click="show">Invite contributors</button>
        </td>
      </tr>
    </table>
    <hr>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import InviteContributor from "@/components/InviteContributor.vue";

@Component({
  components: {
    InviteContributor
  }
})
export default class Team extends Vue {
  show() {
    this.getInviteContributor().show();
  }

  private getInviteContributor(): InviteContributor {
    return this.$refs.modalInvite as InviteContributor;
  }
}
</script>
