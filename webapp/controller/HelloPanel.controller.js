sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/demo/walkthrough/controller/TransMessageToast"
], function (Controller, TransMessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

		onShowHello : function () {
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            TransMessageToast.show("helloMsg",[sRecipient],this);
            
		},

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});

});
