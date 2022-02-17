<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="$route.name == 'Home'" style="font-family: 'Mukta', sans-serif;">
            <a class="navbar-brand" style="font-size:30px">
              DINOSAUR
              <img src="../img/handicrafts.png" alt="" style="width:50px;height:50px">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown" style="font-size:20px">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link"><router-link to="/" style="color: black">Home</router-link><span class="sr-only">(current)</span></a>
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

        <div v-if="$route.name == 'Home'">
          <h1 class="big-title">DINOSAUR</h1>
          <img src="https://i.pinimg.com/originals/01/d2/64/01d2640d25f16474464acc81ca353252.jpg" class="wallpaper" alt="" >
          <div style="text-align:center; margin-top:10px">
                <a href="https://openpeeps.com/" style="font-family: 'Rubik', sans-serif;color:black">image source : https://i.pinimg.com/originals/01/d2/64/01d2640d25f16474464acc81ca353252.jpg</a>
            </div>
        </div>
         <!-- <div id="slider-wrapper" v-if="$route.name == 'Home'" style="margin-top:0px; ">
            <div class="inner-wrapper" alt="Responsive">
                <input checked type="radio" name="slide" class="control" id="Slide1" />
                <label for="Slide1" id="s1"></label>
                <input type="radio" name="slide" class="control" id="Slide2" />
                <label for="Slide2" id="s2"></label>
                <input type="radio" name="slide" class="control" id="Slide3" />
                <label for="Slide3" id="s3"></label>
                <input type="radio" name="slide" class="control" id="Slide4" />
                <label for="Slide4" id="s4"></label>
                <div class="overflow-wrapper">
                    <a class="slide" href=""><img src="https://www.cot.co.th/wp-content/uploads/2019/06/42748.jpg" height="600px" width="100px" alt="Responsive image"/></a>
                    <a class="slide" href=""><img src="https://www.thaivolunteer.org/wp-content/uploads/2020/04/บริจาค-031.png" height="100%" width="100%" alt="Responsive image"/></a>
                    <a class="slide" href=""><img src="https://www.redcross.or.th/wp-content/uploads/2020/03/111-scaled.jpg " height="100%" width="100%" alt="Responsive image"/></a>
                    <a class="slide" href=""><img src="https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2020/03/โรงพยาบาลรามาธิบดี-1.jpg" height="800px" width="150px" alt="Responsive image" /></a>
                </div>
            </div>
        </div> -->
        
      

        <!-- <div v-if="$route.name == 'Home'" class="text-deco" style="font-family: 'Trirong', serif; text-align:center">
            <h4>ความช่วยเหลือเร่งด่วนในการป้องกันการแพร่ระบาดของไวรัส COVID-19</h4>
            <p>ในช่วงเวลาที่มีความเปลี่ยนแปลงเกิดขึ้นมากมายกับชีวิตของเราทุกคนตอนนี้ แต่สงครามและความรุนแรงยังดำเนินต่อไป ผู้ลี้ภัยอีกกว่า 79.5 ล้านคน ต้องเผชิญกับความยากลำบากและตกอยู่ในความเสี่ยงในวิกฤตการณ์แพร่ <br>
            ระบาดของเชื้อไวรัส COVID-19เด็กและครอบครัวผู้ลี้ภัยจำนวนมากไม่สามารถเข้าถึงสบู่หรือน้ำสะอาด ไม่สามารถมีระยะห่างทางสังคม รวมทั้งที่พักพิงที่ปลอดภัย <br>
            นี่คือชีวิตจริงของผู้ลี้ภัยหลายล้านคนต้องเผชิญและกำลังต้องการความช่วยเหลือเร่งด่วนจากคุณ <br>
            UNHCR ทำงานในพื้นที่ ส่งมอบสิ่งของบรรเทาทุกข์และปกป้องผู้ลี้ภัย ผู้พลัดถิ่นจากวิกฤตการณ์หลายประเทศทั่วโลก อาทิ บังคลาเทศและซีเรีย ความช่วยเหลือจากคุณ สามารถให้เรา <br>
            - มอบการป้องกันด้านสุขอนามัย มอบอุปกรณ์การป้องกันไวรัส น้ำสะอาด สบู่ ในค่ายผู้ลี้ภัยและชุมชนที่ให้ที่พักพิง <br>
            - การเข้าถึงข้อมูล: UNHCR ให้ความรู้และการเข้าถึงข้อมูลเกี่ยวกับการแพร่ระบาดของไวรัสแก่ผู้ลี้ภัย ผู้พลัดถิ่นและชุมชนที่ให้ที่พักพิง <br>
            - ลำเลียงชุดรักษาพยาบาล อุปกรณ์การป้องกันทางอากาศ ตอบสนองในกรณีที่เกิดการแพร่ระบาดในพื้นที่ <br>
            - เพิ่มจำนวนจุดจ่ายน้ำในค่ายผู้ลี้ภัย <br>
            - ทีมเจ้าหน้าที่: อบรมและจัดตั้งทีมและสร้างศูนย์การบริการทางการแพทย์ เพื่อมอบการรักษาพยาบาลให้กับผู้ลี้ภัยและชุมชน <br>
            แต่เราไม่อาจทำงานนี้ได้สำเร็จ หากไม่ได้รับความช่วยเหลือจากคุณตอนนี้โปรดบริจาคตอนนี้
            </p>
        </div> -->



        <router-view v-if="$route.name != 'Home'"></router-view> 
    </div>
