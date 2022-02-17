<template>
    <div style="background-color:#cceaeb">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="font-family: 'Mukta', sans-serif;">
            <a class="navbar-brand" style="font-size:30px">
                DINOSAUR
                <img src="../img/handicrafts.png" alt="" style="width:50px;height:50px">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav" style="font-size:20px">
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/" style="color:#776d8a">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/UnitWarehouse" style="color:#776d8a">Donation</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/Staff" style="color:#000000">Staff</router-link></a>
                    </li>
                </ul>
            </div>
        </nav>

        <div v-for="warehouse in warehouses" :key="warehouse.id" v-on="reset1(warehouse)">
        </div>
        <div v-for="warehouse in foundationProperties" :key="warehouse.id" v-on="reset2(warehouse)">
        </div>
        <div v-for="warehouse in halfwayhomeforwomens" :key="warehouse.id" v-on="reset3(warehouse)">
        </div>
       

        <div v-if="alert.message" :class="`alert ${alert.type}`" class="alert-box">
          {{alert.message}}
        </div>

        <div class=" head-deco" style="margin-top:70px; font-family: 'Rubik', sans-serif;font-weight:900">
            <h3 style="text-align:center; margin-top:15px; font-weight:bold; font-size:40px">LOG IN</h3>
        </div>
        <form @submit.prevent="handleSubmit()" class="container-login">
            <div class="form-group">
                <label for="">Email address</label>
                <input v-model="form.email" type="text" placeholder="Your Email" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input v-model="form.password" type="password" placeholder="Your Password" class="form-control">
            </div>
            <!-- <div class="form-group">
                <label for="">Staff Code</label>
                <input v-model="code" type="password" placeholder="Code" class="form-control">
            </div> -->
            <div class="form-group" style="text-align:center; margin-top: 40px">
                <button class="btn" style="background-color:#006a6d; margin-right:5px; color:white">Login</button>
                <button @click="goRegister" class="btn" style="background-color:#fad069">Register</button>
                <!-- <router-link :to="{name:'Register'}" style="color:whitesmoke; background-color:black">Register</router-link> -->
            </div>
        </form>

        <div>
            <img src="../img/peep1.png" alt="" style="width:198px">
            <img src="../img/peep2.png" alt="" style="width:198px">
            <img src="../img/peep3.png" alt="" style="width:198px">
            <img src="../img/peep4.png" alt="" style="width:198px">
            <img src="../img/peep5.png" alt="" style="width:198px">
            <img src="../img/peep6.png" alt="" style="width:198px">
            <img src="../img/peep7.png" alt="" style="width:198px">
            <div style="text-align:center; margin-top:10px">
                <a href="https://openpeeps.com/" style="font-family: 'Rubik', sans-serif;color:black">images sources: https://openpeeps.com/</a>
            </div>
        </div>
    </div>
</template>



<script>
import { mapState, mapActions } from 'vuex'
import { foundationProperty, warehouse1Collection, halfwayhomeforwomen } from './firebase'
export default {
    computed:{
        ...mapState({
            alert: state => state.alert
        })
    },
    data(){
        return{
            form:{
                email:'',
                password:'',
            },
            warehouses: [],
            foundationProperties: [],
            halfwayhomeforwomens: []
        }
    },
    methods :{
        ...mapActions('account',['login']),
        ...mapActions('alert',['error']),
        handleSubmit(e){
            // console.log(this.form)
            if(this.form.email && this.form.password){
                this.login(this.form)
            }
            else{
                this.error("Please make sure your all fields are filled or re-check password/email again");
            }
        },
        goRegister(){
            this.$router.push({path:"/"+'Register'})
        },
        reset1(warehouse){
            warehouse.added = 0
            console.log('enterlogout')
            // console.log(warehouse.added)
            warehouse1Collection.doc(warehouse.id).update({
                ...warehouse
            })
        },
        reset2(warehouse){
            warehouse.added = 0
            // console.log(warehouse.added)
            foundationProperty.doc(warehouse.id).update({
                ...warehouse
            })
        },
        reset3(warehouse){
            warehouse.added = 0
            // console.log(warehouse.added)
            halfwayhomeforwomen.doc(warehouse.id).update({
                ...warehouse
            })
        }
    },
    firestore(){
        return {
            foundationProperties : foundationProperty,
            halfwayhomeforwomens: halfwayhomeforwomen,
            warehouses : warehouse1Collection,
        }
    },
  
}
</script>


<style>
.img-bg{
    background-image: url("https://developer.salesforce.com/resources2/trailhead-live/images/live-waiting-placeholder.png");
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: 100%; 
    padding-bottom:210px;
}
.container{
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin-top: 90px;
}
section{
    text-align: center ;
    width: 650px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    background:whitesmoke;
}
.input-deco{
    margin:10px 20px 10px 10px ;
    border-color: #ffffdd;
}
.head-deco{
    font-family: 'Trirong', serif;
}
.box-deco{
    border-color:#f9d56e;
    border-style: solid;
    background-color: #f9d56e;
    margin-left: 200px;
    margin-right: 200px;
    border-radius: 30px;
}
.inputh-deco{
    background-color: #ffffdd;
    border-radius: 20px;
    border-color: #ffffdd;
}

.container-login{
    margin: 15px 400px 60px 400px; 
    background-color: #99d5d7; 
    padding: 20px 30px 10px 30px;
    border-radius: 20px;
    border-style: solid;
    border-color: whitesmoke;
    border-width: 10px;
    font-family: 'Rubik', sans-serif;
}
.alert-box{
    margin: 10px 50px 10px 50px;
    text-align: center;
    border-radius: 20px;
}
</style>