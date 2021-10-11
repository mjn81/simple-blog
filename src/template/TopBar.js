import useFetch from "./useFetch";




const TopBar = () => {
    const res= useFetch('http://localhost:2020/topbar');
    return (  
        <div>
            <header className="tmp-header">
                <h1 className="title">
                    <span className="Blue-sq">B</span>eep<span className="Red-dt">.</span>
                </h1>
                <nav className="top-navbar">
                    <ul>
                    {
                        res&& res.list.map(item=>(
                            <li key={item.id}><a href={item.link}>{item.name}</a></li>
                        ))
                    }
                    </ul>
                </nav>
                <div className="nav-seprator">

                </div>
                <div className="tmp-side-nav">
                    <a className="btn btn-rev" href="/Login">Log in</a>
                    <a className="btn" href="/SignUp">Sign Up</a>
                </div>  
            </header>  

            <section className="tmp-category">
                    <h1 className="section-title">Blog</h1>
                    <nav className="second-navbar">
                        <ul>
                          {res&&res.category.map(item=>(
                              <li key={item.id}><a href={item.link}>{item.name}</a></li>
                          ))}
                            <li><input type="search" id="search-bar" placeholder="search" /></li>
                        </ul>
                    </nav>
            </section>
        </div>
    );
}

export default TopBar;