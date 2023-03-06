

const Content=()=>{
    return(
        <>
            <section className='lg:flex-row flex flex-col justify-center items-center bg-yellow-500 p-5 h-screen gap-5'>
                <div className='border border-green-200 lg:w-1/2'>
                    <h2 className='text-5xl'>Checkout this Sample</h2>
                    <p className='text-2xl'>
                        The video below will show you how to style in tailwind and it is awesome!
                    </p>
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
        </>
    )
}
export default Content;