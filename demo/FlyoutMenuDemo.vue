<template>
  <h3>Flyout Menu</h3>
  <p>
    Flyout Menu is a navigation of infinite layers menu. It can predict user's
    intention, prevent unwanted item highlighted.
  </p>
  <p>Mobile view work in progress.</p>
  <h5>Demo:</h5>
  <div class="demo-wrapper">
    <FlyoutMenu :menu-props="menuProps" />
  </div>
  <DataTable :table-props="tableProps"></DataTable>
  <h5>Usage:</h5>
  <h6>Insert component:</h6>
  <highlightjs language="html" :code="insertCode" />
  <h6>Import:</h6>
  <highlightjs language="js" :code="importCode" />
  <h6>Apply in template：</h6>
  <highlightjs language="js" :code="templateCode" />
  <FooterMessage />
</template>

<script>
import { computed } from "vue";
import { FlyoutMenu, DataTable } from "../src";
import FooterMessage from "./common/FooterMessage.vue";
export default {
  name: "FlyoutMenuDemo",
  components: { FlyoutMenu, DataTable, FooterMessage },
  setup() {
    const insertCode = computed(() => {
      return `
<FlyoutMenu :menu-props="menuProps" />
      `;
    });
    const importCode = computed(() => {
      return `
import { FlyoutMenu } from "air-vue";
      `;
    });
    const templateCode = computed(() => {
      return `
const menuProps = computed(() => {
  return [
    { 
      name: "Home", 
      link: "/" 
    },
    {
      name: "Action",
      link: "/action",
      subMenu: [
        {
          name: "Action L2 subMenu1",
          link: "/#",
          subMenu: [
            {...}
        }]
    },
    ...
    ];
`;
    });
    const tableProps = computed(() => {
      return {
        name: "Props/Events Guide", //optional
        tableHead: [
          {
            label: "Name",
            field: "name",
          },
          {
            label: "Type",
            field: "type",
          },
          {
            label: "Required",
            field: "required",
          },
          {
            label: "Default",
            field: "default",
          },
          {
            label: "Description",
            field: "description",
          },
        ],
        tableBody: [
          {
            name: "menuProps",
            type: "Object",
            required: "true",
            default: "-",
            description: "list of layers of menu",
          },
        ],
      };
    });
    const menuProps = computed(() => {
      return [
        { name: "Home", link: "/" },
        {
          name: "Action",
          link: "/action",
          subMenu: [
            {
              name: "Action L2 subMenu1",
              link: "/#",
              subMenu: [
                {
                  name: "L3 subMenu11",
                  link: "/#",
                  subMenu: [
                    { name: "L4 subMenu11", link: "/#" },
                    { name: "L4 subMenu21", link: "/#" },
                    { name: "L4 subMenu31", link: "/#" },
                    { name: "L4 subMenu41", link: "/#" },
                    { name: "L4 subMenu51", link: "/#" },
                    { name: "L4 subMenu61", link: "/#" },
                    { name: "L4 subMenu71", link: "/#" },
                    { name: "L4 subMenu81", link: "/#" },
                    { name: "L4 subMenu91", link: "/#" },
                    { name: "L4 subMenu11", link: "/#" },
                  ],
                },
                { name: "L3 subMenu21", link: "/#" },
                { name: "L3 subMenu31", link: "/#" },
                { name: "L3 subMenu41", link: "/#" },
                { name: "L3 subMenu51", link: "/#" },
                { name: "L3 subMenu61", link: "/#" },
                { name: "L3 subMenu71", link: "/#" },
                { name: "L3 subMenu81", link: "/#" },
                { name: "L3 subMenu91", link: "/#" },
                { name: "L3 subMenu11", link: "/#" },
              ],
            },
            { name: "Action L2 subMenu2", link: "/#" },
            {
              name: "Action L2 subMenu3",
              link: "/#",
              subMenu: [
                {
                  name: "L3 subMenu11",
                  link: "/#",
                  subMenu: [
                    { name: "L4 subMenu11", link: "/#" },
                    { name: "L4 subMenu21", link: "/#" },
                    { name: "L4 subMenu31", link: "/#" },
                    { name: "L4 subMenu41", link: "/#" },
                    { name: "L4 subMenu51", link: "/#" },
                    { name: "L4 subMenu61", link: "/#" },
                    { name: "L4 subMenu71", link: "/#" },
                    { name: "L4 subMenu81", link: "/#" },
                    { name: "L4 subMenu91", link: "/#" },
                    { name: "L4 subMenu11", link: "/#" },
                  ],
                },
                { name: "L3 subMenu21", link: "/#" },
                { name: "L3 subMenu31", link: "/#" },
                { name: "L3 subMenu41", link: "/#" },
                { name: "L3 subMenu51", link: "/#" },
                { name: "L3 subMenu61", link: "/#" },
                { name: "L3 subMenu71", link: "/#" },
                { name: "L3 subMenu81", link: "/#" },
                { name: "L3 subMenu91", link: "/#" },
                { name: "L3 subMenu11", link: "/#" },
              ],
            },
            { name: "Action L2 subMenu4", link: "/#" },
            { name: "Action L2 subMenu5", link: "/#" },
            { name: "Action L2 subMenu6", link: "/#" },
            { name: "Action L2 subMenu7", link: "/#" },
            { name: "Action L2 subMenu8", link: "/#" },
            { name: "Action L2 subMenu9", link: "/#" },
            { name: "Action L2 subMenu10", link: "/#" },
          ],
        },
        {
          name: "RPG",
          link: "/rpg",
          subMenu: [
            {
              name: "RPG L2 subMenu1",
              link: "/#",
              subMenu: [
                { name: "L3 subMenu11", link: "/#" },
                { name: "L3 subMenu21", link: "/#" },
                { name: "L3 subMenu31", link: "/#" },
                { name: "L3 subMenu41", link: "/#" },
                { name: "L3 subMenu51", link: "/#" },
                { name: "L3 subMenu61", link: "/#" },
                { name: "L3 subMenu71", link: "/#" },
                { name: "L3 subMenu81", link: "/#" },
                { name: "L3 subMenu91", link: "/#" },
                { name: "L3 subMenu11", link: "/#" },
              ],
            },
            {
              name: "RPG L2 subMenu2",
              link: "/#",
            },
            {
              name: "RPG L2 subMenu3",
              link: "/#",
              subMenu: [
                { name: "L3 subMenu13", link: "/#" },
                { name: "L3 subMenu23", link: "/#" },
                { name: "L3 subMenu33", link: "/#" },
                { name: "L3 subMenu43", link: "/#" },
                { name: "L3 subMenu53", link: "/#" },
                { name: "L3 subMenu63", link: "/#" },
                { name: "L3 subMenu73", link: "/#" },
                { name: "L3 subMenu83", link: "/#" },
                { name: "L3 subMenu93", link: "/#" },
                { name: "L3 subMenu13", link: "/#" },
              ],
            },
            {
              name: "RPG L2 subMenu4",
              link: "/#",
            },
            {
              name: "RPG L2 subMenu5",
              link: "/#",
              subMenu: [
                { name: "L3 subMenu15", link: "/#" },
                { name: "L3 subMenu25", link: "/#" },
                { name: "L3 subMenu35", link: "/#" },
                { name: "L3 subMenu45", link: "/#" },
                { name: "L3 subMenu55", link: "/#" },
                { name: "L3 subMenu65", link: "/#" },
                { name: "L3 subMenu75", link: "/#" },
                { name: "L3 subMenu85", link: "/#" },
                { name: "L3 subMenu95", link: "/#" },
                { name: "L3 subMenu15", link: "/#" },
              ],
            },
            {
              name: "RPG L2 subMenu6",
              link: "/#",
              subMenu: [
                { name: "L3 subMenu16", link: "/#" },
                { name: "L3 subMenu26", link: "/#" },
                { name: "L3 subMenu36", link: "/#" },
                { name: "L3 subMenu46", link: "/#" },
                { name: "L3 subMenu56", link: "/#" },
                { name: "L3 subMenu66", link: "/#" },
                { name: "L3 subMenu76", link: "/#" },
                { name: "L3 subMenu86", link: "/#" },
                { name: "L3 subMenu96", link: "/#" },
                { name: "L3 subMenu16", link: "/#" },
              ],
            },
            {
              name: "RPG L2 subMenu7",
              link: "/#",
              subMenu: [
                { name: "L3 subMenu17", link: "/#" },
                { name: "L3 subMenu27", link: "/#" },
                { name: "L3 subMenu37", link: "/#" },
                { name: "L3 subMenu47", link: "/#" },
                { name: "L3 subMenu57", link: "/#" },
                { name: "L3 subMenu67", link: "/#" },
                { name: "L3 subMenu77", link: "/#" },
                { name: "L3 subMenu87", link: "/#" },
                { name: "L3 subMenu97", link: "/#" },
                { name: "L3 subMenu17", link: "/#" },
              ],
            },
            {
              name: "RPG L2 subMenu8",
              link: "/#",
              subMenu: [
                { name: "L3 subMenu18", link: "/#" },
                { name: "L3 subMenu28", link: "/#" },
                { name: "L3 subMenu38", link: "/#" },
                { name: "L3 subMenu48", link: "/#" },
                { name: "L3 subMenu58", link: "/#" },
                { name: "L3 subMenu68", link: "/#" },
                { name: "L3 subMenu78", link: "/#" },
                { name: "L3 subMenu88", link: "/#" },
                { name: "L3 subMenu98", link: "/#" },
                { name: "L3 subMenu18", link: "/#" },
              ],
            },
            {
              name: "RPG L2 subMenu9",
              link: "/#",
              subMenu: [
                { name: "L3 subMenu19", link: "/#" },
                { name: "L3 subMenu29", link: "/#" },
                { name: "L3 subMenu39", link: "/#" },
                { name: "L3 subMenu49", link: "/#" },
                { name: "L3 subMenu59", link: "/#" },
                { name: "L3 subMenu69", link: "/#" },
                { name: "L3 subMenu79", link: "/#" },
                { name: "L3 subMenu89", link: "/#" },
                { name: "L3 subMenu99", link: "/#" },
                { name: "L3 subMenu19", link: "/#" },
              ],
            },
            {
              name: "RPG L2 subMenu10",
              link: "/#",
              subMenu: [
                { name: "L3 subMenu10", link: "/#" },
                { name: "L3 subMenu20", link: "/#" },
                { name: "L3 subMenu30", link: "/#" },
                { name: "L3 subMenu40", link: "/#" },
                { name: "L3 subMenu50", link: "/#" },
                { name: "L3 subMenu60", link: "/#" },
                { name: "L3 subMenu70", link: "/#" },
                { name: "L3 subMenu80", link: "/#" },
                { name: "L3 subMenu90", link: "/#" },
                { name: "L3 subMenu10", link: "/#" },
              ],
            },
          ],
        },
        {
          name: "Sports",
          link: "/sports",
          subMenu: [
            { name: "Sports L2 subMenu1", link: "/#" },
            { name: "Sports L2 subMenu2", link: "/#" },
            { name: "Sports L2 subMenu3", link: "/#" },
            { name: "Sports L2 subMenu4", link: "/#" },
            { name: "Sports L2 subMenu5", link: "/#" },
            { name: "Sports L2 subMenu6", link: "/#" },
            { name: "Sports L2 subMenu7", link: "/#" },
            { name: "Sports L2 subMenu8", link: "/#" },
            { name: "Sports L2 subMenu9", link: "/#" },
            { name: "Sports L2 subMenu10", link: "/#" },
          ],
        },
        {
          name: "Simulation",
          link: "/Simulation",
          subMenu: [
            { name: "Simu L2 subMenu1", link: "/#" },
            { name: "Simu L2 subMenu2", link: "/#" },
            { name: "Simu L2 subMenu3", link: "/#" },
            { name: "Simu L2 subMenu4", link: "/#" },
            { name: "Simu L2 subMenu5", link: "/#" },
            { name: "Simu L2 subMenu6", link: "/#" },
            { name: "Simu L2 subMenu7", link: "/#" },
            { name: "Simu L2 subMenu8", link: "/#" },
            { name: "Simu L2 subMenu9", link: "/#" },
            { name: "Simu L2 subMenu10", link: "/#" },
          ],
        },
        {
          name: "Strategy",
          link: "/Strategy",
          subMenu: [
            { name: "Stgy L2 subMenu1", link: "/#" },
            { name: "Stgy L2 subMenu2", link: "/#" },
            { name: "Stgy L2 subMenu3", link: "/#" },
            { name: "Stgy L2 subMenu4", link: "/#" },
            { name: "Stgy L2 subMenu5", link: "/#" },
            { name: "Stgy L2 subMenu6", link: "/#" },
            { name: "Stgy L2 subMenu7", link: "/#" },
            { name: "Stgy L2 subMenu8", link: "/#" },
            { name: "Stgy L2 subMenu9", link: "/#" },
            { name: "Stgy L2 subMenu10", link: "/#" },
          ],
        },
        {
          name: "About",
          link: "/about",
        },
      ];
    });
    return {
      insertCode,
      importCode,
      templateCode,
      tableProps,
      menuProps,
    };
  },
};
</script>

<style lang="scss">
.demo-wrapper {
}
</style>
