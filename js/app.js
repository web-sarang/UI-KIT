//Tabs

// let tab = function () {
//     let tabNav = document.querySelectorAll('.tabs-nav__item, tab-icon, tab-btn'),
//         tabContent = document.querySelectorAll('.tab'),
//         tabName;

//     tabNav.forEach(item => {
//         item.addEventListener('click', selectTabNav)
//     });

//     function selectTabNav() {
//         tabNav.forEach(item => {
//             item.classList.remove('active');
//         });
//         this.classList.add('active');
//         tabName = this.getAttribute('data-tab-name');
//         selectTabContent(tabName);
//     }

//     function selectTabContent(tabName) {
//         tabContent.forEach(item => {
//             item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
//         })
//     }

// };


// tab();



// Wizzard Nav
const allItems = document.querySelectorAll(".bullet");

allItems.forEach(item => {
    item.addEventListener("click", function(e) {
        for (let i=0; i < allItems.length; i++) {
            // allItems[i].classList.remove("completed");    
        }
        this.classList.add("completed");
    });
});

// Alert and modal close

const closeBtns = document.querySelectorAll('.close__btn, .modal');

closeBtns.forEach(item => {
    item.addEventListener("click", function(e) {
        for (let i=0; i < closeBtns.length; i++) {
            this.parentNode.classList.add("closed");
        }

    })


});




// Buttons 

const tabIcons = document.querySelectorAll('.tab-icon, .tab-btn');

tabIcons.forEach(item => {
    item.addEventListener("click", function(e) {
        for (let i=0; i < tabIcons.length; i++) {
           
        }
         this.classList.toggle("active");
    });
    
});



//Tab 

const tabNav1 = document.querySelectorAll('.tabs1');
const tabNav2 = document.querySelectorAll('.tabs2');
const tabNav3 = document.querySelectorAll('.tabs3');
const tabNavIcon1 = document.querySelectorAll('.tabs-icon1');
const tabNavIcon2 = document.querySelectorAll('.tabs-icon2');
const tabNavIcon3 = document.querySelectorAll('.tabs-icon3');

let tab1 = function () {
    tabNav1.forEach(item => {
               item.addEventListener('click', selectTabNav)
            });
function selectTabNav() {
             tabNav1.forEach(item => {
                 item.classList.remove('active');
             });

             this.classList.add('active');
             
        }}
tab1();

let tab2 = function () {
    tabNav2.forEach(item => {
               item.addEventListener('click', selectTabNav)
            });
function selectTabNav() {
             tabNav2.forEach(item => {
                 item.classList.remove('active');
             });

             this.classList.add('active');
             
        }}
tab2();

let tab3 = function () {
    tabNav3.forEach(item => {
               item.addEventListener('click', selectTabNav)
            });
function selectTabNav() {
             tabNav3.forEach(item => {
                 item.classList.remove('active');
             });

             this.classList.add('active');
             
        }}
tab3();


let tabIcon1 = function () {
    tabNavIcon1.forEach(item => {
               item.addEventListener('click', selectTabNav)
            });
function selectTabNav() {
             tabNavIcon1.forEach(item => {
                 item.classList.remove('active');
             });

             this.classList.add('active');
             
        }}
tabIcon1();

let tabIcon2 = function () {
    tabNavIcon2.forEach(item => {
               item.addEventListener('click', selectTabNav)
            });
function selectTabNav() {
            tabNavIcon2.forEach(item => {
                item.classList.remove('active');
            });

            this.classList.add('active');
            
        }}
tabIcon2();

let tabIcon3 = function () {
    tabNavIcon3.forEach(item => {
               item.addEventListener('click', selectTabNav)
            });
function selectTabNav() {
            tabNavIcon3.forEach(item => {
                item.classList.remove('active');
            });

            this.classList.add('active');
        }}
tabIcon3();


// Loading 

const progress = document.querySelector('.progress');
const percent = document.querySelector('.percent');


let progressLinear = function () {
progress.style.width = percent.textContent +"%";
}
progressLinear();



function progressView(){
    let circlebarBox = document.querySelectorAll('.circle-bar.progress');
    let indicator = document.querySelector('.indicator');

    circlebarBox.forEach((box) => {
        box.dataset.percent = indicator.textContent;
        console.log(box.dataset.percent);
        let deg = (360 * box.dataset.percent / 100) + 180;
        
        
        if(box.dataset.percent >= 50){
            
            box.classList.add('over_50');
        }else{
            box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
    });
}
progressView();

//Calendar
const my_calendar = new TavoCalendar('#my-calendar', {
    multi_select: true,
    future_select: true,
    past_select: false,
    frozen: false,
    selected: true,
    range_select: true, 
    highlight_sunday: false,

})

my_calendar();