</template>



<script>
// import NavBar from './components/NavBar.vue'
import { mapState,mapActions } from 'vuex';
export default {
  computed:{
    ...mapState({
      alert:state => state.alert
    })
  },
  methods:{
    ...mapActions({
            clearAlert: 'alert/clear'
        }),
    ...mapActions('account',['logout']),
  },
  watch:{
    $route(to, from){
      this.clearAlert()
    }
  },
  // components:{
  //   NavBar
  // },
}
</script>


<style>
.text-deco{
  text-align: center;
  margin:30px 100px 10px 100px
}
p{
  text-align: center;
}
h4{
  text-align: center;
  color: #006d6d;
}
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;

}
header{
  width: 100%;
  height: 100vh;
  position:relative;
  overflow: hidden;
}
.wallpaper{
  /* position: absoulute;
  bottom: -20px;
  height: 10%;
  width: 1600px;
  right:0;
  z-index: 20; */
  background-repeat: no-repeat;
  width: 1430px;
  padding-bottom: 0px ;
  margin-bottom: 0px;
  height:100%;
}
.big-title{
  margin-top: 200px;
  position: absolute;
  z-index: 30;
  line-height: 4rem;
  top: calc(50%-2rem);
  width: 100%;
  text-align: center;
  font-size: 5rem;
  font-weight: 600;
  color: #fff;
}
section{
    width: 100%;
    background-color: #99FFFF;
    position: relative;
}
.content{
    color: #fff;
    transform: translateY(-50px);
}
section .container{
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}


.border{
    position: absolute;
    width: 0%;
    height: 100%;
    background-color: #fff;
    bottom: 0;
    left: 0;
}

