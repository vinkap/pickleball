'use client'
import { addPlayer } from '@/app/store/features/slice';
import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function AddPlayers() {
    const [name, setName] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        dispatch(addPlayer(name));
        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <br />
            <button 
                type="submit" 
                disabled={name.length === 0}
            >Add Player</button>
        </form>
    )
}
