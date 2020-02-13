sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";
	return Controller.extend("sapui5.demo.customcontrols.controller.Master", {

		onInit: function() {
			var viewModel = new JSONModel({
				matnr: ""
			});
			this.getView().setModel(viewModel, "viewModel");
		},

		onMatnrSelect: function(oEvent) {
			
			// Called  whenever Matnr has been changed (either by pressing Enter, lost Focus,  or Value Help Selection )
			var matnr = oEvent.getParameter("material");
			var matnrDescription = oEvent.getParameter("materialDescription");

			// do something with selection 
			MessageToast.show("You selected :" + matnr + " " + matnrDescription);

			// view model is updated
			var model = this.getView().getModel("viewModel");
			MessageToast.show("Model Matnr =  :" + model.getProperty("/matnr"));
			
		}

	});

});