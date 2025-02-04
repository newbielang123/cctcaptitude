(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) l(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const g of s.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && l(g)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function l(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = r(i);
        fetch(i.href, s)
    }
})();
const a = [{
        id: 1,
        text: "How do you prefer to solve problems?",
        options: [{
            text: "Using logic and systematic analysis",
            score: {
                logical: 5,
                technical: 3
            }
        }, {
            text: "Through creative and innovative solutions",
            score: {
                creative: 5,
                innovation: 3
            }
        }, {
            text: "By discussing with others and gathering opinions",
            score: {
                social: 5,
                leadership: 3
            }
        }, {
            text: "Using hands-on experimentation",
            score: {
                practical: 5,
                technical: 3
            }
        }]
    }, {
        id: 2,
        text: "What type of work environment do you prefer?",
        options: [{
            text: "Quiet and structured office setting",
            score: {
                structured: 5,
                indoor: 3
            }
        }, {
            text: "Dynamic and flexible workspace",
            score: {
                flexible: 5,
                creative: 3
            }
        }, {
            text: "Outdoors and varying locations",
            score: {
                outdoor: 5,
                practical: 3
            }
        }, {
            text: "Collaborative team environment",
            score: {
                social: 5,
                leadership: 3
            }
        }]
    }, {
        id: 3,
        text: "When learning something new, you prefer to:",
        options: [{
            text: "Read detailed documentation and analyze",
            score: {
                logical: 5,
                technical: 3
            }
        }, {
            text: "Watch demonstrations and try yourself",
            score: {
                practical: 5,
                visual: 3
            }
        }, {
            text: "Discuss and learn from others",
            score: {
                social: 5,
                communication: 3
            }
        }, {
            text: "Experiment and discover on your own",
            score: {
                creative: 5,
                innovation: 3
            }
        }]
    }, {
        id: 4,
        text: "What motivates you the most?",
        options: [{
            text: "Solving complex problems",
            score: {
                logical: 5,
                technical: 3
            }
        }, {
            text: "Creating something new",
            score: {
                creative: 5,
                innovation: 3
            }
        }, {
            text: "Helping others",
            score: {
                social: 5,
                empathy: 3
            }
        }, {
            text: "Achieving measurable results",
            score: {
                structured: 5,
                practical: 3
            }
        }]
    }, {
        id: 5,
        text: "How do you handle deadlines?",
        options: [{
            text: "Create detailed plans and follow strictly",
            score: {
                structured: 5,
                logical: 3
            }
        }, {
            text: "Adapt and adjust as needed",
            score: {
                flexible: 5,
                innovation: 3
            }
        }, {
            text: "Collaborate with team to ensure completion",
            score: {
                social: 5,
                leadership: 3
            }
        }, {
            text: "Focus intensely as the deadline approaches",
            score: {
                practical: 5,
                creative: 3
            }
        }]
    }, {
        id: 6,
        text: "When faced with a new technology or tool, you typically:",
        options: [{
            text: "Research its technical specifications thoroughly",
            score: {
                technical: 5,
                logical: 3
            }
        }, {
            text: "Explore its creative possibilities",
            score: {
                creative: 5,
                innovation: 3
            }
        }, {
            text: "Ask colleagues for their experiences with it",
            score: {
                social: 5,
                communication: 3
            }
        }, {
            text: "Start using it immediately to learn by doing",
            score: {
                practical: 5,
                technical: 2
            }
        }]
    }, {
        id: 7,
        text: "In a group project, which role do you naturally take?",
        options: [{
            text: "The organizer who plans everything",
            score: {
                logical: 5,
                structured: 3
            }
        }, {
            text: "The innovator who generates ideas",
            score: {
                creative: 5,
                innovation: 3
            }
        }, {
            text: "The mediator who ensures everyone's heard",
            score: {
                social: 5,
                leadership: 3
            }
        }, {
            text: "The implementer who gets things done",
            score: {
                practical: 5,
                technical: 3
            }
        }]
    }, {
        id: 8,
        text: "What aspect of a project interests you most?",
        options: [{
            text: "Analyzing data and metrics",
            score: {
                logical: 5,
                technical: 3
            }
        }, {
            text: "Design and user experience",
            score: {
                creative: 5,
                innovation: 3
            }
        }, {
            text: "Team coordination and communication",
            score: {
                social: 5,
                leadership: 3
            }
        }, {
            text: "Building and implementing solutions",
            score: {
                practical: 5,
                technical: 3
            }
        }]
    }, {
        id: 9,
        text: "How do you prefer to communicate ideas?",
        options: [{
            text: "Through detailed written explanations",
            score: {
                logical: 5,
                structured: 3
            }
        }, {
            text: "Using visual aids and diagrams",
            score: {
                creative: 5,
                visual: 3
            }
        }, {
            text: "In face-to-face conversations",
            score: {
                social: 5,
                communication: 3
            }
        }, {
            text: "By demonstrating practically",
            score: {
                practical: 5,
                technical: 3
            }
        }]
    }, {
        id: 10,
        text: "What type of problems do you enjoy solving?",
        options: [{
            text: "Complex mathematical or logical puzzles",
            score: {
                logical: 5,
                technical: 3
            }
        }, {
            text: "Design and aesthetic challenges",
            score: {
                creative: 5,
                innovation: 3
            }
        }, {
            text: "People and relationship issues",
            score: {
                social: 5,
                empathy: 3
            }
        }, {
            text: "Hands-on technical issues",
            score: {
                practical: 5,
                technical: 3
            }
        }]
    }, {
        id: 11,
        text: "How do you prefer to organize your work?",
        options: [{
            text: "Using systematic methods and tools",
            score: {
                logical: 5,
                structured: 3
            }
        }, {
            text: "With flexibility for creative flow",
            score: {
                creative: 5,
                flexible: 3
            }
        }, {
            text: "Through collaborative planning",
            score: {
                social: 5,
                leadership: 3
            }
        }, {
            text: "Based on practical priorities",
            score: {
                practical: 5,
                structured: 3
            }
        }]
    }, {
        id: 12,
        text: "What kind of impact do you want to make?",
        options: [{
            text: "Advancing technology and innovation",
            score: {
                technical: 5,
                logical: 3
            }
        }, {
            text: "Inspiring others through creativity",
            score: {
                creative: 5,
                innovation: 3
            }
        }, {
            text: "Helping people and communities",
            score: {
                social: 5,
                empathy: 3
            }
        }, {
            text: "Building practical solutions",
            score: {
                practical: 5,
                technical: 3
            }
        }]
    }],
    w = {
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
    },
    v = document.getElementById("themeToggle");
    const links = document.querySelectorAll("li a");
    const logo = document.querySelector(".logo");
    const header =  document.querySelector("header");
