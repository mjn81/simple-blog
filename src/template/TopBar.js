const TopBar = () => {
    return (  
        <div>
            <header class="tmp-header">
                <h1 class="title">
                    <span class="Blue-sq">B</span>eep<span class="Red-dt">.</span>
                </h1>
                <nav class="top-navbar">
                    <ul>
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </nav>
                <div class="nav-seprator">

                </div>
                <div class="tmp-side-nav">
                    <button class="btn btn-rev">Log in</button>
                    <button class="btn">Sign Up</button>
                </div>  
            </header>  

            <section class="tmp-category">
                    <h1 class="section-title">Blog</h1>
                    <nav class="second-navbar">
                        <ul>
                            <li><a href="index.html " class="active">All</a></li>
                            <li><a href="#">Featured</a></li>
                            <li><a href="#">Popular</a></li>
                            <li><a href="category.html">World</a></li>
                            <li><a href="#">Bussiness</a></li>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Safety</a></li>
                            <li><input type="search" id="search-bar" placeholder="search" /></li>
                        </ul>
                    </nav>
            </section>
        </div>
    );
}
 
export default TopBar;