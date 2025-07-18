import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

export default function Emoji() {
    const [message, setMessage] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (emojiData) => {
        setMessage((prev) => prev + emojiData.emoji);
    };

    return (
        <div>
            <button onClick={() => setShowPicker(!showPicker)}>😊</button>
            {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
        </div>
    );
}
