import React from 'react'
import ChatComp from '../Chat'

const MainContent = () => {
    return (
        <div className="flex-1 flex flex-col min-h-[88vh] w-full relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Chat content */}
            <div className="relative z-10 flex-1">
                <ChatComp />
            </div>
        </div>
    )
}

export default MainContent
