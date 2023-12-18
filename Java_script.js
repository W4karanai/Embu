document.addEventListener('DOMContentLoaded', () => {
    const MenuButton = document.getElementById('Menu_Button');
    const CloseButton = document.getElementById('Close_Button');
    const NavMenu = document.getElementById('Nav_Menu');
    const NavLinks = document.querySelectorAll('#Nav_Menu ul li a');

    const Close_Nav_Menu = () => {
        NavMenu.classList.remove('open');
        [MenuButton.style.display, CloseButton.style.display, NavMenu.style.width] = ['block', 'none', ''];
    };

    MenuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        NavMenu.style.width = (window.innerWidth < window.screen.width / 2) ? '100vw' : '';
        NavMenu.classList.toggle('open');
        [MenuButton.style.display, CloseButton.style.display] = ['none', 'block'];
    });

    CloseButton.addEventListener('click', Close_Nav_Menu);

    document.addEventListener('click', (event) => {
        const isClickInsideNav = NavMenu.contains(event.target);
        const isClickMenuButton = MenuButton.contains(event.target);
        if (!isClickInsideNav && !isClickMenuButton) Close_Nav_Menu();
    });

    NavLinks.forEach(link => {
        link.addEventListener('click', Close_Nav_Menu);
    });
    /////////////////////////////////////////////////////////////////////////////////////////
    const Sections_Animation = document.querySelectorAll('.Animate-once');

    function Check_Animation() {
        Sections_Animation.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add('Animated');
            }
        });
    }

    window.addEventListener('scroll', Check_Animation);
    ///////////////////////////////////////////////////////////////////////////////////////////
    function Text_Visibility() {
        const Sections_Header = document.querySelectorAll('.Whole_Section');

        Sections_Header.forEach(section => {
            const text = section.querySelector('h1');
            const rect = section.getBoundingClientRect();

            if (rect.top <= 50 && rect.bottom >= 50) {
                text.style.display = 'block';
            } else {
                text.style.display = 'none';
            }
        });
    }
    Text_Visibility();

    window.addEventListener('scroll', Text_Visibility);
    //////////////////////////////////////////////////////////////////////////////////////////////
});