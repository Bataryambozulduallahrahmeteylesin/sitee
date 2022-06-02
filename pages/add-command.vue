<template>
  <div >
    <form @submit="handleSubmit" class="w-full flex justify-center flex-wrap mt-10">
      <input placeholder="Command" class="w-11/12 h-16 bg-gray-900 border border-blue-600 text-lg rounded-2xl block p-2.5 text-center text-white" required>
      <input placeholder="Reply to be send" class="mt-5 w-11/12 h-16 bg-gray-900 border border-blue-600 text-lg rounded-2xl block p-2.5 text-center text-white" required>
      <div class="divide-y flex w-full flex-wrap justify-center">
        <div class="w-11/12 mt-5 flex flex-wrap justify-around border border-white p-12 rounded-2xl">
          <div class="flex justify-center items-center w-6/12">
            <input @change="changeOption('special')" type="checkbox" class="w-6 h-6 rounded-2xl bg-gray-900">
            <span class="text-white font-bold text-xl">Special</span>
          </div>

          <div class="w-full flex">
            <div v-if="special" class="w-full flex flex-wrap justify-center mt-5">
              <input name="specialAlertMessage" placeholder="Alert message" class="mb-5 w-11/12 h-16 bg-gray-900 border border-blue-600 text-lg rounded-2xl block p-2.5 text-center text-white" required>
              <select name="specialFor" class="bg-gray-900 border border-blue-600 text-white text-lg rounded-2xl text-center block w-11/12 h-16">
                <option value="null">Select a role for special</option>
                <option v-for="r in roles" :value="r.id">{{r.name}}</option>
              </select>
            </div>
          </div>

        </div>
        <div class="w-11/12 mt-5 flex flex-wrap justify-around border border-white p-12 rounded-2xl">
          <div class="flex justify-center items-center w-6/12">
            <input @change="changeOption('giveRoleOption')" type="checkbox" class="w-6 h-6 rounded-2xl bg-gray-900">
            <span class="text-white font-bold text-xl">Give role</span>
          </div>    

          <div class="flex justify-center items-center w-6/12">
            <input @change="changeOption('takeRoleOption')" type="checkbox" class="w-6 h-6 rounded-2xl bg-gray-900">
            <span class="text-white font-bold text-xl">Take role</span>
          </div>

          <div class="w-full flex">
            <div v-if="giveRoleOption" class="w-full flex justify-center mt-5">
              <select name="giveRoleOption" class="bg-gray-900 border border-blue-600 text-white text-lg rounded-2xl text-center block w-11/12 h-16">
                <option value="null">Select role for give</option>
                <option v-for="r in roles" :value="r.id">{{r.name}}</option>
              </select>
            </div>

            <div v-if="takeRoleOption" class="w-full flex justify-center mt-5">
              <select name="takeRoleOption" class="bg-gray-900 border border-blue-600 text-white text-lg rounded-2xl text-center block w-11/12 h-16">
                <option value="null">Select role for take</option>
                <option v-for="r in roles" :value="r.id">{{r.name}}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-11/12 mt-5">
          <div class="border border-white p-12 rounded-2xl mt-5">
            <div class="flex justify-center items-center w-full ">
              <input @change="changeOption('waitMentionOption')" type="checkbox" class="w-6 h-6 rounded-2xl bg-gray-900">
              <span class="text-white font-bold text-xl">Wait mention</span>
            </div>

            <div v-if="waitMentionOption" class="w-full mt-5 flex flex-wrap justify-center">
              <input name="waitMentionAlertMessage" placeholder="Alert message" class="mb-5 w-11/12 h-16 bg-gray-900 border border-blue-600 text-lg rounded-2xl block p-2.5 text-center text-white" required>
              <div class="flex justify-center items-center w-3/12">
                <input @change="changeOption('waitMentionGiveRoleOption')" type="checkbox" class="w-6 h-6 rounded-2xl bg-gray-900">
                <span class="text-white font-bold text-xl">Give role</span>
              </div>
              <div class="flex justify-center items-center w-3/12">
                <input @change="changeOption('waitMentionTakeRoleOption')" type="checkbox" class="w-6 h-6 rounded-2xl bg-gray-900">
                <span class="text-white font-bold text-xl">Take role</span>
              </div>
              <div class="flex justify-center items-center w-3/12">
                <input name="waitMentionBan" type="checkbox" class="w-6 h-6 rounded-2xl bg-gray-900">
                <span class="text-white font-bold text-xl">Ban</span>
              </div>
              <div class="flex justify-center items-center w-3/12">
                <input name="waitMentionKick" type="checkbox" class="w-6 h-6 rounded-2xl bg-gray-900">
                <span class="text-white font-bold text-xl">Kick</span>
              </div>

              <div class="w-full flex justify-center">
                <div v-if="waitMentionGiveRoleOption" class="w-full flex justify-center mt-5">
                  <select name="waitMentionGiveRoleOption" class="bg-gray-900 border border-blue-600 text-white text-lg rounded-2xl text-center block w-11/12 h-16">
                    <option value="null">Select role for give</option>
                    <option v-for="r in roles" :value="r.id">{{r.name}}</option>
                  </select>
                </div>

                <div v-if="waitMentionTakeRoleOption" class="w-full flex justify-center mt-5">
                  <select name="waitMentionTakeRoleOption" class="bg-gray-900 border border-blue-600 text-white text-lg rounded-2xl text-center block w-11/12 h-16">
                    <option value="null">Select role for take</option>
                    <option v-for="r in roles" :value="r.id">{{r.name}}</option>
                  </select>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <button type="submit" class="h-16 w-5/12 mt-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2">Add</button>
    </form>
  </div>
