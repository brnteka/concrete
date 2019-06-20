<template lang="pug">
table.product__table
    thead
        tr
            th Наименование
            th Размеры (мм)
            th Вес (кг)
            th Цена (руб.)
    tbody
        tr(v-for="type in types")
            td {{type.name}}
            td {{type.size}}
            td {{type.weight}}
            td {{type.price}}
</template>
<script>
export default {
    props: ['types']
}
</script>
<style lang="scss">

.product__table {
    width: 100%;
    border-collapse: collapse;
    th {
        background-color: #fffcf2;
    }
    td,
    th {
        padding: 10px;
        border: 1px solid #ebebeb;
        &:last-child {
            font-weight: 700;
            color: #e53935;
        }
    }
    @include media-breakpoint-down(md) {
        th,
        tr,
        td {
            display: block;
        }

        thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        tr {
            margin-bottom: 15px;
        }

        td {
           &:before {
                display: block;
                padding: 10px;
                margin: -10px -10px 10px;
                background-color: #fffcf2;
                font-weight: 700;
                border-bottom: 1px solid #ebebeb;
           }
           &:not(:first-child):before {
               margin-top: -11px;
           }
        }

        td:nth-of-type(1):before {
            content: 'Наименование';
        }
        td:nth-of-type(2):before {
            content: 'Размеры (мм)';
        }
        td:nth-of-type(3):before {
            content: 'Вес (кг)';
        }
        td:nth-of-type(4):before {
            content: 'Цена (руб.)';
        }
    }
}
</style>