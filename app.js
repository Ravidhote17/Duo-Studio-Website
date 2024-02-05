function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})

var video = document.querySelector(".main video")
video.addEventListener("mouseenter", function(){
    crsr.innerHTML = "Sound on"
    crsr.style.textAlign = "center"
    crsr.style.color = "black"
    crsr.style.width = "6vw"
    crsr.style.height = "3vh"
    crsr.style.borderRadius = "25px"
    // crsr.style.transition = "0.2s"
})
video.addEventListener("mouseleave", function(){
    crsr.style.height = "2vh"
    crsr.style.width = "1vw"
    crsr.innerHTML = ""

})
 
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start: "top 25%",
        end: "top 0%",
        scrub:3,
    }
})

tl.to(".page1 h1",{
    x: -80,
},"anim")

tl.to(".page1 h2",{
    x:70
},"anim")

tl.to(".page1, video",{
    width:"90%",
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start: "top -80%",
        end: "top -100%",
        scrub:3,
    }
})


// tl2.to(".page1",{
//     backgroundColor:"#fff"
// },"anim")

tl2.to(".page2",{
    backgroundColor:"#fff"
},"anim")

tl2.to(".main",{
    backgroundColor: "white",
},"anim")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start: "top -280%",
        end: "top -300%",
        scrub:3,
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "300px"
        crsr.style.height = "250px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "2vh"
        crsr.style.height = "1vw"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll(".nav h4")
var purple = document.querySelector(".purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})