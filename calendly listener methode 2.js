<script>
jQuery(document).ready(function(){
if(jQuery('#custom-calendly-test-3').length){
Calendly.initInlineWidget({
 url: 'https://calendly.com/techrock69/30min',
 parentElement: document.getElementById('custom-calendly-test-3'),
 prefill: {},
});

}
});
function isCalendlyEvent(e) {
  return e.data.event &&
     	e.data.event.indexOf('calendly') === 0;
};

window.addEventListener(
  'message',
  function(e) {
	if (isCalendlyEvent(e)) {
var elem = jQuery(this).get(0);
var dataLayerObject = {
'event': "custom_event." + e.data.event,
'gtm.element': elem,
'gtm.elementClasses': elem.className || "",
'gtm.elementId': elem.id || "",
'gtm.elementTarget': elem.target || "",
'gtm.elementUrl': elem.href || elem.action || "",
};
 	 
  	dataLayer.push(dataLayerObject);
	}
  }
);
</script>
