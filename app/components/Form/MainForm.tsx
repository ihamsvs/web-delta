import Link from "next/link"
import Links from "../globals/Links"
import Form from "./Form"

const MainForm = () => {
    return(
        <>
        <div className="min-h-screen">
            <Form/>
        </div>
        <Links/>
        </>

    )
} 

export default MainForm
