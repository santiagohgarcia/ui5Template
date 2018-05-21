sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.OrderDetail", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("orderDetail").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			var a = this.getView().bindElement({
				path: "/Orders(" + oEvent.getParameter("arguments").orderPath + ")",
				model: "invoice"
			});
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}
		},
        
        onSelectProduct: function (oEvent) {
            var productId = oEvent.getSource().getBindingContext("invoice").getProperty("ProductID")
			var a = this.getView().byId("productPanel").bindElement({
				path: "/Products(" + productId + ")",
				model: "invoice"
			});
		},
        
       
      formatPN: function(text){
          console.log(text)
      }
	});
});
