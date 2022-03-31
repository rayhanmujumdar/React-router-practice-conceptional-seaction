import React from 'react';

const About = () => {
    return (
        <div className='md:flex justify-between md:w-3/4 md:mx-auto mx-10 gap-x-20'>
           <div className='md:text-left text-center md:my-0 my-5 p-4'>
               <h1 className='text-3xl font-light my-10'>Basic Questions</h1>
               <div className='flex flex-col'>
                   <div>
                       <h1 className='font-semibold my-6 text-lg'>What is accessiability?</h1>
                       <p>This article starts off the module with a good look at what accessibility is — this includes what groups of people we need to consider and why, what tools different people use to interact with the web, and how we can make accessibility part of our web development workflow.</p>
                   </div>
                   <div>
                       <h1 className='font-semibold my-6 text-lg'>HTML: A good basis for accessibility?</h1>
                       <p>A great deal of web content can be made accessible just by making sure the correct HTML elements are always used for the correct purpose.</p>
                   </div>
                   <div>
                       <h1 className='font-semibold my-6 text-lg'>CSS and JavaScript accessibility best practices?</h1>
                       <p>CSS and JavaScript, when used properly, also have the potential to allow for accessible web experiences, but if misused they can significantly harm accessibility. This article outlines some CSS and JavaScript best practices that should be considered to ensure that even complex content is as accessible as possible.</p>
                   </div>
               </div>
           </div>
           <div className='md:text-left text-center p-4'>
               <h1 className='text-3xl font-light my-10'>Advanced Question</h1>
                <div className='flex flex-col'>
                    <div>
                        <h1  className='font-semibold my-6 text-lg'>WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?</h1>
                        <p>Following on from the previous article, sometimes making complex UI controls that involve unsemantic HTML and dynamic JavaScript-updated content can be difficult. WAI-ARIA is a technology that can help with such problems by adding in further semantics that browsers and assistive technologies can recognize and use to let users know what is going on. Here we'll show how to use it at a basic level to improve accessibility.</p>
                    </div>
                    <div>
                        <h1  className='font-semibold my-6 text-lg'>Accessible multimedia?</h1>
                        <p>Another category of content that can create accessibility problems is multimedia — video, audio, and image content need to be given proper textual alternatives, so they can be understood by assistive technologies and their users. This article shows how.</p>
                    </div>
                    <div>
                        <h1 className='font-semibold my-6 text-lg'>Mobile accessibility?</h1>
                        <p>With web access on mobile devices being so popular, and popular platforms such as iOS and Android.</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default About;<h1>This my About Pages</h1>