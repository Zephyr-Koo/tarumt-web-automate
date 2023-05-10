let defaultText = (arg) => toggleText(arg.currentTarget, true);
let hideText = (arg) => toggleText(arg.currentTarget, false);
let hideAllText = (index, obj) => toggleText(obj, false);

function toggleText(target, visible) {
  $(target).css('color', visible ? 'inherit' : 'transparent');
}

$("table tbody tr")
  .each(hideAllText)
  .mouseenter(defaultText)
  .mouseleave(hideText);
