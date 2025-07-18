"use client";

import { Sticker, SendHorizonal } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef<HTMLDivElement | null>(null);

    const onEmojiClick = (emojiData: any) => {
        setMessage((prev) => prev + emojiData.emoji);
        setShowPicker(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        if (showPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPicker]);

    const handleSend = () => {
        if (!message.trim()) return;
        console.log('Send message:', message);
        setMessage('');
    };

    return (
        <div className='relative w-full'>
            <div className='flex items-center px-6 py-4 bg-base-300 w-full rounded-full shadow-2xl mb-2'>
                <button
                    type="button"
                    className="text-gray-600 hover:text-gray-800 mr-2 cursor-pointer"
                    onClick={() => setShowPicker((prev) => !prev)}
                >
                    <Sticker size={24} />
                </button>

                <input
                    className='w-full outline-none bg-transparent px-4'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                />

                <button
                    type="button"
                    onClick={handleSend}
                    className="text-primary hover:text-primary-focus ml-2 cursor-pointer"
                >
                    <SendHorizonal size={24} />
                </button>
            </div>

            {showPicker && (
                <div
                    ref={pickerRef}
                    className="absolute bottom-16 left-6 z-50"
                >
                    <EmojiPicker
                        onEmojiClick={onEmojiClick}
                        height={350}
                        width={300}
                    />
                </div>
            )}
        </div>
    );
};

export default SendMessage;
