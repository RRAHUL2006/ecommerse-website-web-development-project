 
        function searchProducts() {
            const query = document.getElementById('search').value.toLowerCase();
            const products = document.querySelectorAll('.product');
            products.forEach(product => {
                const title = product.querySelector('h3').textContent.toLowerCase();
                if (title.includes(query)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
        document.getElementById('search').addEventListener('keyup', searchProducts);
        document.querySelectorAll('.product button').forEach(button => {
            button.addEventListener('click', () => {
                alert('Product added to cart!');
            });
        });
        function toggleCart() {
            const cartSection = document.getElementById('cart');
            if (cartSection.style.display === 'none' || cartSection.style.display === '') {
                cartSection.style.display = 'block';
            } else {
                cartSection.style.display = 'none';
            }
        }
        document.querySelector('nav ul li a[href="#cart"]').addEventListener('click', toggleCart);
        document.getElementById('cart').style.display = 'none';
        document.querySelector('nav ul li a[href="#products"]').addEventListener('click', () => {
            document.getElementById('cart').style.display = 'none';
        });
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                scrollToSection(sectionId);
            });
        });
        document.querySelector('nav ul li a[href="#cart"]').addEventListener('click', () => {
            document.getElementById('cart').style.display = 'block';
        });
        document.querySelector('nav ul li a[href="#products"]').addEventListener('click', () => {
            document.getElementById('cart').style.display = 'none';
        });
        document.querySelector('nav ul li a[href="#contact"]').addEventListener('click', () => {
            document.getElementById('cart').style.display = 'none';
        });