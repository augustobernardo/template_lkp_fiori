sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("br.com.lkp.{{appNamespace}}.controller.BaseController", {

		//********************
        //* Standard Methods *
        //********************
		_getResourceBundle: function() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},

		getModel: function (sName) {
			return this.getOwnerComponent().getModel(sName);
		},

		navBack: function () {
			const oHistory = sap.ui.core.routing.History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("RouteMain", {}, {}, true);
			}
		},

		getText: function (sIdText, aParams) {
			return this._getResourceBundle().getText(sIdText, aParams);
		},

		//********************
        //* Custom Methods   *
        //********************

	});
});
