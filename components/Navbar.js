import Link from 'next/link'
import {parseCookies} from 'nookies'
import {useRouter} from 'next/router'
import cookie from 'js-cookie'


const Navbar =()=>{

    const router = useRouter(); 
    const {token} = parseCookies();
    let admin = false;
    if(token){
        admin = true
    }
    else{
        admin = false
    }


    const isActive =(route)=>{

        if(route==router.pathname){
            return "active"
        }
        else "";
    }

    return(
        <>
        <div className="box-for-header" >

            <nav className="NAVBAR-division" >
                <Link href="/"><div className="logo" >NITKResource</div></Link>
                <div className="item-of-navbar-visible-to-all ">
                    <Link href="/link/ask" ><div id={isActive("/link/ask")} >Ask</div></Link>
                    <Link  href="/link/about" ><div id={isActive("/link/about")} >AboutUs</div></Link>
                </div>
            </nav>

            <nav className="NAVBAR-division-1" >
            {admin ? 

                    <>
                        <Link  href="/link/questionAsked"><div className="quick-link" id={isActive("/link/questionAsked")} >AskedQuestion</div></Link>
                        <Link  href="/link/ADMIN"><div  className="quick-link " id={isActive("/link/ADMIN")} >ADMIN</div></Link>
                        <Link href="/link/login"><div className="quick-link"id={isActive("/link/login")} onClick={()=>{
                                    cookie.remove('token')
                                    router.push("/")
                        }} >Logout</div></Link>
                    </>
                    :
                    <>  
                    </>
            }  
            </nav>
        </div>
        </>
    )
}

export default Navbar;


