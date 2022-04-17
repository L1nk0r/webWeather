<template>
   <div class="container">
      

      <!-- <h1>{{ msg }}</h1>
      <h2>{{ msg }}</h2>
      <h3>{{ msg }}</h3>
      <h4>{{ msg }}</h4>
      <h5>{{ msg }}</h5>
      <h6>{{ msg }}</h6> -->

      <input type="text" placeholder="Input city" id="ctInput" value="Moscow"/>
      
      <button @click="getWeather()">Increment</button>

      <div class="weather_container" v-if=data>
         <h2> {{ city }}, {{ country }} </h2>
         <p> {{ condition }} </p>
         <p> {{ temp }} </p>
         <img alt='' :src=get_icon() />
      </div>

   </div>
</template>

<script>

export default{
   data(){
      return {
         msg: 'Hello world!',
         data: '',
         city: '',
         country: '',
         condition: '',
         icon_url: '',
         temp: '',
      }
   },
   components:{},
   created(){
      this.getWeather();
   },
   methods:{
      async getWeather(){
         this.city = document.querySelector("#ctInput").value;
         this.data = await fetch('https://api.weatherapi.com/v1/current.json?' + new URLSearchParams({
            q: this.city,
            key: '15cd5343ca0f4da29c7131932221704'
         })).
         then(response => response.json());

         this.country = this.data.location.country;
         this.temp = this.data.current.temp_c;
         this.condition = this.data.current.condition.text;
         this.icon_url = this.data.current.condition.icon;
         
         /* console.log(this.data); */
      },
      showWeather(){
         let country = this.data.location;
         return country;
      },
      get_icon(){
         return this.icon_url;
      }
   },
   mounted(){},
   computed:{
      count(){
         return this.$store.state.count;
      }
   }
}
</script>

<style scoped>
   button{
      padding: 10px;
      margin: 20px;
      background-color: #fff;
      border: 1px solid black;
      transition: 0.5s;
   }

   button:hover{
      background-color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
   }

   
   button:active{
      background-color: rgba(0, 0, 0, 0.4);
   }

   .weather_container{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid darkblue;
      background-color: blue;
      color: white;
      padding: 20px;
      transition: 0.4s;
   }

   .weather_container h2{
      background-color: blue;
   }

   .weather_container p{
      margin: 10px;
      background-color: blue;
   }

   .container input{
      border: none;
      border-bottom: 1px solid #31479b;

      padding: 5px;
      font-size: 20px;

      margin: 40px;

      font-family: "Red Hat Mono", monospace;

      background-color: #0d1226;

      color: #52b7c5;

      width: 300px;

      transition: border-bottom 0.4s;
   }

   .container input:focus{
      outline: none;
      border-bottom: 1px solid #52b7c5;
   }
</style>
