const currentPage=document.getElementById(`current_page`);const allLinks=document.querySelectorAll(`.main_navigation`);const popupHome=document.getElementById(`popup_home`)
const popupRules=document.getElementById(`popup_rules`)
const popupWiki=document.getElementById(`popup_wiki`)
const popupOnline=document.getElementById(`popup_online`)
const Home=document.getElementById(`home_icon`)
const Rules=document.getElementById(`rules_icon`)
const Wiki=document.getElementById(`wiki_icon`)
const Online=document.getElementById(`online_icon`)
for(let i of allLinks){for(let j of i.children){switch(Number(currentPage.innerText)){case 1:Home.style.backgroundColor=`#FFA600`;popupHome.classList.add(`orange_text`);j.children[0].children[0].children[0].classList.remove('now_hidden')
break;case 2:Rules.style.backgroundColor=`#FFA600`;popupRules.classList.add(`orange_text`);j.children[1].children[0].children[0].classList.remove('now_hidden')
break;case 3:Wiki.style.backgroundColor=`#FFA600`;popupWiki.classList.add(`orange_text`);j.children[2].children[0].children[0].classList.remove('now_hidden')
break;case 4:Online.style.backgroundColor=`#FFA600`;popupOnline.classList.add(`orange_text`);j.children[3].children[0].children[0].classList.remove('now_hidden')
break;default:break;}}}