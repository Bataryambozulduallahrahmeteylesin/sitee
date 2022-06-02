(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{279:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(63),r(36),r(16),r(76),r(77),{head:{bodyAttrs:{class:"bg-gray-900"}},data:function(){return{commands:[],filteredCommands:[],filter:""}},methods:{deleteCommand:function(t){this.$axios.post("/api/deleteCommand",{cmd:t}).then((function(t){alert("Deleted")})),this.commands=this.commands.filter((function(e){return e.cmd!=t})),this.filteredCommands=this.commands.filter((function(e){return e.cmd!=t}))},filterCommands:function(){var t=this;this.filteredCommands=this.commands.filter((function(e){return e.cmd.includes(t.filter)}))}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/getData");case 2:data=(data=e.sent).data,t.commands=data.commands,t.filteredCommands=data.commands;case 6:case"end":return e.stop()}}),e)})))()}}),l=r(61),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex justify-center mt-10"},[r("div",{staticClass:"w-7/12 flex justify-center divide-y flex-wrap"},[r("div",{staticClass:"w-full flex justify-center divide-y"},[r("div",{staticClass:"w-full flex justify-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"w-11/12 h-16 bg-gray-900 border border-blue-600 text-lg rounded-2xl block p-2.5 text-center text-white",attrs:{placeholder:"Search Command"},domProps:{value:t.filter},on:{keyup:t.filterCommands,input:function(e){e.target.composing||(t.filter=e.target.value)}}}),t._v(" "),r("NuxtLink",{attrs:{to:"/add-command"}},[r("button",{staticClass:"h-16 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2",attrs:{type:"button"}},[t._v("Add Command")])])],1)]),t._v(" "),r("div",{staticClass:"w-full mt-10"},[r("div",{staticClass:"mt-10"},t._l(t.filteredCommands,(function(e){return r("div",[r("div",{staticClass:"mt-2 block p-2 bg-white rounded-2xl border border-gray-200 shadow-md hover:bg-gray-100 text-center flex flex-col justify-around"},[r("div",[r("h5",{staticClass:"mb-2 text-2xl font-bold tracking-tight text-gray-900 break-words"},[t._v(t._s(e.cmd))]),t._v(" "),r("p",{staticClass:"font-normal text-gray-700 dark:text-gray-400 break-words"},[t._v("Reply: "+t._s(e.res))]),t._v(" "),e.specialFor?r("p",[t._v("Special For: "+t._s(e.specialFor))]):t._e(),t._v(" "),e.grr?r("p",[t._v("Give Role: "+t._s(e.grr))]):t._e(),t._v(" "),e.trr?r("p",[t._v("Take Role: "+t._s(e.trr))]):t._e(),t._v(" "),e.waitMention?r("div",{staticClass:"w-full flex justify-center flex-wrap"},[r("p",{staticClass:"font-bold w-full"},[t._v("Wait Mention")]),t._v(" "),e.waitMentionGrr?r("p",{staticClass:"w-full"},[t._v("Give Role: "+t._s(e.waitMentionGrr))]):t._e(),t._v(" "),e.waitMentionTrr?r("p",{staticClass:"w-full"},[t._v("Take Role: "+t._s(e.waitMentionTrr))]):t._e(),t._v(" "),e.waitMentionBan?r("p",{staticClass:"w-full"},[t._v("Ban")]):t._e(),t._v(" "),e.waitMentionKick?r("p",{staticClass:"w-full"},[t._v("Kick")]):t._e()]):t._e()]),t._v(" "),r("button",{staticClass:"mt-3 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2",on:{click:function(r){return t.deleteCommand(e.cmd)}}},[t._v("Delete Command")])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);