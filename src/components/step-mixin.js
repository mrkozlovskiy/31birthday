import {setAppStoreItem} from "../lib/appStore";

const stepMixin = {
    methods: {
        checkAnswer(value) {
            if(value.toLowerCase() === this.valueTrue.toLowerCase()) {
                setAppStoreItem('step' + this.number, true)
                this.$router.push(this.$route.meta.nextStep)
            }
            else {
                this.$message.error('Oops, не подходит! Мааакс, ну будь внимательнее!');
            }
        }
    }
}

export default stepMixin;