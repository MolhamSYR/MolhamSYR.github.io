const codeforces = 'https://codeforces.com/api/contest.list?gym=false';

var btn = document.getElementById("trigFetch");

var cfDiv = document.getElementById("codeforcesEv");

var cnt = 0;
var list = [];

var clicked = false;

btn.onclick = () => {

if(clicked) return;

clicked = true;

fetch(codeforces)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {

        var count = 0;
        var list = [];
        for(var contest of userData.result) {
            if(contest.phase != "BEFORE") continue;
            
            count++;
            var conDiv = document.createElement('div');
            conDiv.classList.add("cfContest");
            var txt = document.createElement('p');
            txt.textContent = contest.name;
            var time = document.createElement('p');
            var left = document.createElement('p');
            txt.classList.add("codeforcesContest");
            txt.style.color = "#3C0753";
            time.classList.add("codeforcesContest");
            time.style.color = "#0A1D56";
            left.classList.add("codeforcesContest");
            left.style.color = "#0A1D56";
            var dt = new Date(contest.startTimeSeconds * 1000);
            var now = new Date();
            var dateFormat = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Damascus",
                hour: "numeric",
                minute: "numeric",
                year: "numeric",
                month: "numeric",
                day: "numeric"
            });

            var lastdate = dateFormat.format(dt);
        

            var start = dt - now;

            var daydiff = Math.floor(start / (1000 * 60 * 60 * 24));   
           
            time.textContent = "" + lastdate;
            left.textContent =  daydiff + " days left  " ;
            conDiv.appendChild(txt);
            conDiv.appendChild(time);
            conDiv.appendChild(left);

           // cfDiv.appendChild(conDiv);
            list[cnt] = conDiv;
            cnt = cnt + 1;

        }

        list.reverse();

        for(var tmp of list) {
            cfDiv.appendChild(tmp);
        }
       
  })
  .catch(error => {
    console.error('Error:', error);
  });

};