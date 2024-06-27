// /* eslint-disable @next/next/no-img-element */



// import Link from 'next/link';
// import PropTypes from 'prop-types';
// import { Col, Container, Row } from 'react-bootstrap';
// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import emailjs from 'emailjs-com';
// import 'react-toastify/dist/ReactToastify.css';
// import classes from './index.module.scss';
// import Image from 'next/image';

// function Contact({ contactItems }) {
     
   
    
   
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         contact: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs.send( serviceID, templateID, {
//             from_name: formData.name,
//             from_email: formData.email,
//             from_contact:formData.contact,
//             message: formData.message
//         }, publicKey)

//             .then((response) => {
//                 toast.success('Message sent successfully');
//                 setFormData({
//                     name: '',
//                     email: '',
//                     contact: '',
//                     message: ''
//                 });
//             })
//             .catch((error) => {
//                 console.error('Failed to send message', error);
//                 toast.error('Failed to send message');
//             });
//     };

//     return (
//         <main>
//             {contactItems?.map((contactItem) => (
//                 <Container key={contactItem.id}>
//                     <div className={classes.area}>
//                         <Row>
//                             <Col lg={{ span: 6 }}>
//                                 <div className={classes.img_wrap}>
//                                     <div className={classes.img}>
//                                      <img
//                                             className="img-full"
//                                             src={contactItem?.image}
//                                             alt={contactItem?.imageAlt}
//                                         />
//                                     </div>
//                                     <div className={classes.pattern}>
//                                         <img
//                                             src={contactItem?.pattern}
//                                             alt={contactItem?.patternAlt}
//                                         />
//                                     </div>
//                                 </div>
//                             </Col>
//                             <Col lg={{ span: 6 }} className="ps-50">
//                                 <div className={classes.content}>
//                                     <span className={classes.subtitle}>
//                                         {contactItem?.subTitle}
//                                     </span>
//                                     <h2 className={classes.title}>
//                                         {contactItem?.title}
//                                     </h2>
//                                     <p className={classes.desc}>
//                                         {contactItem?.desc}
//                                     </p>
//                                     <div className={classes.info}>
//                                         <h3 className={classes.info_title}>
//                                             {contactItem?.addressTitle}
//                                         </h3>
//                                         <p className={classes.info_desc}>
//                                             {contactItem?.addressDesc}
//                                         </p>
//                                     </div>
//                                     <div className={classes.info}>
//                                         <h3 className={classes.info_title}>
//                                             {contactItem?.infoTitle}
//                                         </h3>
//                                         <ul className={classes.info_list}>
//                                             {contactItem?.infoList?.map(
//                                                 (item) => (
//                                                     <li key={item.id}>
//                                                         {item.listText}
//                                                         <Link href={item.path}>
//                                                             {item.listValue}
//                                                         </Link>
//                                                     </li>
//                                                 )
//                                             )}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </div>
//                     <div className={classes.form_area}>
//                         <Row>
//                             <Col lg={{ span: 6 }}>
//                                 <h2 className={classes.form_title}>
//                                     {contactItem?.formTitle}
//                                 </h2>
//                                 <p className={`${classes.form_desc} mb-0`}>
//                                     {contactItem?.formDesc}
//                                 </p>
//                                 <form onSubmit={handleSubmit} className={classes.form}>
                                  
//                                     <div className={classes.form_group__input}>
                                      
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             id="name"
//                                             placeholder="Your Name*"
//                                             required
//                                             className={`${classes.form_input__field} me-30`}
//                                             onChange={handleChange}
//                                             value={formData.name}
//                                         />
                                      
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             id="email"
//                                             placeholder="Your Email*"
//                                             required
//                                             className={classes.form_input__field}
//                                             onChange={handleChange}
//                                             value={formData.email}
//                                         />
//                                     </div>
                           
//                              <div className="mt-10" >
//                                     <div className={classes.form_group__input} >
                                     
//                                         <input
//                                             type="text"
//                                             name="contact"
//                                             id=""
//                                             placeholder="Your Contact*"
//                                             required
//                                             className={classes.form_input__field}
//                                             onChange={handleChange}
//                                             value={formData.contact}
//                                         />
//                                     </div>
//                                     </div>
                                    
//                                     <textarea
//                                         name="message"
//                                         id="message"
//                                         placeholder="Message"
//                                         required
//                                         className={`${classes.form_textarea__field} mt-30`}
//                                         onChange={handleChange}
//                                         value={formData.message}
//                                     />
//                                     <div className={classes.form_btn__wrap}>
//                                         <button
//                                             className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
//                                             type="submit"
//                                         >
//                                             {contactItem?.btnText}
//                                         </button>
//                                     </div>
//                                 </form>
//                             </Col>
//                             <Col lg={{ span: 6 }} className="ps-lg-50">
//                                 <div className="map_with__pattern">
//                                     <iframe
//                                         title=" DMpatil construction contact title"
//                                         className="map_size"
//                                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd"
//                                     />
//                                     <div className="map_pattern">
//                                         <img
//                                             src={contactItem?.mapPattern}
//                                             alt={contactItem?.mapPatternAlt}
//                                         />
//                                     </div>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Container>
//             ))}
//             <ToastContainer position="top-center" />
//         </main>
//     );
// }

// Contact.propTypes = {
//     contactItems: PropTypes.instanceOf(Object).isRequired,
// };

// export default Contact;


/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import classes from './index.module.scss';

function Contact({ contactItems }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       

//         const serviceID = 'service_dwoe1yr';  
// const templateID = 'template_789417j';  
// const publicKey = 'Y8djhpUxeNzgOD2nD'; 

const serviceID = 'service_myc4h8v';  
const templateID = 'template_2mlwd17';  
const publicKey = 'r4C-ai1upxwSsmfW_';  

        emailjs.send(serviceID, templateID, {
            from_name: formData.name,
            from_email: formData.email,
            from_contact: formData.contact,
            message: formData.message
        }, publicKey)
            .then((response) => {
                toast.success('Message sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Failed to send message', error);
                toast.error('Failed to send message');
            });
    };

    return (
        <main>
            {contactItems?.map((contactItem) => (
                <Container key={contactItem.id}>
                    <div className={classes.area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.img_wrap}>
                                    <div className={classes.img}>
                                        <img
                                            className="img-full"
                                            src={contactItem?.image}
                                            alt={contactItem?.imageAlt}
                                        />
                                    </div>
                                    <div className={classes.pattern}>
                                        <img
                                            src={contactItem?.pattern}
                                            alt={contactItem?.patternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-50">
                                <div className={classes.content}>
                                    <span className={classes.subtitle}>
                                        {contactItem?.subTitle}
                                    </span>
                                    <h2 className={classes.title}>
                                        {contactItem?.title}
                                    </h2>
                                    <p className={classes.desc}>
                                        {contactItem?.desc}
                                    </p>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.addressTitle}
                                        </h3>
                                        <p className={classes.info_desc}>
                                            {contactItem?.addressDesc}
                                        </p>
                                    </div>
                                    <div className={classes.info}>
                                        <h3 className={classes.info_title}>
                                            {contactItem?.infoTitle}
                                        </h3>
                                        <ul className={classes.info_list}>
                                            {contactItem?.infoList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        {item.listText}
                                                        <Link href={item.path}>
                                                            {item.listValue}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={classes.form_area}>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <h2 className={classes.form_title}>
                                    {contactItem?.formTitle}
                                </h2>
                                <p className={`${classes.form_desc} mb-0`}>
                                    {contactItem?.formDesc}
                                </p>
                                <form onSubmit={handleSubmit} className={classes.form}>
                                    <div className={classes.form_group__input}>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name*"
                                            required
                                            className={`${classes.form_input__field} me-30`}
                                            onChange={handleChange}
                                            value={formData.name}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email*"
                                            required
                                            className={` ${classes.form_input__field} `}
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                    </div>
                                    <div className="mt-10">
                                        <div className={classes.form_group__input}>
                                            <input
                                                type="text"
                                                name="contact"
                                                id="contact"
                                                placeholder="Your Contact*"
                                                required
                                                className={ `${classes.form_input__field} `}
                                                onChange={handleChange}
                                                value={formData.contact}
                                            />
                                        </div>
                                    </div>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        required
                                        className={`${classes.form_textarea__field} mt-30`}
                                        onChange={handleChange}
                                        value={formData.message}
                                    />
                                    <div className={classes.form_btn__wrap}>
                                        <button
                                            className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
                                            type="submit"
                                        >
                                            {contactItem?.btnText}
                                        </button>
                                    </div>
                                </form>
                            </Col>
                            <Col lg={{ span: 6 }} className="ps-lg-50">
                                <div className="map_with__pattern">
                                    <iframe
                                        title="DMpatil construction contact title"
                                        className="map_size"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd"
                                    />
                                    <div className="map_pattern">
                                        <img
                                            src={contactItem?.mapPattern}
                                            alt={contactItem?.mapPatternAlt}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            ))}
            <ToastContainer position="top-center" />
        </main>
    );
}

Contact.propTypes = {
    contactItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Contact;
