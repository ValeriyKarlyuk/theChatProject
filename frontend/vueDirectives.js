//The first directive is to autofocus when HTML is loaded
Vue.directive('focus',{
    inserted: (el) => {
        el.focus();
    }
});

