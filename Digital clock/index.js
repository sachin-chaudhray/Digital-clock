const getTime = () => {
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    return `${h} : ${m} : ${s}`;
};

 setInterval(( )=> {
   //console.log(getTime());
  let clickOb = document.querySelector(".click");
  clickOb.innerHTML = getTime();
 },1000)