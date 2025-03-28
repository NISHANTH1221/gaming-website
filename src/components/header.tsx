import { motion } from "framer-motion";
import { useRef } from "react";

interface section {
    id : number,
    name : string,
}

const sections: section[] = [
    {
        id : 1,
        name : "Main"
    },
    {
        id : 2,
        name : "Services"
    },
    {
        id : 3,
        name : "Projects"
    },
    {
        id : 4,
        name : "Portfolio"
    },
    {
        id : 5,
        name : "About Us"
    },
    {
        id : 6,
        name : "Contact Us"
    }
]
const Header = () => {
    const heightref = useRef(null);

    
    return (
        <header className="text-white bg-fairblack px-1 z-50 fixed flex flex-row w-full text-lg font-semibold justify-around items-center gap-28">
            <motion.div
            ref={heightref} 
            className="h-20"
            animate = {{y : [-20,-10,0]}}
            transition={{duration:1}}
            >
                <img src="/logo.png.webp" className="object-cover h-[100%] w-auto"/>
            </motion.div>
            <div className="flex flex-row">
                {
                    sections.map((section,index)=>{
                        return(
                            <motion.div 
                            animate={{ y: [-index*5-10, 0] }} 
                            transition={{duration : 0.5*(index+1)}}
                            key={section.id} 
                            className="mx-4 hover:text-fairred hover:cursor-pointer"
                            >
                              {section.name}
                            </motion.div>
                        )
                    })
                }  
            </div>
        </header>
    );
}
 
export default Header;