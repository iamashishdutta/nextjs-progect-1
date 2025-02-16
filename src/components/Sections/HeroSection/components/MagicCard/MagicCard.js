import React from 'react'
import './MagicCard.css'
import Image from 'next/image'
export default function MagicCard() {
    return (
        <div id='MagicCard'>
            <Image src="/Stars.svg" width={24} height={20} alt="logo" />
            <p>
                Transform Your Digital Presence with AI Agents
            </p>
        </div>
    )
}
