console.log("Testing app");

var PrimaryRatingEnum = {
    Unknown: 0,
    MostlyTrusted: 1,
    Questionable: 2,
    Untrustworthy: 3
};
    
var SecondaryRatingEnum = {
    Unknown: 0,
};
    
var websites = [];


/*
    Template:
    var website = {_id: "websiteHost", Title: "websiteTitle", PrimaryRating: PrimaryRatingEnum, SecondaryRating: SecondaryRatingEnum}
*/
var cnn = {_id: "www.cnn.com", Title: "CNN", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown}

websites.push(cnn);

console.log(websites[0]);