let dailybtn = document.getElementById("daily")
let weeklybtn = document.getElementById("weekly")
let monthlybtn = document.getElementById("monthly")

let workhour = document.getElementById("workhour")
let prework = document.getElementById("preworkhour")

let playhour = document.getElementById("playhour")
let preplay = document.getElementById("preplayhour")

let studyhour = document.getElementById("studyhour")
let prestudy = document.getElementById("prestudyhour")

let exercisehour = document.getElementById("exercisehour")
let preexercise = document.getElementById("preexercisehour")

let socialhour = document.getElementById("socialhour")
let presocial = document.getElementById("presocialhour")

let selfcarehour = document.getElementById("selfcarehour")
let preselfcare = document.getElementById("preselfcarehour")



const address = fetch("data.json")
  .then((response) => response.json())
  .then((user) => {
    return user;
  });


dailybtn.addEventListener("click", ()=>{
    dailybtn.classList.add("choose")
    weeklybtn.classList.remove("choose")
    monthlybtn.classList.remove("choose")
    var data = ()=>{
        address.then((a)=>{
            workhour.innerHTML=a[0].timeframes.daily.current +"hrs"
            prework.innerHTML=a[0].timeframes.daily.previous +"hrs"

            playhour.innerHTML=a[1].timeframes.daily.current +"hrs"
            preplay.innerHTML=a[1].timeframes.daily.previous +"hrs"

            studyhour.innerHTML=a[2].timeframes.daily.current +"hrs"
            prestudy.innerHTML=a[2].timeframes.daily.previous +"hrs"

            exercisehour.innerHTML=a[3].timeframes.daily.current +"hrs"
            preexercise.innerHTML=a[3].timeframes.daily.previous +"hrs"

            socialhour.innerHTML=a[4].timeframes.daily.current +"hrs"
            presocial.innerHTML=a[4].timeframes.daily.previous +"hrs"

            selfcarehour.innerHTML=a[5].timeframes.daily.current +"hrs"
            preselfcare.innerHTML=a[5].timeframes.daily.previous +"hrs"

        })
    }
    data()
})

weeklybtn.addEventListener("click",()=>{
    dailybtn.classList.remove("choose")
    weeklybtn.classList.add("choose")
    monthlybtn.classList.remove("choose")

    var data = ()=>{
        address.then((a)=>{
            workhour.innerHTML=a[0].timeframes.weekly.current +"hrs"
            prework.innerHTML=a[0].timeframes.weekly.previous +"hrs"

            playhour.innerHTML=a[1].timeframes.weekly.current +"hrs"
            preplay.innerHTML=a[1].timeframes.weekly.previous +"hrs"

            studyhour.innerHTML=a[2].timeframes.weekly.current +"hrs"
            prestudy.innerHTML=a[2].timeframes.weekly.previous +"hrs"

            exercisehour.innerHTML=a[3].timeframes.weekly.current +"hrs"
            preexercise.innerHTML=a[3].timeframes.weekly.previous +"hrs"

            socialhour.innerHTML=a[4].timeframes.weekly.current +"hrs"
            presocial.innerHTML=a[4].timeframes.weekly.previous +"hrs"

            selfcarehour.innerHTML=a[5].timeframes.weekly.current +"hrs"
            preselfcare.innerHTML=a[5].timeframes.weekly.previous +"hrs"

        })
    }
    data()
})

monthlybtn.addEventListener("click", ()=>{
    dailybtn.classList.remove("choose")
    weeklybtn.classList.remove("choose")
    monthlybtn.classList.add("choose")

    var data = ()=>{
        address.then((a)=>{
            workhour.innerHTML=a[0].timeframes.monthly.current +"hrs"
            prework.innerHTML=a[0].timeframes.monthly.previous +"hrs"

            playhour.innerHTML=a[1].timeframes.monthly.current +"hrs"
            preplay.innerHTML=a[1].timeframes.monthly.previous +"hrs"

            studyhour.innerHTML=a[2].timeframes.monthly.current +"hrs"
            prestudy.innerHTML=a[2].timeframes.monthly.previous +"hrs"

            exercisehour.innerHTML=a[3].timeframes.monthly.current +"hrs"
            preexercise.innerHTML=a[3].timeframes.monthly.previous +"hrs"

            socialhour.innerHTML=a[4].timeframes.monthly.current +"hrs"
            presocial.innerHTML=a[4].timeframes.monthly.previous +"hrs"

            selfcarehour.innerHTML=a[5].timeframes.monthly.current +"hrs"
            preselfcare.innerHTML=a[5].timeframes.monthly.previous +"hrs"

        })
    }
    data()
})

// async function getapi(){
//     const response = await fetch("data.json")

//     var data = await response.json();
   
//     return data;

// }

// getapi("data.json")