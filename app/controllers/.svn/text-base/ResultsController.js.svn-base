/**
 * Author: ApplETS
 * Last modified: December 23, 2011
 */
Ext.regController('Results', {

	/********************************************
    * INDEX ACTION
    ********************************************/
	index: function()
	{
		//Verify if an instance of the results view has already been created
	    if (!this.resultsView)
	    {
	        this.resultsView = this.render({
	            xtype: 'Results'
	        });
		}
    	this.application.viewport.setActiveItem(this.resultsView);
	}
});