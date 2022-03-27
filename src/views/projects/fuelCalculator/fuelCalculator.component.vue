<template>
    <div class="all">
        <div class="background-resStyle">
            <navbar></navbar>
            <div class="background-img">
                <div class="content">
                    <div class="input">
                        <div class="div-headline">
                            <p>Inputs:</p>
                            <div v-if="endurance==true" class="inputChangeBTN-div input-content-div">
                                <button class="inputChangeBTN" v-on:click="endurance=false, detEndurance(false), changeVar(20)" style="border-right: 1px solid black">Sprint</button>
                                <button class="inputChangeBTN aktivBTN" v-on:click="endurance=true, detEndurance(true)">Endurance</button>
                            </div>
                            <div v-if="endurance==false" class="inputChangeBTN-div input-content-div">
                                <button class="inputChangeBTN aktivBTN" v-on:click="endurance=false, detEndurance(false), changeVar(20)" style="border-right: 1px solid black">Sprint</button>
                                <button class="inputChangeBTN" v-on:click="endurance=true, detEndurance(true)">Endurance</button>
                            </div>
                        </div>
                        <div class="input-content">
                            <div class="raceDistance input-div">
                                <p class="input-headline">Race Distance:</p>
                                <div v-if="endurance==false" class="sprint-BTN-div input-content-div">
                                    <button v-on:click="changeVar('20'), calculateFuel()" id="20" class="distance-BTN aktiv">20 min</button><p>|</p>
                                    <button v-on:click="changeVar('30'), calculateFuel()" id="30" class="distance-BTN">30 min</button><p>|</p>
                                    <button v-on:click="changeVar('45'), calculateFuel()" id="45" class="distance-BTN">45 min</button><p>|</p>
                                    <button v-on:click="changeVar('60'), calculateFuel()" id="60" class="distance-BTN">60 min</button>
                                </div>
                                <div v-if="endurance==true" class="endurance-div">
                                    <input type="number" min="0" v-model="input.distance" v-on:change="calcIndivRaceDist(input.distance), calculateFuel()">
                                    <select id="time" class="dropdown" v-model="input.dropdown"  v-on:change="calcIndivRaceDist(), calculateFuel()">
                                        <option value="0">Minutes</option>
                                        <option value="1" v-on:click="calcIndivRaceDist()">Hours</option>
                                        <option value="2" v-on:click="calcIndivRaceDist()">Laps</option>
                                    </select>
                                </div>
                                <div class="output-table">
                                    <table class="outputMinSec">
                                    <tr>
                                        <td class="output-headline">Minutes:</td>
                                        <td style="width: 45px"></td>
                                        <td><output id="preSetMin"></output></td>
                                    </tr>
                                    <tr>
                                        <td class="output-headline">Secondes:</td>
                                        <td style="width: 45px"></td>
                                        <td><output id="preSetSec"></output></td>
                                    </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="lapTimes input-div">
                                <p class="input-headline">Lap Times:</p>
                                <div class="input-content-div">
                                    <input type="number" id="laptimeMIN" min="0" v-on:change="calculateFuel()" v-model="input.laptime[0]" placeholder="MIN">   
                                    <p>:</p>
                                    <input type="number" id="laptimeSEC" min="0" max="59" v-on:change="calculateFuel()" v-model="input.laptime[1]" placeholder="SEC">
                                </div>
                            </div>
                            <div class="fuelCon input-div">
                                <p class="input-headline">Fuel Consumption:</p>
                                <div class="fuel-div">
                                    <input type="number" id="fuelCon" min="0" placeholder="0" v-on:change="calculateFuel()" v-model="input.fuelcon">
                                    <p>Liters</p>
                                </div>
                            </div>
                            <div class="input-div" id="fuelTank-div">
                                <p class="input-headline">Fueltank:</p>
                                <div class="fuel-div">
                                    <input type="number" id= "fuelTank" min="0" v-on:change="calculateFuel()" v-model="input.fueltank">
                                    <p>Liters</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div class="result">
                        <div class="div-headline result-headline">
                            <p>Results:</p>
                        </div>
                        <div class="fuelBoxOutput-div">
                            <div class="fuelOutput-div">
                                <div>
                                    <p class="outputHeadline">The fuel consumption is:</p>
                                </div>
                                <div class="fuelOutput output-div">
                                    <p id= 'ResultFuelCon' class="outputLine"> <b id="fuelOutput">-</b></p>
                                    <p>Liters</p>
                                </div>
                            </div>    
                            <div v-if="endurance==true" class="boxOutput-div">
                                <div>
                                    <p class="outputHeadline">Pit stops needed:</p>
                                </div>
                                <div class="output-div">
                                    <p><b id="boxenstopsOutput">-</b></p>     
                                    <p>pit stops</p>
                                </div>
                            </div>    
                        </div>    
                        <div class="saveFuel-div">
                            <p class="outputHeadline">The save fuel consumption is:</p>
                        </div>
                        <div class="saveFuel output-div">
                            <p><b id="saveFuelOutput">-</b></p>
                            <p>Liters</p>
                        </div>
                    </div>    
                </div>   
                <div class= "footer">
                    <div class="footer-content">
                        <p style="margin-left: 15px;">Fuel Calculator</p>
                        <p style="margin-right: 15px;">Version 1.4.2</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script src="./fuelCalculator.component.js"></script>
<style scoped src="./fuelCalculator.component.css"></style>