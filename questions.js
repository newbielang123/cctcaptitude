const questions = [
    {
        id: 1,
        text: "How do you prefer to solve problems?",
        options: [
            { text: "Using logic and systematic analysis", score: { logical: 5, technical: 3 } },
            { text: "Through creative and innovative solutions", score: { creative: 5, innovation: 3 } },
            { text: "By discussing with others and gathering opinions", score: { social: 5, leadership: 3 } },
            { text: "Using hands-on experimentation", score: { practical: 5, technical: 3 } }
        ]
    },
    {
        id: 2,
        text: "What type of work environment do you prefer?",
        options: [
            { text: "Quiet and structured office setting", score: { structured: 5, indoor: 3 } },
            { text: "Dynamic and flexible workspace", score: { flexible: 5, creative: 3 } },
            { text: "Outdoors and varying locations", score: { outdoor: 5, practical: 3 } },
            { text: "Collaborative team environment", score: { social: 5, leadership: 3 } }
        ]
    },
    {
        id: 3,
        text: "When learning something new, you prefer to:",
        options: [
            { text: "Read detailed documentation and analyze", score: { logical: 5, technical: 3 } },
            { text: "Watch demonstrations and try yourself", score: { practical: 5, visual: 3 } },
            { text: "Discuss and learn from others", score: { social: 5, communication: 3 } },
            { text: "Experiment and discover on your own", score: { creative: 5, innovation: 3 } }
        ]
    },
    {
        id: 4,
        text: "What motivates you the most?",
        options: [
            { text: "Solving complex problems", score: { logical: 5, technical: 3 } },
            { text: "Creating something new", score: { creative: 5, innovation: 3 } },
            { text: "Helping others", score: { social: 5, empathy: 3 } },
            { text: "Achieving measurable results", score: { structured: 5, practical: 3 } }
        ]
    },
    {
        id: 5,
        text: "How do you handle deadlines?",
        options: [
            { text: "Create detailed plans and follow strictly", score: { structured: 5, logical: 3 } },
            { text: "Adapt and adjust as needed", score: { flexible: 5, innovation: 3 } },
            { text: "Collaborate with team to ensure completion", score: { social: 5, leadership: 3 } },
            { text: "Focus intensely as the deadline approaches", score: { practical: 5, creative: 3 } }
        ]
    }
];

const careerPaths = {
    technical: {
        title: "Software Developer/Engineer",
        description: "Design and develop software solutions and applications.",
        skills: ["Programming", "Problem Solving", "Analytical Thinking"],
        industry: "Technology"
    },
    creative: {
        title: "UX/UI Designer",
        description: "Create user-friendly and visually appealing digital experiences.",
        skills: ["Design", "User Empathy", "Creative Problem Solving"],
        industry: "Design & Technology"
    },
    social: {
        title: "Project Manager",
        description: "Lead teams and coordinate projects to successful completion.",
        skills: ["Leadership", "Communication", "Organization"],
        industry: "Various Industries"
    },
    logical: {
        title: "Data Analyst",
        description: "Analyze data to provide valuable insights for decision making.",
        skills: ["Analytics", "Statistics", "Critical Thinking"],
        industry: "Business Intelligence"
    },
    practical: {
        title: "Systems Administrator",
        description: "Maintain and optimize computer systems and networks.",
        skills: ["Technical Support", "Problem Solving", "System Management"],
        industry: "IT Infrastructure"
    }
};