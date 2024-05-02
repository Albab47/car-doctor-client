import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    
    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(() => {
        const fetchDate = async() => {
            const res = await fetch(url);
            const data = res.json()
            console.log(data);
        }
        fetchDate()
    }, [url])
    
    return (
        <div>
            
        </div>
    );
};

export default Bookings;