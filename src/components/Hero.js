            import HeroImg from '../assets/hero.png';
            import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
            
            
            export default function Hero() {

                const config ={
                    subtitle:'Full-Stack Developer',
                    socialLink: {
                        linkedIn:'https://www.linkedin.com/in/deepak-c-45a45123a/',
                        github:'https://github.com/Deepak122000'
                    }
                }

                    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
                    <div className='md:w-1/2 flex flex-col'>
                        <h1 className='text-white text-8xl font-hero-font'> Hello, <br/>I'm Deepak 
                        <p className='text-3xl'>{config.subtitle} </p> 
                        </h1>
                    
               
                        <div className='flex py-10'>
                                <a href={config.socialLink.linkedIn} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/> </a>
                                <a href={config.socialLink.github} className=' hover:text-white'><AiOutlineGithub size={40}/> </a>
                        </div>
                        </div>

                        <img className='md:w-1/3' src={HeroImg}/>
                    </section>
                }


                // import HeroImg from '../assets/hero.png';
                // import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
                
                // export default function Hero() {
                //     const config  = {
                //         subtitle: 'Im a Full-stack developer and Designer',
                //         social: {
                //             twitter: 'https://twitter.com/jvlcode',
                //             facebook: 'https://facebook.com/jvlcode',
                //             linkedin: 'https://in.linkedin.com/company/jvl-code'
                //         }
                //     }
                
                
                //     return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
                //        <div className='md:w-1/2 flex flex-col'>
                //             <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>JV</span> Logesh 
                //                 <p className='text-2xl'>{config.subtitle}</p>
                //             </h1>
                //             <div className='flex py-10'>
                //                 <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                //                 <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                //                 <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
                //             </div>
                //        </div>
                //        <img className='md:w-1/3' src={HeroImg} />
                //     </section>
                // }