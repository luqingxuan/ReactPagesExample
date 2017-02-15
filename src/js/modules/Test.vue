<template>
    <div class="row">
        <h3 style="margin-top:300px;">it is test page</h3>
        <date-field></date-field>
    </div>
</template>

<script>
    import DateField from 'components/DateField.vue';

    module.exports = {
        name: 'Test',
        components: {
            'date-field': DateField
        },
        data: function(){
            return {
            };
        },
        mounted: function() {
        }
    }
</script>
