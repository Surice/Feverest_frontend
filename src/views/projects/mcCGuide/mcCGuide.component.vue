<template>
    <div class="mcCGuide">
        <navbar></navbar>
        <div class="banner-img">
            <br>
            <h1 class="headline">Minecraft crafting Guide</h1>
            <br>
        </div>
        <working></working>
        <div class="content" style="display: none !important">
            <div class="left_side">
                <div class="input-area field">
                    <div class="input-part">
                        <h3>Input</h3>

                        <label>select the to be crafted item:</label>
                        <select id="sel-item" v-model="itemName">
                            <option v-for="key in keys" :key="key">{{ key }}</option>
                        </select>
                    </div>
                    <div class="input-part">
                        <label>select the quantity:</label>
                        <input v-model="quan" id="inp-quan" type="number" value="1">
                    </div>

                    <button v-on:click="calculate" class="btn-calc">Calculate</button>
                </div>
                
                <div class="output-required field">
                    <h3>Required Resources:</h3>
                    <ul class="result">
                        <li v-for="(item, key) in output.requiredItems" :key="key">{{ item }}X {{ key }}</li>
                    </ul>
                </div>

                <div class="output-unused field">
                    <h3>Unused Resources:</h3>
                    <ul class="result">
                        <li v-for="(item, key) in output.unusedItems" :key="key">{{ item }}X {{ key }}</li>
                    </ul>
                </div>
            </div>

            <div class="output-craftingSteps field">
                <h3>Crafting Steps:</h3>
                <div id="cra-step" class="cra-step">
                    <dl class="result" v-for="(step, key) in output.sortedCraftingSteps" :key="key">
                        <dt>{{ step.quan }} {{ key }}:</dt>
                        <dd v-for="(quan, name) in step.recipe" :key="name">- {{ quan }}X {{ name }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./mcCGuide.component.js"></script>
<style scoped src="./mcCGuide.component.css"></style>