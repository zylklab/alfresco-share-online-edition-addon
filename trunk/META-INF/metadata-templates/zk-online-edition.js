(function()
{
   /**
    * Alfresco Slingshot aliases
    */
   var $html = Alfresco.util.encodeHTML,
      $isValueSet = Alfresco.util.isValueSet;

   if (Alfresco.DocumentList)
   {
        YAHOO.Bubbling.fire("registerRenderer",
        {
           propertyName: "OnlineEdition",
           renderer: function content_renderer(record, label)
           {
        	  var appname = "";
        	  var webdavPath =  "";         	
              var jsNode = record.jsNode,
                 properties = jsNode.properties,
                 html = "";

              if(navigator.userAgent.search("Firefox") >= 0){
            	  var davProtocol = "dav";
            	  if(window.location.protocol.indexOf("https") != -1){
              		  davProtocol = "davs";
              	  }
            	  webdavPath = davProtocol+"://"+ window.location.host + "/alfresco"+ record.webdavUrl;
              }else {
            	  webdavPath = window.location.protocol+"//"+ window.location.host + "/alfresco"+ record.webdavUrl;
              }
              
              
              html += '<span class="item"><em>'+YAHOO.lang.substitute(this.msg("zk.label.online.edition"))+' </em><a href="'+webdavPath+'"><img src="/alfresco/images/icons/edit_online.gif" style="border-width:0px; padding-left:3px;" alt="'+YAHOO.lang.substitute(this.msg("zk.label.online.edition"))+'"></a></span>';
              

              return html;
          }
      });
   }
})();    