/* global Module */

/* Magic Mirror
 * Module: MMM-auto-refresh
 *
 * By Jason York
 * MIT Licensed.
 */

Module.register("MMM-auto-refresh", {
	defaults: {
		refreshInterval: 8640000000,
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function() {
		setInterval(function() {
			location.reload();
		}, this.config.refreshInterval);
	}

});
