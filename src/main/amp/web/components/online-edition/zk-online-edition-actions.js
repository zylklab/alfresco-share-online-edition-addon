(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionZKEditOnline",
        fn: function ZK_onActionZKEditOnline(file) {
                var davProtocol = "vnd.sun.star.webdav";
                if(window.location.protocol.indexOf("https") != -1){
                  davProtocol = "vnd.sun.star.webdavs";
        	}
          	webdavPath = davProtocol+"://"+ window.location.host + "/alfresco"+ file.webdavUrl;
        	window.location = webdavPath;
        }
    });
})();
