import Link from "next/link"

export default function StudentList(){
    return(
        <div>
            <h1>student list</h1>

             <ul>
                <li><Link href="/studentlist/lord">lord</Link></li>
                <li> <Link href="/studentlist/harry">harry</Link></li>
                <li> <Link href="/studentlist/carry">carry</Link></li>
                <li> <Link href="/studentlist/peter">peter</Link></li>
                <li> <Link href="/studentlist/indra">indra</Link></li>
          
             </ul>   



        </div>
    )
}