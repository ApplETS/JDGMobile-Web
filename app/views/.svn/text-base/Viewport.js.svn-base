/**
 * Author: ApplETS
 * Last modified: December 23, 2011
 */
app.views.Viewport = Ext.extend(Ext.Panel, {
	title: 'Jeux de Génie',
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [
	{	   
   		xtype: 'tabbar',
		dock : 'bottom',
		ui: 'dark',
		layout: {
			pack: 'center'
		},
		items: [
		{
			text: 'Horaire',
			iconCls: 'time',
			id: 'btnSchedule',
			handler: function() {
				 Ext.dispatch({
			        controller: 'Schedule',
			        action: 'index',
			        animation: {
				        type: 'slide',
				        reverse: true
				    }
				});
			}
		},
		{
			text: 'R&eacute;sultats',
			iconCls: 'user_list',
			id: 'btnResult',
			handler: function() {
				 Ext.dispatch({
			        controller: 'Results',
			        action: 'index',
			        animation: {
				        type: 'slide',
				        reverse: true
				    }
				});
			}
		},
		{
			text: 'Partenaires',
			iconCls: 'team',
			id: 'btnPartenaire',
			handler: function() {
				 Ext.dispatch({
			        controller: 'Partners',
			        action: 'index',
			        animation: {
				        type: 'slide',
				        reverse: true
				    }
				});
			}
		},
		{
			text: '&Agrave; propos',
			iconCls: 'info',
			id: 'btnAbout',
			handler: function() {
				Ext.dispatch({
			        controller: 'About',
			        action: 'index',
			        animation: {
				        type: 'slide',
				        reverse: true
				    }
				});
			}
		}]
	}]
});