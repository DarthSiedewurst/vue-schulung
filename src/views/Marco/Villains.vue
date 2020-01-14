<template>
  <b-container>
    <h1>Bösewichte</h1>
    <p></p>
    <div v-for="villain in villains" :key="villain.id">
      <b-row>
        <b-col class="col-4">
          <p>{{ villain.name }}</p>
        </b-col>
        <b-col class="col-8">
          <p><b-button type="button" @click="deleteVillain(villain.id)">löschen</b-button></p>
        </b-col>
      </b-row>
    </div>      
    <b-row>
        <b-col class="col-4">
          <input v-model="newVillain"/>
        </b-col>
        <b-col class="col-8">
          <b-button type="button" @click="addVillain"> Bösewicht hinzufügen</b-button>
        </b-col>
      </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
components: { }
})
export default class Villains extends Vue {

  private villains: object[] = [
    {name: 'Skeletor' , id: 0},
    {name: 'Pizza the Hut' , id: 1},
    {name: 'Lord Helmchen' , id: 2},
  ]

  private newVillain: string = '';

  private addVillain() {
    const id = this.villains.length;
    const villain = {name: this.newVillain, id}
    this.villains.push(villain);
    this.newVillain = '';
  }

  private deleteVillain(id: number) {
    let newVillainList: any[] = this.villains;
    this.villains = [];
    newVillainList.splice(id,1);

    for (let i = 0; i < newVillainList.length; i++) {
      this.villains.push({ name: newVillainList[i].name, id: i})
    }
  }
}
</script>
<style scoped>

</style>