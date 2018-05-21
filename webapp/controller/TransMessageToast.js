sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
	"use strict";
        
        var TransMessageToast = {};
		
        TransMessageToast.show = function (bundleMessageId,parameters,context) {
			// read msg from i18n model
			var oBundle = context.getView().getModel("i18n").getResourceBundle();
			var sMsg = oBundle.getText(bundleMessageId, parameters);

			// show message
			MessageToast.show(sMsg);
		}
        
        return TransMessageToast;
});