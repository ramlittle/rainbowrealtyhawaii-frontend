

const Content=()=>{
    return(
        <>
            <section className='lg:flex-row flex flex-col justify-center items-center bg-yellow-500 p-5 h-screen gap-5'>
                <div className='border border-green-200 lg:w-1/2 '>
                    <h2 className='text-5xl'>Checkout this Sample</h2>
                    <p className='text-2xl'>
                        The video below will show you how to style in tailwind and it is awesome!
                    </p>
                    <button className='p-2 bg-green-500 hover:bg-blue-500 transition duration-150 ease-in-out'>Press Me</button>
                </div>
                <div className='border border-red-500 lg:w-1/2'>
                    <iframe
                        className='w-auto lg:w-full'
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/NIUJKjQVltM" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
            </section>
            <section className='flex h-screen bg-red-100 w-full '>
                <div className='  flex justify-center items-center w-1/2 border border-green-500'>
                    <div className='hover:translate-x-10 sepia -rotate-45 w-1/2 h-1/2 shadow-2xl shadow-blue-500/50 '>
                        <img className=' animate-[spin_1s_ease-in] rounded-[50%]'src='https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0f65e142d72b44c837382331ecbaaa51'/>
                    </div>
                </div>
                <div className='animate-[pulse_3s_ease-in] w-1/2 border-blue-500'>
                    <form>
                        <label>Name</label>
                        <input type='text'></input>
                        <label>Password</label>
                        <input type='password'></input>
                        <button type='submit'>Submit</button>
                    </form>
                    
                </div>
            </section>
        </>
    )
}
export default Content;