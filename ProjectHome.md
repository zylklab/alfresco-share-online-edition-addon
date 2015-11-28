# Alfresco Share addon for online edition (for Libreoffice) by Zylk #

Alfresco Share addon for online edition by Zylk provides DAV webdav links for online edition of Office and MS office mimetypes.



## Features ##

  * Action links in navigation menu and document details action menu.
  * Webdav ticket-based auth for Libreoffice (EE version).

## Compatible with ##
  * Alfresco 4.x (tested with 4.2.x CE, 4.1.x EE).
  * Any modern browser (most tested in last versions of Firefox and Chrome - also IE).
  * Libreoffice / Openoffice 3.x (most tested).
  * Libreoffice 4.0.4 or any useful webdav client.

We recommend the Firefox/Chrome + Libreoffice 3.x stack on the client side. Webdav has many known issues related to Windows and MS-Office in different versions (see below).

## Screenshots ##

The created webdav links are dav type (for http) or davs (for https), which are url-schemes that can be managed by OS or browsers (in the client side). It is designed to work in the same way of other uris like magnets or spotify uris.

### Action menu link ###

http://addons.alfresco.com/sites/addons/files/styles/very_large/public/addons_field_image/file__ajax/edit-online-main640.png?itok=DCEd_0Aa

### Document detail link ###

http://addons.alfresco.com/sites/addons/files/styles/very_large/public/addons_field_image/file__ajax/edit-online-document-preview640.png?itok=wVNBkhEv

### Video demo ###

<a href='http://www.youtube.com/watch?feature=player_embedded&v=dd9mT5WbCyk' target='_blank'><img src='http://img.youtube.com/vi/dd9mT5WbCyk/0.jpg' width='425' height=344 /></a>

## Installation of the addon in Alfresco ##

To install the addon you just need to copy the jar file in the $TOMCAT\_HOME/shared/lib directory, and restart alfresco service.

## Registering the dav protocol in Linux ##

Other possibilities are related to register the url scheme at system level. For example, in Linux (from Ubuntu 11.10):

Create file /usr/share/applications/libreoffice-alf.desktop

```
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Name=LibreOffice for Alfresco
GenericName=LibreOffice for Alfresco
Comment=Online Editing in Alfresco via webdav
Icon=libreoffice-writer
TryExec=soffice
Exec=soffice %U
Terminal=false
Type=Application
Categories=Office;
MimeType=x-scheme-handler/davs;x-scheme-handler/dav
```

In /usr/share/applications/mimeinfo.cache add the following lines,

```
x-scheme-handler/davs=libreoffice-alf.desktop;
x-scheme-handler/dav=libreoffice-alf.desktop;
```

And finally,

```
$ sudo update-desktop-database
```

## Registering the dav protocol in Windows ##

In Windows, create a .reg file and execute it. This allows to register dav:// and davs:// protocol in Windows.

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\davs]
@="URL:loffice Protocol"
"URL Protocol"=""
[HKEY_CLASSES_ROOT\davs\DefaultIcon]
@="soffice.exe,1"
[HKEY_CLASSES_ROOT\davs\shell]
[HKEY_CLASSES_ROOT\davs\shell\open]
[HKEY_CLASSES_ROOT\davs\shell\open\command]
@="\"C:\\Program Files\\OpenOffice.org 3\\program\\soffice.exe\" \"%1\""

[HKEY_CLASSES_ROOT\dav]
@="URL:loffice Protocol"
"URL Protocol"=""
[HKEY_CLASSES_ROOT\dav\DefaultIcon]
@="soffice.exe,1"
[HKEY_CLASSES_ROOT\dav\shell]
[HKEY_CLASSES_ROOT\dav\shell\open]
[HKEY_CLASSES_ROOT\dav\shell\open\command]
@="\"C:\\Program Files\\OpenOffice.org 3\\program\\soffice.exe\" \"%1\""
```

## Known issues of Webdav protocol in Windows XX ##

**Software Update for Web Folders (KB907306) (for Win XP, Win Vista and Win 7).
  * http://www.microsoft.com/es-es/download/details.aspx?id=15123**

**Allow Basic Auth in Windows 7 (in Windows Registry)
```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Webclient\Parameters\BasicAuthLevel  --> Type: DWORD Value: 2
HKEY_CURRENT_USER\Software\Microsoft\Office\11.0\Common\Internet\BasicAuthLevel --> DWORD y Valor: 2
```**

**MS Office 20XX setup (in Windows registry)
  * http://support.microsoft.com/kb/870853**

## Configuration for url protocol handler in Firefox + Libreoffice (deprecated) ##

This section shows the old configuration for Firefox browser. It is not necessary if the protocol was registered previously in the operating system.

Please type the following instructions:

  1. Type about:config in Firefox url bar
  1. Create two boolean variables:
    * network.protocol-handler.expose.dav = false (0)
    * network.protocol-handler.expose.davs = false (0)
  1. When you click on Edit online links in Alfresco Share, Firefox will ask you for the path of a program for opening this type of links (dav or davs). You should browse or write the Openoffice / Libreoffice path.

Once you configured Firefox and you clicked on a link, you will asked for your Alfresco ECM user and password, that will be valid on the Openoffice session. So if you open a second link, Openoffice won't ask you anything. Besides, Openoffice / Libreoffice provides a password manager that eases the authentication process.

There is a known limitation for Firefox + MS Office combination, because of the protocol based method for opening office files, so only one program of MS Office suite can be configured (i.e. Word). Openoffice / Libreoffice has a launcher of all the applications of the suite. It could be solved with a local .bat launcher instead.


**NOTE**: We detected in recent installations of Firefox (24) and probably with earlier versions that Firefox does not allow to define an url-scheme-handler for dav:// or davs:// in the same way that it does for others, for example, magnet://

A walkaround is to edit mimetypes.rdf file in Firefox profile:

```
<RDF:Seq RDF:about="urn:schemes:root">
    <RDF:li RDF:resource="urn:scheme:webcal"/>
    <RDF:li RDF:resource="urn:scheme:ircs"/>
    <RDF:li RDF:resource="urn:scheme:mailto"/>
    <RDF:li RDF:resource="urn:scheme:irc"/>
    <RDF:li RDF:resource="urn:scheme:davs"/>
