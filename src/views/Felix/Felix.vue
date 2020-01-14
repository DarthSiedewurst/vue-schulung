<template>
<b-container>
<HelloWorld class="test5" msg="Loading Website" />
<div class="text-center">
  <b-spinner label="Spinning"></b-spinner>
  <b-spinner type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="primary" label="Spinning"></b-spinner>
  <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="success" label="Spinning"></b-spinner>
  <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
</div>
 <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="You rich?:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.rich"
          :options="YouRich"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Bank account:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.bac"
          required
          placeholder="Enter IBAN"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Your PIN:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.pin"
          required
          placeholder="Enter PIN"
          description="We need that PIN!"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
 </div>
  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="icon-bar">
  <a class="active" href="/"><i class="fa fa-home"></i></a>
  <a href="/Philipp"><i class="fa fa-angry"></i></a>
  <a href="/Marco"><i class="fa fa-hamburger"></i></a>
  <a href="/Felix/villains"><i class="fab fa-mandalorian"></i></a>
  <a href="/G"><i class="fa fa-btc"></i></a>
    </div>

    <b-row>
      <b-col class="col-2">
        <p><router-link to="/Felix/heroes">Heroes</router-link></p>
        <p><router-link to="/Felix/villains">Villains</router-link></p>
      </b-col>
      <b-col class="col-10">
        <router-view/>
      </b-col>
    </b-row>






  
    <div class="mt-2">
      Selected: <strong>{{ selected }}</strong>
    </div>
    <Navigation urlBack="/marco" urlForward="/G" back="Marco" forward="G"></Navigation>
    <HelloWorld msg="Felix coole Webseite!" /> 
    <h1>"Woohooooo"</h1>

<b-carousel
      id="1-FPS-Mooovieeeeee"
      v-model="slide"
      :interval="1000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
       
      <b-carousel-slide
        caption="Super schnelles Auto"
        text="Auto fährt los"
        src="C:/Users/deb839V/Pictures/HTML-Css/1.png"
      ></b-carousel-slide>

       
      <b-carousel-slide src="..\assets\SlomoCar\2.png">
        <h1>Auto gibt Gas!</h1>
      </b-carousel-slide>

      <b-carousel-slide src="@/assets/SlomoCar/3.png"><h1>Auto fährt noch schneller!</h1></b-carousel-slide>

      <b-carousel-slide src="@/assets/SlomoCar/4.png"><h1>Auto fährt schneller als die Polizei erlaubt!</h1></b-carousel-slide>

      <b-carousel-slide img-src="@/assets/SlomoCar/5.png"><h1>Auto fährt aus Bild!</h1></b-carousel-slide>

      
    </b-carousel>



<div>
  <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">
          
<b-carousel
      id="carousel-2"
      v-model="slide"
      :interval="1000"
      controls
      indicators
      background=" #ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
  
     
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        src="https://picsum.photos/1024/480/?image=52"
      >
      </b-carousel-slide>

     
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      
      <b-carousel-slide src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

  
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

     
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>


      </p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">

<b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>

        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>

</div>
 
</b-container>
 
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import HelloWorld from "@/components/HelloWorld.vue";
@Component({
components: { HelloWorld ,Navigation}
})

 export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          bac: '',
          PIN: '',
          rich: null,
        },
        YouRich: [{ text: 'You rich?', value: null }, 'hell nooo', 'no', 'yes', 'veeeerryyyyy rrriiichhhh'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.bac = ''
        this.form.PIN = ''
        this.form.rich = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }




</script>
<style scoped>
.test5{
  text-align: center;
}
.icon-bar {
  width: 100%; /* Full-width */
  background-color: #555; /* Dark-grey background */
  overflow: auto; /* Overflow due to float */
}

.icon-bar a {
  float: left; /* Float links side by side */
  text-align: center; /* Center-align text */
  width: 20%; /* Equal width (5 icons with 20% width each = 100%) */
  padding: 12px 0; /* Some top and bottom padding */
  transition: all 0.3s ease; /* Add transition for hover effects */
  color: white; /* White text color */
  font-size: 36px; /* Increased font size */
}

.icon-bar a:hover {
  background-color: lightblue; /* Add a hover color */
}

.active {
  background-color: blue; /* Add an active/current color */
}
</style>