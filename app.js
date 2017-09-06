var vCard = require('vcards-js');
var vcardparser = require('vcardparser');

//create a new vCard
vCard = vCard();

//set properties
vCard.firstName = 'Shterion';
vCard.middleName = 'Petrov';
vCard.lastName = 'Yanev';
vCard.organization = 'Wice GmbH';
// vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
vCard.workPhone = '312-555-1212';
vCard.birthday = new Date('03-08-1989');
vCard.title = 'Software Developer';
vCard.url = 'https://github.com/spyanev';
vCard.note = 'Notes on Shteiron';

//save to file
vCard.saveToFile('./shterion-yanev.vcf');

//get as formatted string
console.log(vCard.getFormattedString());

// Parse vcard to JSON
vcardparser.parseFile("./shterion-yanev.vcf", function(err, json) {
    if(err)
        return console.log(err);
    console.log(json);
});
