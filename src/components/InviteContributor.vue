<template>
  <modal name="invite-dialog">
    <div class="dialog-system">
      <a class="close" v-on:click="hide">
        <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12.707 12L23.854.854a.5.5 0 0 0-.707-.707L12 11.293.854.146a.5.5 0 0 0-.707.707L11.293 12 .146 23.146a.5.5 0 0 0 .708.708L12 12.707l11.146 11.146a.5.5 0 1 0 .708-.706L12.707 12z"
          ></path>
        </svg>
      </a>
    </div>
    <div class="dialog-content">
      <h4>Invite a new Contributor</h4>
      <table style="width:100%">
        <tr>
          <td>
            <label>Email address</label>
            <input class="form-control">
          </td>
          <td>
            <label>Role</label>
            <MySelect :options="contributeRoles" v-model="selectedRole"/>
          </td>
        </tr>
      </table>
      <div style="margin-top:30px;">
        <button class="btn btn-success btn-lg" v-on:click="hide" style="width:100%">Send invitation</button>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import contributeRoles from "@/store/modules/ContributeRoles";
import MySelect from "@/components/Select.vue";

@Component({
  components: { MySelect }
})
export default class InviteContributor extends Vue {
  get contributeRoles() {
    return contributeRoles.roles;
  }

  selectedRole: string = "id2";

  show() {
    this.$modal.show("invite-dialog");
  }
  hide() {
    this.$modal.hide("invite-dialog");
  }
}
</script>

