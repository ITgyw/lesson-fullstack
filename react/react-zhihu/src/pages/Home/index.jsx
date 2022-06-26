import React, { useEffect } from 'react';
import { useNavigate, Outlet, useParams } from 'react-router-dom'
import HomeNav from '@/components/HomeNav'
// import { } from './style'


export default function Home() {
    const navigate = useNavigate()
    let { id } = useParams();

    useEffect(() => {
        navigate(`/home/recommend`)

    }, [])

    return (
        <div>
            <HomeNav id={id} />
            <Outlet />

        </div>
    )
}
