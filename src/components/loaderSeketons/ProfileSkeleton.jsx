import React from "react";
import ContentLoader from "react-content-loader";

const ProfileSkeleton = () => (
  <ContentLoader 
    speed={2}
    width="100%"
    height={600}
    viewBox="0 0 1600 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Profile Card */}
    <rect x="20" y="20" rx="15" ry="15" width="400" height="220" /> 
    <rect x="50" y="50" rx="10" ry="10" width="100" height="100" /> 
    <rect x="50" y="170" rx="5" ry="5" width="200" height="20" /> 

    {/* Contact Info Card */}
    <rect x="20" y="260" rx="15" ry="15" width="400" height="220" /> 
    <rect x="50" y="290" rx="5" ry="5" width="250" height="15" /> 
    <rect x="50" y="320" rx="5" ry="5" width="220" height="15" /> 
    <rect x="50" y="350" rx="5" ry="5" width="180" height="15" /> 
    <rect x="50" y="380" rx="5" ry="5" width="300" height="15" /> 
    <rect x="50" y="410" rx="5" ry="5" width="250" height="15" /> 

    {/* Skills Card */}
    <rect x="450" y="20" rx="15" ry="15" width="700" height="220" /> 
    <rect x="480" y="50" rx="5" ry="5" width="400" height="30" /> 
    <rect x="900" y="50" rx="5" ry="5" width="100" height="30" /> 
    <rect x="480" y="100" rx="5" ry="5" width="600" height="100" /> 

    {/* Teaching Rates */}
    <rect x="450" y="260" rx="15" ry="15" width="700" height="80" /> 
    <rect x="480" y="290" rx="5" ry="5" width="100" height="15" /> 
    <rect x="600" y="290" rx="5" ry="5" width="60" height="15" /> 

    {/* Timezone & Checkboxes */}
    <rect x="450" y="360" rx="15" ry="15" width="700" height="200" /> 
    <rect x="480" y="390" rx="5" ry="5" width="300" height="30" /> 
    <rect x="480" y="440" rx="5" ry="5" width="20" height="20" /> 
    <rect x="510" y="440" rx="5" ry="5" width="250" height="15" /> 
    <rect x="480" y="470" rx="5" ry="5" width="20" height="20" /> 
    <rect x="510" y="470" rx="5" ry="5" width="150" height="15" /> 
    <rect x="480" y="500" rx="5" ry="5" width="20" height="20" /> 
    <rect x="510" y="500" rx="5" ry="5" width="180" height="15" /> 

    {/* Save Changes Card */}
    <rect x="1200" y="20" rx="15" ry="15" width="350" height="220" /> 
    <rect x="1230" y="60" rx="5" ry="5" width="250" height="20" /> 
    <rect x="1230" y="110" rx="5" ry="5" width="250" height="50" /> 
  </ContentLoader>
);

export default ProfileSkeleton;
