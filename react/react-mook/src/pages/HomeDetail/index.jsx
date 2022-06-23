import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from 'react-router-dom'
// import { } from './style'



export default function HomeDetail() {
    return (
        <div>
            Homedetail
            <Outlet />
        </div>
    )
}