let p = !1;
v.addEventListener("click", () => {
    p = !p, document.body.setAttribute("data-theme", p ? "dark" : "light"), v.textContent = p ? "☀️" : "🌙";
    links.forEach((link) =>{
        console.log(link);
       logo.style.color = "black";
        
    })
});

let o = 0,
    c = [],
    h = null,
    d = 0;
const m = {
        landing: document.getElementById("landing"),
        test: document.getElementById("test"),
        results: document.getElementById("results")
    },
    n = {
        startButton: document.getElementById("startTest"),
        prevButton: document.getElementById("prevButton"),
        nextButton: document.getElementById("nextButton"),
        questionContainer: document.getElementById("questionContainer"),
        progress: document.getElementById("progress"),
        timer: document.getElementById("timer"),
        resultContainer: document.getElementById("resultContainer"),
        saveResults: document.getElementById("saveResults"),
        printResults: document.getElementById("printResults"),
        retakeTest: document.getElementById("retakeTest")
    };

function y(t) {
    Object.keys(m).forEach(e => {
        m[e].classList.toggle("active", e === t), m[e].classList.toggle("hidden", e !== t)
    })
}

function b() {
    const t = (o + 1) / a.length * 100;
    n.progress.style.width = `${t}%`
}

function x() {
    d++;
    const t = Math.floor(d / 60),
        e = d % 60;
    n.timer.textContent = `Time: ${t.toString().padStart(2, "0")}:${e.toString().padStart(2, "0")}`
}

function u() {
    const t = a[o];
    n.questionContainer.innerHTML = `
        <div class="question">
            <h2>Question ${t.id} of ${a.length}</h2>
            <p>${t.text}</p>
            <div class="options">
                ${t.options.map((e, r) => `
                    <div class="option ${c[o] === r ? "selected" : ""}" 
                         data-index="${r}">
                        ${e.text}
                    </div>
                `).join("")}
            </div>
        </div>
    `, document.querySelectorAll(".option").forEach((e, r) => {
        e.addEventListener("click", () => E(r))
    }), b(), n.prevButton.style.display = o === 0 ? "none" : "block", n.nextButton.textContent = o === a.length - 1 ? "Submit" : "Next"
}

function E(t) {
    c[o] = t, u()
}

function f() {
    const t = {
        technical: 0,
        creative: 0,
        social: 0,
        logical: 0,
        practical: 0
    };
    return c.forEach((e, r) => {
        const l = a[r].options[e].score;
        Object.keys(l).forEach(i => {
            t.hasOwnProperty(i) && (t[i] += l[i])
        })
    }), Object.entries(t).sort(([, e], [, r]) => r - e).slice(0, 3).map(([e]) => w[e])
}

function B(t) {
    n.resultContainer.innerHTML = t.map(e => `
        <div class="result-card">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
            <p><strong>Key Skills:</strong> ${e.skills.join(", ")}</p>
            <p><strong>Industry:</strong> ${e.industry}</p>
        </div>
    `).join("")
}
n.startButton.addEventListener("click", () => {
    y("test"), u(), h = setInterval(x, 1e3)
});
n.prevButton.addEventListener("click", () => {
    o > 0 && (o--, u())
});
n.nextButton.addEventListener("click", () => {
    if (o < a.length - 1) c[o] !== void 0 ? (o++, u()) : alert("Please select an answer before proceeding.");
    else if (c[o] !== void 0) {
        clearInterval(h);
        const t = f();
        B(t), y("results")
    } else alert("Please select an answer before submitting.")
});
n.saveResults.addEventListener("click", () => {
    const t = f(),
        e = JSON.parse(localStorage.getItem("aptitudeResults") || "[]");
    e.push({
        date: new Date().toISOString(),
        timeSpent: d,
        results: t
    }), localStorage.setItem("aptitudeResults", JSON.stringify(e)), alert("Results saved successfully!")
});
n.printResults.addEventListener("click", () => {
    window.print()
});
n.retakeTest.addEventListener("click", () => {
    o = 0, c = [], d = 0, y("test"), u(), h = setInterval(x, 1e3)
});