</template>

<script setup>
export default {
  head: {
    bodyAttrs: {
      class: "bg-gray-900"
    }
  },
  methods: {
    handleSubmit(e){
      e.preventDefault();

      let cmd = e.target[0].value;
      let res = e.target[1].value;

      let payload = {};

      if(this.giveRoleOption){
        if(e.target.elements["giveRoleOption"].value == "null") return alert("Select a role (give)");
        payload.grr = e.target.elements["giveRoleOption"].value;
      };

      if(this.takeRoleOption){
        if(e.target.elements["takeRoleOption"].value == "null") return alert("Select a role (take)");
        payload.trr = e.target.elements["takeRoleOption"].value;
      };

      if(this.waitMentionOption){
        payload.waitMention = true;
        payload.waitMentionAlertMessage = e.target.elements["waitMentionAlertMessage"].value;

        if(this.waitMentionGiveRoleOption){
          if(e.target.elements["waitMentionGiveRoleOption"].value == "null") return alert("Select a role (give)");

          payload.waitMentionGrr = e.target.elements["waitMentionGiveRoleOption"].value;
        };

        if(this.waitMentionTakeRoleOption){
          if(e.target.elements["waitMentionTakeRoleOption"].value == "null") return alert("Select a role (take)");

          payload.waitMentionTrr = e.target.elements["waitMentionTakeRoleOption"].value;
        };

        if(e.target.elements["waitMentionBan"].checked) payload.waitMentionBan = true;
        if(e.target.elements["waitMentionKick"].checked) payload.waitMentionKick = true;
      };

      if(this.special){
          if(e.target.elements["specialFor"].value == "null") return alert("Select a role (special)");

          payload.specialFor = e.target.elements["specialFor"].value;
          payload.specialAlertMessage = e.target.elements["specialAlertMessage"].value;
      };


      if(this.commands.map(c => c.cmd).includes(cmd)) return alert("This command already exists");

      payload.cmd = cmd;
      payload.res = res;

      this.$axios.post("/api/addCommand",payload).then(c => {
        this.$router.push("/");
      });
    },
    changeOption(name){
      if(this[`${name}`]){
        this[`${name}`] = false;

        if(name == "waitMentionOption") {
          this.waitMentionGiveRoleOption = false;
          this.waitMentionTakeRoleOption = false;
        };
      }else {
        this[`${name}`] = true;
      };
    }
  },
  data: () => ({
    commands: [],
    roles: [],
    giveRoleOption: false,
    takeRoleOption: false,
    waitMentionOption: false,
    waitMentionGiveRoleOption: false,
    waitMentionTakeRoleOption: false,
    special: false
  }),
  async fetch(){
    let data = await this.$axios.get("/api/getData");
    data = data.data;
    this.commands = data.commands;
    this.roles = data.roles;
  }
}
</script>