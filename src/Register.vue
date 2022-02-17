<template>
    <div style="background-color:#fcecc3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="font-family: 'Mukta', sans-serif;">
            <a class="navbar-brand" style="font-size:30px">
              DINOSAUR
              <img src="../img/handicrafts.png" alt="" style="width:50px;height:50px">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown" style="font-size:20px">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/" style="color: #776d8a">Home</router-link><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/UnitWarehouse" style="color:#776d8a">Donation</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/Staff" style="color:#776d8a">Staff</router-link></a>
                    </li>
                </ul>
            </div>
        </nav>

        <div v-if="alert.message" :class="`alert ${alert.type}`" class="alert-box">
          {{alert.message}}
        </div>

         <div class=" head-deco" style="margin-top:30px; font-family: 'Rubik', sans-serif;font-weight:900">
            <h3 style="text-align:center; margin-top:15px; font-weight:bold; font-size:40px">REGISTER</h3>
        </div>

        <div style="font-family: 'Rubik', sans-serif;">
            <form @submit.prevent="handleSubmit()" class="container-register">
                <div class="form-group">
                    <label for="">Email Address *</label>
                    <input v-model="form.email" type="text" class="form-control" placeholder="Your Email">
                </div>
                <div class="form-group">
                    <label for="">Password *</label>
                    <input v-model="form.password" type="password" class="form-control" placeholder="Your Password">
                </div>
                <div class="form-group">
                    <label for="">Display Name *</label>
                    <input v-model="form.displayName" type="text" class="form-control" placeholder="Your Name">
                </div>
                <div class="form-group">
                    <label for="">Staff Code</label>
                    <input v-model="code" type="password" placeholder="Code" class="form-control">
                </div>
                <div class="form-group" style="text-align:center">
                    <button class="btn" style="background-color:#f8a028; color:black !important">Register</button>
                </div>
                <div style="text-align:center">
                    <router-link :to="{name:'Staff'}" style="color:green;margin-bottom:10px; ">Already have an account ?</router-link>
                </div>
            </form>
        </div>

        <div>
            <img src="../img/peep8.png" alt="" style="width:198px">
            <img src="../img/peep14.png" alt="" style="width:198px">
            <img src="../img/peep10.png" alt="" style="width:198px">
            <img src="../img/peep11.png" alt="" style="width:198px">
            <img src="../img/peep13.png" alt="" style="width:198px">
            <img src="../img/peep9.png" alt="" style="width:198px">
            <img src="../img/peep12.png" alt="" style="width:198px">
            <div style="text-align:center; margin-top:10px">
                <a href="https://openpeeps.com/" style="font-family: 'Rubik', sans-serif;color:black">images sources: https://openpeeps.com/</a>
            </div>
            <!-- <div style="text-align:center; font-family: 'Rubik', sans-serif;margin-top:10px">images source : https://openpeeps.com/</div> -->
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            form:{
                email : '',
                password:'',
                displayName:''
            },
            code:""
        }
    },
    methods:{
        ...mapActions('account',['register']),
        ...mapActions('alert',['error']),
        //modul alert action error
        handleSubmit(){
            // console.log(this.form.email)
            if(this.form.email && this.form.password && this.form.displayName && this.code=='admin1234'){
                this.register(this.form)
            }
            else{
                this.error("Please make sure your all fields are filled or re-check code again");
            }
        }
    },
    computed:{
    ...mapState({
      alert:state => state.alert
    })
  },
}
</script>

<style>
.alert-box{
    margin: 10px 50px 10px 50px;
    text-align: center;
    border-radius: 20px;
}
.register{
    text-align: center;
    margin: 40px 580px 15px 580px;
    color:black;
    padding:10px 0px 10px 0px;
    font-family: 'Rubik', sans-serif;
}
.container-register{
    margin: 15px 400px 10px 400px; 
    background-color: #fbd782; 
    padding: 20px 30px 10px 30px;
    border-radius: 20px;
    border-style: solid;
    border-color: whitesmoke;
    border-width: 10px
}
</style>