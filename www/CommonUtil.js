function _091c7afa5d1a13b2d7de6df4c9aada079a387bdb(){};Ext.define("CommonUtil",{statics:{loadmask:null,addMessage:function(){Ext.Viewport.setMasked({xtype:"loadmask",cls:"message",transparent:true,indicator:false});this.hideMessage()},showMessage:function(b,a){var d=this,c=this.getMessage();c.setMessage(b);c.show();if(a){setTimeout(function(){c.hide()},500)}},hideMessage:function(){this.getMessage().hide()},getMessage:function(){return Ext.Viewport.getMasked()},valid:function(a,f){var d=Ext.create(a),c=this,e,b;f.updateRecord(d);e=d.validate();b=e.isValid();if(!b){e.each(function(g){c.showMessage(g.getMessage(),true);return})}return b},ajaxSend:function(e,c,b,a,f){var d=this;Ext.Ajax.request({url:Globle_Variable.serverurl+c,method:f,timeout:5000,params:e,success:b,failure:a})},getovertime:function(b){var a=Ext.Date.add(new Date(b),Ext.Date.MINUTE,Globle_Variable.askmin);var d=new Date();var c=a.getTime()-d.getTime();return c},intervalids:{},lefttime:function(a,b,d){var e=this;var c=b;var f=null;if(e.intervalids[d]){clearInterval(e.intervalids[d]);e.intervalids[d]=null}(function(i,h,g){i=setInterval(function(){var j=e.getovertime(h);a(j,i)},1000);e.intervalids[g]=i})(f,c,d)}}});