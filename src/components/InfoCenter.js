import React from 'react';

const InfoCenter = (props) => {
    return ( 
        <div class="max-w-sm bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden my-4">
        <div class="py-4 px-6">
            <h1 class="text-lg font-black ">{props.rs}</h1>
            <p class="py-2  ">Adresse : {props.adresse}</p>
            <div class="flex items-center mt-4 ">
                <i class="fas fa-phone text-lg mr-2"></i>
                <h1 class="px-2 text-sm">{props.tel}</h1>
            </div>
            <div class="flex items-center mt-4 ">
                <i class="fas fa-calendar-alt text-lg mr-2"></i>
                <h1 class="px-2 text-sm">{props.horaire}</h1>
            </div>
            <div class="flex items-center mt-4 ">
                <i class="fas fa-users text-lg mr-2"></i>
                <h1 class="px-2 text-sm">{props.public}</h1>
            </div>
            <div class="flex items-center mt-4 ">
                <i class="far fa-calendar-check text-lg mr-2"></i>
                <h1 class="px-2 text-sm">{props.check_rdv}</h1>
            </div>
            <div class="flex items-center mt-4 ">
            <i class="fas fa-globe text-lg mr-2"></i>
                <h1 class="px-2 text-sm hover:text-teal-600">
                    {props.web_rdv}
                </h1>
            </div>
        </div>
    </div>
     );
}
 
export default InfoCenter;