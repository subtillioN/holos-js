module.exports = function (options, imports, register) {
    var bus = imports.eventbus;

    var env = {empty:""
		//cook: function(dish) {
         //   bus.emit("cooking", dish);
        //},
        //swear: function (insult) {
			//console.log(insult + "!!");
		//}
	};

	register(null, {
		"env": env
	});
};

