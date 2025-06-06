import React from "react";

const GoogleMap = () => {
  return (
    <div className="md:min-h-[300px] h-[200px] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.901101895619!2d104.87832061132329!3d11.535691292955809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950501ca2962d%3A0xef3210236f701e2e!2sSangkat%20Stueng%20Mean%20Chey%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1749228973803!5m2!1sen!2skh"
        style={{ border: 0, width: "100%", height: "100%" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
