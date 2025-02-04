export const questions = [
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
    },
    {
        id: 6,
        text: "When faced with a new technology or tool, you typically:",
        options: [
            { text: "Research its technical specifications thoroughly", score: { technical: 5, logical: 3 } },
            { text: "Explore its creative possibilities", score: { creative: 5, innovation: 3 } },
            { text: "Ask colleagues for their experiences with it", score: { social: 5, communication: 3 } },
            { text: "Start using it immediately to learn by doing", score: { practical: 5, technical: 2 } }
        ]
    },
    {
        id: 7,
        text: "In a group project, which role do you naturally take?",
        options: [
            { text: "The organizer who plans everything", score: { logical: 5, structured: 3 } },
            { text: "The innovator who generates ideas", score: { creative: 5, innovation: 3 } },
            { text: "The mediator who ensures everyone's heard", score: { social: 5, leadership: 3 } },
            { text: "The implementer who gets things done", score: { practical: 5, technical: 3 } }
        ]
    },
    {
        id: 8,
        text: "What aspect of a project interests you most?",
        options: [
            { text: "Analyzing data and metrics", score: { logical: 5, technical: 3 } },
            { text: "Design and user experience", score: { creative: 5, innovation: 3 } },
            { text: "Team coordination and communication", score: { social: 5, leadership: 3 } },
            { text: "Building and implementing solutions", score: { practical: 5, technical: 3 } }
        ]
    },
    {
        id: 9,
        text: "How do you prefer to communicate ideas?",
        options: [
            { text: "Through detailed written explanations", score: { logical: 5, structured: 3 } },
            { text: "Using visual aids and diagrams", score: { creative: 5, visual: 3 } },
            { text: "In face-to-face conversations", score: { social: 5, communication: 3 } },
            { text: "By demonstrating practically", score: { practical: 5, technical: 3 } }
        ]
    },
    {
        id: 10,
        text: "What type of problems do you enjoy solving?",
        options: [
            { text: "Complex mathematical or logical puzzles", score: { logical: 5, technical: 3 } },
            { text: "Design and aesthetic challenges", score: { creative: 5, innovation: 3 } },
            { text: "People and relationship issues", score: { social: 5, empathy: 3 } },
            { text: "Hands-on technical issues", score: { practical: 5, technical: 3 } }
        ]
    },
    {
        id: 11,
        text: "How do you prefer to organize your work?",
        options: [
            { text: "Using systematic methods and tools", score: { logical: 5, structured: 3 } },
            { text: "With flexibility for creative flow", score: { creative: 5, flexible: 3 } },
            { text: "Through collaborative planning", score: { social: 5, leadership: 3 } },
            { text: "Based on practical priorities", score: { practical: 5, structured: 3 } }
        ]
    },
    {
        id: 12,
        text: "What kind of impact do you want to make?",
        options: [
            { text: "Advancing technology and innovation", score: { technical: 5, logical: 3 } },
            { text: "Inspiring others through creativity", score: { creative: 5, innovation: 3 } },
            { text: "Helping people and communities", score: { social: 5, empathy: 3 } },
            { text: "Building practical solutions", score: { practical: 5, technical: 3 } }
        ]
    }
];

export const careerPaths = {
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