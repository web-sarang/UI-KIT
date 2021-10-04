//Tabs

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }

};


tab();



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


// Loading 

const progress = document.querySelector('.progress');
const percent = document.querySelector('.percent');


let progressLinear = function () {
progress.style.width = percent.textContent +"%";
}
progressLinear();
