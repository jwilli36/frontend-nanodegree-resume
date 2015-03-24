//Bio
var bio ={
	"name" : " Joffrey Williams",
	"role": " Web Developer ",
	"contacts": {
	  "mobile": "773-415-3834",
	  "email": " joffrey.williams1@gmail.com ",
	  "github" : " jwilli36 ",
	  "linkedin": "www.linkedin.com/in/jjwwwil",
	  "location": "Chicago"
	},
	"welcomeMessage": "Welcome to my Professional resume page",  
	"skills" : [
	 "Six Sigma Greenbelt", "Process Improvement", "Quality Management", "Training and Development", "Labor Relations"],
	"bioPic": "\images/IMG_24.png"
}; 

//Display Bio Info
 bio.display = function(){
     //Header Info
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var role = "Web Developer";
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName); 
 
     //Top and Bottom contact info
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").prepend(formattedmobile);
	$("#footerContacts").append(formattedmobile);
	
	var formattedemail = HTMLemail.replace("%data%", bio.contacts.email); 
	$("#topContacts").prepend(formattedemail);
	$("#footerContacts").append(formattedemail);
	
	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").prepend(formattedgithub);
	$("#footerContacts").append(formattedgithub);
	
	var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	$("#topContacts").append(formattedlinkedin);
	$("#footerContacts").append(formattedlinkedin);
	
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedlocation);
	$("#footerContacts").append(formattedlocation);
	
	var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#topContacts").prepend(formattedpic);
	
	var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage); 
	$("#topContacts").append(formattedMsg);
    $("#header").append(HTMLskillsStart);
	
	//Display skills info
   for (var i = 0; i < bio.skills.length; i++){ 
   var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
   $("#skills").append(formattedSkill);
  }
}
  bio.display();

 //Education
var education = { 
  "schools":[
     {
	   "name": "DeVry University",
	   "location": "Chicago, IL, US",
	   "degree": "BS",
	   "major" : ["Telecommunications Management", " Finance"],
	   "dates" : 2003,
	   "url": "www.Devry.edu"
	 },
	 {
	   "name": "DePaul University",
	   "location": "Chicago, IL, US",
	   "degree": "Masters of Science",
	   "major" : "Telecommunication Systems",
	   "dates" : 2005,
	   "url": "www.depaul.edu"
	 }
	],
  "onlineCourses":[
     {
	   "title": "Front End Web Development",
	   "school" : "Udacity",
	   "dates": 2014,
	   "url": "http://www.udacity.com/"
	 },
	{
	   "title": "VOIP",
	   "school" : "DePaul University",
	   "dates": 2004,
	   "url": "http://www.depaul.edu"
	 } 
	]
};

//Display Education
education.display = function() {
for (var school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedNameDegree = formattedschoolName + formattedschoolDegree;
  var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedschoolLocation);
  $(".education-entry:last").append(formattedNameDegree);
  
  
  var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedschoolDates);
  
  
  var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedschoolMajor);
	}
	
   $("#education").append(HTMLonlineClasses);
for (var onlineCourse in education.onlineCourses) {
   $("#education").append(HTMLschoolStart);
  var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
  var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
  var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;
  
  $(".education-entry:last").append(formattedTitleSchool);
  
  
  var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
  $(".education-entry:last").append(formattedonlineDates);
  
  
  var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
  $(".education-entry:last").append(formattedonlineURL);
	}
}
education.display();

//Work Object
var work = {
  "jobs": [
     { 
	    "employer" : " ATT ",
	    "title" : "Manager Business Services",
		"location": "Chicago, Il",
		"dates": "Nov 1997 - Current",
	    "description": "Provide leadership and mentoring to a team of 13 Customer Service Field Technicians engaged in the installation, maintenance, cable repair and routine maintenance of DS0 and hi capacity circuits(T1 through OC Level). Additionally, perform quality and safety reviews, assist in employee development and interact with interact and external customers.Assure the highest levels of customer service and achieve safety, reliability and productivity goals within departmental budgets. Execute labor strategies involving employees covered under a collective bargaining agreement. Respond to emergent facility conditions and coordinate emergency response to restore system configuration and/or customers."	  
	 },
	 { 
	    "employer" : " ATT ",
		"title" : " Manager Network Support",
		"location": "Chicago, Il",
		"dates" : "Apr 2010 - Feb 2011",
		"description" : "Worked with internal and external customers through various mediums to resolve high profile network outages. Used network monitoring tools to monitor network performance and capacity daily. Developed a non-routine process to resolve hardware/software compatibility issues and guided users in required operational changes. Utilized network operation and maintenance concepts to troubleshoot network problems. Provided guidance to field technicians during the installation, configuration and troubleshooting of LAN and WAN components. Assisted with the redesign of network infrastructure in response to changes in network requirements and network technologies."
		  
	 },
	 { 
	    "employer" : " United States Air Force ",
		"title" : " Communications/Navigations Systems Specialist",
		"location": "Fort Dix, New Jersey",
		"dates" : "Dec 1989 - May 1997",
		"description" : "Troubleshoot and repaired communication receivers, transmitters, digital and voice satellite communications, multiplexors, electronic switching and radar systems. Analysed testing and troubleshooting data to determine required repair. Diagnosed malfunctions using schematics, wiring diagrams and test equipment. Removed and replaced faulty system wiring, electrical connectors, antennas, transmission lines, and multi conductor cables. Analysed and resolved computer system hardware and software problems. "
	},
	]
}

//Display Work
work.display = function () {
for (var job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  
  var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;
  
  $(".work-entry:last").append(formattedEmployerTitle);
  
  var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedworkDates);
  
  var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedworkLocation);
  
  var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedworkDescription);
      
 }
}
  work.display();
//Projects Object
var projects = {
  "projects": [
    {
	  "title": "Orange Udacity Mug",
	  "dates": "2014",
	  "description": "You will replicate a design mock-up",
	  "images" : ["\images/udacitymug.png"]
	},
	{
      "title": "Interactive Resume",
      "dates": "2014",
      "description": "Design an Interactive Resume",
      "images" : ["\images/Resume1.png"]
    }	   
	 ]
	};
	//Display Projects
projects.display = function () {
for (var project in projects.projects) {
  $("#projects").append(HTMLprojectStart);
  
  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  $(".project-entry:last").append(formattedTitle);
  
  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  $(".project-entry:last").append(formattedDates);
  
  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription); 
  
  if (projects.projects[project].images.length > 0) {
    for (var image in projects.projects[project].images) {
	  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	  $(".project-entry:last").append(formattedImage);  
     }
   }
 }
 };
 projects.display();

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x,y);
 });
 $('#main').append(internationalizeButton);
 
 $("#mapDiv").append(googleMap);
 
 