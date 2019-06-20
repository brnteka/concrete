<template lang="pug">
form.form(ref="form")
    .form__header
        .form__title {{form.name}}
    .form__body
        .form__row
            input(type="tel" name="phone" v-validate="{required: true, regex: /^[+-/\/s0-9]*$/}" v-model="phone" v-bind:placeholder="form.fields.phone.placeholder").form__input
            .form__error(v-show="errors.has('phone')") {{ errors.first('phone') }}
        .form__row
            input(type="text" name="comment" v-model="name" v-bind:placeholder="form.fields.comment.placeholder").form__input
        .form__row(v-if="formProduct != null")
            input(type="text" name="product" v-bind:value="formProduct" readonly).form__input
        .form__row
            Button(v-bind:text="form.button.text" @click.prevent="submit" v-bind:block="true")
</template>
<script>
import {mapState} from 'vuex';
import Button from "./button.vue"
export default {
    props: {
        product: {
            default: null
        }
    },
    data(){
        return {
            phone: null,
            comment: null
        }
    },
    components: {
        Button
    },
    computed: {
        ...mapState({
            form: state => state.data.form,
            formModalVisible: state => state.formModalVisible
        }),
        formProduct() {
            return this.product
        }
    },
    methods: {
        submit() {
            let self = this
            self.$validator.validateAll().then((result) => {
                if (result) {
                    const XHR = new XMLHttpRequest();
                    const FD  = new FormData(self.$refs.form);
                    
                    XHR.open('POST', 'form.php');
                    XHR.send(FD);
                    
                    XHR.onload = () => {
                        if (XHR.readyState === XHR.DONE && XHR.status === 200) {
                            self.$modal.show('form-submission', {
                                message: XHR.response
                            });
                            self.clearForm()
                            self.$nextTick(() => self.$validator.reset())
                            if (self.formModalVisible) {
                                self.$modal.hide('form-modal')
                            }
                        } else {
                            self.$modal.show('form-submission', {
                                message: 'Error'
                            })
                        }
                    };
				} 
			})
        },
        clearForm() {
            for (var key in this.$data) {
                this.$data[key] = null
            }
        }
    }
}
</script>
<style lang="scss">
.form {
    padding: 30px;
    background: #fff;
    border-radius: 8px;
}
.form__header {
    margin-bottom: 15px;
    text-align: center;
}
.form__title {
    font-size: 20px;
    font-weight: 700;
}
.form__row {
    & + & {
        margin-top: 20px;
    }
}
.form__input {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    text-align: center;

    &:read-only {
        background-color: #ebebe4;
    }
}
.form__error {
    text-align: center;
    margin-top: 15px;
    color: #e53935;
}
</style>