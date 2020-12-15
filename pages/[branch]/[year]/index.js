import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../HELPERS/baseUrl'



const NITK = ({courses})=>{

    const router = useRouter();
    const {branch ,year } = (router.query);

    const branchList = courses.map((course , i )=>{

        if(course.yearname === year)
        {
            const router = useRouter();
            const {branch ,year } = (router.query);
            const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'
                return(
                    <>
                        {course.course.map(cr=>{
                            return(
                                    <>
                                        <Link href ={`/${branch}/${year}/${cr.coursename}`} >  
                                            <div className="branch-card" style={{height:"150px"}}>
                                                <div className="branch-photo-and-name">
                                                    <p style={{fontSize:"30px" }}><i class="fa fa-book" aria-hidden="true"></i>{ cr.coursename}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                    )
                                }
                            )
                        }
                     </>
                 )
        }
    })



    return(
        <div  style={{  backgroundSize:"cover" ,paddingTop:"120px",paddingBottom:"60px", minHeight:"100vh"}}>
        <div  style={{textAlign:"center",padding:"10px 10px",color:"#ff8080" ,boxShadow:"0px 0px 14px black", background:"#ffe6e6" , margin:" 20px 30px" ,fontSize:"20px"}}><p>LIST OF COURSES IN THE SECOND YEAR : </p></div>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
        {branchList}
        </div>
        </div>
    )
}

export default NITK;






export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/NITK/course`)
    const courses = await res.json()
    return{
  
        props:{
            courses
        }
    }
  }



