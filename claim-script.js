// Lookup //
const TeachingHours = {
    Lecture  : 2,
    Tutorial : 1,
    Practical: 1
};

// Configurations //
let courseCode = 'AACS3013';
let classGroup = 'DFT1S3G18'; // DFT1S3G18, DFT1S3G19, DFT1S3G20
let classType  = 'T'; // (L)ecture, (T)utorial, (P)ractical

let claimDate = new Date('2023-02-18');
let noOfHours = TeachingHours[classType];

// Automating claim process //
// 1) Set teaching date
$('#id-date-picker-1').datepicker('setDate', claimDate);

// 2) Set class group
$('#fgroup').val(classGroup);

// 3) Set course
$('select[name=funits]').children().filter(function() {
    return this.text.includes(courseCode);
}).prop('selected', true);

// 4) Set class type
$('input[name=fclass]').filter(`[value=${classType}]`).prop('checked', true);

// 5) Set no. of teaching hours
$('#fhour').val(noOfHours);

// 6) Click on Add button
$('button[name=fsubmit]').first().click();
