var group = '1DIB1';

var startDate = new Date('2018-06-02');

// L for Lecture, T for Tutorial, P for Practical
var classType = 'P';
var noOfHour  = classType == 'T' ? 1.5 : 2; // 2 or 1.5

$("#id-date-picker-1").datepicker('setDate', startDate);
$('#fgroup').val(group);
$('select[name=funits]').prop('selectedIndex', 1); // non-default item
$('input[name=fclass]').filter('[value="' + classType + '"]').prop('checked', true);
$('#fhour').val(noOfHour);
$('button[name=fsubmit]').first().click();
