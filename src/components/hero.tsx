import { motion } from "framer-motion";
const HeroSection = () => {
    return (
        <div>
            <div className="w-full h-screen overflow-clip relative">
                <div className="w-full h-screen z-0 absolute">
                    <video autoPlay playsInline muted className="lg:w-[1100px] static lg:h-[1000px] ml-[150px] overflow-clip -translate-y-32 brightness-110" >
                        <source src="/hell.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="h-auto text-white z-10 absolute w-[80%] ml-[10%] mr-[10%] flex flex-col pt-32">
                    <motion.div 
                    className="text-end w-[28%] ml-auto text-lg p-5 brightness-50"
                    animate = {{x:[100,0],opacity:[0,0.1,1]}}
                    transition={{duration:2}}
                    >
                        We are an outsourcing game development studio with over 1 million hours of experience.
                        And we know exactly how to create the next-level immersive gaming experience
                    </motion.div>
                    <motion.div 
                    animate = {{x:[-100,0],opacity:[0,0.1,1]}}
                    transition={{duration :2}}
                    >
                        <span className="font-Orbitron font-black pl-10 text-160 bg-transparent text-transparent text-stroke-fairorange brightness-125">801</span>
                    </motion.div>
                    <motion.div
                    className="ml-auto hover:scale-110"
                    initial = {{scale:1,opacity:0}}
                    animate = {{x:[-100,0],opacity:[0,0.1,1]}}
                    transition={{duration:2}}
                    whileHover={{scale:[1,1.1]}}
                    >
                        <button className="rounded-3xl px-2 py-1 flex flex-row items-center justify-center font-Orbitron font-light gap-3 border-2 border-slate-400">
                            <motion.div
                            animate = {{x:[40,0]}}
                            transition={{duration:2}}
                            >
                               Contact now
                            </motion.div>
                            <motion.div
                            className="bg-slate-400 h-full rounded-3xl p-4"
                            animate = {{x:[-40,0]}}
                            transition={{duration:2}}
                            >
                               <img src="/btn-arrow.svg"/>
                            </motion.div>
                        </button>
                    </motion.div>
                    <motion.div 
                    className="flex flex-row text-200 justify-between font-Orbitron font-bold items-center mt-0 ml-10 -translate-y-5"
                    initial= {{color:"#6D6D6D",opacity:0.1}}
                    animate = {{color:"#ffffff",opacity:0.5}}
                    transition={{duration:1,repeat:Infinity,repeatType:"reverse"}}
                    >
                        <span >STU</span>
                        <span>DIO</span>
                    </motion.div>
                </div>
            
            </div>
        </div>
    );
}
 
export default HeroSection;