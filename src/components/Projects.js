      import WebsiteImg1 from '../assets/ecommerce-websites.jpg'
   

        export default function Projects() {

            const config ={
                projects:[{
                    img : WebsiteImg1,
                    description :'e-commerce Website built using Mern Stack',
                    link :'https://github.com/Deepak122000/ToDoFirstApp'
            }]
            }

         return <section id='projects' className=" flex flex-col py-20 px-5 justify-center bg-primary text-white">
              <div className="w-full">
                     <div className="flex justify-center">
                        <h1 className="text-4xl border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold">Projects</h1> 
                        </div>
                        </div>
                    
            <div className="w-full">
                 <div className='flex justify-center py-5'>
                    {config.projects.map((project)=>(
                        <div className='relative'>
                        <img className='h-[400px] ' src={project.img}/>
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
                            <p className='text-3xl text-center py-10'>{project.description} </p>
                            <div className='flex justify-center'> 
                    <a className='btn' target='_blank' href={project.link}>view project</a>
                        </div>
                
                </div>
                        </div>
                    ))}
                        
                    
                    </div>
                    </div>
                    </section>
                };