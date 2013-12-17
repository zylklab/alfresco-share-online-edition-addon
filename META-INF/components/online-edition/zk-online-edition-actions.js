(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionZKEditOnline",
        fn: function ZK_onActionZKEditOnline(file) {
                var davProtocol = "dav";
                if(window.location.protocol.indexOf("https") != -1){
                  davProtocol = "davs";
        	}
          	webdavPath = davProtocol+"://"+ window.location.host + "/alfresco"+ file.webdavUrl;
        	window.location = webdavPath;
        }
    });
})();
