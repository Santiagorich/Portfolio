const projdivl = document.getElementById('projectsl');
const projdivr = document.getElementById('projectsr');
const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
        };
    });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 };

const startAnimationl = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide-in-from-left", entry.isIntersecting);
        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
        };
    });
};

const observerl = new IntersectionObserver(startAnimationl);


const projects = [{
        id: 1,
        year: 2011,
        title: "Application for maintenance and optimization for Linux. (PyQt)(Python) ",
        desc: `This was the first app I created when I was in highschool, this is how all started, I didn't know anything about programming but I learnt the basics in a week I had off and fell in love with programming right away, haven't stopped since then `,
    },
    {
        id: 2,
        year: 2017,
        title: "Application for a personal server that automatically collects data from a page, filtering and uploading it to an external server and a mobile application that makes use of it. (Java) ",
        desc: `This app was meant to tell everyone in my institute when our teachers wouldn't come to class, needless to say, it was a great sucess, I also made a basic phone app with android studio where you could see the data that I was pulling in my server (my pc at the time) //Because of my lack of knowledge I couldn't really think of a way to transfer data to the app so what I did was rather rudimentary, it involved automatic uploads to dropbox, you can see where I'm going. `,
    },
    {
        id: 3,
        year: 2018,
        title: "Enterprise Database for VRP. (SQL) ",
        desc: `SQL Database for a logistics company.`,
    },
    {
        id: 4,
        year: 2020,
        title: "ITS final project, Agenda for fictitious real estate. (Role: Programmer) ",
        desc: `We needed to make a desktop app that let us buy house and schedule appointments to see them, I love how it turned out and so did my group, I got designated as the programmer of my group right away as they knew I had an affinity for it, this was mostly because when anyone in the class had a problem I was there to help as I already knew how to do most of the stuff (The teacher didn't care that much about the class to say the least) `,
    },
    {
        id: 5,
        year: 2021,
        title: "Application for deliveries created with Appsheet, Optimization of routes and schedule estimates with Google Maps API and JavaScript, Order calendar, Price calculation, Direct contact via Whatsapp API ",
        desc: `A huge app I made for a entrepreneurship I was running with my girlfriend, an amalgamation of huge GS formulas and a bunch of JS for api consumption and complex calculations the frontend was managed by AppSheet (chose this way as I wanted to try it out and I needed it quickly) for phone and desktop, huge success for what we wanted it, we were miles ahead of the competition in our market mostly thanks to the functionalities there, from letting know the client when the delivery was near, OCR for quick catalogs, route optimization with time calculations, it had a little bit of everything I came up with when we were doing that. `,
    },
    {
        id: 6,
        year: 2021,
        title: "ZKPQ-50 Personality Test, Backend: Flask | Front end: HTML, CSS, JS, PYTHON ",
        desc: `This was a poorly made single page project I made to solve some tedious work psychologists needed to do more easily and in a friendly way, didn't care enough to use a framework or anything as I made it firstly as a python script that I then converted to JS and added some bootstrap to make it look decent on the front end `,
    },
    {
        id: 7,
        year: 2021,
        title: "Extension to search for low-priced food on PedidosYa (Food Delivery Website) ",
        desc: `This is the first project I made for this goal, it came to mind just because I didn't want to look for the dish I wanted opening each of the restaurants in the list (this isn't a feature in PedidosYa), this was purely made with JS as an chrome extension/tampermonkey script but with the success it had in my social networks I decided to make a phone app. `,
    },
    {
        id: 8,
        year: 2021,
        title: "Mobile application to search for restaurants and specific food based on location (Flutter) ",
        desc: `As people liked the idea of having the extension for PedidosYa I wanted to make it more handy than just a script so I made a phone app for this sole purpose, decided to make it with flutter as I wanted to learn it instead of using android studio and java, I struggled the most with CORS and some limitations of the way I picked to do it but I managed to solve them creating a simple to use app that shows nearby restaurants with their food and prices in any LATAM country where PedidosYa is being used (Haven't tested them all) `,
    },
    {
        id: 9,
        year: 2021,
        title: "WhatsApp bot to play wordle synchronized with the original page (Serverless) Node.JS ",
        desc: `A simple bot that lets you play wordle using whatsapp, mostly DOM parsing and sessions, the challenge I faced was actually keeping it as a serverless function because the game is rendered dynamically, found a library for "lamba puppeteer" and a workaround with the way the game was saved, it's working and it's fun to play with friends `,
    },
    {
        id: 10,
        year: 2021,
        title: "Text to Speech in real time (Serverless function + GitHub to host static page) ",
        desc: `Some of the first projects I made for testing GitHub Pages, simple text to speech that gets the sounds from an external api I found through a function I hosted on Vercel, it was originally meant for someone that needed it for communicating so I also made it for phone. `,
    },
    {
        id: 11,
        year: 2021,
        title: "IBM Course Full Stack Projects (Django,React,Bootstrap,Docker,Kubernetes,Python,HTML,CSS,JS...) ",
        desc: `Throughout the course I took in coursera I made multiple projects using IBM Cloud to host them, movie reviewing apps, AI Sentiment for text interpretation, car rental page, etc, they are in my GitHub (Links might be down as I'm not paying for the hosting in IBM Cloud Anymore) `,
    },
    {
        id: 12,
        year: 2022,
        title: "‘Universal’ scraper to extract data from virtually any online catalog with option to search for items in nearby stores using Google Places API + Python (BS4 and Scrapy) + JavaScript ",
        desc: `This is actually the first version of what I would later call "tekky" which is like a refined universal scraper for most stores online, I'm still on it, the point is to cover as many stores as I can, currently doing it in next.js with even more functionalities and some extra data I will use throughout some other apps I'm making. `,
    },
    {
        id: 13,
        year: 2022,
        title: "New portal for IBM client ",
        desc: `For a new portal our client wants being the only one with react knowledge in my team I'm making both the pages and part of the design with the UI/UX team, for the moment we are short staffed but the plan is that I take over the front end part of the project as I have shown the most proficiency when it comes to front end in general, for now we need to make the components from 0 as this is the first portal they make with React.`,
    },
];



for (let project of projects) {
    let pdiv = document.createElement("div");
    pdiv.classList.add("blackcard2");
    pdiv.classList.add("col");
    let prow = document.createElement("div");
    prow.classList.add("d-flex");
    (project.id % 2 == 0) ? prow.classList.add("flex-row-reverse"): prow.classList.add("flex-row");
    prow.innerHTML = `<div class="pryear mx-4"><span>${project.year}<span></div><div class="prtitle py-4"><span>${project.title}</span></div></div>`
    let ddiv = document.createElement("div");
    ddiv.innerHTML = `<div class="py-4 prdesc">${project.desc}</div>`
    pdiv.appendChild(prow);
    pdiv.appendChild(ddiv);
    (project.id % 2 == 0) ? observerl.observe(pdiv, options): observer.observe(pdiv, options);
    (project.id % 2 == 0) ? projdivr.appendChild(pdiv): projdivl.appendChild(pdiv);

}