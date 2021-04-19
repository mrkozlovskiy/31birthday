import {setAppStoreItem} from "../lib/appStore";

const stepMixin = {
    methods: {
        checkAnswer(value) {
            if(value === this.valueTrue) {
                setAppStoreItem('step' + this.number, true)
                this.$router.go(0)
            }
            else {
                this.$message.error('Oops, не подходит! Мааакс, ну будь внимательнее!');
            }
        }
    }
}

export default stepMixin;