/*
 * View model for OctoPrint-Camcontrol
 *
 * Author: ntoff
 * License: AGPLv3
 */
$(function() {
    function CamcontrolViewModel(parameters) {
        var self = this;

        self.control_url = ko.observable(window.location.protocol + "//" + window.location.hostname + ":8080/control.htm");

    }

    OCTOPRINT_VIEWMODELS.push({
        construct: CamcontrolViewModel,
        elements: [ "#navbar_plugin_camcontrol" ]
    });
});
