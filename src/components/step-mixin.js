import {setAppStoreItem} from "../lib/appStore";

const stepMixin = {
    methods: {
        checkAnswer(value) {
            if(value === this.valueTrue) {
                setAppStoreItem('step' + this.number, true)
                console.log(this.$route)
                // this.$router.push(this.)
            }
            else {
                this.$message.error('Oops, не подходит! Мааакс, ну будь внимательнее!');
            }
        }
    }
}

export default stepMixin;