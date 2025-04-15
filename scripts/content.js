(() => {
  const userProfile = {
    full_cv: {
      name: "John Doe",
      contact: {
        phone: "+12025550123",
        email: "john.doe@example.com",
        linkedin: "https://www.linkedin.com/in/john-doe/"
      },
      education: [
        {
          degree: "BS Computer Science",
          institution: "University of California, San Diego",
          startdate: "2018-09-01",
          enddate: "2022-06-01",
          description: "Focused on software engineering and data structures."
        },
        {
          degree: "High School Diploma",
          institution: "Lincoln High School",
          startdate: "2014-09-01",
          enddate: "2018-06-01",
          description: "Completed advanced placement courses in math and computer science."
        }
      ],
      experience: [
        {
          jobtitle: "Senior Full Stack Developer",
          company: "TechTrend Innovations"
        },
        {
          jobtitle: "Full Stack Developer",
          company: "BrightPath Solutions"
        },
        {
          jobtitle: "Software Developer Intern",
          company: "Nexlify Tech"
        }
      ],
      skills: {
        technical: [
          "React", "Angular", "Node.js", "Python", "Django", "TypeScript",
          "HTML5", "CSS", "Bootstrap", "JavaScript", "Express.js", "GraphQL",
          "RESTful APIs", "AWS", "GCP", "MongoDB", "PostgreSQL", "Docker",
          "Jenkins", "Git"
        ],
        soft: [
          "Team Collaboration", "Problem Solving", "Time Management", "Leadership"
        ],
        languages: ["English"]
      },
      projects: [
        {
          projectname: "E-Commerce Platform"
        },
        {
          projectname: "Task Management App"
        }
      ],
      hobbies: ["Hiking", "Photography"],
      certifications: [
        "AWS Certified Developer – Associate",
        "Google Cloud Professional Developer"
      ]
    }
  };

  const autofillMap = {
    name: userProfile.full_cv.name,
    fullname: userProfile.full_cv.name,
    email: userProfile.full_cv.contact.email,
    phone: userProfile.full_cv.contact.phone,
    linkedin: userProfile.full_cv.contact.linkedin,
    company: userProfile.full_cv.experience[0].company,
    jobtitle: userProfile.full_cv.experience[0].jobtitle,
    institution: userProfile.full_cv.education[0].institution,
    degree: userProfile.full_cv.education[0].degree,
    startdate: userProfile.full_cv.education[0].startdate,
    enddate: userProfile.full_cv.education[0].enddate,
    description: userProfile.full_cv.education[0].description,
    skill1: userProfile.full_cv.skills.technical[0],
    skill2: userProfile.full_cv.skills.technical[1],
    hobby: userProfile.full_cv.hobbies[0],
    certification: userProfile.full_cv.certifications[0],
    project: userProfile.full_cv.projects[0].projectname
  };

  const inputs = document.querySelectorAll('input, textarea');

  inputs.forEach((input) => {
    const label = (input.name || input.id || input.placeholder || "").toLowerCase();
    for (const key in autofillMap) {
      if (label.includes(key)) {
        input.value = autofillMap[key];
        input.dispatchEvent(new Event('input', { bubbles: true }));
        break;
      }
    }
  });
})();
