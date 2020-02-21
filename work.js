const work = [
    {
        title: "🎓 Winuall Internship",
        link: "https://kumarmj.github.io/winuall.pdf"
    },
    {
        title: "⚽ My work in jQuery Foundation",
        link: "https://github.com/qunitjs/qunit/issues/914"
    },
    {
        title: "🎓 Cogoport Internship",
        link: "https://kumarmj.github.io/cogoport.pdf"
    },
    {
        title: "🐱 Work with github",
        link: "https://github.com/github/licensed/pull/60"
    }
]

const wrkList = document.getElementById("work_list");
let workItems = [];
wrkList.innerHTML = work.map(({ title, link }) => `<a class='work_item' href=${link} target="_blank">${title}</div>`).join(' ');
