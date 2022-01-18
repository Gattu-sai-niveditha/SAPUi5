sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui.MyPersonalProject.personalproject.controller.View1", {
            onInit: function () {

            },
            handlePopoverPress: function (oEvent) {
                if (!this._oPopover) {
                 this._oPopover = sap.ui.xmlfragment("Popover.PopoverFra", this);
                 this.getView().addDependent(this._oPopover);
                }  
                this._oPopover.openBy(oEvent.getSource());
               }     
        });
    });
