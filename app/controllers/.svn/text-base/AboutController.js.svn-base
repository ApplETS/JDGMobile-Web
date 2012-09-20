/**
 * Author: ApplETS
 * Last modified: December 23, 2011
 */
Ext.regController('About', {

	/********************************************
    * INDEX ACTION
    ********************************************/
	index: function()
	{
		//Verify if an instance of the about view has already been created
	    if (!this.aboutView)
	    {
	        this.aboutView = this.render({
	            xtype: 'About'
	        });
		}
    	this.application.viewport.setActiveItem(this.aboutView);
	}
});