.shadow{
    position: absolute;
    bottom: 100%;
    height: 600px;
    width: 100%;
    left: 0;
    z-index: 10;
    background: linear-gradient(to top,#000000, transparent);
}

.opacity{
    opacity: 0;
}

.tab{
  background: blanchedalmond;
  width: 100%;
  height: 100%;
}
#slider-wrapper {
  width: 940px;
  height: 470px;
  margin: 50px auto;
  position: relative;
  margin-bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
#s1 {
  padding: 6px;
  background: #000000;
  position: absolute;
  left: 50%;
  bottom: 25px;
  margin-left: -36px;
  border-radius: 20px;
  opacity: 0.3;
  cursor: pointer;
  z-index: 999;
}
#s2 {
  padding: 6px;
  background: #000000;
  position: absolute;
  left: 50%;
  bottom: 25px;
  margin-left: -12px;
  border-radius: 20px;
  opacity: 0.3;
  cursor: pointer;
  z-index: 999;
}
#s3 {
  padding: 6px;
  background: #000000;
  position: absolute;
  left: 50%;
  bottom: 25px;
  margin-left: 12px;
  border-radius: 20px;
  opacity: 0.3;
  cursor: pointer;
  z-index: 999;
}
#s4 {
  padding: 6px;
  background: #000000;
  position: absolute;
  left: 50%;
  bottom: 25px;
  margin-left: 36px;
  border-radius: 20px;
  opacity: 0.3;
  cursor: pointer;
  z-index: 999;
}
#s1:hover,
#s2:hover,
#s3:hover,
#s4:hover {
  opacity: .50;
}
.inner-wrapper {
  width: 940px;
  height: 470px;
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 0px;
  overflow: hidden;
}
.control {
  display: none;
}
#Slide1:checked ~ .overflow-wrapper {
  margin-left: 0%;
}
#Slide2:checked ~ .overflow-wrapper {
  margin-left: -100%;
}
#Slide3:checked ~ .overflow-wrapper {
  margin-left: -200%;
}
#Slide4:checked ~ .overflow-wrapper {
  margin-left: -300%;
}
#Slide1:checked + #s1 {
  opacity: 1;
}
#Slide2:checked + #s2 {
  opacity: 1;
}
#Slide3:checked + #s3 {
  opacity: 1;
}
#Slide4:checked + #s4 {
  opacity: 1;
}
.overflow-wrapper {
  width: 400%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: hidden;
  z-index: 1;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.slide img {
  width: 25%;
  float: left;
}
nav{
  background: #222;
  padding: 5px 20px;
  overflow:hidden;
}
  .container{
    width: 1500px;
    margin: 0 auto;
    background: gold;
  }
  ul{
    list-style-type: none;
  }
  a{
    color: white;
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
  .logo a:hover{
    text-decoration: none;
  }
  .menu li{
  font-size: 16px;
  padding: 15px 5px;
  white-space: nowrap;
  }
  .logo a,.toggle a{
    font-size: 20px;
  }
  .button.secondary{
    border-bottom: 1px solid #444;
  }
  /* moblie menu */
  .menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .toggle{
    order: 1;
  }
  .item.button{
    order: 2;
  }
  .item{
    width: 100%;
    text-align: center;
      order: 3; 
    display: none; 
  }
  .item.active{
    display: block;
  }
  /* Tablet menu */
  @media all and(min-width: 600px){
    .menu{
      justify-content: center;
    }
    .logo{
      flex: 1;
    }
    .toggle{
      flex: 1;
      text-align:right ;
    }
    .item.button{
      width: auto;
      order: 1;
      display: block;
    }
    .toggle{
      order: 2;
    }
    .button.secondary{
      border: 0;
    }
    .button a{
      padding: 7px 15 px;
      background: teal;
      border: 1px solid #006d6d;
    }
    .button.secondary a {
      background: transparent;
    }
    .button a:hover{
      text-decoration: none;
    }
    .button:not(.secondary) a:hover{
      background: #006d6d;
      border-color:#059059;
    }
    .button.secondary a:hover{
      color: #ddd;
    }
  }
/* destop menu */
@media all and (min-width: 900px) {
  .item{
    display: block;
    width: auto;
  }
  .toggle{
    display: none;
  }
  .logo{
    order: 0;
  }
  .item{
    order: 1;
  }
  .button{
    order: 2;
  }
  .menu li{
    padding: 15px 10px;
  }
  .menu li.button{
    padding-right: 0;
  }
}
</style>