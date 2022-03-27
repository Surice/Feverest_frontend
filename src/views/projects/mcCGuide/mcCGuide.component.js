import navbar from '@/components/header/header.component.vue';
import working from '@/components/working/working.component.vue';

import axios from 'axios';

export default {
    name: 'MC-Crafting-Guide',
    data: () => {
        return {
            reqUrl: `/api/mcCGuide`,
            keys: [],
            output: {
                sortedCraftingSteps: {},
                requiredItems: {},
                unusedItems: {},
            },
            itemName: "--Item--",
            quan: "1"
        }
    },
    beforeMount() {
        //this.init();
    },
    components: {
        navbar,
        working
    },
    methods: {
        init(){
            axios
                .get(`${this.reqUrl}/getAllItems`)
                .then(response => {
                    this.keys = response.data;
                });
        },
        async calculate() {
            await axios({
                method: 'post',
                url: `${this.reqUrl}/composeRecipe`,
                data: {
                    itemName: this.itemName,
                    quan: this.quan
                }
            }).then(res => {
                this.output = res.data;
            });
        }
    }
}