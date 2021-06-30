//to-do back button => use routing (-1)

// import styled from 'styled-components'
import Link from "next/link"
import {motion} from "framer-motion"

const Projects = () => {
    // const item = { hidden: { x: -10, opacity: 0 } }
    // const list = { hidden: { opacity: 0 } }
    // const variants = {
    //     hidden: { opacity: 0 },
    //     visible: { opacity: 1 },
    //   }

    const MenuItems = [
        {
            label: "Listing",
            url: "/projects/listing",
            active: "true"
        },
        {
            label: "Tailwind",
            url: "/projects/tailwind",
            active: "true"
        },
        {
            label: "Tailwind2",
            url: "/projects/tailwind",
            active: "true"
        },
        {
            label: "Tailwind3",
            url: "/projects/tailwind",
            active: "true"
        },
    ]

    return ( 
        <div className='max-w-xl mx-auto grid p-6 items-center'>
            <h1 className='float-left mb-5'>
                Projects List
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {MenuItems.map((item,index) => {
                    return(
                        <Link href={item.url} key={index}>
                            <motion.div initial="hidden" animate="visible" variants={{
                                hidden:{
                                    scale:.8,
                                    opacity:0
                                },
                                visible:{
                                    scale:1,
                                    opacity:1,
                                    transition:{
                                        delay: .4
                                    }
                                }
                            }}>
                                <motion.div whileHover={{
                                    scale:1.2,
                                    transition:{
                                        duration:.2
                                    }
                                }}>
                                    <div className='py-8 flex-shrink-0 rounded-xl text-xl shadow-md text-center bg-red-100'>{item.label}</div>
                                </motion.div>
                            </motion.div>
                        </Link>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Projects;