<template>
  <div class="w-full flex justify-center mt-10">
    <div class="w-7/12 flex justify-center divide-y flex-wrap">
      <div class="w-full flex justify-center divide-y">
        <div class="w-full flex justify-center">
          <input v-model="filter" @keyup="filterCommands" placeholder="Search Command" class="w-11/12 h-16 bg-gray-900 border border-blue-600 text-lg rounded-2xl block p-2.5 text-center text-white">
          <NuxtLink to="/add-command">
            <button type="button" class="h-16 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2">Add Command</button>
          </NuxtLink>
        </div>
      </div>

      <div class="w-full mt-10">
        <div class="mt-10">
          <div v-for="c in filteredCommands">
            <div class="mt-2 block p-2 bg-white rounded-2xl border border-gray-200 shadow-md hover:bg-gray-100 text-center flex flex-col justify-around">
              <div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 break-words">{{c.cmd}}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 break-words">Reply: {{c.res}}</p>
                <p v-if="c.specialFor">Special For: {{c.specialFor}}</p>
                <p v-if="c.grr">Give Role: {{c.grr}}</p>
                <p v-if="c.trr">Take Role: {{c.trr}}</p>
                <div v-if="c.waitMention" class="w-full flex justify-center flex-wrap">
                  <p class="font-bold w-full">Wait Mention</p>
                  <p v-if="c.waitMentionGrr" class="w-full">Give Role: {{c.waitMentionGrr}}</p>
                  <p v-if="c.waitMentionTrr" class="w-full">Take Role: {{c.waitMentionTrr}}</p>
                  <p v-if="c.waitMentionBan" class="w-full">Ban</p>
                  <p v-if="c.waitMentionKick" class="w-full">Kick</p>
                </div>
              </div>
              <button @click="deleteCommand(c.cmd)" class="mt-3 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Command</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "bg-gray-900"
    }
  },
  data: () => ({
    commands: [],
    filteredCommands:[],
    filter: ""
  }),
  methods: {
    deleteCommand(cmd){
      this.$axios.post("/api/deleteCommand",{
        cmd
      }).then(c => {
        alert("Deleted")
      });

      this.commands = this.commands.filter(c => c.cmd != cmd);
      this.filteredCommands = this.commands.filter(c => c.cmd != cmd);
    },
    filterCommands(){
      this.filteredCommands = this.commands.filter(c => c.cmd.includes(this.filter));
    }
  },
  async fetch(){
    let data = await this.$axios.get("/api/getData");
    data = data.data;
    this.commands = data.commands;
    this.filteredCommands = data.commands;
  }
}
</script>
