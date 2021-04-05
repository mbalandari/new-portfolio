import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import location from '../img/location.svg'

const ContactPage = () => {
    return (
        <div>
            <div className="contact-title">

            </div>
            <div className="ContactPage">
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12024.014276841008!2d29.007356236721872!3d41.11261311864354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5bf15c34913%3A0x19571e96a2eaf2f6!2zTWFzbGFrLCBTYXLEsXllci_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1617541356465!5m2!1sen!2str" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-section">
                    <ContactItem icon={phone} title={"Phone"} text1={"+00 214 147 0214"} text2={"+00 219 314 2147"} />
                    <ContactItem icon={email} title={"Email"} text1={"hellotoyou@holaho.com"} text2={"hellothere@himail.com"} />
                    <ContactItem icon={location} title={"Address"} text1={"No.0, Maslak, Ayazaga"} text2={"Istanbul, Turkey"} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage
