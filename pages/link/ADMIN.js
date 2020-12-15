import Link from 'next/link'

const Admin = ()=>{
    return(
        <div style={{minHeight:"100vh"}}>
<div style={{paddingTop:"150px" }}></div>
<div style={{display:"flex",flexWrap:"wrap" , justifyContent:"center"}}>
                               

                                <Link href ="/link/nitkCoursePost" > 
                                <div className="branch-card" style={{border:"solid 2px red",height:"230px"}}>
                                    <div className="branch-photo-and-name">
                                        <p style={{fontSize:"20px" , paddingTop:"30px"}}>CREATE COURSE POST FOR NITK </p>
                                    </div>   
                                </div>
                                </Link>

                               
</div>


               <div style={{textAlign:"center" , padding:"20px" , fontSize:"30px" , margin:"40px"  , fontWeight:"bolder"}}><Link href="/link/OTHER"><a>OTHERS LINKS</a></Link></div> 
        </div>
    )
}

export default Admin