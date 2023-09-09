import React, { useState } from 'react';
import locationIcon from '../img/icons/Frame.svg'
import vector1 from '../img/icons/Vector (1).svg'
import vector3 from '../img/icons/Vector (3).svg'

const InputData = () => {
    const [values, setValues] = useState({
        dastinationFrom: '',
        destinationTo: '',
        date: '',
        guest: '',
        flightClass: '',
    })

    const handleChange =(e)=> {
        e.preventDefault();
        const value = e.target.value;
        console.log('submit', value)

    }

    return (
        // Input Data
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform">
                    {/* <!-- From --> */}
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src={locationIcon} alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required onClick={handleChange}>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- To --> */}
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src={locationIcon} alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required onClick={handleChange}>
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Date --> */}
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required onClick={handleChange} />
                    </div>

                    {/* <!-- Guests --> */}
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src={vector1} alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required onClick={handleChange}>
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- className --> */}
                    <div className="des-from !border-r-0">
                        <p>className</p>
                        <div className="flex flex-row">
                            <img src={vector3} alt="" />
                            <select className="outline-none px-2 py-2 w-full" name="ticketclassName" id="lws-ticketclassName" required onClick={handleChange}>
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button className="addCity" type="submit" id="lws-addCity">
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputData;