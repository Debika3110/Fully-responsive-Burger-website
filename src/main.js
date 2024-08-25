const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcone = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden');
    })
);

closeIcone.addEventListener("click", () => {
    navMenu.classList.add('hidden');
});

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden');
});

/*----------------------------tabs---------------------------*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.item__wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        tab.classList.add('active');
        const tabval = tab.getAttribute('data-tabs');
        
        console.log('Tab clicked:', tabval);

        // Hide all items initially
        all.forEach(item => {
            item.style.display = 'none';
        });

        if (tabval === 'food') {
            console.log('Showing food items');
            foods.forEach(item => {
                console.log(item); // Log each item to ensure correct selection
                item.style.display = 'block';
            });
        } else if (tabval === 'snack') {
            console.log('Showing snack items');
            snacks.forEach(item => {
                item.style.display = 'block';
            });
        } else if (tabval === 'beverage') {
            console.log('Showing beverage items');
            beverages.forEach(item => {
                item.style.display = 'block';
            });
        } else {
            console.log('Showing all items');
            all.forEach(item => {
                item.style.display = 'block';
            });
        }
    });
});



