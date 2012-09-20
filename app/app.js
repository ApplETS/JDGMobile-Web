/**
 * Author: ApplETS
 * Last modified: December 23, 2011
 */
Ext.regApplication({
    name: 'app',
    defaultUrl: 'Schedule/index',
    launch: function()
    {
        this.viewport = new app.views.Viewport();
    }
});