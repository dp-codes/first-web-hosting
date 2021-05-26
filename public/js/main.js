const smtbtn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const locate=document.getElementById("locate");
const temper=document.getElementById("temper");
const tempstat=document.getElementById("temp-status");
const tday=document.getElementById("today_day");
const ttime=document.getElementById("today_time");
const datahide=document.querySelector(".middle-layer");


const func1=async(event)=>{
     event.preventDefault();
    let cname=cityname.value;
    if(cname===""){
        locate.innerText="Please enter the name of  the City";
        datahide.classList.add("data_hide");
    }
    else{
        try {
            let url=`https://api.openweathermap.org/data/2.5/find?q=${cname}&units=metric&appid=13ca4d63f152b5a02317bb23d8fbaf01`;
            const response=await fetch(url);
            const data=await response.json();
            const arrdata=[data];

            locate.innerText=`${arrdata[0].list[0].name}, ${arrdata[0].list[0].sys.country}`;
            temper.innerText=arrdata[0].list[0].main.temp;

            let cond=arrdata[0].list[0].weather[0].main;
 
                if(cond=="Clouds")tempstat.innerHTML=`<i class="fas fa-cloud" style="color:blue;"></i>`;
                else if(cond=="Rain")tempstat.innerHTML=`<i class="fas fa-cloud-rain" style="color:white;"></i>`;
                else if(cond=="Clear")tempstat.innerHTML=`<i class="fas fa-sun" style="color:yellow;"></i>`;
                else if(cond=="Mist")tempstat.innerHTML=`<i class="fas fa-cloud" style="color:white;"></i>`;
                else tempstat.innerHTML=`<i class="fas fa-sun" style="color:yellow;"></i>`;

            datahide.classList.remove("data_hide");
        } catch (error) {
            locate.innerText="Please Enter a Valid City";
            datahide.classList.add("data_hide");
        }
    }
};
smtbtn.addEventListener("click",func1);

const display=()=>{
    day=["SUN","MON","TUE","WED","THRUS","FRI","SAT"];
    month=["JAN","FEB","MAR","APRIL","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"];
    let tm=new Date();
    dy=tm.getDay(),mnt=tm.getMonth(),hr=tm.getHours(),min=tm.getMinutes(),date=tm.getDate();
    wdate=`${day[dy]} | ${month[mnt]} ${date}`;
    what="AM";
    if(hr>=12)hr=hr-12,what="PM";
    time=`${hr}:${min} ${what}`;

    tday.innerText=wdate;
    ttime.innerText=time;
}
display();