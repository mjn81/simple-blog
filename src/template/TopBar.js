import { Link } from "react-router-dom";
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
                            <li key={item.id}><Link to={item.link}>{item.name}</Link></li>
                        ))
                    }
                    </ul>
                </nav>
                <div className="nav-seprator">

                </div>
                <div className="tmp-side-nav">
                    <Link className="btn btn-rev" to="/Login">Log in</Link>
                    <Link className="btn" href="/SignUp">Sign Up</Link>
                </div>  
            </header>  

            <section className="tmp-category">
                    <h1 className="section-title">Blog</h1>
                    <nav className="second-navbar">
                        <ul>
                          {res&&res.category.map(item=>(
                              <li key={item.id} data-tag={item.name}><Link to={item.link}>{item.name}</Link></li>
                          ))}
                            <li><input type="search" id="search-bar" placeholder="search" /></li>
                        </ul>
                    </nav>
            </section>
        </div>
    );
}

export default TopBar;