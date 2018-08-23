const el = document.querySelector('.typewriter');
        const actualString =
            '<p><strong>Hi</strong> I\'m <span class="underline">Matthew Dykeman</span></p>';
        const highlightColor = 'rgba(113, 170, 226, 0.76)';
        const noHighlight = 'none;'

        let stringBuilder = '';
        let stringIdx = 0;

        function addToString() {
            setTimeout(() => {
                if (stringBuilder.length < actualString.length) {
                    stringBuilder += actualString[stringIdx++];
                    el.textContent = stringBuilder;
                    // stringBuilder -> string being concatenated
                    addToString();
                }
                if (actualString.length === stringBuilder.length) {
                    el.innerHTML = stringBuilder
                }

            }, Math.random() * 150);

        }
        addToString();

        function animationOut(i) {}

        function animationIn(i) {}


        function openContent(e) {
            const type = e.type,
                button = this,
                content = document.querySelector(this.getAttribute('href'));
            nav = document.querySelector("#main-menu");
            // Return if key Pressed was not space bar or Enter
            if (type === 'keydown' && (e.keyCode !== 13 && e.keyCode !== 32)) {
                return true;
            }

            e.preventDefault();

            if (nav.getAttribute('aria-expanded') === 'false') {
                nav.setAttribute('aria-expanded', 'true');
            }

        }

        function closeContent(e) {
            const type = e.type,
                button = this,
                content = document.querySelector(this.getAttribute('href'));
            nav = document.querySelector("#main-menu");
            // Return if key Pressed was not space bar or Enter
            if (type === 'keydown' && (e.keyCode !== 13 && e.keyCode !== 32)) {
                return true;
            }

            e.preventDefault();

            if (nav.getAttribute('aria-expanded') === 'true') {
                nav.setAttribute('aria-expanded', 'false');
            }

        }

        document.querySelector('#main-menu-toggle').addEventListener('click', openContent);
        document.querySelector('#closeContent').addEventListener('click', closeContent);
        document.querySelector('#backDrop').addEventListener('click', closeContent);


        const nextButton = document.querySelector(".next"),
            prevButton = document.querySelector(".prev"),
            siteImg1 = document.querySelector("#siteImg1"),
            siteImg2 = document.querySelector("#siteImg2"),
            siteImg3 = document.querySelector("#siteImg3"),
            siteLnk1 = document.querySelector("#siteLnk1"),
            siteLnk2 = document.querySelector("#siteLnk2"),
            siteLnk3 = document.querySelector("#siteLnk3"),
            writeUp1 = document.querySelector("#writeUp1"),
            writeUp2 = document.querySelector("#writeUp2"),
            writeUp3 = document.querySelector("#writeUp3");

        let contentCount = 1;


        function contentPlus(e) {
            e.preventDefault();
            contentCount++;
            if (contentCount === 1) {
                siteImg1.classList.add('show');
                siteLnk1.classList.add('show');
                writeUp1.classList.add('show');
                siteImg1.classList.remove('hide');
                siteLnk1.classList.remove('hide');
                writeUp1.classList.remove('hide');
                siteImg3.classList.remove('show');
                siteLnk3.classList.remove('show');
                writeUp3.classList.remove('show');
                siteImg3.classList.add('hide');
                siteLnk3.classList.add('hide');
                writeUp3.classList.add('hide');
            } else if (contentCount === 2) {
                //adding second content
                siteImg2.classList.add('show');
                siteLnk2.classList.add('show');
                writeUp2.classList.add('show');
                siteImg2.classList.remove('hide');
                siteLnk2.classList.remove('hide');
                writeUp2.classList.remove('hide');
                //removing first content
                siteImg1.classList.remove('show');
                siteLnk1.classList.remove('show');
                writeUp1.classList.remove('show');
                siteImg1.classList.add('hide');
                siteLnk1.classList.add('hide');
                writeUp1.classList.add('hide');
                //removing third content
                siteImg3.classList.remove('show');
                siteLnk3.classList.remove('show');
                writeUp3.classList.remove('show');
                siteImg3.classList.add('hide');
                siteLnk3.classList.add('hide');
                writeUp3.classList.add('hide');
            } else if (contentCount === 3) {
                siteImg3.classList.add('show');
                siteLnk3.classList.add('show');
                writeUp3.classList.add('show');
                siteImg3.classList.remove('hide');
                siteLnk3.classList.remove('hide');
                writeUp3.classList.remove('hide');
                siteImg2.classList.remove('show');
                siteLnk2.classList.remove('show');
                writeUp2.classList.remove('show');
                siteImg2.classList.add('hide');
                siteLnk2.classList.add('hide');
                writeUp2.classList.add('hide');
            } else {
                contentCount = 3;
            }

        }

        function contentMinus(e) {
            e.preventDefault();
            contentCount--;
            if (contentCount === 1) {
                siteImg1.classList.add('show');
                siteLnk1.classList.add('show');
                writeUp1.classList.add('show');
                siteImg1.classList.remove('hide');
                siteLnk1.classList.remove('hide');
                writeUp1.classList.remove('hide');
                siteImg3.classList.remove('show');
                siteLnk3.classList.remove('show');
                writeUp3.classList.remove('show');
                siteImg3.classList.add('hide');
                siteLnk3.classList.add('hide');
                writeUp3.classList.add('hide');
                //adding second content
                siteImg2.classList.remove('show');
                siteLnk2.classList.remove('show');
                writeUp2.classList.remove('show');
                siteImg2.classList.add('hide');
                siteLnk2.classList.add('hide');
                writeUp2.classList.add('hide');
            } else if (contentCount === 2) {
                //adding second content
                siteImg2.classList.add('show');
                siteLnk2.classList.add('show');
                writeUp2.classList.add('show');
                siteImg2.classList.remove('hide');
                siteLnk2.classList.remove('hide');
                writeUp2.classList.remove('hide');
                //removing first content
                siteImg1.classList.remove('show');
                siteLnk1.classList.remove('show');
                writeUp1.classList.remove('show');
                siteImg1.classList.add('hide');
                siteLnk1.classList.add('hide');
                writeUp1.classList.add('hide');
                //removing third content
                siteImg3.classList.remove('show');
                siteLnk3.classList.remove('show');
                writeUp3.classList.remove('show');
                siteImg3.classList.add('hide');
                siteLnk3.classList.add('hide');
                writeUp3.classList.add('hide');
            } else if (contentCount === 3) {
                siteImg3.classList.add('show');
                siteImg3.classList.remove('hide');
                siteLnk3.classList.add('show');
                siteLnk3.classList.remove('hide');
                writeUp3.classList.add('show');
                writeUp3.classList.remove('hide');
                siteImg2.classList.remove('show');
                siteLnk2.classList.remove('show');
                writeUp2.classList.remove('show');
                siteImg2.classList.add('hide');
                siteLnk2.classList.add('hide');
                writeUp2.classList.add('hide');
            } else {
                contentCount = 1
            }
            return contentCount;
        }

        document.querySelector(".next").addEventListener("click", contentPlus);
        document.querySelector(".prev").addEventListener("click", contentMinus);
