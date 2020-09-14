import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CaseCovid = (props) => {

    const [cases, setCases] = useState([]);

    useEffect(() => {
        axios.get('https://coronavirusapi-france.now.sh/FranceLiveGlobalData')
        .then(response => setCases(response.data.FranceGlobalLiveData[0]))
        .catch(err => console.log(err))
    });

    const date = new Date();

    return ( 
    <div className="container px-5  mx-auto flex flex-wrap ">
             <div class="lg:w-2/3 mx-auto">
             <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
  
   <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
        <div class="flex mb-4 items-center">
            <h2 class="text-xl text-gray-800 font-medium mr-auto">COVID-19 en France </h2>
            <p class="text-gray-800  font-semibold tracking-tighter">
                {date.toLocaleString()}
                {console.log(cases)}
            </p>
        </div>

        <ul>
        <li className="text-lg mb-2">Cas confirmés : <span className="text-blue-700 font-black">{cases.casConfirmes} (dont {cases.casConfirmesEhpad} en Ehpad ) </span> </li>
        <li className="text-lg mb-2">Retour à domicile : <span className="text-green-700 font-black">{cases.gueris}</span> </li>
        <li className="text-lg mb-2">Hospitalisés : <span className="text-orange-700 font-black">{cases.hospitalises} ( + {cases.nouvellesHospitalisations}) </span> </li>
        <li className=" italic mb-4">Source : Ministère des Solidarités et de la Santé</li>
        <li>
        <a href="https://dashboard.covid19.data.gouv.fr/vue-d-ensemble?location=FRA"
            target="_blank"
            rel = "noopener noreferrer"
            class="bg-teal-600 text-white px-4 py-2 rounded mr-auto hover:underline">
             + Plus d'info
         </a>
        
        </li>
    </ul>
        




     
        

   </div>
</div>
    </div>
    </div>
);
}
 
export default CaseCovid;