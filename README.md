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

You may pack it with maven. Go into the directory that you unzipped, or cloned via git:

    $ git clone https://github.com/zylklab/alfresco-share-online-edition-addon
    $ cd alfresco-share-online-edition-addon
    $ mvn clean
    $ mvn package -DskipTests=true

You will generate an Alfresco Share AMP package in target directory. 

HINT: You also may download a JAR file from releases page to be deployed in $TOMCAT/shared/lib

## Installation

 - Just copy the corresponding AMP into $ALF_HOME/amps_share, stop Alfresco service, apply AMPs script ($ALF_HOME/bin/apply_amps.sh). Then start Alfresco service. 

### Registering the protocols

Finally you will need to register the protocol in Windows or Linux according instrucctions and scripts.

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
