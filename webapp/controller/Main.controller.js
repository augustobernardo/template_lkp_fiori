sap.ui.define([
    "br/com/lkp/{{appNamespace}}/controller/BaseController",
	"sap/ui/model/json/JSONModel",
],
function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("br.com.lkp.{{appNamespace}}.controller.Main", {

		onInit: function() {

			this._oView = this.getView();
            this._oMainModel = this.getModel();

			this._oMainModelView = new JSONModel({
				busy: false,
			});
			this._oView.setModel(this._oMainModelView, "mainView");

			this.getRouter().getRoute("RouteMain").attachPatternMatched(this._onRouteMatched, this);
		},

        //*******************
        //* Private Methods *
        //*******************
		_onRouteMatched: function() {
			//TODO: THis method is called when the route is matched
		},
        //*******************
        //* Public Methods  *
        //*******************
    });
});
