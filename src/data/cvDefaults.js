export const DEFAULT_CV_DATA = {
  generalInfo: {
    fullName: "Lohit T",
    jobTitle: "Mechanical Engineer",
    address: "Karur, Tamil Nadu, India",
    phone: "+91 97901 59159",
    email: "lohitworkmail@gmail.com",
    github: "github.com/itsLohit",        
    linkedin: "linkedin.com/lohitt"       
  },
  educationInfo: {
    studies: [
      {
        id: "1",
        field: "Bachelor of Engineering – Mechanical Engineering",
        university: "Anna University, India (Bannari Amman Institute of Technology)",
        fromDate: "2020-08-01",
        toDate: "2024-06-01",
        cgpa: "8.67",
        project: "Design and Development of SCARA Robot"
      }
    ]
  },
  experienceInfo: {
    experiences: [
      {
        id: "1",
        position: "Research Intern",
        company: "Chettinad Cement Corporation Limited",
        location: "Karur, India",
        fromDate: "2021-12-01",
        toDate: "2021-12-31",
        details: [
          "Collaborated with a team of engineers to conduct research and learned about the stages of cement manufacturing and pre-heating procedures.",
          "Conducted extensive kiln maintenance and preparing detailed reports of the maintenance.",
          "Learned about the cooling process from senior engineers, effectively communicating complex technical concepts in a clear and concise manner."
        ]
      },
      {
        id: "2",
        position: "Intern/Trainee – Production and Quality Department",
        company: "Emmarkay Automotive Spares Pvt Ltd",
        location: "Coimbatore, India",
        fromDate: "2022-05-01",
        toDate: "2022-05-31",
        details: [
          "Assisted in optimizing the CNC codes and increasing efficiency in the production department.",
          "Conducted quality inspection on automotive components such as plungers, sprockets, etc. in different zones like inventory and final inspection.",
          "Presented findings and recommendations to senior engineers, proposing enhancement in efficiency."
        ]
      }
    ]
  },
  projects: [
    {
      id: "1",
      name: "Design and Fabrication of Electric Two Wheeler",
      description: "Led a team in designing and building a high-performance Electric two wheeler from scratch that works on BLDC motor with lithium ferro phosphate battery.",
      fromDate: "2022-03-01",
      toDate: "2022-10-01",
      bullets: [
        "Led a team in designing and building a high-performance Electric two wheeler from scratch that works on BLDC motor with lithium ferro phosphate battery.",
        "Applied principles of automobile engineering to optimise vehicle weight, aerodynamics, and handling characteristics.",
        "Implemented modifications to the vehicle frame, resulting in a 20% increase in tire grip on slippery surfaces, improving vehicle stability and reducing the likelihood of skidding."
      ]
    },
    {
      id: "2",
      name: "Design and Development of SCARA Robot",
      description: "Led a team in design and development of Industrial SCARA Robot in collaboration with Techsonics Private Limited from scratch.",
      fromDate: "2023-09-01",
      toDate: "2024-04-01",
      bullets: [
        "Conducted Finite Element Analysis, real time analysis on static and dynamic loads using AutoDesk Nastran, Ansys for the components designed using SolidWorks and Autodesk Inventor."
      ]
    },
    {
      id: "3",
      name: "Machine Predictive Maintenance using Machine Learning",
      description: "Trained a machine learning model to optimize the efficiency of maintenance in industries in Predictive machine maintenance resulting in 85% accuracy.",
      fromDate: "2024-01-01",
      toDate: "2024-04-01",
      bullets: [
        "Utilized machine learning algorithms like SVM, Random Forest, and Decision Tree."
      ]
    },
    {
      id: "4",
      name: "Restaurant page",
      description: "Created a front-end webpage for a local restaurant.",
      link: "https://itslohit.github.io/restaurant-page-odin-project/",
      fromDate: "",
      toDate: ""
    },
    {
      id: "5",
      name: "Tic Tac Toe Game",
      description: "Created a Tic Tac Toe game using JavaScript.",
      link: "",
      fromDate: "",
      toDate: ""
    },
    {
      id: "6",
      name: "Library Page",
      description: "Created a library page using HTML, CSS, JavaScript.",
      link: "",
      fromDate: "",
      toDate: ""
    }
  ],
  skills: [
    { id: "1", name: "Mechanical", proficiency: "CAD, CAE Analysis, MATLAB" },
    { id: "2", name: "IT", proficiency: "C, Java, HTML, CSS, JavaScript" },
    { id: "3", name: "Languages", proficiency: "Tamil, English" }
  ],
  achievements: [
    "Participated in the SAEISS Dr G Padmanabham Memorial Electric Two Wheeler Design Competition 2022 (OCT-2022)."
  ]
}

export const EMPTY_CV_DATA = {
  generalInfo: {
    fullName: "",
    jobTitle: "",
    address: "",
    phone: "",
    email: "",
    github: "",
    linkedin: ""
  },
  educationInfo: { studies: [] },
  experienceInfo: { experiences: [] },
  skills: [],
  projects: []
};
