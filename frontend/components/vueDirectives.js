//The first directive is to autofocus when HTML is loaded(global directive)
Vue.directive('focus', {
    inserted(el) {
        el.focus();
    }
});

