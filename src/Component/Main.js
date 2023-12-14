
import pro1 from './images/profile-img.jpg';
import img2 from './images/financial-advisor-consulting.jpg'
import img11 from './images/mg-1.jpg'
import img3 from './images/successful-banker-4YD2XLE-819x1024.jpg'
import img4 from './images/enter.jpg'
import img5 from './images/confide.jpg'
import latest1 from './images/latest-1.jpg'
import latest2 from './images/latest-2.jpg'
import latest3 from './images/latest-n3.jpg'
import latest4 from './images/latest-4.jpg'
import porfi1 from './images/profile-img.jpg'
import porfi2 from './images/profile-2.jpg'
import porfi3 from './images/profile-3.jpg'

const Main = () => {
    return(
        <>
           <section>
        <div className="header-img">
             <div className="container pt-5">
              <div className="row pt-5">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <h1 className="text-white  h1-color11 pt-5 mt-3 ">Growth Hacking for Exponential Success</h1>
                    <p className="text-white p-color11">Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                     <div className="row mt-5 d-flex align-items-center ">
                      <div className="col-lg-2 ">
                        <div className="">
                            <div className="pulse"><i className="fa-solid fa-play"></i> </div>
                        </div>
                      </div>
                      <div className="col-lg-10 pb-4">
                         <h5 className="text-white ">Your business is not growing enough?
                      
                         </h5>
                         <p className="text-white">Watch video to learn more</p>
                      </div>
                     </div>

                 </div>
                 <div className="col-lg-5 col-md-5 col-sm-12 profile-img-re form-bgg mt-4 pt-3 offset-lg-1 offset-md-1">
                    <div className="">
                      <div className="profile-img-1">
                         <img src={pro1} alt="" className="profile-img"/>
                      </div>
                      <div>
                         <p className="px-3 pt-4 mt-2 pb-2 prof-text-c text-center" >Get Professional Help for Your Business</p>
                         <div className="col ">
                             <input type="text" className="form-control rounded-0 p-3"  placeholder="Your Name" aria-label="City"/>
                         </div>
                         
                         <div className="row g-0 ">
                             <div className="col-lg-6 mt-3">
                               <input type="text" className="form-control rounded-0 p-3" placeholder="Email" aria-label="State"/>
                             </div>
                             <div className="col-lg-6 mt-3">
                               <input type="text" className="form-control rounded-0 p-3" placeholder="Phone Number" aria-label="Zip"/>
                             </div>
                           </div>
 
                           <div className="col mt-3">
                             <input type="text" className="form-control rounded-0 p-3" placeholder="Subject" aria-label="City"/>
                         </div>
 
                         <button type="submit" className="btn btn-primary mt-3 p-3 mb-3 rounded-0 d-inline-block w-100">Send Inquiry</button>
                      </div>
                    </div>
                 </div>
              </div>
             </div>
        </div>
    </section>
    <section className="container About-US  py-5">
          <div className="d-lg-flex d-md-flex">
             <div className="col-lg-6 col-md-6 col-sm-12 pt-4 mt-5">
               <p className="t1">ABOUT US</p>
               <p className="text-2 t2-h1">We are a collective of growth hacker that bring values to global companies</p>
               <button type="submit" className="btn btn-primary mt-3 mb-3 rounded-0 d-inline-block py-1 px-4 fs-4 ">Learn More</button>
             </div>
             <div className="col-lg-6 col-md-6 col-sm-12 pt-4 mt-5">
                <p className="t3-p">Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.

                </p>
                <p className="t3-p">Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus</p>
                <p className="ceo">CEO of Growthy</p>
                <p className="t3-p">Donald Chavez Brown, MBA</p>
                <img src="https://kit.baliniz.com/growthy/wp-content/uploads/sites/3/2020/10/signature@2x.png" alt="" className="img-fluid w-50"/>
             </div>
          </div>
    </section>

    <section className="container d-lg-flex d-md-flex mt-5 py-5 mb-5">
    
    <div className=" col-lg-6 col-md-6 col-sm-12 ">
        <div className="row">
           <div className="col-lg-6 col-md-6 col-sm-12 icons-pro">
              <div> 
                   <i className="fa-brands fa-searchengin"></i>
                   <p className="p11">Planing & Strategy</p>
                   <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis.</p>
             </div>
             <div> 
                <i className="fa-solid fa-signal"></i>
                <p className="p11">Planing & Strategy</p>
                <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis.</p>
          </div>
           </div>
            
       
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 icons-pro">

               <div> 
                <i className="fa-regular fa-lightbulb"></i>
                   <p className="p11">Planing & Strategy</p>
                   <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis.</p></div>
                   <div> 
                    <i className="fa-solid fa-diamond"></i>
                    <p className="p11">Planing & Strategy</p>
                    <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis.</p>
              </div>
              </div>
              
              
            </div>
        </div>
   
       
 

   <div className="col-lg-5 col-md-5 col-sm-12 position-11 offset-lg-1 offset-md-1">
    <div className="">
        <img src={img2}alt="" className="img-fluid  h-img-1"/>
    </div>
    
    <div className="position-22">
        <img src={img11} alt=""  className="img-fluid h-img-2"/>
    </div>
 </div>
 
 </section>

 <section class="container mb-5 mt-5 py-5">
        <p class="text-center text-primary blogg">
            OUR CORE VALUE

        </p>
        <h3 class="text-center mb-5 latest-blog py-4">
            Top-Notch Marketing Agency

        </h3>
        <div class="d-lg-flex d-md-flex">

            <div class="col-lg-4 col-md-4 col-sm-12 card11 p-5 mb-4">
                <div class=" text-center
                              ic  ">
                    
                    <i class="fa-solid fa-people-group text-center "></i>
                </div>
                <h3 class="text-center clr">Integrity</h3>
                <p class="text-center clr">Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 card11 m-1 mt-5 p-5 mb-4 border-tt">
                <div class= " text-center ic">
                   
                    <i class="fa-solid fa-hands-holding-child"></i>
                </div>
                <h3 class="clr">Boldness</h3>
                <p class="clr">Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 card11 p-5 mb-4">
                <div class=" text-center ic">
                   
                    <i class="fa-regular fa-hand-peace"></i>
                </div>
                <h3 class="clr">Honesty</h3>
                <p class="clr">Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>

        </div>
        

     </section>
         
     <section class="container-fluid bg-primary mt-5  py-5 pb-4 border-linee11"> 
        
        <div class="text-center line-textt1 pt-5">
            <p>WE HAVE IN-DEPTH EXPERIENCE IN OUR CORE SPECIALTIES</p>
        </div>
        <div class="col-lg-7 col-md-8 col-sm-12  mt-4 p-4 m-auto">
            <h3 class="text-center  mt-1 line-textt2 ">Our extensive resources and commitment to client service satisfy the needs of a diverse client across multiple industries</h3>
        </div>
        <div class="border-linee  mb-5">
            
        </div>

        
     </section>

     
     <section className="container py-5 pulse-container  position-relative ">
       
                <div className="pulse11 m-auto"><i className="fa-solid fa-play"></i> </div>
           
     </section>

     <section className="container py-5">
       <div className="d-lg-flex  d-md-flex justify-content-between">
        <div className="col-lg-4 col-md-3 col-sm-12">
            <p className='blogg'>OUR TEAM</p>
            <h3 className='latest-blog'>Meet our valued team members</h3>
         </div>
         <div className="col-lg-3 col-md-2 col-sm-12 mt-2">
            <button type="submit" className="btn btn-primary mt-3 mb-3 rounded-0 d-inline-block fs-5 fw-bold   py-3 px-5">View all team <i class="fa-solid fa-arrow-right text-white mt-2 px-2"></i></button>

         </div>
       </div>
     </section>

     <section className="container  py-5">

    
<div className="d-lg-flex d-md-flex">
   <div className="col-lg-4 col-md-4 col-sm-12 overlay-card overlay-par">
      <div>
        <img src={img3} alt="" className="img-fluid"/>
      </div>
      <div className='overlay'>
          <div className='overlay-data'>
          <h3 className='text-white'>Donald Chavez</h3>
           <p  className='text-white'>Founder</p>
           <div className="text31">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-google-plus-g"></i>
                   
            </div>
          </div>
      </div>
   </div>
   <div className="col-lg-4 col-md-4 col-sm-12 overlay-card overlay-par">
    <div>
      <img src={img4} alt="" className="img-fluid"/>
    </div>
    <div className='overlay'>
          <div className='overlay-data'>
          <h3 className='text-white'>Kim Wexler</h3>
           <p  className='text-white'>Founder</p>
           <div className="text31">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    
                    <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
      </div>
 </div>
 <div className="col-lg-4 col-md-4 col-sm-12 overlay-card overlay-par ">
    <div>
     <img src={img5} alt="" className="img-fluid"/>
    </div>
    <div className='overlay'>
          <div className='overlay-data'>
          <h3 className='text-white'>Jimmy Hamlin</h3>
           <p  className='text-white'>Founder</p>
           <div className="text31">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-google-plus-g"></i>
                    
            </div>
          </div>
      </div>
 </div>
</div>
</section>






    
   <section className='container d-lg-flex d=-md-flex'>
   <div className='col-lg-6 col-md-6 col-sm-12'>
        <p className='blogg'>AWESOME COUNTER</p>
          <h3 className='latest-blog'>
          More than 10-years professional experience
          </h3>
         
    </div>
    <div className='col-lg-3 col-md-3 col-sm-12'>

        <h2 className='fw-bold fs-1 text-primary '>
           254K
            
        </h2>
        <p>Happy Client</p>
       
    </div>
    <div className='col-lg-3 col-md-3 col-sm-12'>

<h2 className='fw-bold fs-1 text-primary' >
   196
    
</h2>
<p>Happy Client</p>

</div>

   </section>

   <section className='container d-lg-flex d=-md-flex'>
   <div className='col-lg-6 col-md-6 col-sm-12'>
       
      <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.</p>   
         
    </div>
    <div className='col-lg-3 col-md-3 col-sm-12'>

        <h2 className='fw-bold fs-1 text-primary'>
           68
            
        </h2>
        <p>Team Members</p>
       
    </div>
    <div className='col-lg-3 col-md-3 col-sm-12'>

<h2 className='fw-bold fs-1 text-primary'>
   42
    
</h2>
<p>COUNTRIES</p>

</div>

   </section>


<section className="container-fluid clientt pb-5">
     <div className="container pb-5">
        <p className='blogg text-center pt-2'>TESTIMONIALS</p>
        <h3 className='latest-blog text-center py-4'>Worldwide Clients</h3>
        <div className="row">
            <div  className="col-lg-4 col-md-4 col-sm-12 card-po mb-5">
                <div className="card rounded-0">
                    <i className="fa-solid fa-quote-left fa-2x text-primary text-center py-3 px-5 "></i>
                    <p className="text-center mb-2 px-4 py-4 client-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="card-imgg">
                        <img src={porfi1} alt=""/>
                        <p className="text-center client-name">Kim Wexler</p>
                    </div>
                  
                </div>
            </div>
            <div  className="col-lg-4 col-md-4 col-sm-12 card-po mb-5">
                <div className="card rounded-0">
                    <i className="fa-solid fa-quote-left fa-2x text-center text-primary py-3 "></i>
                    <p className="text-center mb-2 px-4 py-4 client-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="card-imgg">
                        <img src={porfi2} alt=""/>
                        <p className="text-center client-name">Deddy Rogan</p>
                    </div>
                  
                </div>
            </div>
            <div  className="col-lg-4 col-md-4 col-sm-12 card-po  mb-5">
                <div className="card rounded-0">
                    <i className="fa-solid fa-quote-left text-center text-primary fa-2x py-3"></i>
                    <p className="text-center mb-2 px-4 py-4 client-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="card-imgg">
                        <img src={porfi3}  alt=""/>
                        <p className="text-center client-name">Jimmy Morgan</p>
                    </div>
                   
                </div>
            </div>
        </div>
     </div>
     </section>
<section className="container mt-5 mb-5 blog-container">
        <div className='py-4'>
        <p className="text-center blogg ">BLOGS
        </p>
        <h3  className="text-center latest-blog pb-5">Latest News
        </h3>
        </div>


        <div className="d-lg-flex d-md-flex">
             <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={latest1}  alt=""  width="100% " height="100%" />
             </div>
             <div className="col-lg-3 col-md-3 col-sm-12 px-4">
                <h3 className='latest-hh'>
                    What Is Thought Leadership? And When You Should Use It?
                </h3>
                <p className='latest-pp'><span>@</span>JUNE 16, 2021</p>
                <p className='latest-pp'>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,...</p>
             </div>
             <div className="col-lg-3 col-md-3 col-sm-12 ">
                <img src={latest2}  alt=""  width="100% " height="100%" />
             </div>
             <div className="col-lg-3 col-md-3 col-sm-12 px-4">
                <h3 className='latest-hh'>
                    What Is Thought Leadership? And When You Should Use It?
                </h3>
                <p className='latest-pp'><span>@</span>JUNE 16, 2021</p>
                <p className='latest-pp'>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,...</p>
             </div>
        </div>
        <div className="d-lg-flex d-md-flex">
            <div className="col-lg-3 col-md-3 col-sm-12">
               <img src={latest3} alt=""  width="100% " height="100%" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 px-4">
               <h3 className='latest-hh'>
                   What Is Thought Leadership? And When You Should Use It?
               </h3>
               <p className='latest-pp'><span>@</span>JUNE 16, 2021</p>
               <p className='latest-pp'>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,...</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
               <img src={latest4}  alt=""  width="100% " height="100%" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 px-4">
               <h3 className='latest-hh'>
                   What Is Thought Leadership? And When You Should Use It?
               </h3>
               <p className='latest-pp'><span>@</span>JUNE 16, 2021</p>
               <p className='latest-pp'>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,...</p>
            </div>
       </div>
     </section>
    
</>
    )
}
export default Main;