"use client"

import { Sticker, SendHorizonal, Paperclip, Mic, Image as ImageIcon } from 'lucide-react'
import React, { useState, useRef } from 'react'
import EmojiPicker from 'emoji-picker-react'
import { useClickOutside } from '@/hooks/useClickOutside'

const SendMessage = () => {
  const [message, setMessage] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [showAttachments, setShowAttachments] = useState(false)

  const pickerRef = useRef<HTMLDivElement | null>(null)
  const attachmentRef = useRef<HTMLDivElement | null>(null)

  // Close dropdowns when clicking outside
  useClickOutside(
    [pickerRef, attachmentRef],
    () => {
      setShowPicker(false)
      setShowAttachments(false)
    },
    showPicker || showAttachments
  )

  const onEmojiClick = (emojiData: any) => {
    setMessage((prev) => prev + emojiData.emoji)
    setShowPicker(false)
  }

  const handleSend = () => {
    if (!message.trim()) return
    console.log('Send message:', message)
    setMessage('')
  }

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording)
    // Voice recording logic would go here
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

    return (
        <div className='relative w-full'>
            <div className='glass rounded-2xl shadow-2xl mb-2 border border-white/20 backdrop-blur-md'>
                <div className='flex items-center px-4 py-3'>
                    {/* Attachment button */}
                    <div className="relative" ref={attachmentRef}>
                        <button
                            type="button"
                            className="text-base-content/70 hover:text-primary mr-3 cursor-pointer transition-all duration-300 hover:scale-110"
                            onClick={() => setShowAttachments((prev) => !prev)}
                        >
                            <Paperclip size={20} />
                        </button>

                        {showAttachments && (
                            <div className="absolute bottom-12 left-0 glass rounded-xl p-2 shadow-xl border border-white/20 animate-fade-in-up">
                                <div className="flex flex-col gap-2 min-w-[120px]">
                                    <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/20 rounded-lg transition-all duration-300">
                                        <ImageIcon size={16} />
                                        <span className="text-sm">Photo</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/20 rounded-lg transition-all duration-300">
                                        <Paperclip size={16} />
                                        <span className="text-sm">File</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <input
                        className='flex-1 outline-none bg-transparent px-3 py-2 text-base-content placeholder:text-base-content/50'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        type="text"
                    />

                    {/* Emoji button */}
                    <button
                        type="button"
                        className="text-base-content/70 hover:text-primary mx-2 cursor-pointer transition-all duration-300 hover:scale-110"
                        onClick={() => setShowPicker((prev) => !prev)}
                    >
                        <Sticker size={20} />
                    </button>

                    {/* Voice/Send button */}
                    {message.trim() ? (
                        <button
                            type="button"
                            onClick={handleSend}
                            className="bg-gradient-to-r from-primary to-primary-focus text-primary-content p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
                        >
                            <SendHorizonal size={20} />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleVoiceRecord}
                            className={`p-2 rounded-full transition-all duration-300 hover:scale-105 ${
                                isRecording
                                    ? 'bg-red-500 text-white animate-pulse'
                                    : 'text-base-content/70 hover:text-primary hover:bg-white/20'
                            }`}
                        >
                            <Mic size={20} />
                        </button>
                    )}
                </div>
            </div>

            {showPicker && (
                <div
                    ref={pickerRef}
                    className="absolute bottom-20 left-6 z-50 animate-fade-in-up"
                >
                    <div className="glass rounded-2xl p-2 border border-white/20 shadow-2xl">
                        <EmojiPicker
                            onEmojiClick={onEmojiClick}
                            height={350}
                            width={300}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SendMessage;
