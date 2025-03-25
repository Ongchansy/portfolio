import React from 'react'

const GoogleMap = () => {
  return (
    <div className='h-[500px] w-full'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.5577535501866!2d104.89632631153951!3d11.583528388571162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517c0bdcde6b%3A0x64e2516b4f5ec20a!2sTK%20Avenue%20Mall!5e0!3m2!1sen!2skh!4v1742887256743!5m2!1sen!2skh" style={{border: 0,width:"100%", height: "100%"}}  loading="lazy" ></iframe>
    </div>
  )
}

export default GoogleMap