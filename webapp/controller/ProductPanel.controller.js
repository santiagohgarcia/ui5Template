sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.ProductPanel", {

		onShowHello : function () {
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            TransMessageToast.show("helloMsg",[sRecipient],this);
            
		},

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});

});
