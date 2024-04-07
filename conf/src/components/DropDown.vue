<template>
    <div>
        <v-icon size="large" color="black" icon="mdi-chevron-down"></v-icon>
        <div class="dropdown-select" @click="handleSelection">
            <div v-if="this.selectedOption === null">Select Teams</div>
            <div v-else>{{ this.selectedOption }}</div>
            <v-icon class="dropdown-icon" icon="mdi-chevron-down"></v-icon>
        </div>
        <div class="dropdown-option-container" v-if="this.isOpen">
            <div class="dropdown-option" v-for="option, index in this.$props.options" :key="index" @click="handleOption(option)">
                {{ option.name }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false,
            selectedOption: null,
        }
    },
    props: [
        "options",
        "type"
    ],
    methods: {
        handleOption(item) {
            this.selectedOption = item.name
            this.isOpen = false;
            console.log(item);
        },
        handleSelection () {
            this.isOpen = this.isOpen ? false : true;
        }
    }
}
</script>
<style scoped>
.dropdown-icon {
    width: 20px;
    color: #FFFFFF;
}
.dropdown-select {
    user-select: none;
    background-color: navy;
    color: #FFFFFF;
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.dropdown-option-container {
    overflow-y: scroll;
    width: 200px;
    max-height: 200px;
    position: absolute;
    background-color: navy;
    color: #FFFFFF;
    z-index: 9;
}
.dropdown-option {
    padding: 1rem;
}
.dropdown-option:hover {
    background-color: #FFFFFF;
    color: navy;
    cursor: pointer;
}
</style>