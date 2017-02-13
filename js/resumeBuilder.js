<<<<<<< HEAD
//Bio
var bio ={
	"name" : " Joffrey Williams",
	"role": " Web Developer ",
	"contacts": {
	  "mobile": "773-415-3834",
	  "email": " joffrey.williams1@gmail.com ",
	  "github" : " jwilli36 ",
	  "linkedin": "http://www.linkedin.com/in/jjwwil",
	  "location": "Chicago"
	},
	"welcomeMessage": "Telecommunications Manager with a nine year career highlighted by consistent achievement in teambuilding, quality management and technician development. Outstanding qualifications in building and managing relationships with engineering and customer service advocates. Deep expertise with labor relations and collective bargaining processes.",  
	"skills" : [
	 "Team Building", "Maintenance Management", "Productivity Management", "Leadership", "Policy & Procedures", "Collective Bargaining", "Six Sigma Greenbelt", "Process Improvement", "Quality Management", "Training & Development", "Labor Relations", "Performance Management"],
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
	   "degree": "Bachelors of Science",
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
	],
	"Courses":[
     {
	   "title": "Fundamentals of Avionic Systems",
	   "school" : "Community College of the Air Force",
	   "dates": 1990,
	   "url": "http://www.ccaf.edu"
	 },
	{
	   "title": "Basic Electronic Principles/Circuits",
	   "school" : "Community College of the Air Force",
	   "dates": 1990,
	   "url": "http://www.ccaf.edu"
	 },
	{
	   "title": "Cellular/Wireless Telecom",
	   "school" : "DePaul University",
	   "dates": 2004,
	   "url": "http://www.depaul.edu"
	 },
	{
	   "title": "Local Area Networks",
	   "school" : "DePaul University",
	   "dates": 2005,
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
	
	$("#education").append(HTMLcourseClasses);
for (var Course in education.Courses) {
   $("#education").append(HTMLschoolStart);
  var formattedcourseTitle = HTMLcourseTitle.replace("%data%", education.Courses[Course].title);
  var formattedcourseSchool = HTMLcourseSchool.replace("%data%", education.Courses[Course].school);
  var formattedTitleSchool = formattedcourseTitle + formattedcourseSchool;
  
  $(".education-entry:last").append(formattedTitleSchool);
  
  
  var formattedcourseDates = HTMLcourseDates.replace("%data%", education.Courses[Course].dates);
  $(".education-entry:last").append(formattedcourseDates);
  
  
  var formattedcourseURL = HTMLcourseURL.replace("%data%", education.Courses[Course].url);
  $(".education-entry:last").append(formattedcourseURL);
	}	
}
education.display();

//Work Object
var work = {
  "jobs": [
     { 
	    "employer" : " AT&T ",
	    "title" : "Manager Business Services",
		"location": "Chicago, Il",
		"dates": "Sep 2014 - Current",
	    "description": "Lead and mentor a team of 15 Business Services technicians engaged in the installation and maintenance of evolving high speed technologies including switched and dedicated ethernet services, ethernet over light speed services and software defined network services. Evaluate performance levels of technicians through the use of quality and safety observations and ride-with exercises resulting 10% fewer repeat dispatches.   Execute labor strategies involving employees covered under the collective bargaining agreement. Plan resource coverage and execute work activities directed at achievement of efficiency, productivity and utilization objectives."	  
	 },
	 { 
	    "employer" : " AT&T ",
	    "title" : "Manager Network Services",
		"location": "Chicago, Il",
		"dates": "Feb 2011 - Sep 2014",
	    "description": "Managed and mentored a crew of 29 Network technicians engaged in the installation, maintenance and cable repair of Sub Rate (DSO) & high capacity circuits (T1 through OC level). Handled customer escalations and interacted with peer work groups ensuring timely resolution of service related issues resulting in improved customer service results. Responded to emergency facility outages and coordinated emergency responses to restore system configuration and/or service to customers."	  
	 },
	 { 
	    "employer" : " AT&T ",
		"title" : " Manager Network Support",
		"location": "Chicago, Il",
		"dates" : "Apr 2010 - Feb 2011",
		"description" : "Developed non-routine steps to resolve hardware/software compatibility issues, test software and guided users in required operational changes. Participated in implementation and deployment planning and execution of network migrations. Provided guidance to field technicians during the installation, configuration and troubleshooting of LAN and WAN components. Assisted with the redesign of network infrastructure in response to changes in network requirements and network technologies. Interacted with internal and external customers through various mediums to resolve high profile network outages."
		  
	 },
	 { 
	    "employer" : " AT&T ",
		"title" : " Uverse Operations Manager",
		"location": "Chicago, Il",
		"dates" : "Feb 2008 - Apr 2010",
		"description" : "Developed and lead new-hire technicians in achieving performance and quality objectives associated with UVERSE services. Handled customer escalations and interacted with other work groups to ensure timely resolution of service issues. Utilized strong performance management and communication skills to develop and correct technician performance and behavior. Scheduled a workforce appropriately to the workload and analyzed previous workload trends to make necessary adjustments."
		  
	 },
	 { 
	    "employer" : " AT&T ",
		"title" : " Special Services Manager",
		"location": "Chicago, Il",
		"dates" : "Feb 2005 - Feb 2008",
		"description" : "Led and developed a group of customer systems technicians in achieving the performance and quality objectives associated with the provisioning and maintenance of special service circuit levels DS0 through OC-n and Gigaman. Handled customer escalations and interacted with peer work groups ensuring timely resolution of service related issues resulting in improved customer service results. Evaluated performance levels of technicians through the use of quality and safety observations and ride-with exercises resulting in 10% fewer repeat dispatches. Coached technicians on changing technical environment, new technical practices, and customer contact skills."
		  
	 },
	 { 
	    "employer" : " SBC ",
		"title" : " Customer Systems Technician",
		"location": "Chicago, Il",
		"dates" : "Nov 1997 - Jun 2005",
		"description" : "Consistently performed at the top installing and maintaining T carrier, Gigaman and OC-N level high capacity circuits. Worked with cross-functional groups to meet customer and operational commitments. Identified and reported system and circuit problems to appropriate work groups. Assisted in the development of network routing designs for circuits using required tools. Designated to train 12 DS0 technicians in adding DS1 qualifications to their skill set. Selected to install over 20 Gig E circuits for the Chicago Public Schools in their transformation for copper to fiber technology."
		  
	 },
	 { 
	    "employer" : " United States Air Force ",
		"title" : " Communications/Navigations Systems Specialist",
		"location": "Fort Dix, New Jersey",
		"dates" : "Dec 1989 - May 1997",
		"description" : "Trouble shot and repaired communication receivers, transmitters, digital and voice satellite communications, multiplexors, electronic switching and radar systems. Analysed testing and troubleshooting data to determine required repair. Diagnosed malfunctions using schematics, wiring diagrams and test equipment. Removed and replaced faulty system wiring, electrical connectors, antennas, transmission lines, and multi conductor cables. Analysed and resolved computer system hardware and software problems. "
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
      "dates": "2015",
      "description": "Design an Interactive Resume",
      "images" : ["\images/Resume1.png"]
    },
    {
      "title": "Interactive Map",
      "dates": "2015",
      "description": "Design an Interactive GoogleMap ",
      "images" : ["\images/map.png"]
    },
    {
      "title": "Arcade Game",
      "dates": "2015",
      "description": "Arcade Game Design",
      "images" : ["\images/arcade.png"]
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
 
 
=======
/*
This is empty on purpose! Your code to build the resume will go here.
 */
>>>>>>> refs/remotes/udacity/master
