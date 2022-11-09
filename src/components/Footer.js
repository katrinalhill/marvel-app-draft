import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Footer() {
  // return (
//     <> 
//     <div className="top-container">

//             <div className= "footer">
//              <li>| Team Tron+JFLO |</li>
//              <li>| 2022 |</li>
//              <li>| About Us |</li>
//              <img src='https://res.cloudinary.com/teepublic/image/private/s--rvYwvTCp--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-334/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-445/b_rgb:262c3a/c_limit,f_jpg,h_630,q_90,w_630/v1464887132/production/designs/531209_1.jpg' height="60px" width="60px" display="grid" justify-content="center"/>
//             </div>

            
//     </div>
//     </>
//   )
const path = window.location.pathname
    return (
        <>
        <div className="footer-container">
            <nav className="footer">
                <Link to="/" className="site-title">
                 
                </Link>

                <ul>
                    <CustomLink to='/' className='cover'>Home</CustomLink>
                    <CustomLink to='/' className='cover'>Events</CustomLink>
                    <CustomLink to='/mostwanted' className='cover'>Most Wanted</CustomLink>
                    {/* <CustomLink to='/' className='cover'>Teams</CustomLink> */}
                    <CustomLink to='/about' className='cover'>About Us</CustomLink>
                    <img src='https://res.cloudinary.com/teepublic/image/private/s--rvYwvTCp--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-334/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-445/b_rgb:262c3a/c_limit,f_jpg,h_630,q_90,w_630/v1464887132/production/designs/531209_1.jpg' height="60px" width="60px" display="grid" justify-content="center"/>
            
                </ul>

             </nav>
     </div>



    
     </>
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive =useMatch({ path: resolvedPath.pathname, end: true})
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
 }
