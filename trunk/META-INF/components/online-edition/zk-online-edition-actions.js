(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionZKEditOnline",
        fn: function ZK_onActionZKEditOnline(file) {
        	
        	var webdavPath = "";
        	//if(navigator.userAgent.search("Firefox") >= 0){
          	  var davProtocol = "dav";
          	  if(window.location.protocol.indexOf("https") != -1){
        		  davProtocol = "davs";
        	    }
          	  webdavPath = davProtocol+"://"+ window.location.host + "/alfresco"+ file.webdavUrl;
          //  }else {
          //  	webdavPath = window.location.protocol+"//"+ window.location.host + "/alfresco"+ file.webdavUrl;
          //  }
            
        	
        	window.location = webdavPath;
        }
    });
})();