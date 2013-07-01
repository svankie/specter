exports.preferences = {
	// reference :	https://github.com/brislink/specter/wiki/preferences-documentation 
	
	"paginationSize" :11, 
	
	"databaseUrl"   :"http://localhost:9200/",	
	
	"index" : {
	"searchResults" :5,
	"pageFields":["postedBy","postedOn","title","wordCount","postHtml"],
	"summaryLength" : 3
	},
	
	"searchIndex" : {
		
	"pageFields" : ["postedBy","postedOn","title","wordCount","postHtml"],
	"summaryLength" : 2,
	"paginationSize" : 11
}
	
	
};

