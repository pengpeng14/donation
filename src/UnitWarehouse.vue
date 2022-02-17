<template>
    <div style="background-color:#fef5e9">
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
                        <a class="nav-link"><router-link to="/" style="color:#776d8a">Home</router-link><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link"><router-link to="/UnitWarehouse" style="color:#000000">Donation</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/Staff" style="color:#776d8a">Staff</router-link></a>
                    </li>
                </ul>
            </div>
        </nav>


        <!-- <div>
          <h2 class="topic-deco">การบริจาค</h2>
        </div> -->

        <div style="text-align:center; margin-top:20px">
            <h1 class="donate-button">บริจาค</h1>
        </div>

        
        <!-- details donation part -->
        <div class="row">
            <div class="col-sm-6">
                <div style="text-align:center; font-family: 'Mitr', sans-serif; font-weight:lighter; font-size:30px; margin-bottom:10px">
                    รายละเอียดเล็กน้อยก่อนการบริจาค
                </div>
                <div class="row tab-deco" style="background-color:#d8e1b7; margin-left:20px">
                    <div class="col-sm-3" style="margin-left:70px">
                        <img class="card-img-top" src="https://www.bronxnet.org/media/filer_public_thumbnails/filer_public/c9/d1/c9d1ca88-5b7e-49e8-b0c5-3fa04bf0a7c5/prop-food-02.jpg__840x560_q85_crop_subsampling-2_upscale.jpg" style=" width:200px; height;200px; float:right">
                    </div>
                    <div class="col-sm-7 information-deco">
                        <h3 style="font-size:20px">อาหาร</h3>
                        <h6 style="font-weight:lighter !important">อาหารรูปแบบต่าง ๆ ไม่ว่าจะเป็นอาหารกระป๋อง อาหารซองก็สามารถบริจาคได้หรืออาหารูปแบบอื่น ๆ ที่สามารถเก็บรักษาได้ง่ายและได้นานและมีการระบุวันผลิตและวันหมดอายุอย่างชัดเจน</h6>
                    </div>
                </div>
                <div class="row tab-deco" style="background-color:#e7e7f3; margin-left:20px">
                    <div class="col-sm-3" style="margin-left:70px">
                        <img class="card-img-top" src="https://raisingchildren.net.au/__data/assets/image/0024/49344/medicines-that-can-poison.jpg" style=" width:200px; height;220px; float:right">
                    </div>
                    <div class="col-sm-7 information-deco">
                        <h3 style="font-size:20px">ยา/เครื่องมือปฐมพยาบาลเบื้องต้น</h3>
                        <h6 style="font-weight:lighter !important">เป็นยาสามัญประจำบ้านเช่นยาแก้ปวดหัว ยาแก้ไข ยาแก้ปวดหรืออื่น ๆ และสามารถบริจาคเครื่องมือปฐมพยาบาลร่วมด้วยได้อย่างน้ำยาล้างแผล สำลี เป็นต้น หรือสามารถบริจาคยาเหลือใช้ได้เผื่อนำไปส่งต่อให้กับโรงพยาบาล</h6>
                    </div>
                </div>
                <div class="row tab-deco" style="background-color:#fbe2e5; margin-left:20px">
                    <div class="col-sm-3" style="margin-left:70px">
                        <img class="card-img-top" src="https://www.westonschools.org/high/wp-content/uploads/sites/4/2019/05/Clothing-Donation-Photo-300x201.jpg" style=" width:200px; height;220px; float:right">
                    </div>
                    <div class="col-sm-7 information-deco">
                        <h3 style="font-size:20px">เสื้อผ้ากางเกง</h3>
                        <h6 style="font-weight:lighter !important">สามารถบริจาคเสื้อผ้าที่ไม่ได้ใช้แล้ว โดยที่ก่อนจะนำมาบริจาคเสื้อผ้านั้นต้องทำการซักทำความสะอาดมาแล้วเรียบร้อยเพื่อลดและป้องกันเชื้อรา มีการซ่อมแซมเสื้อผ้า ไม่บริจาคผ้าที่เก่าหรือมีจุดชำรุดมากเกินไป</h6>
                    </div>
                </div>
                <div class="row tab-deco" style="background-color:#dbe3e5; margin-left:20px; margin-bottom:20px">
                    <div class="col-sm-3" style="margin-left:70px">
                        <img class="card-img-top" src="https://nmcdn.io/bf48b01813174d27941cb0fe2037c1cb/107d12a6b5b8449b91d0222ee5f20534/files/faqs/used-shoe-donations/used-shoe-donation-process-sc1440x600-t1429809210.jpg?v=cc1e2d0afa" style="width:200px; height:100px; float:right">
                    </div>
                    <div class="col-sm-7 information-deco">
                        <h3 style="font-size:20px">รองเท้า</h3>
                        <h6 style="font-weight:lighter !important">ก่อนการบริจาครองเท้า ต้องทำการซ่อมแซมส่วนที่ชำรุดแล้ว และมีการทำความสะอาดขจัดแบคทีเรีย เชื้อรา กำจัดกลิ่นอันไม่พึงประสงค์ก่อนบริจาค</h6>
                    </div>
                </div>
            </div>

            <div class="col-sm-6" style="margin-top:55px; text-align:center; font-size:17px">
                <h1 style="font-family: 'Mitr', sans-serif;font-size:20px; margin-left:10px">ผู้บริจาคสามารถส่งของบริจาคผ่านไปรษณีย์มาได้ที่ที่อยู่ตามนี้</h1>
                <table class="table-border table-striped" style="font-family: 'Mitr', sans-serif; font-weight:350;margin-left:10px; text-align:center; margin-left:auto; margin-right:auto">
                    <thead style="background-color:#a84037; color:whitesmoke">
                        <tr>
                            <th scope="col">หน่วยงาน</th>
                            <th scope="col">ที่อยู่</th>
                            <th scope="col">เบอร์โทรติดต่อ</th>
                        </tr>
                    </thead>
                    <tbody class="table-border" style="background-color:#f3c292;">
                        <tr v-for="warehouse in warehouses" :key="warehouse.id" style="height:40px">
                            <td style="padding-left:10px; padding-right:10px">{{warehouse.name}}</td>
                            <td style="padding-left:10px; padding-right:10px; width:300px">{{warehouse.address}}</td>
                            <td style="padding-left:10px; padding-right:10px">{{warehouse.tel}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- table donation part -->
            <!-- <div class="col-sm-6">
                <div style="text-align:center; font-family: 'Mitr', sans-serif; font-weight:lighter; font-size:30px; margin-bottom:10px">
                    กรอกรายละเอียดการบริจาค
                </div>
                <table class="table-border table-striped table-border-deco" style="font-family: 'Mitr', sans-serif; font-weight:350; font-size:16px; margin-top:15px">
                    <thead style="font-size:20px;">
                        <tr style="text-align: center;  height:50px">
                            <th scope="col">สิ่งของ</th>
                            <th scope="col">กรอกจำนวนสิ่งของบริจาค</th>
                            <th scope="col">หน่วย</th>
                        </tr>
                    </thead>
                    <tbody class="table-border" style="background-color:#cceaeb; text-align:center;">
                        <tr v-for="thing in mainWarehouse" :key="thing.id">
                            <td style="padding: 0px 20px 0px 20px; background-color:#7fcbcd">{{thing.thing}}</td>
                            <td style="padding: 0px 20px 0px 20px">
                                <input v-model="thing.active" type="number" placeholder="จำนวน">
                                <button @click="changeAmount(Number(thing.amount)+Number(thing.active), thing)" class="btn" style="height:25px; text-align:center; padding:0px 10px 20px 10px; margin-top:14px; background-color:#002d2e !important; color:whitesmoke">เพิ่ม</button>
                            </td>
                            <td style="padding: 0px 20px 0px 20px">{{thing.unit}}</td>
                        </tr>
                    </tbody>
                </table>               
            </div> -->
        </div>



        <router-view v-if="$route.name != 'UnitWarehouse'"></router-view>
    </div>
</template>

<script>
import {mainCollection,warehouseCollection} from './firebase'
function showpicture(){
    src = "https://inwfile.com/s-r/30w9op.jpg"
}

function doClick(){
    document.getElementById('donate').setAttribute("class", "style1");
}

export default {
    data(){
        return{
            mainWarehouse: [],
            isShow: false,
            warehouses: [],
        }
    },
    firestore(){
        return {
            mainWarehouse: mainCollection,
            warehouses: warehouseCollection.orderBy('name',"desc")
        }
    },
    methods: {
        changeAmount(amountAdd,mainWarehouse){
            mainWarehouse.amount = Number(amountAdd)
            mainCollection.doc(mainWarehouse.id).update({
                // ...mainWarehouse
            })
            console.log(mainWarehouse.amount)
            // mainWarehouse.active = '';
        },
    },

}
    
</script>

<style>
button{
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
}
h2{
    text-align: center;
    margin: 15px auto 15px auto;
    color:whitesmoke
}
.topic-deco{
    text-align: center;
    color:black;
    font-family: 'Mitr', sans-serif;
    font-size: 50px;
    background-color:cornflowerblue;
    width: 300px;
    border-radius: 10px;
}
.selection-deco{
    width: 260px;
    height: 30px;
}
.container {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin-top: 10px !important;
    background-color: #dfd3c3 !important;
}
.border-deco{
    border-color:#dfd3c3;
    border-style: solid;
    border-width: 5px;
    margin:15px 50px 15px 50px;
    border-radius: 35px;
    background-color: #dfd3c3;
}
.bg-primary{
    /* background-color: #4C3623 !important; */
    text-align: left;
}
.border-primary{
    border-color: #4C3623 !important;
}
.columns{
    text-align: left;
}
.disabled {
    pointer-events:none; 
    opacity:-1;         
}
.style1{
    pointer-events:none; 
    opacity:1;         
}
.tab-deco{
    padding: 20px;
    /* margin:10px 40px 10px 40px; */
    border-radius: 20px;
}
.table-border-deco{
    /* border-color: black;
    border-style: solid;
    border-width: 10px; */
    margin-left:auto; 
    margin-right:auto; 
    background-color:#00989c; 
}
.table-border{
    border-color: black !important;
}
.donate-button{
    font-family: 'Mitr', sans-serif;
    font-size: 30px;
    background-color:orange;
    border-radius: 20px;
    font-weight: 500;
    font-size:50px;
    margin-left: 575px;
    margin-right: 575px;
}
.information-deco{ 
    font-family: 'Mitr', sans-serif;
    color: black;
}
</style>
