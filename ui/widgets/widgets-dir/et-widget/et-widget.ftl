<#assign wp=JspTaglibs["/aps-core"]>
<script src="<@wp.resourceURL />entando-mf-conf-template/static/js/2.68bdf2cd.chunk.js"></script>
<script src="<@wp.resourceURL />entando-mf-conf-template/static/js/main.b62d2339.chunk.js"></script>
<script src="<@wp.resourceURL />entando-mf-conf-template/static/js/runtime-main.0096342d.js"></script>
<#-- entando_resource_injection_point -->
<#-- Don't add anything above this line. The build scripts will automatically link the compiled JS and CSS for you and add them above this line so that the widget can be loaded-->

<@wp.currentWidget param="config" configParam="name" var="configName" />
<my-widget name="${configName}" />
