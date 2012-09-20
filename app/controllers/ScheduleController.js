/**
 * Author: ApplETS
 * Last modified: December 23, 2011
 */
Ext.regController('Schedule', {

	/********************************************
    * INDEX ACTION
    ********************************************/
	index: function()
	{
		//Verify if an instance of the schedule view has already been created
		if(!this.scheduleView)
	    {
	    	this.scheduleView = this.render({
            	xtype: 'Schedule'
       		});
		}
		else // Check if the active card is eventDetail (has a prevCard attribute)
			if (this.scheduleView.getActiveItem().prevCard !== undefined)
		    {
				this.scheduleView.destroy();
		    	this.scheduleView = this.render({
	            	xtype: 'Schedule'
	       		});
	       	}
	    	
		Ext.repaint();
    	this.application.viewport.setActiveItem(this.scheduleView);
	}
});