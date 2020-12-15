import Link from 'next/link'
import baseUrl from '../HELPERS/baseUrl'


const Footer =()=>{


    return(
      
        <div class="card-footer" style={{background:"black"}}>
            <div className="quickLINK">
                    <p>QUICK LINK
                    </p>
                    <pre><Link href="/">Branch</Link>  <Link href="/link/ask">Ask</Link></pre>
                    <pre>Terms and Condition  Privacy Policy</pre>
            </div>
                <div className="copyRight">
                <p >&copy; igni-us.vercel.app | Designed by HJB@1086
                <Link href="/link/login"><span className="AdminBtn">Admin</span></Link>
                </p>
                </div>
                
        </div>
   
    
    )

}

export default Footer;