</RDF:Seq>

<RDF:Description RDF:about="urn:scheme:davs"
                   NC:value="davs">
    <NC:handlerProp RDF:resource="urn:scheme:handler:davs"/>
</RDF:Description>

<RDF:Description RDF:about="urn:scheme:handler:davs"
                   NC:alwaysAsk="false">
    <NC:externalApplication RDF:resource="urn:scheme:externalApplication:davs"/>
    <NC:possibleApplication RDF:resource="urn:handler:local:/usr/bin/soffice"/>
</RDF:Description>

<RDF:Description RDF:about="urn:scheme:externalApplication:davs"
                   NC:prettyName="soffice"
                   NC:path="/usr/bin/soffice" />
```

## Further configuration in Alfresco ECM for the edition and creation online ##

Alfresco Share 4.x can work with Document templates (in Data Dicctionary >> Node Templates). This means that you can add office templates - for example empty documents with a template of your organization (.doc .xls .ppt .odt .ods .odp) for creating new documents from the Share client.

https://addons.alfresco.com/sites/addons/files/styles/very_large/public/addons_field_image/file__ajax/captura-nodo.png?itok=tOOjQEDX

Blog Posts (spanish):
  * http://www.zylk.net/es/web/guest/web-2-0/blog/-/blogs/plantillas-de-nodos-y-espacios-en-alfresco-share
  * http://www.zylk.net/es/web/guest/web-2-0/blog/-/blogs/mas-sobre-las-plantillas-de-nodos-y-espacios-en-alfresco-share

## Commercial Support ##

What are the benefits of buying this component?
  * An improved version of the addon, that it does not need to authenticate in Libreoffice (webdav client), making simpler the online edition process.

More information:
  * http://www.zylk.net/es/web/guest/alfresco-addons#edit-online-with-libreoffice-openoffice
  * http://www.zylk.net/en/web/guest/alfresco-form
  * http://addons.alfresco.com/addons/edit-online-libreoffice-openoffice
  * http://www.zylk.net/es/web/guest/web-2-0/blog/-/blogs/alfresco-addons-presentation-by-zylk-in-alfresco-summit-2013

Blog posts (spanish):

  * http://www.zylk.net/es/web/guest/web-2-0/blog/-/blogs/edicion-online-de-documentos-de-office-y-openoffice-en-alfresco-via-webdav
  * http://www.zylk.net/es/web/guest/web-2-0/blog/-/blogs/mas-sobre-la-edicion-online-en-alfresco-y-libreoffice

## Apache config (EE version) ##

In the EE version of the plugin, the authentication process of the webdav client (Libreoffice) is managed with an Alfresco ticket, so the final user does not need to fill the credentials in Libreoffice,making simpler the edition process.

For this to work, you need an Apache Server (with mod\_proxy and mod\_rewrite) with the next configuration:

```
# Libreoffice SSO 
RewriteRule ^/alfresco/ticket/(.*)/webdav/(.*)  http://alfserver:8080/alfresco/webdav/$2?ticket=$1 [QSA]

# Standard proxy configuration for Alfresco via ajp
ProxyPass /alfresco ajp://alfserver:8009/alfresco
ProxyPassReverse  /alfresco  ajp://alfserver:8009/alfresco
ProxyPass /share ajp://alfserver:8009/share
ProxyPassReverse  /share  ajp://alfserver:8009/share
```

## Donate ##

Please, consider to buy and support the online-edition component for sponsoring community contributions of small open source companies.