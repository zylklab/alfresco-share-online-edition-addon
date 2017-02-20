# Edit with Libreoffice in Alfresco Share

Edit with Libreoffice addon provides a webdav link for online edition of both MS-Office and Libreoffice mimetypes

## Using

![Edit with Libreoffice Action](screenshots/EditWithLibreOffice.png)

## Releases 

Version 0.3
 * For Libreoffice 5.1 and Alfresco 4.x and 5.x, based on vnd.sun.star.webdav(s) url schemes
 
Version 0.2
 * For Libreoffice 4.x and Alfresco 4.x, based on dav:// and davs:// url schemes

https://github.com/zylklab/alfresco-share-online-edition-addon/releases

## Packaging

You may pack it with jar command. Go into the directory that you unzipped, or cloned via git:

    $ git clone https://github.com/CesarCapillas/alfresco-share-online-edition-addon
    $ cd alfresco-share-online-edition-addon
    $ jar -cf alfresco-share-online-edition.jar *

You also may download it from releases page.

## Installation

Install it, copying the corresponding jar into $TOMCAT/shared/lib and restart Alfresco service. Then you will need to register the protocol in Windows or Linux according instrucctions and scripts.

### Registering the protocols

### Windows

Wiki documentation:
  * https://github.com/zylklab/alfresco-share-online-edition-addon/wiki#registering-the-dav-protocol-in-windows
 
NOTE: You can find a register script for Windows in release page.

### Linux

Wiki documentation:
  * https://github.com/zylklab/alfresco-share-online-edition-addon/wiki#registering-the-dav-protocol-in-linux
  
NOTE: You can register the protocols in Linux with the help of this article:
  * http://www.zylk.net/es/web/guest/web-2-0/blog/-/blogs/online-edition-with-libreoffice-in-alfresco-5

### MacOSX

Not working in MacOSX. More info at:
  * https://github.com/zylklab/alfresco-share-online-edition-addon/issues/6

## Authors
 * Patricia Yague
 * Cesar Capillas
