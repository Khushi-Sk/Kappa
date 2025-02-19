import { db } from "@/utils/db";

export default async function Contact() {
    
    async function handleSubmit(formData) {
        'use server';
        const name = formData.get('name');
        // console.log(name)
        const mobile = formData.get('mobile');
        const email = formData.get('email');
        const message = formData.get('message');

        await db.query(`INSERT INTO contacts(name, email, mobile_num, message) VALUES ($1, $2, $3, $4)`, 
            [name, email, mobile, message]);

        // $("#myElem").show().delay(5000).fadeOut();
    }
    
    return (<>
    
    <div className="lg:flex lg:justify-center lg:py-5">
        <form action={handleSubmit} className="p-5 m-5 flex-col flex sm:flex-col gap-5 bg-purple-300 text-black w-sm md:w-[800px] rounded-xl">
            <div className=" flex flex-col sm:flex-row sm:gap-10 ">
                <label className="p-1">Name</label>
                <input name="name" className="outline-none p-1 rounded-md" type="text"  placeholder="Name" required/>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-11">
                <label className="p-1">Email</label>
                <input name="email" placeholder="Email" type="email" className="outline-none p-1 rounded-md" required/>
            </div>
            
            <div className=" flex flex-col sm:flex-row sm:gap-2">
                <label className="p-1">Mobile No.</label>
                <input name="mobile" placeholder="Mobile No." type="tel" className="outline-none p-1 rounded-md " required/>
            </div>
            
            <div className=" flex flex-col sm:flex-row sm:gap-5">
                <label className="p-1">Message</label>
                <textarea name="message" placeholder="Message" type='text' cols={40} rows={5} className="outline-none p-1 rounded-md" required></textarea>
            </div>

            <div className="flex justify-center">
                <button className="bg-blue-300 w-24 p-3 rounded-full border hover:bg-blue-400 hover:text-white" >Submit</button>
            </div>
            
        </form>
    </div>
    </>)
}