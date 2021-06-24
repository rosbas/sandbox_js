//to-do back button => use routing (-1)

// import styled from 'styled-components'
import Link from "next/link"
import {motion} from "framer-motion"

const Projects = () => {
    const item = { hidden: { x: -10, opacity: 0 } }
    const list = { hidden: { opacity: 0 } }
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

    return ( 
        <>
            <div>All project listing</div>
            <motion.div initial="hidden" animate={{scale:0.5}} transition={{duration:0.5}}>
                <Link href='/projects/listing'>
                    <h3>JSON Placeholder</h3>
                </Link>
            </motion.div>
        </>
     );
}
 
export default Projects;