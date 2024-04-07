<template>
    <div>
        <h3>{{ this.$props.title }}</h3>
        <div class="card-selector-select-box">
            <div class="card-selector-selected-container" v-for="item, index in getSelectedItems" :key="index">
                <p>{{ item.name }}</p>
                <div class="card-selector-close" @click="this.handleRemove(item)">
                    <p>X</p>
                </div>
            </div>
        </div>
        <div class="card-selector-input-box">
            <input class="card-selector-input" type="text" @keydown="this.handleSearch()">
        </div>
        <div class="card-selector-option-box">
            <div class="card-selector-option-container" v-for="item, index in getItems" :key="index" @click="handleOptionSelection(item)">
                <p>{{ item.name }}</p>
            </div>
        </div>
        
    </div>
</template>
<script>
import { useConfStore } from '../stores/confStore'
export default {
    setup () {
        const confStore = useConfStore();
        return {
            confStore
        }
    },
    props: [
        'cardData',
        'type',
        'title'
    ],
    data () {
        return {
            items: [],
            selectedItems: [],
        }
    },
    computed: {
        getItems() {
            console.log(this.items)
            if(this.items.length != 0) {
                return this.sortItems(this.items)
            } else {
                return this.items
            }
        },
        getSelectedItems () {
            if(this.selectedItems.length != 0) {
                return this.sortItems(this.selectedItems)
            } else { 
                return this.selectedItems
            }
        }
    },
    mounted() {
        this.items = this.confStore.getTeams;
    },
    methods: {
        handleSearch () {
            console.log(event.target.value)
            if(this.$props.type === 'ability') {
                this.items = this.formStore.cardAbilitiesOptions;
            } else if (this.$props.type === 'effect') {
               this.items = this.formStore.cardEffectOptions;
            } else if (this.$props.type === 'traits') {
               this.items = this.formStore.cardTraitOptions;
            }
            const filteredItems = this.items.filter((str) => {
                return event.target.value.toLowerCase().split(' ').every(v => str.name.toLowerCase().includes(v));
            });
            this.items = filteredItems
            // console.log(searchValue)
        },
        handleOptionSelection (item) {
            let filteredItems = this.items.filter((element) => {
                return element.name != item.name;   
            });
            this.items = filteredItems;
            this.selectedItems.push(item)
            if(this.$props.type === 'ability') {
                this.formStore.abilitySelected = this.selectedItems;
            } else if (this.$props.type === 'effect') {
               this.formStore.cardEffectSelected = this.selectedItems;
            } else if (this.$props.type === 'traits') {
               this.formStore.cardTraitsSelected = this.selectedItems;
            }
            
        },
        handleRemove (item) {
            let filteredSelectedItems = this.selectedItems.filter((element) => {
                return element.name != item.name;   
            });
            this.selectedItems = filteredSelectedItems
            if(this.$props.type === 'ability') {
                this.formStore.abilitySelected = this.selectedItems;
            } else if (this.$props.type === 'effect') {
               this.formStore.cardEffectSelected = this.selectedItems;
            } else if (this.$props.type === 'traits') {
               this.formStore.cardTraitsSelected = this.selectedItems;
            }
            this.items.push(item)
        },
        sortItems(items)  {
            const data = items.sort(function(a, b) {
                return a.name.localeCompare(b.name);
            });
            return data;
        }
    }
}
</script>
<style scoped>
    .card-selector-option-box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: lightgray;
        max-height: 150px;
        width: 300px;       
        overflow-y: auto;
    }
    .card-selector-select-box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: lightgray;
        max-height: 150px;
        width: 300px;
        overflow-y: auto;
    }

    .card-selector-option-container {
        padding: 8px;
        margin: 4px;
        color: white;
        background-color: navy;
        border-radius: 5px;
        cursor: pointer;
    }
    .card-selector-selected-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        margin: 4px;
        color: white;
        background-color: forestgreen;
        border-radius: 5px;
        cursor: pointer;
    }
    .card-selector-close {
        color: white;
        background-color: black;
        padding: 3px;
        border-radius: 5px;
    }
    .card-selector-input {
      border-style: solid;
      border-color: var(--lightblk);
      border-radius: 5px;
      padding: 0.5em;
      width: 200px;
      margin: 1rem 0;
    }
</style>