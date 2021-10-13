import SidePost from "./SidePost";

const SideContent = ({blogs}) => {
    const featpost = blogs.filter(item=>item.category === "Featured");
    const popost = blogs.filter(item=>item.category === "Popular");
    popost.reverse();
    featpost.reverse();

    return ( 
        
        <section className="side-area">
            {featpost.length!==0&& 
            (<section className="featured-area">
                <h1 className="sec-title">featured</h1>
                <ul className="side-list">
                    {featpost.map(post=>(
                        <SidePost post={post} />
                    ))}
                </ul>
            </section>  
            )}
                
            {popost.length!==0&&( 
                <section className="featured-area">
                    <h1 className="sec-title">popular</h1>
                    <ul className="side-list">
                        {popost.map(post=>(
                            <SidePost post={post} />
                           ))}
                    </ul>
                </section>
            )}

        </section>
     );
}
 
export default SideContent;