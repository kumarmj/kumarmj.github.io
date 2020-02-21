const work = [
    {
        title: "🎓 Cogoport Internship",
        link: "https://kumarmj.github.io/"
    },
    {
        title: "🎓 Winuall Internship",
        link: "https://kumarmj.github.io/"
    },
    {
        title: "🚀 Udemy Certificate",
        link: "https://kumarmj.github.io/"
    },
    {
        title: "🚀 LinkedIn Certificate",
        link: "https://kumarmj.github.io/"
    }
]

const wrkList = document.getElementById("work_list");
let workItems = [];
wrkList.innerHTML = work.map(({ title, link }) => `<a class='work_item' href=${link} target="_blank">${title}</div>`).join(' ');
