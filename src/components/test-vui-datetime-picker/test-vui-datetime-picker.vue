<style scoped lang="sass">
  .form-control {
    width: 300px;
    height: 30px;
    margin: 200px auto 0;
    border: 1px solid #808080;
    padding: 4px 10px;
  }
</style>

<template>
  <vui-datetime-picker 
    class="form-control"
    :value="defaultTime"
    :placeholder="'点击选择时间'"
    :onblur="datetimeOnBlur"
    :onfocus="datetimeOnFocus"
    :onclick="datetimeOnClick"
    :onchange="datetimeOnChange"
  >
  </vui-datetime-picker>
</template>

<script>
  import vuiDateTimePicker from "../vui-datetime-picker/vui-datetime-picker.vue";
  export default {
    components: {
      "vui-datetime-picker": vuiDateTimePicker
    },
    data: function(){
      return {
        defaultTime: '2016-05-06 12:12:12'
      }
    },
    methods: {
      datetimeOnChange( _result ) {
        
      },
      datetimeOnBlur() {

      },
      datetimeOnFocus() {

      },
      datetimeOnClick() {

      }
    }
  }
</script>