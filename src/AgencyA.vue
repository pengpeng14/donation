<template>
    <div style="background-color: #ebf0db">
        

        <div class="info-agen" style="padding-top:10px; height:130px;">
            ร้านปันกัน<br>
            ที่อยู่ : เลขที่ 1 ซอยพรีเมียร์ 2 ถนนศรีนครินทร์ แขวงหนองบอน เขตประเวศ กรุงเทพมหานคร 10250, เบอร์โทรศัพท์: 081-903-6639
            <div v-if="alert.message" :class="`alert ${alert.type}`" class="alert-box" style="font-weight:bolder;font-family: 'Mitr', sans-serif;">
                {{alert.message}}
            </div>
        </div>


        <div class="deco" style="padding-bottom:20px">
            <table class="table-border table-striped table-hover" style="margin-left:auto; margin-right:auto; font-family: 'Mitr', sans-serif;">
                <thead style="font-size:20px">
                    <tr style="text-align:center; color:#005086; background-color: #f4f6ff" class="table">
                        <th scope="col">เลข</th>
                        <th scope="col">สิ่งของ</th>
                        <th scope="col">ความต้องการ</th>
                        <th scope="col">จำนวนสิ่งของคงเหลือ</th>
                        <th scope="col" style="background-color:#94cfe1">จำนวนที่ถูกเพิ่ม</th>
                        <th scope="col" style="background-color:#94cfe1">เพิ่ม/ลดจำนวน</th>
                        <th scope="col" style="background-color:#f9deed">จำนวนสิ่งของคงเหลือคลังหลัก</th>
                    </tr>
                </thead>
                <tbody style="font-size:18px; text-align:center; background-color:#fcf8f3; font-weight:lighter" class="table-border">
                    <tr v-for="(warehouse1) in warehouse1s" :key="warehouse1.id">
                        <td>{{warehouse1.number}}</td>
                        <td style="padding: 0px 10px 0px 10px">{{warehouse1.thing}} </td>
                        <td>
                            <div class="badge badge-danger" v-if="warehouse1.needed==1">ต้องการมาก</div>
                            <div class="badge badge-warning" v-if="warehouse1.needed==2">ต้องการ</div>
                            <div class="badge badge-success" v-if="warehouse1.needed==3">เพียงพอ</div>
                        </td>
                        <td>{{warehouse1.amount}}</td>
                        <td>
                            {{warehouse1.added}}
                        </td>
                        <td style="padding-left:10px; padding-right:10px; height:80px;">
                            <div v-for="mainWarehouse in mainWarehouses" :key="mainWarehouse.id">
                                <h4 v-if="warehouse1.number==mainWarehouse.number">
                                    <div>
                                        <input v-model="warehouse1.active" type="number" placeholder="จำนวน" style="font-size:18px; height:30px">
                                        <button @click="changeAmountAdd(warehouse1,warehouse1.active,mainWarehouse)" class="btn" style="height:25px;padding:0px 10px 20px 10px;  background-color:#548279; color:whitesmoke;">เพิ่ม</button>
                                        <button @click="changeAmountSubstract(warehouse1,warehouse1.active,mainWarehouse)" class="btn" style="height:25px;padding:0px 10px 20px 10px; background-color:#d04e43; color:whitesmoke;">ลด</button>
                                    </div>
                                </h4>
                            </div>
                        </td>
                        <div v-for="mainWarehouse in mainWarehouses" :key="mainWarehouse.id" style="margin-top:25px">
                            <div v-if="warehouse1.number==mainWarehouse.number">
                                {{mainWarehouse.amount}} ({{mainWarehouse.unit}})
                            </div>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="font-family: 'Mitr', sans-serif; margin-left:40;">
            <!-- margin-left:1148px; -->
            <div style="margin-left:48px; margin-bottom:30px">
                <button class="btn" v-on:click="isShow = !isShow" style="background-color:#700810; color:white;">เพิ่ม/ลดรายการของหน่วยงาน</button>
            </div>
            <!-- margin-left:auto; margin-right:auto; -->
            <div style="margin-left:48px;padding:20px 20px 5px 20px; background-color:#e3d9ed; width:500px;" v-if="isShow" class="border-deco1">
                <input type="number" placeholder="เลขของ" v-model="no" style="margin-left:48px">
                <button class="btn" @click="addToList()" style="background-color:#a3cafc">นำเข้า</button>
                <button class="btn" @click="removeList()" style="background-color:pink">นำออก</button>
            </div>

            <!-- margin-left:auto; margin-right:auto; -->
            <div v-if="isShow" style="margin-left:48px;padding:20px 20px 20px 20px; background-color:#e3d9ed; width:500px;" class="border-deco2">
                <table class="table-border table-striped table-hover" style="font-family: 'Mitr', sans-serif;margin-left:auto; margin-right:auto;">
                    <thead style="font-size:20px;">
                        <tr style="text-align:center; color:#005086; background-color: #f4f6ff;" class="table">
                            <th scope="col">เลข</th>
                            <th scope="col">สิ่งของ</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:18px; text-align:center; background-color:#fcf8f3; font-weight:lighter;" class="table-border">
                        <tr v-for="(main) in mainWarehouses" :key="main.id">
                            <td style="background-color:#e6f9ff">
                                <!-- <button class="btn" style="width:40px; background-color:white" v-if="main.number%2==0">{{main.number}}</button> -->
                                <!-- <button class="btn" style="width:40px; background-color:pink" v-else>{{main.number}}</button> -->
                                {{main.number}}
                            </td>
                            <td>                           
                                {{main.thing}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {warehouse1Collection, mainCollection} from './firebase'
import { mapState,mapActions } from 'vuex'
export default {
    data(){
        return{
            warehouse1s:[],
            mainWarehouses:[],
            warehouse1sNC: [],
            isShow:false,
            no:"",
            count:0,
        }
    },
    computed:{
        ...mapState('account',['user']),
        ...mapState({
            alert: state => state.alert
        })
    },
    methods:{
        ...mapActions({
            clearAlert: 'alert/clear'
        }),
        ...mapActions('alert',['error']),
        changeAmountAdd(warehouse1, amountAdd,mainWarehouse){
            console.log(this.user.displayName)
            if(Number(amountAdd)>mainWarehouse.amount){
                this.error("จำนวนที่เพิ่มขึ้นมีมากกว่าคลังหลัก")
            }
            else if(Number(amountAdd)>=0&&amountAdd!=''){
                warehouse1.active = '';
                warehouse1.added += Number(amountAdd)
                warehouse1.amount = Number(amountAdd)+Number(warehouse1.amount)
                warehouse1Collection.doc(warehouse1.id).update({
                    ...warehouse1
                }),
                mainWarehouse.amount = Number(mainWarehouse.amount)-Number(amountAdd)
                mainCollection.doc(mainWarehouse.id).update({
                    ...mainWarehouse
                })
                this.clearAlert()
            }
        },

        changeAmountSubstract(warehouse1, amountAdd,mainWarehouse){
            console.log(this.user.displayName)
            if(Number(amountAdd)>warehouse1.added){
                this.error("จำนวนที่ลดลงมากกว่าที่เพิ่มขึ้นไป");
            }
            else if(Number(amountAdd)>=0&&amountAdd!=''){
                warehouse1.active = '';
                warehouse1.added -= Number(amountAdd)
                warehouse1.amount = Number(warehouse1.amount)-Number(amountAdd)
                warehouse1Collection.doc(warehouse1.id).update({            
                    ...warehouse1
                }),
                mainWarehouse.amount = Number(mainWarehouse.amount)+Number(amountAdd)
                    mainCollection.doc(mainWarehouse.id).update({
                        ...mainWarehouse
                })
                this.clearAlert()
            }
        },
        addToList(){
            for(var warehouse1 of this.warehouse1s){
                if(this.no==warehouse1.number){
                    this.count++;
                }
            }
            if(this.count==0){
                for(var main of this.mainWarehouses){
                    if(main.number==this.no){
                        warehouse1Collection.add({
                            amount:0,
                            needed:1,
                            added:0,
                            number: this.no,
                            thing: main.thing,
                        })
                    }
                }
                this.no=''
            }
            else{
                this.error('มีสิ่งของนี้ในคลังอยู่แล้ว')
            }
            this.count=0
        },
        removeList(){
            for(var warehouse1 of this.warehouse1s){
                if(warehouse1.amount==0 && this.no==warehouse1.number){
                    warehouse1Collection.doc(warehouse1.id).delete()
                    this.no=''
                    this.count++
                }
            }
            if(this.no='' && this.count==0){
                this.error('ไม่มีสิ่งของนี้ในคลัง')
            }
            // todosCollection.doc(todo.id).delete()
        }
    },
    firestore(){
        return {
            warehouse1s : warehouse1Collection.orderBy('number','asc'),
            mainWarehouses: mainCollection.orderBy('number','asc'),
            warehouse1sNC:  warehouse1Collection.orderBy('number','asc'),
            // .where("number",'==',warehouse1Collection.number)
        }
    },
}
</script>

<style>
.deco{
    margin: 20px 20px 20px 20px;
}
.info-agen{
    color: #111d5e;
    font-size: 20px;
    margin: 10px 0px 10px 20px;
    text-align: center;
    font-family: 'Mitr', sans-serif;
    font-weight: lighter;

}
.table{
    /* font-family: 'Trirong', serif; */
    font-size: 20px; 
}
.warning-deco{
    text-shadow:5px 5px 10px #fd6666;
    font-size: 30px;
    color:red; 
    text-align:center;
    font-family: 'Mitr', sans-serif;
    font-size:20px;
}
.border-deco1{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.border-deco2{
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

</style>