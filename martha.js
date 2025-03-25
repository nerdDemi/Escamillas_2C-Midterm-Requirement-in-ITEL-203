document.addEventListener("DOMContentLoaded", function() {
    const transitionElement = document.createElement('div');
    transitionElement.classList.add('page-transition');
    document.body.appendChild(transitionElement);

    
    setTimeout(() => {
        transitionElement.classList.remove('active');
    }, 300); 

  
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute("href").includes("#") || this.getAttribute("target") === "_blank") {
                return; 
            }
            e.preventDefault();
            let href = this.getAttribute("href");
            transitionElement.classList.add('active');

            setTimeout(() => {
                window.location.href = href;
            }, 500); 
        });
    });
});
