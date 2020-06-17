<template>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="https://j-town.net/images/2019/town/town20191010173054.jpg"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Hidemitsu Aoki</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: "連絡先一覧", icon: "mdi-menu" }],
    };
  },
};
</script>
