console.log("Testing database file");

var PrimaryRatingEnum = {
    Unknown: 0,
    MostlyTrusted: 1,
    Questionable: 2,
    Untrustworthy: 3,
    Satire: 4,
    Clickbait: 5
};
    
var SecondaryRatingEnum = {
    Unknown: 0,
    Unbiased: 1,
    LeansCenter: 2,
    LeansLeft: 3,
    LeansRight: 4
};
    
var websites = [];


/*
    Template:
    var website = {_id: "websiteHost", Title: "websiteTitle", PrimaryRating: PrimaryRatingEnum, SecondaryRating: SecondaryRatingEnum}
*/
var wsj = {_id: "www.wsj.com", Title: "Wall Street Journal", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(wsj);
var nyt = {_id: "www.nytimes.com", Title: "New York Times", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(nyt);
var bbc = {_id: "www.bbc.com", Title: "BBC", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(bbc);
var npr = {_id: "www.npr.org", Title: "NPR", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(npr);
var snps = {_id: "www.snopes.com", Title: "Snopes", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(snps);
var reut = {_id: "www.reuters.com", Title: "Reuters", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(reut);
var econmst = {_id: "www.economist.com", Title: "The Economist", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(econmst);
var pbs = {_id: "www.pbs.com", Title: "PBS", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(pbs);
var abc = {_id: "abcnews.go.com", Title: "ABC", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(abc);
var cspn = {_id: "www.c-span.org", Title: "C-SPAN", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(cspn);
var ap = {_id: "www.ap.org", Title: "Associated Press", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(ap);
var wp = {_id: "www.washingtonpost.com", Title: "Washington Post", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(wp);
var usat = {_id: "www.usatoday.com", Title: "USA Today", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(usat);
var hufp = {_id: "www.huffpost.com", Title: "Huffington Post", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(hufp);
var msn = {_id: "www.msn.com", Title: "MSN", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(msn);
var cbs = {_id: "www.cbsnews.com", Title: "CBS", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(cbs);
var grdn = {_id: "www.theguardian.com", Title: "Guardian", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(grdn);
var tchcrch = {_id: "www.techcrunch.com", Title: "TechCrunch", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(tchcrch);
var lat = {_id: "www.latimes.com", Title: "LA Times", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(lat);
var vrg = {_id: "www.theverge.com", Title: "The Verge", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(vrg);
var cnbc = {_id: "www.cnbc.com", Title: "CNBC", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(cnbc);
var diffbet = {_id: "www.differencebetween.net", Title: "Wall Street Journal", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(diffbet);
var altnews = {_id: "www.altnewsmedia.net", Title: "AltNewsMedia", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(altnews);
var time = {_id: "www.time.com", Title: "Time", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(time);
var wired = {_id: "www.wired.com", Title: "Wired", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(wired);
var nyrkr = {_id: "www.newyorker.com", Title: "New Yorker", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(nyrkr);
var cnn = {_id: "www.cnn.com", Title: "CNN", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(cnn);
var fxnws = {_id: "www.foxnews.com", Title: "Fox News", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(fxnws);
var bzfd = {_id: "www.buzzfeed.com", Title: "BuzzFeed", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(bzfd);
var yhoo = {_id: "www.yahoo.com", Title: "Yahoo", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(yhoo);
var msnbc = {_id: "www.msnbc.com", Title: "MSNBC", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(msnbc);
var wsht = {_id: "www.washingtontimes.com", Title: "Washington Times", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(wsht);
var yhoonws = {_id: "news.yahoo.com", Title: "Yahoo News", PrimaryRating: PrimaryRatingEnum.MostlyTrusted, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(yhoonws);
var haarp = {_id: "www.haarp.net", Title: "HAARP", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(haarp);
var amznws = {_id: "www.amazingnews.net", Title: "Amazing News", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(amznws);
var ir = {_id: "www.ir.net", Title: "IR", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(ir);
var nwexmr = {_id: "www.newsexaminer.net", Title: "News Examiner", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(nwexmr);
var rtp = {_id: "www.realtimepolitics.com", Title: "Real Time Politics", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(rtp);
var usadt = {_id: "www.usadailytime.com", Title: "USA Daily Time", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(usadt);
var endth = {_id: "www.endtimeheadlines.org", Title: "End Time Headlines", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(endth);
var pusan = {_id: "www.politicsusanews.com", Title: "Politics USA News", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(pusan);
var usadr = {_id: "www.usadailyreview.com", Title: "USA Daily Review", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(usadr);
var usadp = {_id: "www.usadailypost.us", Title: "USA Daily Post", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(usadp);
var dusaup = {_id: "www.dailyusaupdate.com", Title: "Daily USA Update", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(dusaup);
var onion = {_id: "www.theonion.com", Title: "The Onion", PrimaryRating: PrimaryRatingEnum.Satire, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(onion);
var amrnws = {_id: "www.americannews.com", Title: "American News", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(amrnws);
var chl = {_id: "www.clickhole.com", Title: "Clickhole", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(chl);
var abcnwsco = {_id: "abcnews.com.co", Title: "ABCNEWS.co", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(abcnwsco);
var brkcnn = {_id: "www.breaking-cnn.com", Title: "Breaking-CNN", PrimaryRating: PrimaryRatingEnum.Untrustworthy, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(brkcnn);
var ntrlnws = {_id: "www.naturalnews.com", Title: "Natural News", PrimaryRating: PrimaryRatingEnum.Clickbait, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(ntrlnws);
var dscls = {_id: "www.disclose.tv", Title: "Disclose.tv", PrimaryRating: PrimaryRatingEnum.Clickbait, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(dscls);
var wrldtrth = {_id: "www.worldtruth.tv", Title: "Worldtruth.tv", PrimaryRating: PrimaryRatingEnum.Clickbait, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(wrldtrth);
var infwrs = {_id: "www.infowars.com", Title: "InfoWars", PrimaryRating: PrimaryRatingEnum.Clickbait, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(infwrs);
var tmz = {_id: "www.tmz.com", Title: "TMZ", PrimaryRating: PrimaryRatingEnum.Clickbait, SecondaryRating: SecondaryRatingEnum.Unknown};
websites.push(tmz);

console.log(websites);