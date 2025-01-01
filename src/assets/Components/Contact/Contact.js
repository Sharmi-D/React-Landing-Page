import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

    // submitting form using access key
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3005b92e-1d50-4c19-8c65-4490636de1c5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        // Alert status of response
        if (res.success) {
            Swal.fire({
                title: "Thank you!!",
                text: "Message Sent Successfully",
                icon: "success"
              });
        }

    };



  return (
    <section name='contact-us' className='contact-container'>

            <h2>Join Us <span className='h2-span'></span></h2>
        <form onSubmit={onSubmit}>
            
            <div className="input-box">
                <input type="text" className='field' placeholder='Enter your name' name='name' required />
            </div>
            <div className="input-box">
                <input type="email" className='field' placeholder='Enter your email' name='email' required />
            </div>
            <div className="input-box">
                <input type="tel" className='field' placeholder='Enter number' name='mobile' required />
            </div>
            <div className="input-box">
                <textarea name="message" id="" className='field mess'placeholder='Your message...' />
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>

    </section>
  )
}

export default Contact
