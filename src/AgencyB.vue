<template>
    <div style="background-color: #ebf0db">
        

        <div class="info-agen" style="padding-top:10px; height:130px">
            มูลนิธินกกระจิบ<br>
            ที่อยู่ : นกกระจิบ เลขที่ 89 ซอยเสรีไทย 17  ถนนเสรีไทย แขวงคลองกุ่ม เขตบึงกุ่ม กรุงเทพมหานคร 10240, เบอร์โทรศัพท์: 088-077-0330
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
                    <tr v-for="(fp) in foundationProperties" :key="fp.id">
                        <td>{{fp.number}}</td>
                        <td style="padding: 0px 10px 0px 10px">{{fp.thing}} </td>
                        <td>
                            <div class="badge badge-danger" v-if="fp.needed==1">ต้องการมาก</div>
                            <div class="badge badge-warning" v-if="fp.needed==2">ต้องการ</div>
                            <div class="badge badge-success" v-if="fp.needed==3">เพียงพอ</div>
                        </td>
                        <td>{{fp.amount}}</td>
                        <td>
                            <!-- <div v-for="thing in foundationPropertiesNC" :key="thing.id">
                                <h5 v-if="thing.number==fp.number" style="font-weight:lighter; font-size:18px; margin-top:10px">
                                    {{fp.amount-thing.amount}}
                                </h5>       
                            </div> -->
                            {{fp.added}}
                        </td>
                        <td style="padding-left:10px; padding-right:10px; height:80px;">
                            <div v-for="mainWarehouse in mainWarehouses" :key="mainWarehouse.id">
                                <h4 v-if="fp.number==mainWarehouse.number">
                                    <div>
                                        <input v-model="fp.active" type="number" placeholder="จำนวน" style="font-size:18px; height:30px">
                                        <button @click="changeAmountAdd(fp,fp.active,mainWarehouse)" class="btn" style="height:25px;padding:0px 10px 20px 10px;  background-color:#548279; color:whitesmoke;">เพิ่ม</button>
                                        <button @click="changeAmountSubstract(fp,fp.active,mainWarehouse)" class="btn" style="height:25px;padding:0px 10px 20px 10px; background-color:#d04e43; color:whitesmoke;">ลด</button>
                                    </div>
                                </h4>
                            </div>
                        </td>
                        <div v-for="mainWarehouse in mainWarehouses" :key="mainWarehouse.id" style="margin-top:25px">
                            <div v-if="fp.number==mainWarehouse.number">
                                {{mainWarehouse.amount}} ({{mainWarehouse.unit}})
                            </div>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style="font-family: 'Mitr', sans-serif; margin-left:40;">
            <!-- margin-left:1148px; -->
            <div style="margin-left:54px; margin-bottom:30px">
                <button class="btn" v-on:click="isShow = !isShow" style="background-color:#700810; color:white;">เพิ่ม/ลดรายการของหน่วยงาน</button>
            </div>
            <!-- margin-left:auto; margin-right:auto; -->
            <div style="margin-left:54px;padding:20px 20px 5px 20px; background-color:#e3d9ed; width:500px;" v-if="isShow" class="border-deco1">
                <input type="number" placeholder="เลขของ" v-model="no" style="margin-left:48px">
                <button class="btn" @click="addToList()" style="background-color:#a3cafc">นำเข้า</button>
                <button class="btn" @click="removeList()" style="background-color:pink">นำออก</button>
            </div>
            <!-- margin-left:auto; margin-right:auto; -->
            <div v-if="isShow" style="margin-left:54px;padding:20px 20px 20px 20px; background-color:#e3d9ed; width:500px;" class="border-deco2">
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
import {foundationProperty, mainCollection} from './firebase'
import { mapState,mapActions } from 'vuex'
export default {
    data(){
        return{
            mainWarehouses:[],
            foundationProperties:[],
            foundationPropertiesNC:[] ,
            isShow:false,
            no:'',
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
        changeAmountAdd(fp, amountAdd,mainWarehouse){
            if(Number(amountAdd)>mainWarehouse.amount){
                this.error("จำนวนที่เพิ่มขึ้นมีมากกว่าคลังหลัก")
            }
            else if(Number(amountAdd)>=0&&amountAdd!=''){
                fp.active = '';
                fp.added += Number(amountAdd)
                fp.amount = Number(amountAdd)+Number(fp.amount)
                foundationProperty.doc(fp.id).update({
                    ...fp

                }),
                mainWarehouse.amount = Number(mainWarehouse.amount)-Number(amountAdd)
                mainCollection.doc(mainWarehouse.id).update({
                    ...mainWarehouse
                })
                this.clearAlert()
            }
        },
        changeAmountSubstract(fp, amountAdd,mainWarehouse){
            if(Number(amountAdd)>fp.added){
                this.error("จำนวนที่ลดลงมากกว่าที่เพิ่มขึ้นไป");
            }
            else if(Number(amountAdd)>=0&&amountAdd!=''){
                fp.active = '';
                fp.added -= Number(amountAdd)
                fp.amount = Number(fp.amount)-Number(amountAdd)
                foundationProperty.doc(warehouse1.id).update({
                // amount : warehouse1.amount;                
                // ...warehouse1

                }),
                mainWarehouse.amount = Number(mainWarehouse.amount)+Number(amountAdd)
                    // mainWarehouse.amount = Number(amountSubtract)
                    mainCollection.doc(mainWarehouse.id).update({
                        // ...mainWarehouse
                })   
                this.clearAlert()         
            }
        },
        addToList(){
            for(var warehouse of this.foundationProperties){
                if(this.no==warehouse.number){
                    this.count++;
                }
            }
            if(this.count==0){
                for(var main of this.mainWarehouses){
                    if(main.number==this.no){
                        foundationProperty.add({
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
            this.count=0
        },
        removeList(){
            for(var warehouse of this.foundationProperties){
                console.log(this.no)
                if((this.no)==warehouse.number && warehouse.amount==0){
                    foundationProperty.doc(warehouse.id).delete()
                    this.no=''
                }                
            }
            // todosCollection.doc(todo.id).delete()
        }
    },
    firestore(){
        return {
            foundationProperties : foundationProperty.orderBy('number','asc'),
            mainWarehouses: mainCollection.orderBy('number','asc'),
            foundationPropertiesNC : foundationProperty.orderBy('number','asc'),
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
    font-weight: bolder;
}

</style>