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
        
        $("#navbar_settings").before("\
            <li id=\"#navbar_plugin_camcontrol\">\
                <a class=\"pull-right\" href=\"" + self.control_url() + "\" target=\"_blank\" title=\"mjpeg Control\"><span class=\"fa fa-video-camera\"></span></a>\
            </li>\
        ");
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: CamcontrolViewModel,
        elements: [ "#navbar_plugin_camcontrol" ]
    });
});
