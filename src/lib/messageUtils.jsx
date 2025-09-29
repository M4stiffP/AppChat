// Utility functions for message formatting

// ตรวจสอบและแปลงลิ้งค์ในข้อความ
export const formatMessageWithLinks = (text) => {
  if (!text) return text;
  
  // Regex สำหรับหาลิ้งค์
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // แยกข้อความเป็นส่วนๆ
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a 
          key={index}
          href={part} 
          target="_blank" 
          rel="noopener noreferrer"
          className="message-link"
          onClick={(e) => e.stopPropagation()}
        >
          {part.length > 50 ? `${part.substring(0, 47)}...` : part}
        </a>
      );
    }
    return part;
  });
};

// ตรวจสอบว่าข้อความมีลิ้งค์หรือไม่
export const hasLinks = (text) => {
  if (!text) return false;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return urlRegex.test(text);
};