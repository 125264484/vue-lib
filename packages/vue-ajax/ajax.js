function plugin(Vue) {

    if (plugin.installed) {
        return;
    }


    //Vue.$ajax = ;

    Object.defineProperties(Vue.prototype, {

        $ajax: {
            get: function get() {
                return {test: 'test'};
            }
        }

    });
}

module.exports = plugin;