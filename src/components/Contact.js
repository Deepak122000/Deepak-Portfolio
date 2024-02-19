

export default function Contact () {

    const config={
        Email :'deepakofficial2000@outlook.com',
        Phone :'+91 8778476780'
    }
              return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>

                <div className=' flex flex-col items-center'>
                    
                    <h1 className=' text-4xl border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold'> Contact</h1>
                    <p className='pb-5'> If you want to discuss more in details, Please contact me</p>
                    <p className="py-2"><span className="font-bold">Email : </span> {config.Email}</p>
                    <p className="py-2"><span className="font-bold">Phone : </span>{config.Phone}</p>
                    </div>
                    
             
              </section>
}