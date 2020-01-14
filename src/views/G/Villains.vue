<template>
  <b-container>
      <h1>
        Villains Most wanted List
      </h1>
      <div v-for="villain in villains" :key="villain.id">
        <div>
          <p class="evil">{{ villain.name }} #{{villain.id + 1}}</p>
          <b-button type="button" @click="deletevillain(villain.id)">Dead?</b-button>
        </div>
        <img alt="image" :src="villain.image" width="30%" height="30%"/>
      </div>  
      <input v-model="imgurl" placeholder="Image Url"/>
      <input v-model="newVillain" placeholder="Name"/>
      <b-button type="button" @click="addvillain"> Villain hinzufügen</b-button>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
components: { }
})
export default class Villains extends Vue {

  private villains: object[] = [
    {name: 'Professor Chaos' , id: 0,image :'https://vignette.wikia.nocookie.net/spsot/images/c/cd/Professor_chaos_tfbw.png/revision/latest?cb=20180508035643'},
    {name: 'Darth Vader' , id: 1,image :'https://res.cloudinary.com/jerrick/image/upload/w_720/uhkp9laekxcseijvwsdn.jpg'},
    {name: 'General Disaster' , id: 2,image:'https://vignette.wikia.nocookie.net/southpark/images/7/78/Latest-44.png/revision/latest/scale-to-width-down/310?cb=20170531033552'},
  ]

  private newVillain: string = '';
  private imgurl: string = '';

  private addvillain() {
    if(this.newVillain === '' || this.imgurl === ''){
      return;
    }
    const id = this.villains.length;
    const villain = {name: this.newVillain, id,image: this.imgurl}
    this.villains.push(villain);
    this.newVillain = '';
    this.imgurl = '';
  }

  private deletevillain(id: number) {
    let newVillainList: any[] = this.villains;
    this.villains = [];
    newVillainList.splice(id,1);

    for (let i = 0; i < newVillainList.length; i++) {
      this.villains.push({ name: newVillainList[i].name, id: i,image:newVillainList[i].image})
    }
  }

}
</script>
<style scoped>
.evil{
  color: red;
}
</style>