export default function About() {
    return (<>
    <div className="flex flex-col justify-center items-center p-10 m-3 gap-12 bg-sky-500 text-black rounded-xl">
        <p> About Us</p>
        <p>
        Welcome to [Your Company Name], your trusted partner in sustainable seaweed farming and high-quality raw material supply for the global carrageenan industry.
    We specialize in cultivating, harvesting, and processing premium red seaweed (Eucheuma and Kappaphycus species), which are the primary sources of Kappa carrageenan—a versatile ingredient used in food, pharmaceuticals, cosmetics, and industrial applications worldwide.
    </p>

    <div className="flex-col flex gap-5">
        <p  className="flex justify-center" >
            Our Mission
        </p>
        <p> At [Your Company Name], our mission is to provide the highest quality raw seaweed to manufacturers and processors, enabling them to produce superior carrageenan products. We are committed to sustainable farming practices, environmental stewardship, and supporting the growing demand for natural, plant-based ingredients.
        </p>
    </div>

    <div className="flex-col flex gap-5" >

        <p className="flex justify-center ">What We Do</p>
            <li>
                Seaweed Farming: We grow Eucheuma and Kappaphycus seaweed using eco-friendly and sustainable farming methods. Our farms are located in pristine coastal waters, ensuring optimal growth conditions and high-quality yield.
            </li>
            <li>
                Harvesting & Drying: After harvesting, we carefully dry and clean the seaweed to preserve its natural properties and meet international quality standards.
            </li>
            <li>
                Export: We supply dried and cleaned seaweed to manufacturers and processors worldwide, who use it to extract and refine Kappa carrageenan for various industries.
            </li>
    </div>

    <div className="flex-col flex gap-5" >
        <p className="flex justify-center " >
        Why Choose Us?</p>
        <ol>
            <li>
                1 Premium Quality: Our seaweed is grown, harvested, and processed with meticulous care to ensure it meets the highest standards for carrageenan production.
            </li>
            <li>
            2  Sustainability: We are committed to environmentally responsible farming practices that protect marine ecosystems and support the livelihoods of coastal communities.
            </li>
            <li>
            3  Reliability: With years of experience in seaweed farming, we offer consistent supply, competitive pricing, and reliable delivery to our partners.
            </li>
            <li>
            4 Global Reach: We export our products to carrageenan manufacturers and processors around the world, helping them meet their production needs.
            </li>
        </ol>

    </div>

    <div className="flex-col flex gap-5" >
        <p className="flex justify-center " >Our Commitment to Sustainability</p>
        <p>
            We believe in the power of seaweed to transform industries while protecting the planet. Our farming practices are designed to:
            <li>Promote biodiversity and healthy marine ecosystems.</li>

            <li>Reduce carbon footprint by harnessing the natural benefits of seaweed.</li>

            <li>Support local communities by creating sustainable livelihoods.</li>
        </p>
    </div>

    <div className="flex-col flex gap-5"  >
    <p className="flex justify-center " >Join Us in Building a Sustainable Future</p>
        <p className="flex justify-center w-fit lg:w-[850px]">
            Whether you are a carrageenan manufacturer, processor, or distributor, we invite you to partner with us. Together, we can meet the growing demand for high-quality Kappa carrageenan while contributing to a healthier, more sustainable world.
        </p> 
    </div>

    <div className="flex-col flex gap-5" >
        <p className="flex justify-center ">Contact Us</p>
        <p>    Ready to learn more about our products or discuss partnership opportunities?<br/> We’d love to hear from you!<br/>
            📞 Phone: [Your Phone Number]<br/>
            📧 Email: [Your Email Address] <br/>
            📍 Address: [Your Physical Address] <br/>
            <br/>
        </p>
    </div>


    </div>
    
    </>)
}