global.rootRequire = function(name) {
    return require(__base  + '/' + name);
};

global.route = function(route) {
    return rootRequire('/routes/' + route);
};

global.helper = function(helper) {
    return rootRequire('/helpers/' + helper + 'Helper');
};

global.model = function(model) {
    return rootRequire('/models/' + model);
};